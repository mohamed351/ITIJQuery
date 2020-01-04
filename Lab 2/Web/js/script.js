var arraydata;
$(document).ready(function(){

   $.ajax({
    url:"js/json.code-workspace",
    method:"GET",
    success:function(result){
        arraydata = JSON.parse(result);
        Draw(arraydata);
     
    }
   });
   
   $("#sortElement").on("change",function(){

       let  val = $(this).val();
       switch (val) {
           case "1":
            var element = arraydata.sort(function(a,b){
             
                if(a.name < b.name){
                    return -1;
                }
                else
                {
                    return 1;
                }
           
             });
             arraydata= element;
             Draw(arraydata);
               break;

            case "2":
                var element = arraydata.sort(function(a,b){
             
                    if(parseInt( a.price_formatted.split("$")[1]) > parseInt( b.price_formatted.split("$")[1])){
                        return -1;
                    }
                    else
                    {
                        return 1;
                    }
               
                 });
                 arraydata= element;
                 Draw(arraydata);
                break;
             case "3":

                var element = arraydata.sort(function(a,b){
             
                    if(parseInt( a.discount_price_formatted.split("$")[1]) > parseInt( b.discount_price_formatted.split("$")[1])){
                        return -1;
                    }
                    else
                    {
                        return 1;
                    }
               
                 });
                 arraydata= element;
                 Draw(arraydata);
                break;
       
           default:
               break;
       }
   });

   $("#txt1").on("keypress",function(){
 
    var txtSearch = $("#txt1").val();

   var elem = arraydata.filter(function(a){
      
       return a.name.toLowerCase().search(txtSearch)!= -1 || txtSearch == " " || txtSearch == "";
    });
  
    Draw(elem);
 
   });

   function Draw(element){
    var tbl = document.createElement("table");
    
    tbl.classList.add("table");
    tbl.classList.add("table-border");
   rowHeader = document.createElement("tr");
    var myHeader = document.createElement("th");
    var myHeader1 = document.createElement("th");
    var myHeader2 = document.createElement("th");
    var myHeader3 = document.createElement("th");

    myHeader.innerText ="URL";
    rowHeader.append(myHeader);
    myHeader1.innerText ="Song";
    rowHeader.append(myHeader1);
    myHeader2.innerText ="price";
    rowHeader.append(myHeader2);
    myHeader3.innerText ="Discount";
    rowHeader.append(myHeader3);
    var thead = document.createElement("thead");
    thead.append(rowHeader);
    tbl.append(thead);


     
      
      for(i of element){
          var row = document.createElement("tr");
          
          for(x in i){
              if(x == "url"){
               var url =   document.createElement("a");
                url.href =i[x];
                url.classList.add("btn");
                url.classList.add("btn-success");
                url.innerText ="url";
                var td = document.createElement("td");
                td.append(url);
                row.append(td);
              }
              else if (x == "name" || x =="price_formatted" || x =="discount_price_formatted"){
                  var td = document.createElement("td");
                  td.innerText =i[x];
                 
                  row.append(td);
              }
              else if (x == "main_image"){
                  var image  = document.createElement("img");
                  image.src =i[x];
                  image.classList.add("img-fluid");
                  var td = document.createElement("td");
                  td.append(image);
                  row.append(td);
              
              }   

             
            
            
          }
          tbl.append(row);
      }
      $(".table-data").html(tbl);

   }
});