var marks =0;
function saveAns() {
var subject = sessionStorage.getItem("subject");
console.log(subject);

sessionStorage.setItem("subject", subject);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/'+subject, true);
request.onload = function () {
  marks =0;
  // Begin accessing JSON data here
  var k=-1;
  var data = JSON.parse(this.response);
  
  var form = document.getElementsByTagName('form');
  if (request.status >= 200 && request.status < 400) {
  data.forEach(questions => {
  k=k+1;
  var ele = document.getElementsByName('op'+k);
  for(var j = 0; j < ele.length; j++) {
  if(ele[j].checked){ 
  if(ele[j].value==questions.ans){
  marks=marks+1;
  } }
  
 }});
var quote = document.getElementById("rq");
if(marks>data.length-2){
quote.textContent = "Outstanding 🙏🙏🙏 Keep it up";
}
else if(marks>(data.length/2)+(data.length/4)){
quote.textContent = "You are doing great 👍 But try some more in  "+subject;
}
else if(marks>data.length/2){
quote.textContent ="Your performance is above average 🤗 But you need to work little more in "+subject;
}
else if(marks>data.length/4){
quote.textContent = "You need to work hard 🤨 in "+subject+" You are not getting enough marks";
}
else if(marks>data.length/10){
quote.textContent = "Why So poor performance 😓 Focous some more in "+subject;
}
else if(marks>0&&marks<data.length/10){
quote.textContent = "What are you doing 🤔 in "+subject+" Why so less marks";
}
else if(marks==0){
quote.textContent = "🙄🙄🙄";
}
else{
quote.textContent = "BINOD";
}
document.getElementById("id5").innerHTML="Your Score is";
  document.getElementById("rm").innerHTML
  = marks;
 }
}
request.send();
}