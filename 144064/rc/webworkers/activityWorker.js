var activityTimer = null;

/**
 * Clears the timer.
 */
function clearTimer() {
    clearTimeout(activityTimer);
    activityTimer = null;
}

/**
 * Starts the activity updater to post message when we are required to send an
 * activity update to MPW.
 * @param {Number} number of milliseconds to set the update interval to.
 */
function startActivityUpdater(timeout) {
    if (activityTimer) {
        clearTimer();
    }

    activityTimer = setInterval(function () {
        // Post message every 30 seconds to let the MPW know we are still active.
        postMessage("");
    }, timeout);
}

/**
 * Stops the activity updater.
 */
function stopActivityUpdater() {
    clearTimer();
}

/**
 * Listens for a message to be posted and then performs the requested action
 * @param {MessageEvent} message Message posted by the parent of the web worker
 * @returns {undefined}
 */
onmessage = function (message) {
    switch (message.data.action) {
        case "startActivityUpdater":
            startActivityUpdater(message.data.timeout);
            break;

        case "stopActivityUpdater":
            stopActivityUpdater();
    }
};