var module = (function () {
    var pub = {};

    pub.getReleases = function () {
        var url = 'https://muspy.com/api/1/releases';
        $.ajax({
            dataType: "jsonp",
            url: url,
            jsonCallback: 'jsonp',
            cache: false,
            success: function (data) {
                displayReleases(data);
            }
        });
    };

    function displayReleases (data) {
        for (var i = 0; i < data.length; i++) {
            var portfolioGridHtml = "<div class=\"row\">" +
                "<div class='col-md-4 col-sm-6 portfolio-item'>" +
                "<a href='#portfolioModal" + i + "' class='portfolio-link' data-toggle='modal'>" +
                "<div class='portfolio-hover'>" +
                "<div class='portfolio-hover-content'>" +
                "<i class='fa fa-plus fa-3x'></i></div></div>" +
                //TODO images from mb
                "<img src='img/portfolio/roundicons.png'></a>" +
                "<div class='portfolio-caption'>" +
                "<h4>" + data.artist.name + " - " + data.name + "</h4>" +
                "<p class='text-muted'>" + data.type + "</p>" +
                "<p class='text-muted'>" + data.date + "</p></div>" +
                "</div></div>"

            var portfolioModalHtml = "<div class=\"portfolio-modal modal fade\" id=\"portfolioModal" + i + "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
                "        <div class=\"modal-dialog\">\n" +
                "            <div class=\"modal-content\">\n" +
                "                <div class=\"close-modal\" data-dismiss=\"modal\">\n" +
                "                    <div class=\"lr\">\n" +
                "                        <div class=\"rl\">\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"container\">\n" +
                "                    <div class=\"row\">\n" +
                "                        <div class=\"col-lg-8 col-lg-offset-2\">\n" +
                "                            <div class=\"modal-body\">\n" +
                "                                <!-- Project Details Go Here -->\n" +
                "                                <h2>" + date.name + "</h2>\n" +
                "                                <p class=\"item-intro text-muted\">" + date.artist.name + "</p>\n" +
                //TODO images from musicbranz
                "                                <img class=\"img-responsive img-centered\" src=\"img/portfolio/roundicons-free.png\" alt=\"\">\n" +
                "                                <h3>Album info</h3>\n" +
                "                                <ul class=\"list-inline\">\n" +
                "                                    <li>Name: " + data.name + "</li>\n" +
                "                                    <li>Release date: " + data.date + "</li>\n" +
                "                                    <li>MuscBranz Id: " + data.mbid + "</li>\n" +
                "                                    <li>Type: " + data.type + "</li>\n" +
                "                                </ul>\n" +
                "                                <h3>Artist info</h3>\n" +
                "                                <ul class=\"list-inline\">\n" +
                "                                    <li>Name: " + data.artist.name + "</li>\n" +
                "                                    <li>MuscBranz Id: " + data.artist.mbid + "</li>\n" +
                "                                    <li>Disambiguation: " + data.artist.disambiguation + "</li>\n" +
                "                                    <li>Sort name: " + data.artist.sort_name + "</li>\n" +
                "                                </ul>\n" +
                "                                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i>Close</button>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>"

            //TODO append html
            $("#porfolioGridContainer").html = portfolioGridHtml;
            $("#portfolioModalContainer").html = portfolioModalHtml;
        }
    }

    return pub;
} ());