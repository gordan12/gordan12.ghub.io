var title=document.getElementById("title");
var contant=document.getElementById("contant");
var btn=document.getElementById("btn");
var list=document.getElementById("list");
btn.addEventListener("click",function(){
    console.log(contant.value);
    list.innerHTML=list.innerHTML+`
    <div class="article">
        <h2>${title.value}</h2>
        <p>${contant.value}</p>
        <hr/>
    </div>  
    `;
})
var btn = document.getElementById("button1")
btn.addEventListener("click",function(){
    this.innerText = "狗才玩";
})
var btn = document.getElementById("button2")
btn.addEventListener("click",function(){
    this.innerText = "唯我獨尊";
})
