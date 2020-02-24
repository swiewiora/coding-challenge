var module = (function () {
    var pub = {};

     function getInputData () {
        return $('#input').val();
    }

    pub.clearInputField = function () {
        $('#input').val(null);
        $("#chartContainer").addClass("hidden");
        $(".list-group").addClass("hidden");
    };

    pub.processInput = function () {
        getCurrentWeather(getInputData());
        //getForecast(city);
    };

    function getForecast(cityId) {
        var url = 'http://api.openweathermap.org/data/2.5/forecast';
        $.ajax({
            dataType: "jsonp",
            url: url,
            jsonCallback: 'jsonp',
            data: {
                id: cityId,
                appid: '64d0c9eb12282b00ccd3d38d1b545be2',
                units: 'metric' },
            cache: false,
            success: function (data) {
                $("#right").height($("#left").height());
                processForecastData(data);

                $("#chartContainer").removeClass("hidden");
                $(".list-group").removeClass("hidden");

            }
        });
    }

    function processForecastData(data) {
        var dataTable = [];

        for(var i = 0; i < 5 && i < data.list.length; i++) {
            var item = data.list[i];
            var data_row = {
                label: item.dt_txt,
                y: [item.main.temp_min, item.main.temp_max],
                name: item.weather[0].main
            };

            dataTable.push(data_row);
        }

        chartModule.displayForecast(dataTable);
    }

    function getCurrentWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather';
        $.ajax({
            dataType: "jsonp",
            url: url,
            jsonCallback: 'jsonp',
            data: {
                q: city,
                appid: '64d0c9eb12282b00ccd3d38d1b545be2',
                units: 'metric' },
            cache: false,
            success: function (data) {
                displayCurrentWeather(data);
                getForecast(data.id);
            }
        });
    }

    function displayCurrentWeather (data) {
        $('#city').text('City: ' + data.name);
        $('#maindesc').text(data.weather[0].main);
        $('#description').text(data.weather[0].description);
        $('#temp').text('Temperature: ' + data.main.temp);
        $('#min_temp').text('Min: ' + data.main.temp_min);
        $('#max_temp').text('Max: ' + data.main.temp_max);
        $('#wind_speed').text('Wind: ' + data.wind.speed);
        $('#clouds').text('Cloudiness: ' + data.clouds.all);
    }

    return pub;
} ());

$(input).keypress(
    function(event){
        if (event.which == '13') {
            event.preventDefault();
        }


    });