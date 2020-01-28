

int trigPin = 13;
int echoPin = 12;
int led = 11;

int incomingByte; // variable for reading from serial port - from p5.js 


void setup(){ 


Serial.begin (9600);

pinMode(trigPin, OUTPUT);

pinMode(echoPin, INPUT);

pinMode(led, OUTPUT);

}


void loop(){ 
//variables that used to convert to cm and inches
long duration, distance, inches, cm;

pinMode(trigPin, OUTPUT);
//set the pin LOW first to make sure it's in the state you want*
digitalWrite(trigPin, LOW);
//give it a little delay to make things run smoothly 
delayMicroseconds(2);
//turn high, and sends out an ultrasonic pulse
digitalWrite(trigPin, HIGH);
//make it run smoothly by delay
delayMicroseconds(10);
//set low to clear it
digitalWrite(trigPin, LOW);
//it read the length of time,
pinMode(echoPin, INPUT);
//pluseIN waits for the pin to go high,then recordes the time in microseconds until the pin goes LOW
duration = pulseIn(echoPin, HIGH);



distance = (duration/2) / 29.1;

//if (distance < 10)

//{ digitalWrite(led,HIGH);

//}

//else {

//digitalWrite(led,LOW);

//}


//if(Serial.available() < 10){
  
  if(distance < 10){
  incomingByte = Serial.read();
  digitalWrite(led,HIGH);
}else{
  digitalWrite(led,LOW);
}

Serial.println(distance);



delay(300);

}

long microsecondsToInches(long microseconds){
  //these conversion numbers come from the data sheet for the sensor, just trust them!
  return microseconds/74/2;
  }
long microsecondsToCentimeters(long microseconds){
  return microseconds/29/2;
}
