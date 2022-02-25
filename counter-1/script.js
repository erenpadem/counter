const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');
const number = document.querySelector('.number');


let count=0;
number.innerText=0;


decrease.addEventListener('click',function(){

   count--;
   number.innerText=count;
   return number,setcolor(number);

});
reset.addEventListener('click',function(){

     count=0; 
     number.innerText=count;
     return number,setcolor(number);

});
increase.addEventListener('click',function(){


    count++;
    number.innerText=count;
    return number,setcolor(number);



});

function setcolor(number){
if(count==0){
    number.style.color="black";
}else if(count>0){
    number.style.color="green";
}
else if(count<0){
    number.style.color="red";
}
}

