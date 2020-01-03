$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
   const postId  = urlParams.get('id');

   
    
    $.ajax({
        url:"http://sditijquery.somee.com/api/Blogs/",
        data:{ID:postId},
        method:"GET",
        contentType:"json/application",
        success:function(result){

           $("#header-element").text(result.BlogTitle);
           $("#blog-Section").html(result.BlogContent);
           $("#blog-Section img").each(function(){
                
             $(this).attr("src", "http://sditijquery.somee.com/"+$(this).attr("src"))
           });
        }


    });
    
});