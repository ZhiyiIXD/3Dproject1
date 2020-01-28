var serial;// variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem14201';
var inData; // variable to hold the input data from Arduino

let img1;
let img2;


//var beep;

//var sound0 = 0, sound1 = 0;
//var song;
//var printIn;

//let song;

//function preload() {
  // we have included both an .ogg file and an .mp3 file
  //soundFormats('ogg', 'mp3');

  // if mp3 is not supported by this browser,
  // loadSound will load the ogg file
  // we have included with our sketch
  //song = loadSound('/sound/beep.mp3');
//}//

function setup() {
 //song = loadSound('sound/beep.mp3');
  createCanvas(710, 710);
    img1 = loadImage('img/yes.png');
    img2 = loadImage('img/no.png');
  ///////////////////////////////////////////////////////////////////
    //Begin serialport library methods, this is using callbacks
///////////////////////////////////////////////////////////////////    
    

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results
  serial.list();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodem14201");

  // Here are the callbacks that you can register

  // When we connect to the underlying server
  serial.on('connected', serverConnected);

  // When we get a list of serial ports that are available
  serial.on('list', gotList);
  // OR
  //serial.onList(gotList);

  // When we some data from the serial port
  serial.on('data', gotData);
  // OR
  //serial.onData(gotData);

  // When or if we get an error
  serial.on('error', gotError);
  // OR
  //serial.onError(gotError);

  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);
  // OR
  //serial.onOpen(gotOpen);

  // Callback to get the raw data, as it comes in for handling yourself
  //serial.on('rawdata', gotRawData);
  // OR
  //serial.onRawData(gotRawData);

  
}







// We are connected and ready to go
function serverConnected() {
  console.log("Connected to Server");
}

// Got the list of ports
function gotList(thelist) {
  console.log("List of Serial Ports:");
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is Open");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  console.log(theerror);
}





function gotData() {
  var currentString = serial.readLine();  // read the incoming string
  trim(currentString);                    // remove any trailing whitespace
  if (!currentString) return;             // if the string is empty, do no more
  console.log("currentString  ", currentString);             // println the string
  latestData = currentString;            // save it for the draw method
  //console.log("latestData" + latestData);   //check to see if data is coming in
  splitter = split(latestData, ',');       // split each number using the comma as a delimiter
  //console.log("splitter[0]" + splitter[0]); 
  
   //start edit here 
    
//sound0 = splitter[0];                 //put the first sensor's data into a variable
//sound1 = splitter[1];
   console.log("This is lastestData  " + latestData);
   
    if(latestData < 10){
    image(img2,0,0);
    console.log("it work")
        }else{
          image(img1,0,0);  
        }

    



////////////////////////////////////////////////////////////////////////////
// End serialport callbacks
///////////////////////////////////////////////////////////////////////////



  //song.play();
  
}


function draw(){
    
     //image(img1,0,0);
    //image(img1, 0, height / 2, img1.width / 2, img1.height / 2);
}

//function musicPlay() {
   
  //if (song.isPlaying()) {
    // .isPlaying() returns a boolean
   // song.pause();
   // background(255, 0, 0);
  //} else {
  //  song.play(); // playback will resume from the pause position
 //  background(0, 255, 0);
 // }
//}
