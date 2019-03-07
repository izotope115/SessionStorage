/* eslint-disable */
$(document).ready(function () {

    var numberOfRrefreshes = sessionStorage.getItem('browserRefresh');

    if (numberOfRrefreshes === null) {
        numberOfRrefreshes = 0;
    }

    numberOfRrefreshes++;

    sessionStorage.setItem("browserRefresh", numberOfRrefreshes);
});
