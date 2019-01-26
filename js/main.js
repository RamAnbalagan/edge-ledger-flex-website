// Initialize and add the maps 

function initMap() {
  //your location
  const loc = { lat: 42.361145, lng: -71.057083} ;

  //centered map on location
  const map = new google.maps.Map(document.querySelector('.map') ,
  {
    zoom:14,
    center: loc
  });

  //the marker, positioned at location
  const market = new google.maps.Marker({ position: loc, map: map});
}


// smooth scrolling in jquery if needed

// $('#navbar a, .btn').on('click', function(event) {
//   if(this.hash!== ''){
//     event.preventDefault();

//     const hash = this.hash;
    
//     $('html, body').animate (
//       {
//         scrollTop: $(hash).offset().top - 100
//       },
//       800
//     );
//   }
// });

// sticky menu background

window.addEventListener('scroll',function() {
  if(window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.8;
  }
  else {
    document.querySelector('#navbar').style.opacity = 1;
  }
})