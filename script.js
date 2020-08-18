var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

//getting the resultt
function getResult(){
var marks = 0;
var ans = ['val2','val3','val1','val1','val2'];
 var form = document.getElementsByTagName('form');
 for(i =0;i<form.length;i++){
 
     var ele = document.getElementsByName('op'+i); 
     
     for(j = 0; j < ele.length; j++) { 
     
       if(ele[j].checked){ 
         
         if(ele[j].value==ans[i]){
          marks=marks+1;
         } 
     
     } 
 
 }
}
document.getElementById("result").innerHTML
       = marks;
}