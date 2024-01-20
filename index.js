for(var i=0;i<6;i++){
    dropdown(i);
}
function dropdown(num){
    document.querySelectorAll(".faqhead")[num].addEventListener("click",function (){
        document.querySelectorAll(".dropdown")[num].classList.toggle("display-none");
    });
}