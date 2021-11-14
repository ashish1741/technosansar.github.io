// for copyright year update ---- 
const year = document.querySelector(".year");
// ----------getting date --- 
const date =  new Date().getFullYear();
year.innerHTML = date;
// for copyright year update -- X-- 


// for hamburger_menu -------- 

const   big_wrapper = document.querySelector(".big-wrapper");
 const  hamburger_menu = document.querySelector(".hamburger-menu");


  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
    // big_wrapper.classList.remove("active");
  });

// for hamburger_menu ---- X---- 

 
  //  ---------- jquary for view all button of course section 

 $("article").slice(0,3).show();
 $("#view").on("click" , function(){
   console.log("i am click");
   $("article:hidden").slice(0,3).slideDown()
   if($("article:hidden").length==0){
     $("#view").fadeOut("slow");
   }
 })

  //  ---------- jquary for view all button of course section 

 






