 
 

(function () {
  /*document.querySelector takes specific info from the class specified in the data.
    */
    const display=document.querySelector('.display');
    const buttons=document.querySelectorAll('.button');
    const clear=document.querySelector('.clear');
    const equal=document.querySelector('.equal');
   
    
   /*if a button is clicked, the value is set to that number with the value from the dataset, then the display.value will add to the display
   as other buttons are pressed (display.value+=value)*/
    buttons.forEach(function(button)
    {
      
        button.addEventListener('click',function(event)
        {
           
             var value=event.target.dataset.num;
            display.value+=value;
          
            

        }) 
      /*if the user hits the equal button, answer will let eval() evaluate the display.value, and return a number from the calculation.
        document.getElementbyId("History") will store the calculators history by taking the display.value, and answer
        display.value now is equal to answer, making the display show the answer, and not the expression anymore*/
     
    equal.addEventListener('click', function(event)
    {
      
          
          var answer=eval(display.value);
          answer+="                                            "; /*temporary solution to remove "undefined" off the display*/
          
         
         let val=answer.substr(0," ");

         document.getElementById("History").innerHTML+=display.value+ "="+ answer+ "<br>";
         display.value=answer;
        
          
         
 
    })
  /*if the user hits the button clear, the display value will be changed to ""*/

        clear.addEventListener('click',function(event)
        {
            display.value="";
        })
        
     
   
      }); 
    
    
})
();

/*function to operate the hamburger menu*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }