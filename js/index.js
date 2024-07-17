$("a[href^='#']").on("click",function(e){
    let current=e.target.getAttribute("href")
    let offsett=$(current).offset().top;
    $("body,html").animate({scrollTop:offsett},1000)
   
})