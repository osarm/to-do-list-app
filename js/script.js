    function newItem(){
    //1. Adding a new item to the list of items: 
       let li = $("<li></li>");
       let inputValue = $("#input").val();
       let span = $("<span></span>").append(inputValue);
       li.append(span);
    
       if ($("#input").val() === "") {
         alert("You must write something!");
       } else {
        let list = $("#list");
        list.append(li);
         $('#input').val(''); //clears the input after adding the item
       }
    
     //2. Crossing out an item from the list of items:
        li.on("dblclick", function() {
          span.toggleClass("strike");
            li.toggleClass("opacity");
        });  

     //3(i). Adding the delete button "X": 
       let crossOutButton = $("<crossOutButton></crossOutButton>");
         $(crossOutButton).append("X");
         //Add class to button
         li.append(crossOutButton);
    
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
        crossOutButton.on("click", function () {
        li.addClass("delete");
      });

     // 4. Reordering the items: 
       $('#list').sortable();
    }