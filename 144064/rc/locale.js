//Must match rc-util/build/scripts/buibuild/build.py
var localeList = ["en-us", "en-gb", "de", "es", "es-es", "fr", "fr-ca", "pt", "zh", "zh-tw"];

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) !== -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function getLocale() {
    var currentLocale = "";
    var superLocales = null;

    // If the user has set a cookie with a valid locale use it
    var localeCookie = getCookie("locale");
    if (localeCookie !== "") {
        if (localeList.indexOf(localeCookie) !== -1) {
            return localeCookie;
        } else {
            deleteCookie("locale");
        }
    }

    //Otherwise try to get it based on the browser
    //If it is an older version of IE it may not support window.navigator.language
    if (window.navigator.language === undefined) {
        currentLocale = window.navigator.userLanguage.toLocaleLowerCase();
    } else {
        //Others use window.navigator.language
        currentLocale = window.navigator.language.toLocaleLowerCase();
    }

    //If the browser's locale is one we support just use it
    if (localeList.indexOf(currentLocale) !== -1) {
        return currentLocale;
    } else {
        // Otherwise go through each super locale (ie: en-ca super is en)
        superLocales = currentLocale.split("-");
        var i = superLocales.length;
        while (i > 0) {
            var testLocale = "";
            var j = 0;
            //Attach each sub locale of the root until we have created our test locale
            while (j < (i - 1)) {
                testLocale += superLocales[j] + "-";
                j++;
            }
            testLocale += superLocales[j];
            //If one of the super locales is supported, use it
            if (localeList.indexOf(testLocale) !== -1) {
                return testLocale;
            } else {
                i--;
            }
        }
        //If we tried all super locales without luck, try and find one that's close.
        for (i = 0; i < localeList.length; i++) {
            if (localeList[i].indexOf(superLocales[0]) === 0) {
                return localeList[i];
            }
        }
        //Finally if we still haven't found a suitable language default to english
        return "en-us";
    }
}