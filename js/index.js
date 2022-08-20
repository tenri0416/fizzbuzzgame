console.log("確認");
let count=0;
//カウントを表示する
const showNum=document.querySelector(".showNum");
showNum.innerHTML=count;


//ボタンの動作
const fizzbutton=()=>{
    count++;
    if(count%3===0){
        showNum.innerHTML='fizz';
      
    }else{
        alert("ぶぶー");
        location.reload();
        
    }
}
const buzzbutton=()=>{
    count++;
    if(count%5===0){
        showNum.innerHTML="buzz";
       
    }else{
        alert("ぶぶー");
        location.reload();
        
    }
}
const fizzbuzzbutton=()=>{
    count++;
    if((count%3===0)&&(count%5===0)){
        showNum.innerHTML="fizzbuzz";
       
    }else{
        alert("ぶぶ");
        location.reload();
        
    }
}
const numberbutton=()=>{
    count++;
    if(count%3===0||count%5===0){
        alert("ぶぶ");
        location.reload();
       
    }else{
       
        showNum.innerHTML=count;
    }
}



