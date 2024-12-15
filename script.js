function display(val){

    document.querySelector(".input_number").value += val;
    return val

}

function solve(){

    let x = document.querySelector(".input_number").value;
    let y = eval(x);

    document.querySelector(".input_number").value = y;
    return y;

}

function clearInput(){

    document.querySelector(".input_number").value = '';

}   

document.addEventListener("keypress", function(event){

     if (event.keyCode === 13){
       solve();
    }
 });




document.querySelector(".percent").addEventListener("click", function(){
    let getValue = document.querySelector(".input_number").value / 100;

    document.querySelector(".input_number").value = getValue;

    return getValue;
});


function del(){
    let inputValue = document.querySelector(".input_number").value;

    let arr = [];
    arr.push(inputValue);

    
    arr.splice(arr.length - 1 , 1);
    
    console.log(arr);
    
    document.querySelector(".input_number").value = arr;

    return arr;

};
