/**
 * Mapbox Demo
 *
 * Copyright 2020 Seven Mile Media
 * Created by Seven Mile Media
 * http://sevenmilemedia.com/
 */

(function($, _) {

    // -------------------------------------------------------- //
    // Variables
    // -------------------------------------------------------- //

    var msg = 'Hello world!';

    // -------------------------------------------------------- //
    // Initialize
    // -------------------------------------------------------- //

    function initialize() {
        console.log(msg);
    }

    // -------------------------------------------------------- //
    // Document ready
    // -------------------------------------------------------- //

    $(document).ready(function() {
        initialize();
    });


})(jQuery, _);
