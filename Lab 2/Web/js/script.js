$(document).ready(function(){

   $.ajax({
    url:"js/json.code-workspace",
    method:"GET",
    success:function(result){
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
      myHeader2.innerText ="Discount";
      rowHeader.append(myHeader2);
      myHeader3.innerText ="Discount";
      rowHeader.append(myHeader3);
      var thead = document.createElement("thead");
      thead.append(rowHeader);
      tbl.append(thead);


        var element = JSON.parse(result);
        
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
});