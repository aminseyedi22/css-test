// Defining event listener function
function displayWindowSize(){
    var w = document.documentElement.clientWidth;
    if (w>1200){
        w = w/19
    }else{
        w = w/13
    }
    
    document.getElementById("investor-text").style.fontSize = w+"px"
}
    
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

displayWindowSize();