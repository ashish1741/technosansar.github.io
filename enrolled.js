const next = document.querySelector("#next");
const container = document.querySelector(".container");
const form = document.querySelector("form");
const inputvalue = document.querySelectorAll("input");
const getvalue = inputvalue.value;
const payement  = document.querySelector(".payemt_getway");


next.addEventListener("click" , () =>{
    form.style.display = "none";
    payement.style.display = "inline-block"
    document.querySelector("h2").style.display="none";
    document.querySelector("p").style.display = "none";

    // if (getvalue==true) {

    //     console.log("hurray")
    //     form.style.display = "none";
    //     payement.style.display = "inline-block"
   
    // }
    // else
    // {
       
    // alert("Dear user you are requested " );
    

    // }
 
//   container.classList.toggle("active");
//   container.classList.remove(form);


})

