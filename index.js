var btnAdd = document.getElementById('add-item');
var list = document.getElementById('to-do-list');
var input = document.getElementById('input-box');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('remove-item');


var currentInput ='' ;
input.addEventListener('input' , function(e){
    currentInput = e.target.value;
});

function createNewNode() {

    var newListElement = document.createElement('li')
    newListElement.appendChild(document.createTextNode(currentInput));
    newListElement.id = "lists";
    newListElement.style.backgroundColor = 'white';
    newListElement.style.padding = '8px';
    newListElement.style.outlineStyle = 'solid';
    newListElement.style.margin = '8px';

    newListElement.addEventListener('mouseenter', function(){
        newListElement.style.backgroundColor = 'aqua';
        
    });

    newListElement.addEventListener('mouseleave', function(){
        newListElement.style.backgroundColor = 'white';
        
    });
    list.appendChild(newListElement);
    return newListElement;
}

function addList(){ 
    
    if( currentInput !== undefined && currentInput !== null && currentInput !== '') {

        var newListElement = createNewNode();
    input.value = '';
    currentInput = '';   
    }

    else {
        alert('Please enter a valid to-do item')
    }   
}

input.addEventListener('keyup', function(e) {

    if(e.keyCode ===13)
    {
        addList();
    }
    
})


btnAdd.addEventListener('click' , addList );

function updateList(){ 
    
    if( currentInput !== undefined && currentInput !== null && currentInput !== '') {

        var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);  
    input.value = '';
    currentInput = '';
    }

    else {
        alert('Please enter a valid to-do item');
    }   
}

btnUpdate.addEventListener('click' , updateList);

btnRemove.addEventListener('click' , function(){
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement);
})


