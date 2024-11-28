const int e18_sensor = 7;
const int led = 2;
void setup() {
  Serial.begin(9600);
  pinMode (e18_sensor, INPUT);
  pinMode (led, INPUT);
}
void loop() {
  int state = digitalRead(e18_sensor);
  Serial.println(state);
  if(state==LOW){
  Serial.println("Object Detected"); 
  digitalWrite(led, HIGH);
  }
  else {
  Serial.println("All Clear"); 
  digitalWrite(led, LOW);
}
delay(1000);
}