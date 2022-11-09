

function addMarkersToMap(map) {

  var company_Icon = new H.map.Icon("../images/waikiki-surf.png", { size: { w: 56, h: 56 } });
  var company_location = new H.map.Marker({lat:55.861152, lng:-4.250196},{icon:company_Icon});

  map.addObject(company_location);

  
 

}

/**
* Boilerplate map initialization code starts below:
*/

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey

var platform = new H.service.Platform({
apikey: 'Gwl7uN1Ok1ZSh6sdiWJnHf9NMi856NVW81qViZn2t_o'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('show_map'),
defaultLayers.vector.normal.map,{
center: {lat:55.860916, lng:-4.251433},
zoom: 10,
pixelRatio: window.devicePixelRatio || 1
});


// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
addMarkersToMap(map);
};