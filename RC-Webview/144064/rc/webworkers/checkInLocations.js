var data = null;

/**
 * Adds locations to the data object for comparing with mouse position
 * @param {Object} dataToAdd - Object passed into worker containing the locations and GEL index
 */
function addData(dataToAdd) {
    // If we haven't already created the data object, create it
    if (data === null) {
        data = {};
    }

    // Set the locations for the GEL index
    data[dataToAdd.index] = {
        locations: dataToAdd.locations,
        title: dataToAdd.title,
        type: dataToAdd.type,
        maxPosition: dataToAdd.locations[dataToAdd.locations.length - 1],
        minPosition: dataToAdd.locations[0]
    };
}

/**
 * Specialized binary search to determine if the mouse location is
 * within an array of locations for colour replace
 *
 * @param {Number} toFind - Location to find
 * @param {Number[]} arrayToSearch - Array of locations to search
 * @returns {Number} Index of the location in the array
 */
function binarySearch(toFind, arrayToSearch) {
    // Start the min and max at the extremes of the array
    var minIndex = 0;
    var maxIndex = arrayToSearch.length - 1;

    // Initialize the index, startElement and endElement
    var currentIndex = null, currentElement = null;

    // Keep searching until our min index is greater than our max index
    while (minIndex <= maxIndex) {
        // Get the middle of the two extremes
        currentIndex = (minIndex + maxIndex) >> 1 | 0;
        currentElement = arrayToSearch[currentIndex];
        if (currentElement < toFind) {
            // If the end of the range is less that the location
            // we are searching for, use the upper half of the
            // remaining array
            minIndex = currentIndex + 1;
        } else if (currentElement > toFind) {
            // Otherwise use the lower half of the remaining array
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }

    // If we couldn't find a matching range, indicate it with a -1
    return -1;
}

/**
 * Specialized binary search to determine if the mouse location is
 * within an array of locations for colour replace
 *
 * @param {Number} toFind - Location to find
 * @param {Number[]} arrayToSearch - Array of locations to search
 * @returns {Number} Index of the location in the array
 */
function binarySearchCompressed(toFind, arrayToSearch) {
    // Start the min and max at the extremes of the array
    var minIndex = 0;
    var maxIndex = arrayToSearch.length - 1;

    // Initialize the index, startElement and endElement
    var currentIndex = null, startRange = null, endRange = null;

    // Keep searching until our min index is greater than our max index
    while (minIndex <= maxIndex) {
        // Get the middle of the two extremes
        currentIndex = (minIndex + maxIndex) >> 1 | 0;

        if (currentIndex & 1) {
            // If the index is odd, go back an item for the start of the range
            startRange = arrayToSearch[currentIndex - 1];
            endRange = arrayToSearch[currentIndex];
        } else {
            // Otherwise get the end of the range in the next item
            startRange = arrayToSearch[currentIndex];
            endRange = arrayToSearch[currentIndex + 1];
        }

        // If we are between the start and end range
        if (toFind >= startRange && toFind < endRange) {
            // Return the index
            return currentIndex;
        } else if (endRange < toFind) {
            // If the end of the range is less that the location
            // we are searching for, use the upper half of the
            // remaining array
            minIndex = currentIndex + 2;

            // If min is odd, we skipped a row so add it in
            if (minIndex % 2 !== 0) {
                --minIndex;
                if (minIndex < 0) {
                    minIndex = 0;
                }
            }
        } else {
            // Otherwise use the lower half of the remaining array
            maxIndex = currentIndex - 2;

            // If max is even, we skipped a row so add it in
            if (maxIndex % 2 === 0) {
                ++maxIndex;
                if (maxIndex >= arrayToSearch.length) {
                    maxIndex = arrayToSearch.length - 1;
                }
            }
        }
    }

    // If we couldn't find a matching range, indicate it with a -1
    return -1;
}

/**
 * Checks if a linear position is within a range
 * in the locations array
 * @param {Number} linearPosition The position of the pixel in the image data
 * @returns {undefined}
 */
function checkLocation(linearPosition, clickEvent) {
    var found = false;
    var searchFunctionToUse = null;

    var colourReplaceKeys = Object.keys(data);
    var colourReplaceData = null, locationsToCheck = null;
    for (var i = colourReplaceKeys.length - 1; i >= 0; --i) {
        colourReplaceData = data[colourReplaceKeys[i]];
        locationsToCheck = colourReplaceData.locations;
        searchFunctionToUse = colourReplaceData.type === "colourreplace" ? binarySearchCompressed : binarySearch;
        // The arrays are sorted, so we can skip checking if the linear position is outside of the
        // start and end points, then do a binary search for our location
        if (linearPosition >= colourReplaceData.minPosition && linearPosition < colourReplaceData.maxPosition) {
            if (searchFunctionToUse(linearPosition, locationsToCheck) > -1) {
                found = true;
                postMessage({
                    index: Number(colourReplaceKeys[i]),
                    title: colourReplaceData.title,
                    clickEvent: clickEvent
                });
                break;
            }
        }
    }

    // If we did not find a match for the range, just post an empty string
    if (!found) {
        postMessage({
            index: ""
        });
    }
}

/**
 * Listens for a message to be posted and then peforms the requested action
 * @param {MessageEvent} message Message posted by the parent of the web worker
 * @returns {undefined}
 */
onmessage = function (message) {
    switch (message.data.action) {
        case "addData":
            addData(message.data.data);
            break;
        case "checkLocation":
            checkLocation(message.data.linearPosition, message.data.clickEvent);
            break;
    }
};