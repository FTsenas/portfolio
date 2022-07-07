
var mvBackgrnd = document.getElementById("innerMiddle");
var mvClassArray2 = [2,3,4,5,6,7,8];
var mvCount = 0;
var carriageMinus;
var carriagePlus;


function mvSlideShow(){
    
   
    if(mvCount >= mvClassArray2.length){
           mvCount = 0;
        mvBackgrnd.className = "mvImg" + mvClassArray2[mvCount];
     
    }else{

        mvBackgrnd.className = "mvImg" + mvClassArray2[mvCount];
        mvCount++;
    }
    
}

var firstTimer = setInterval(mvSlideShow,5000);
