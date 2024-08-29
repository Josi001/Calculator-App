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

