function toggle(element){
    // const item = element.querySelector("img") ;
    if (window.innerWidth <= 600) return;
    
    if(element.style.width === "50%"){
        element.style.width = "100%"
    }else{
        element.style.width = "50%"
    }
}