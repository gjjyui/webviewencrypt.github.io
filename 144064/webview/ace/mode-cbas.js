ace.define("ace/mode/cbas_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    var CBASHighlightRules = function () {
        var objectDescriptorRe = /([^ ]+?)(:\d+)?(?=\[.+?\]| |$)/;

        // Regex to match a mnemonic
        this.mnemonicRegex = /(?:\d+(?:[a|b]\d+)?)?(?:ai|ao|av|bi|bo|bv|cal|com|dev|evt-enrl|file|group|loop|mi|mo|not-cls|prg|sched|avg|mv|stl|lfsp|lfsz|ac|pc|uk|grp|mtl|blo|var|out|in|var|con|ws|as|tbl|rt|tl|ay|vgrp|ss)(?:\d+)(?::\d+)?(?= |\[|$)/;
        // Regex to match functions
        this.functionRegex = /\b([a-z\-\d]+)(?=\( )/;

        this.statementOrFunctionRegex = /(?:alarm-type|alarm|apdial|call|clear|close|dalarm|declare|disable|enable|end|else|for|gosub|goto|hangup|idle|if\+|if-|if|let|next|on-alarm|on-error|on|open|phone|print-at|print|relinquish|remote-get|remote-set|rem|return|set-printer|set-priority|share-net|share|start|stop|then|wait|write|dom|dow|doy|power-loss|scans|time|unack|user-a|user-b)(?= |$)/;

        // Counter to determine if we have hit enough commas to consider it alarm text instead of a
        // parameter
        this._alarmCommaCount = 0;

        // These must be setup by the invoker of the editor before setting the mode.
        this.inputDescriptors = ace.config.inputDescriptors || {};
        this.rcpInputDescriptors = ace.config.rcpInputDescriptors || {};

        this.outputDescriptors = ace.config.outputDescriptors || {};
        this.rcpOutputDescriptors = ace.config.rcpOutputDescriptors || {};

        this.valueDescriptors = ace.config.valueDescriptors || {};
        this.rcpValueDescriptors = ace.config.rcpValueDescriptors || {};

        this.scheduleDescriptors = ace.config.scheduleDescriptors || {};
        this.loopDescriptors = ace.config.loopDescriptors || {};
        this.arrayDescriptors = ace.config.arrayDescriptors || {};
        this.calendarDescriptors = ace.config.calendarDescriptors || {};
        this.otherDescriptors = ace.config.otherDescriptors || {};

        this.combinedDescriptors = Object.assign({},
                this.inputDescriptors,
                this.rcpInputDescriptors,
                this.outputDescriptors,
                this.rcpOutputDescriptors,
                this.valueDescriptors,
                this.rcpValueDescriptors,
                this.scheduleDescriptors,
                this.loopDescriptors,
                this.arrayDescriptors,
                this.calendarDescriptors,
                this.otherDescriptors);

        // dom, dow, doy, scans, time, unack, user-a, user-b are explicitily missing as they do not follow the
        // "<function>( " format
        this.functionListString = "abs|arcsin|arccos|arctan|avg|" +
                "bit-set|bit-test|" +
                "conprop|conrate|conreset|cos|" +
                "enthalpy|" +
                "float|" +
                "hsel|" +
                "interval|int|" +
                "limit|ln-1|ln|lsel|" +
                "max-item|max|min-item|min|" +
                "next|" +
                "ramp|" +
                "|sched|select|sensor-off|sensor-on|sin|slide|sqr|status|switch|" +
                "tan|tbl|time-off|time-on|" +
                "ws-off|ws-on";

        /**
         * Increments the alarm comma count and moves the matching algorithm to the
         * alarm text phase once enough commas have been found
         *
         * @returns {String} Token type to stylize the chunk as
         */
        var checkForAlarmText = function (value, state, stack, line) {
            var lineToCheck = line;

            // Remove any commas in side of functions so they are not counted
            lineToCheck = lineToCheck.replace(/\(.+?\)/g, "");

            // Check if there are now more commas than there was before and increment the comma count
            // if there is
            if ((lineToCheck.match(/, /g) || []).length > this.originalScope._alarmCommaCount) {
                ++this.originalScope._alarmCommaCount;
            }

            // If we met our quota, move to styling everything as alarm text
            if (this.originalScope._alarmCommaCount >= 2) {
                this.next = "alarmText";
            } else {
                // Otherwise keep trying
                this.next = "alarm";
            }

            return "text";
        };

        /**
         * Resets the alarm comma count and stylizes the chunks
         * as alarm text
         * @returns {String} Token type to stylize the chunks as
         */
        var endOfAlarmText = function () {
            this.originalScope._alarmCommaCount = 0;
            return "alarm_text";
        };

        /**
         * Checks if a linenumber is follwed by a valid statement, should
         * be stylized a comment, or stylized as text
         *
         * @param {String} value Chunk to test, *currently unused*
         * @param {String} currentState State of the matching algorithm we are currently in
         * @param {String[]} stack *unused*
         * @param {String} line Entire line that is being checked
         * @returns {String} The token type to style the chunk with
         */
        var lineNumberMatch = function (value, currentState, stack, line) {
            var tokenType = "text";
            var getKeywordRegex = /(?:^\d+ )([^ |:|\[|\(]+)(:\d+)?/;
            var mnemonicRegex = /(?:\d+(?:[a|b]\d+)?)?(?:ai|ao|av|bi|bo|bv|cal|com|dev|evt-enrl|file|group|loop|mi|mo|not-cls|prg|sched|avg|mv|stl|lfsp|lfsz|ac|pc|uk|grp|mtl|blo|var|out|in|var|con|ws|as|tbl|rt|tl|ay|vgrp|ss)(?:\d+)(?::\d+)?(?= |\[|$)/i;

            // Attempt to match the entire line to the regex
            var matches = getKeywordRegex.exec(line);
            if (matches && matches.length > 1) {
                if (this.originalScope.$keywordList.indexOf(matches[1].toLowerCase()) > -1 ||
                        "undefined" !== typeof this.originalScope.combinedDescriptors[matches[1].toLowerCase()] ||
                        mnemonicRegex.exec(matches[1]) !== null) {
                    // If the next chunk is a keyword, we can start assuming a valid statement and
                    // should style like a line number
                    this.next = "start";
                    tokenType = "linenumber";
                } else if (currentState === "rem") {
                    // If we are in a commenting state, style as a comment and continue
                    // in the comment state
                    this.next = "rem";
                    tokenType = "comment";
                } else {
                    // If we weren't in a comment state and we don't match a key word, style a text
                    // and go back to the start
                    this.next = "start";
                }
            } else {
                // Otherwise check if we are in a comment state and continue in it if we are
                if (currentState === "rem") {
                    this.next = "rem";
                    tokenType = "comment";
                }
            }

            return tokenType;
        };

        /**
         * Checks if a chunk is an object with a property attached and sets
         * the appropriate token type
         * @param {type} value Check to check whether it is an object or not
         * @returns {String} Token type to style the chunk with
         */
        var checkDescriptorWithProperty = function (value) {
            var checkDescriptorRe = /([^ ]+?)(:\d+)?(?=\[.+?\]|$)/i;
            var tokenType = "text";
            var matches = checkDescriptorRe.exec(value);
            if (matches && matches.length >= 2) {
                var matchToCheck = matches[1].toLowerCase();
                if (this.originalScope.inputDescriptors[matchToCheck]) {
                    tokenType = "input";
                } else if (this.originalScope.rcpInputDescriptors[matchToCheck]) {
                    tokenType = "rcpInput";
                } else if (this.originalScope.outputDescriptors[matchToCheck]) {
                    tokenType = "output";
                } else if (this.originalScope.rcpOutputDescriptors[matchToCheck]) {
                    tokenType = "rcpOutput";
                } else if (this.originalScope.valueDescriptors[matchToCheck]) {
                    tokenType = "value";
                } else if (this.originalScope.rcpValueDescriptors[matchToCheck]) {
                    tokenType = "rcpValue";
                } else if (this.originalScope.scheduleDescriptors[matchToCheck]) {
                    tokenType = "schedule";
                } else if (this.originalScope.loopDescriptors[matchToCheck]) {
                    tokenType = "loop";
                } else if (this.originalScope.arrayDescriptors[matchToCheck]) {
                    tokenType = "array";
                } else if (this.originalScope.calendarDescriptors[matchToCheck]) {
                    tokenType = "calendar";
                } else if (this.originalScope.otherDescriptors[matchToCheck]) {
                    tokenType = "object";
                }
            }
            return tokenType;
        };

        /**
         * Creates a map of functions key words for quick lookup
         * @type CBASHighlightRules@call;createKeywordMapper
         */
        var functionMapper = this.createKeywordMapper({
            "function": this.functionListString
        }, "text", true, "|");

        /**
         * Checks if a chunk of the program matches a specific object type
         * @param {String} value The chunk to test if it matches one of our known object types
         * @returns {String} Token type best matching the chunk
         */
        var objectMapper = function (value) {
            var tokenType = "object";
            if (/(?:\d+)?(?:ai|bi|mi)(?:\d+)(?::\d+)?/i.test(value)) {
                tokenType = "input";
            } else if (/(?:\d+)?(?:in)(?:\d+)/i.test(value)) {
                tokenType = "rcpInput";
            } else if (/(?:\d+)?(?:ao|bo|mo|blo)(?:\d+)(?::\d+)?/i.test(value)) {
                tokenType = "output";
            } else if (/(?:\d+)?(?:out)(?:\d+)/i.test(value)) {
                tokenType = "rcpOutput";
            } else if (/(?:\d+)?(?:av|bv|mv)(?:\d+)(?::\d+)?/i.test(value)) {
                tokenType = "value";
            } else if (/(?:\d+)?(?:var)(?:\d+)/i.test(value)) {
                tokenType = "rcpValue";
            } else if (/(?:\d+)?(?:sched|ws)(?:\d+)(?::\d+)?/i.test(value)) {
                tokenType = "schedule";
            } else if (/(?:\d+)?(?:loop)(?:\d+)(?::\d+)?/i.test(value)) {
                tokenType = "loop";
            } else if (/(?:\d+)?(?:ay)(?:\d+)(?::\d+)?/i.test(value)) {
                tokenType = "array";
            } else if (/(?:\d+)?(?:cal|as)(?:\d+)(?::\d+)?/i.test(value)) {
                tokenType = "calendar";
            }

            return tokenType;
        };

        /**
         * Creates a map of statement and descriptor key words for
         * quick lookup
         * @type CBASHighlightRules@call;createKeywordMapper
         */
        var statementMapper = this.createKeywordMapper({
            "function": "dom|dow|doy|power-loss|scans|time|unack|user-a|user-b",
            "statement":
                    "alarm-type|alarm|apdial|" +
                    "call|clear|close|" +
                    "dalarm|declare|disable|" +
                    "enable|end|else|" +
                    "for|" +
                    "gosub|goto|" +
                    "hangup|" +
                    "idle|if+|if-|if|" +
                    "let|next|" +
                    "on-alarm|on-error|on|open|" +
                    "phone|print-at|print|" +
                    "relinquish|remote-get|remote-set|rem|return|" +
                    "set-printer|set-priority|share-net|share|start|stop|" +
                    "then|" +
                    "wait|write"
        }, "text", true, "|");

        this.$rules = {
            "start": [
                {token: "linenumber", regex: /(^\d+)(?= )/, onMatch: lineNumberMatch, originalScope: this},
                {token: "statement", regex: /(dalarm|alarm)(?= )/, next: "alarm"},
                {token: "object", regex: this.mnemonicRegex, onMatch: objectMapper},
                {token: "present_value", regex: /<(\S+)>/},
                {token: functionMapper, regex: this.functionRegex},
                {token: ["statement", "comment"], regex: /(rem )([^\xB7]+)/, next: "rem"},
                {token: statementMapper, regex: this.statementOrFunctionRegex},
                {token: "object", regex: objectDescriptorRe, onMatch: checkDescriptorWithProperty, originalScope: this},
                {token: "local", regex: /[a-z](?= |$)/},
                {caseInsensitive: true}
            ],
            "functionInAlarm": [
                {token: "object", regex: this.mnemonicRegex, onMatch: objectMapper},
                {token: "present_value", regex: /<(\S+)>/},
                {token: functionMapper, regex: this.functionRegex},
                {token: statementMapper, regex: this.statementOrFunctionRegex},
                {token: "local", regex: /[a-z](?= |$)/},
                {token: "text", regex: /\)/, next: "alarm"},
                {token: "object", regex: objectDescriptorRe, onMatch: checkDescriptorWithProperty, originalScope: this},
                {defaultToken: "text"},
                {caseInsensitive: true}
            ],
            "alarm": [
                {token: "object", regex: this.mnemonicRegex, onMatch: objectMapper},
                {token: "present_value", regex: /<(\S+)>/},
                {token: functionMapper, regex: this.functionRegex, next: "functionInAlarm"},
                {token: statementMapper, regex: this.statementOrFunctionRegex},
                {token: "local", regex: /[a-z](?= |$)/},
                {token: "alarm_text", regex: / ,/, onMatch: checkForAlarmText, originalScope: this},
                {token: "object", regex: objectDescriptorRe, onMatch: checkDescriptorWithProperty, originalScope: this},
                {defaultToken: "text"},
                {caseInsensitive: true}
            ],
            "alarmText": [
                {token: "alarm_text", regex: /$/, onMatch: endOfAlarmText, next: "start", originalScope: this},
                {defaultToken: "alarm_text"},
                {caseInsensitive: true}
            ],
            "rem": [
                {token: "linenumber", regex: /(^\d+)(?= )/, onMatch: lineNumberMatch, next: "start", originalScope: this},
                {defaultToken: "comment"},
                {caseInsensitive: true}
            ]
        };

        this.normalizeRules();

        // Add local variables to the keyword list
        this.$keywordList = this.$keywordList.concat([
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z"]);

        // Add the function list to the keyword list so it is in the auto complete list
        this.$keywordList = this.$keywordList.concat(this.functionListString.split("|"));
    };
    oop.inherits(CBASHighlightRules, TextHighlightRules);
    exports.CBASHighlightRules = CBASHighlightRules;
});

ace.define("ace/mode/cbas", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/cbas_highlight_rules"], function (require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var CBASHighlightRules = require("./cbas_highlight_rules").CBASHighlightRules;
    var Mode = function () {
        this.HighlightRules = CBASHighlightRules;
    };
    oop.inherits(Mode, TextMode);
    (function () {

        // CBAS does not have indentation, so just return an empty string
        this.getNextLineIndent = function (state, line, tab) {
            return "";
        };
        // This may be used to do some of the hover text, if not remove it
        this.createWorker = function (session) {
            return null;
        };
        this.$id = "ace/mode/cbas";
    }).call(Mode.prototype);
    exports.Mode = Mode;
});
