$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url:"https://api.wunderground.com/api/66f2cca3c6759655/geolookup/conditions/q/" + lat + "," +long + ".json",
        dataType:"jsonp",
        success: function(data){
            console.log(data);
            var location = data.location.city + ", " + data.location.state;
            var temp =Math.round(data.current_observation.temp_f);
            var summary = data.current_observation.weather;
            var humidity = data.current_observation.relative_humidity;
            var feels_like = data.current_observation.feelslike_f;
            var uv = data.current_observation.UV;
        $("#cityDisplay").text(location);
        $("#currentTemp").text(temp + "°f");
        $("#summary").text(summary);
        $("#add1").text("Humidity: " + humidity);
        $("#add2").text("Feels like " + feels_like);
        $("#add3").text("UV rating: " + uv);
        }})}})