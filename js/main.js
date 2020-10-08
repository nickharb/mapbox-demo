/**
 * Mapbox Demo
 *
 * Copyright 2020 Seven Mile Media
 * Created by Seven Mile Media
 * http://sevenmilemedia.com/
 */

(function($) {

    $(document).ready(function() {

        mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja2hhcmIiLCJhIjoiY2tmenk3MWhyMG95eDJwcXMwd3V2cTRlZSJ9.MoLpGwcHv0hsxl8TaAibbg';

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/nickharb/ckg0wwgil11on19ns7qpjx3if', // stylesheet location
            center: [-80.251, 25.773], // starting position [lng, lat],
            zoom: 10 // starting zoom
        });

        map.on('load', function() {
            map.addSource('contaminated-sites-src', {
                type: 'geojson',
                data: 'data/contaminated-sites-1.geojson'
            });

            map.addLayer({
                'id': 'contaminated-sites',
                'type': 'circle',
                'source': 'contaminated-sites-src',
                'paint': {
                    'circle-radius': [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        3,
                        16,
                        15
                    ],
                    'circle-color': [
                        "match",
                        ["get", "WORK_GROUP"],
                        ["UT        "],
                        "#41b6c4",
                        ["SW        "],
                        "#225ea8",
                        ["ARP       "],
                        "#c7e9b4",
                        ["IW        "],
                        "#1d91c0",
                        ["IW5       "],
                        "#0c2c84",
                        ["HWR       "],
                        "#7fcdbb",
                        ["AW        "],
                        "#ffffcc",
                        "hsl(0, 98%, 48%)"
                    ]
                }
            });

            // map.addLayer({
            //     'id': 'contaminated-sites-combined',
            //     'type': 'circle',
            //     'source': 'contaminated-sites-src',
            //     'paint': {
            //         'circle-radius': [
            //             "interpolate",
            //             ["linear"],
            //             ["get", "STATE_RANK"],
            //             0,
            //             5,
            //             154,
            //             20
            //         ],
            //         'circle-color': [
            //             "match",
            //             ["get", "WORK_GROUP"],
            //             ["UT        "],
            //             "#41b6c4",
            //             ["SW        "],
            //             "#225ea8",
            //             ["ARP       "],
            //             "#c7e9b4",
            //             ["IW        "],
            //             "#1d91c0",
            //             ["IW5       "],
            //             "#0c2c84",
            //             ["HWR       "],
            //             "#7fcdbb",
            //             ["AW        "],
            //             "#ffffcc",
            //             "hsl(0, 98%, 48%)"
            //         ]
            //     }
            // });

            // map.addLayer({
            //     'id': 'contaminated-sites-state-rank',
            //     'type': 'circle',
            //     'source': 'contaminated-sites-src',
            //     'paint': {
            //         'circle-radius': [
            //               "interpolate",
            //               ["linear"],
            //               ["zoom"],
            //               9,
            //               3,
            //               12,
            //               7
            //         ],
            //         'circle-color': [
            //               "interpolate",
            //               ["linear"],
            //               ["get", "STATE_RANK"],
            //               0,
            //               "#f03b20",
            //               5,
            //               "#feb24c",
            //               30,
            //               "#ffeda0"
            //         ]
            //     }
            // });
        });

        // When a click event occurs on a feature in the layer, open a popup at the
        // location of the click, with description HTML from its properties
        map.on('click', 'contaminated-sites', function (e) {
            console.log(e.features[0]);
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML('<h3>' + e.features[0].properties.TASK_NAME + '</h3>' + '<p>Work Group: ' + e.features[0].properties.WORK_GROUP + '</p>' + '<p>Address: ' + e.features[0].properties.SITE_ADDRESS + '</p>' + '<p>Description: ' + e.features[0].properties.PHASE_DESCRIPTION + '</p>')
                .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the states layer
        map.on('mouseenter', 'contaminated-sites', function () {
            map.getCanvas().style.cursor = 'pointer';
        });
         
        // Change it back to a pointer when it leaves
        map.on('mouseleave', 'contaminated-sites', function () {
            map.getCanvas().style.cursor = '';
        });

        // Flyover event handlers
        $('#downtown-miami').click(function() {
            map.flyTo({
                center: [-80.193, 25.766],
                zoom: 16,
                pitch: 60,
                bearing: 0,
                duration: 6000,
                curve: 2
            });
        });

        $('#south-beach').click(function() {
            map.flyTo({
                center: [-80.134, 25.772],
                zoom: 16,
                pitch: 60,
                bearing: 0,
                duration: 6000,
                curve: 2
            });
        });

        $('#mia').click(function() {
            map.flyTo({
                center: [-80.286, 25.793],
                zoom: 14,
                pitch: 60,
                bearing: 0,
                duration: 6000,
                curve: 2
            });
        });

        $('#um').click(function() {
            map.flyTo({
                center: [-80.278, 25.715],
                zoom: 16,
                pitch: 60,
                bearing: 0,
                duration: 6000,
                curve: 2
            });
        });

        $('#reset').click(function() {
            map.flyTo({
                center: [-80.251, 25.773],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                duration: 6000,
                curve: 2
            });
        });


    });

})(jQuery);
