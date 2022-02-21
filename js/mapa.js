//MAPA USANDO A API DO GOOGLE PEGANDO PELO ELEMENTO ID:
function iniciarMap(){
  var coord = {lat:-23.562629738791 ,lng:-46.65988481982542};
  var map = new google.maps.Map(document.getElementById('google-maps'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}