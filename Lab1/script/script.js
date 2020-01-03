$(document).ready(function(){

    $("#show").click(function(){
        $("h1").text("Hello JQuery");
        $("#welcome").text("JavaScript").text("JQuery");
        $(".elements .my-class:eq(0)").text("first");
        $(".elements .my-class:eq(1)").text("second");
        $(".paragraphs p").each(function(index,val){
           
          $(this).text((index+1)+"-"+val.innerText);

    
         

        });

        $("ul:first li").eq(0).css("color","red");
        $("ul:last li").eq(0).css("color","red");
        $("a").each(function(){
           
            if($(this).attr("href").indexOf("org") !=-1){
                $(this).attr("href","http://www.yahoo.com");
                $(this).text("yahoo");
            }
           
        });

    });
  
});