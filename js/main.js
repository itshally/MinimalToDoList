//declaring variables
var txtInput = document.querySelector('input'), //text input
    addbtn = document.getElementById('addBtn'), //add button
    lists = document.querySelector('ul'); //unordered list

$('#errorMsg').css('display', 'none');

//click event for the add button
addbtn.addEventListener('click', function(x){
        
    //if the text input is not empty or only space(s), it will add a list to the <ul> tag        
        if(txtInput.value.trim() !== ""){
            
            lists.innerHTML += '<li><div class="item">' + txtInput.value +
             '</div><button onclick="Delete(this);"><i class="fas fa-times"></i></button>';
            
            $('#errorMsg').hide();
            
            //when the mouse hovers on the list item...
            $('li').mouseover(function(){
                //it will put a background color to it
                $(this).css('background-color', '#999999');
                $(this).css('color', 'white');
                //when the list item is clicked once, it will show a line-through to the text
                $(this).click(function(){
                    $(this).css('text-decoration', 'line-through')
                });
                //when double clicked, it will remove the line-through
                $(this).dblclick(function(){
                    $(this).css('text-decoration', 'none')
                });
            });
            
            //but when the mouse is not hovering the item, it will remove the background color
            $('li').mouseout(function(){
                $(this).css("background-color", "transparent");
                $(this).css('color', 'black');
            });
            
            //for every submit, the input will be clear 
            txtInput.value = '';  
            
            //this gives a focus to the text input
            txtInput.focus();
        }
        else{
            //otherwise, the error message will appear
            $('#errorMsg').show();
        }

    x.preventDefault();
    SaveIt(x);
}, false);

//to use the "Enter" key on the keyboard instead of pressing the add button
$(document).keyup(function(e){
    if(e.keyCode === 13){
        $('#addBtn').click();
    }
});

//Delete function
function Delete(x){
    x.parentNode.parentNode.removeChild(x.parentNode);
}