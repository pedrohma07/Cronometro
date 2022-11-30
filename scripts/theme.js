const check = document.getElementById("check");

check.addEventListener("change", () =>{
    document.body.classList.toggle("dark");
    document.body.l
    document.getElementsByClassName("label")[0].classList.toggle("ligth"); 
    
    let aux = document.getElementsByClassName("ball")[0].style.background;
    if(aux == "rgb(35, 44, 53)"){
        document.getElementsByClassName("ball")[0].style.background = "antiquewhite";
    }
    else{
        document.getElementsByClassName("ball")[0].style.background = "#232c35";
    }
    
})