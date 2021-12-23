//

let containerMap = document.getElementById('containerMap');

let map = L.map('map').setView([50.0155220032, 4.04655122757], 15);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibm96aWhvIiwiYSI6ImNreGlwc2w4ZTR1aXEydW8xcDFyb2VhMWQifQ.vCBIoZCMUt_D2YYOKFP5XA'
}).addTo(map);

containerMap = map;
