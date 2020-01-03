$(document).ready(function(){

    //inital the document 

    $.ajax({
        
        url:"http://sditijquery.somee.com/api/Blogs/",
        contentType:"application/json",
        method:"GET",
        success:function(result){

           for (blog  of result){
            GenerateElements(blog)
           }
        }
    

    

    });

});
function GenerateElements(element){

   let mainElement =  document.getElementById("card-section");
   let card = document.createElement("div");
   card.classList.add("card");
   card.classList.add("mb-4");
   let image = document.createElement("img");
   image.classList.add("card-img-top");
   image.src = element.Image;
   card.append(image);
   let cardBody = document.createElement("div");
   cardBody.classList.add("card-body");
   let cardTitle = document.createElement("h3");
   cardTitle.classList.add("card-title");
   cardTitle.innerText = element.BlogTitle;

   let cardtxt = document.createElement("p");
   cardtxt.classList.add("card-text");
   cardtxt.innerHTML =element.BlogBreif;

   let buttonCard = document.createElement("a");
   buttonCard.classList.add("btn");
   buttonCard.classList.add("btn-primary");
   buttonCard.href =`post.html?id=${element.ID}`;
   buttonCard.innerText ="Read More..";

   let cardfooter =document.createElement("div");
   //card-footer text-muted
   cardfooter.innerText ="Create by Mohamed Beshri Amer"; //should be author
   cardfooter.classList.add("card-footer");
   cardfooter.classList.add("text-muted");


   cardBody.append(cardTitle);
   cardBody.append(cardtxt);
   cardBody.append(buttonCard);
   cardBody.append(cardfooter);
   

   card.append(cardBody);
  

   // <a href="#" class="btn btn-primary">Read More &rarr;</a>

  
   

   mainElement.append(card);



}