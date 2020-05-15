 // requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();


// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {



  if(mCurrentIndex >= mImages.length){
    mCurrentIndex = 0;
  }
  if(mCurrentIndex < 0){
    mCurrentIndex = mImages.length-1;
  }

document.getElementById('photo').src = mImages[mCurrentIndex].img;




var loc = document.getElementByClassName('location');

loc[0].innerHTML = "Location: " + mImages[mCurrentIndex].location;
var des = document.getElementByClassName('description');
des[0].innerHTML = "Description: " + mImages[mCurrrentIndex].description;
var dt = document.getElementByClassName('date');
dt[0].innerHTML = "Date: " + mImages[mCurrentIndex].date;

// Counter for the mImages array
var mCurrentIndex = 0;

function fetchJSON() {
var mRequest = new XMLHttpRequest();
mRequest.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
    var images = this.responseText;
    var imagesObj = JSON.parse(images);
  }
  }
  mRequest.open("GET", mURL,true);
  mRequest.send();
}


// Array holding GalleryImage objects (see below).
var mImages = [];



// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
 // Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'images.json';


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function fetchJSON(){
  mRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      mJson = JSON.parse(mRequest.responseText);
      iterateJSON(mJson)
    }
  }
  mRequest.open("GET",mURL, true);
  mRequest.send();
}


function iterateJSON0(mJson){

  for(x = 0; x < mJson.images.length; x++){


      mImages[x] = new GalleryImage();

      mImages[x].location = mJson.images[x].imgLocation;
      mImages[x].description = mJson.images[x].description;
      mImages[x].date = mJson.images[x].date;
      mImages[x].img = mJson.images[x].imgPath;
  }
}




$(document).ready( function() {

  fetchJSON();

	// This initially hides the photos' metadata information
	//$('.details').eq(0).hide();

});

window.addEventListener('load', function() {

	console.log('window loaded');

}, false);

$( "#slideShow" ).append( $( "img" ).first().hasClass( "moreIndicator" ).toString() );
$( "#slideShow" ).append( $( "img" ).last().hasClass( "moreIndicator" ).toString() );
$( "#slideShow" ).append( $( "img" ).hasClass( "moreIndicator" ).toString() ) ;


$(document).click(function() {
  $( "div(.details)" ).slideToggle( "slow" );
});


$( "#position2" ).position({
  my: "left top",
  at: "left top",
  of: "#nav"
});

$( "#position3" ).position({
  my: "right center",
  at: "right bottom",
  of: "#nextPhoto"
});
$( document ).mousemove(function( event ) {
  $( "#" ).position({
    my: "left+3 bottom-3",
    of: event,
    collision: "fit"
  });
});

function GalleryImage(location, description, date) {
	//implement me as an object to hold the following data about an image:ss
  var location;
  var description;
  var date;
  var img;

}
