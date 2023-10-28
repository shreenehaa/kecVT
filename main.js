const sample = new PANOLENS.ImagePanorama("./images/sample.jpg");

function myfunc()
{
  document.getElementById('main').style.display = "inline";
  viewer.add(sample);
  document.getElementById('move').style.display = "block";
}

var lookAtPositions = [
  new THREE.Vector3(1700, 0, 9000 ),
  new THREE.Vector3(8000, 500, 1500 ),
  new THREE.Vector3(-4350, -2460, -26 ),
  new THREE.Vector3(4000, -9999, 0 ),
  new THREE.Vector3(-5000, 1000, 9000 )
  ];



const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});


viewer.add(sample);



var a = "<h1>Way to ECE</h1>"
// var infospot = new PANOLENS.Infospot( 300, "images/up-arrow.png" );
var infospot = new PANOLENS.Infospot( 300, "images/sample1.png" );


document.getElementById("loc").innerHTML="near Gate 9"



infospot.position.set( 8000, 100, -2300); 


sample.add( infospot);



// infospot.position.set(4000, -9999, 0 );



// var fcin_info = new PANOLENS.Infospot( 1900, "images/stationary.png" );
// var fcin_info1 = new PANOLENS.Infospot( 1700, "images/snack.png" );

// ram.position.set(-5000, 300, 500)
// it.position.set(-5000, 300, 500)

// var content = document.createElement( 'div' );

// content.innerHTML = 'Go to FC';

// infospot.addHoverText( content.innerHTML,40 );

// infospot.setContainer("hi");


// infospot.addEventListener( 'click', function(){ viewer.setPanorama( fc ); document.getElementById("loc").innerHTML="near by Food court" });
g6_depts.addEventListener( 'click', function(){ viewer.setPanorama( depts ); document.getElementById("loc").innerHTML="at the Junction of Fc,IT park and maharaja";var msg = new SpeechSynthesisUtterance();
msg.text = "at the Junction of Fc,IT park and maharaja";
window.speechSynthesis.speak(msg);});
infodept.addEventListener( 'click', function(){ viewer.setPanorama( ramanujam );document.getElementById("loc").innerHTML="near Ramanujam seminar hall";var msg = new SpeechSynthesisUtterance();
msg.text = "near Ramanujam seminar hall";
window.speechSynthesis.speak(msg); });
infofc.addEventListener( 'click', function(){ viewer.setPanorama( fc ); document.getElementById("loc").innerHTML="near by Food court";var msg = new SpeechSynthesisUtterance();
msg.text = "near by Food court";
window.speechSynthesis.speak(msg);});
fcout.addEventListener( 'click', function(){ viewer.setPanorama( fcin ); document.getElementById("loc").innerHTML="inside FC";var msg = new SpeechSynthesisUtterance();
msg.text = "inside FC";
window.speechSynthesis.speak(msg);});






fcin_info.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
  msg.text="stationary";
  window.speechSynthesis.speak(msg);});
  fcin_info1.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
    msg.text="snacks";
    window.speechSynthesis.speak(msg);});
  fcin_bill.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
    msg.text="bill counter";
    window.speechSynthesis.speak(msg);});
  fcin_food.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
    msg.text="food";
    window.speechSynthesis.speak(msg);});
  beverage.addEventListener('click',function(){var msg = new SpeechSynthesisUtterance();
   msg.text="beverages";
   window.speechSynthesis.speak(msg);});

   


cb.addEventListener( 'click', function(){ viewer.setPanorama( chem ); });

ftb.addEventListener( 'click', function(){ viewer.setPanorama( ft ); });

businfo.addEventListener( 'click', function(){ viewer.setPanorama( busstand ); });

juncExit.addEventListener( 'click', function(){ viewer.setPanorama( gate6 ); });





gate6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

depts.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );

fc.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[4], 0 );
} );









// Add the infospot to the viewer

