let map = L.map('map').setView([50.0155220032, 4.04655122757], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 25,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibm96aWhvIiwiYSI6ImNreGlwc2w4ZTR1aXEydW8xcDFyb2VhMWQifQ.vCBIoZCMUt_D2YYOKFP5XA'
}).addTo(map);

let marker = L.marker([50.0171596, 4.0425778]).addTo(map);
marker.bindPopup("Ecomusée").openPopup();

let marker2 = L.marker([50.02085 , 4.04709]).addTo(map);
marker2.bindPopup("UpTo Fourmies, Grande Ecole du numérique").openPopup();

let marker3 = L.marker([50.01782, 4.04726]).addTo(map);
marker3.bindPopup("Mairie de Fourmies").openPopup();
//test