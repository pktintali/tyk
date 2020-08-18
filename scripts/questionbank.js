
const container = document.getElementById('scaffold');
var loading = document.getElementById('loader');
var mainpage = document.getElementById('mainpage');
var request = new XMLHttpRequest();
request.open('GET', 'https://api.steinhq.com/v1/storages/5f37792b5d3cdc44fcd7d30b/cd', true);
request.onload = function () {
  loading.style.display = "none";
  mainpage.style.display = "block";
  // Begin accessing JSON data here
  var k =-1;
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(questions => {
      k=k+1;
      const card = document.createElement('form');
      card.classList.add("w3-container","w3-card");

      const h3 = document.createElement('h3');
      h3.textContent = (k+1)+'. '+questions.question;
      card.appendChild(h3);
      for(var i =0;i<4;i++){
      
      const p = document.createElement('p');
      
      const input = document.createElement('input');
      input.classList.add("w3-radio");
      input.setAttribute('type', 'radio')
      input.setAttribute('name', 'op'+k);
      
     const label = document.createElement('label');
     if(i==0){
      input.setAttribute('value',questions.opt0);
      label.textContent = ' '+questions.opt0;
      }
     else if(i==1){
      input.setAttribute('value',questions.opt1);
      label.textContent = ' '+questions.opt1;
      }
     else if(i==2){
     input.setAttribute('value',questions.opt2);
      label.textContent = ' '+questions.opt2;
      }
     else if(i==3){
     input.setAttribute('value',questions.opt3);
      label.textContent = ' '+questions.opt3;
      }else{
      label.textContent = '';
      }
  
      p.appendChild(input);
      p.appendChild(label);
      card.appendChild(p);
      }
      container.appendChild(card);
      const br = document.createElement('br');
      container.appendChild(br);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();