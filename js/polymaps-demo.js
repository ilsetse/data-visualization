//var mapboxAccessToken = "pk.eyJ1IjoiaWxzZXRzZSIsImEiOiJjampmdHQxeTUzNWhyM3BvM3g4OW4zMjdhIn0.veiwirhBWflXwkur-mibCQ"

var po = org.polymaps;

var map = po.map()
  .container(document.getElementById('polymaps-demo').appendChild(po.svg('svg')))
  .add(po.interact())
  .center({lat: 37.8, lon: -96})
  .zoom(4);

map.add(po.image()
  //.url(po.url("https://maps.tilehosting.com/styles/positron/{z}/{x}/{y}.png?key=pJuHrA56q3pEswn16hcE")));
  //.url(po.url("http://s3.amazonaws.com/com.modestmaps.bluemarble/{Z}-r{Y}-c{X}.jpg")));
  //.url(po.url("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=" + mapboxAccessToken)));
  //.url(po.url("https://api.mapbox.com/styles/v1/mapbox/light-v9/wmts?access_token=" + mapboxAccessToken)));
  .url(po.url("http://{S}tile.cloudmade.com"
    + "/1a1b06b230af4efdbb989ea99e9841af" // http://cloudmade.com/register
    + "/20760/256/{Z}/{X}/{Y}.png")
    .hosts(["a.", "b.", "c.", ""])));

