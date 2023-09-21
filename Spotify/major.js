let a=document.querySelector("#q");
a.addEventListener("click",function(){
    window.location.href="https://www.spotify.com/in-en/premium/?&utm_source=in-en_neev_contextual_text&utm_medium=paidsearch&utm_campaign=alwayson_asia_premiumbusiness_premium_brand_neev+contextual+text+phrase+in-en+google&gad=1&gclid=CjwKCAjwpJWoBhA8EiwAHZFzfnvHMPMuYWL0mHftedRhu6IXsxpVgzGo7LMM23AXz-sWP7DITw34qRoCxEMQAvD_BwE&gclsrc=aw.ds"
})

let b=document.querySelector("#qq");
b.addEventListener("click",function(){
    window.location.href="https://www.spotify.com/us/download/windows/"
})


//playing songs

let index=1;
let audio=new Audio('song1.mp3');
let play=document.querySelector("#play");
let back=document.querySelector("#back");
let front=document.querySelector("#front");
let bar=document.querySelector("#bar");
let nam=document.querySelector("#sp");

let liked=["Company","Keede","Desi Kalakar","Venom","Firse Machayenge","Jhoota","Machayenge","Company","Hancock","Keede","WishList","Dope Shope","Desi kalakar","Sunny Sunny","Mockingbird","Venom","Rap God"];

play.addEventListener("click",()=>{

    
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-pause");
       
    }
    else{
        audio.pause();
        play.classList.remove("fa-circle-pause");
        play.classList.add("fa-circle-play");
    }
});

audio.addEventListener("timeupdate",()=>{
    progress=audio.currentTime/audio.duration*100;
    bar.value=progress;
    if(bar.value==100){
        play.classList.remove("fa-circle-pause")
         play.classList.add("fa-circle-play")

    }
});

bar.addEventListener("change",()=>{
    audio.currentTime=bar.value*audio.duration/100;
})

Array.from(document.getElementsByClassName("likee")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
         if(play.classList.contains("fa-circle-play")){
            play.classList.remove("fa-circle-play");
            play.classList.add("fa-circle-pause");
         }
         index=parseInt(e.target.id);
       
        audio.src=`song${index}.mp3`;
        audio.currentTime=0;
        audio.play();
        nam.innerHTML=liked[index-1];
      
    })
})

back.addEventListener("click",()=>{
    if(index<=1){
        index=17;
        nam.innerHTML=liked[index-1];
    }
    else{
        index-=1;
        nam.innerHTML=liked[index-1];
    }
    if(play.classList.contains("fa-circle-play")){
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-pause");
     }
    audio.src=`song${index}.mp3`;
    audio.currentTime=0;
    audio.play();
    
    
})
front.addEventListener("click",()=>{
    if(index>=17){
        index=1;
        nam.innerHTML=liked[index-1];
    }
    else{
        index+=1;
        nam.innerHTML=liked[index-1];
    
    }
    if(play.classList.contains("fa-circle-play")){
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-circle-pause");
     }
    audio.src=`song${index}.mp3`;
    audio.currentTime=0;
    audio.play();
   
});

    let navigation=document.querySelector(".on");
    navigation.innerHTML=` <i class="fa-solid fa-magnifying-glass iconn id="icone""></i>
    <input type="text" id="icone" placeholder="Search here"/>`

    let search=document.querySelector(".s");
search.addEventListener("click",()=>{
    inp.style.display='flex';
});

let result=document.createElement("div");
result.classList.add("results");
navigation.appendChild(result);

let results=document.getElementsByClassName("results")[0];


for(let i=4;i<17;i++){
    let card=document.createElement('a');
    card.classList.add('card');
    card.setAttribute("href",`#${i+1}`);
    card.innerHTML=`<div class="content">
                      <p> ${liked[i]}</p>
                     </div>`;
    results.appendChild(card);   
      card.addEventListener("click",()=>{
        audio.src=`song${i+1}.mp3`;
        if(play.classList.contains("fa-circle-play")){
            play.classList.remove("fa-circle-play");
            play.classList.add("fa-circle-pause");
         }
         nam.innerHTML=liked[i];
        audio.currentTime=0;
        index=i+1;
        audio.play();
        results.style.display="none";
      })          
}

let input1=document.querySelectorAll("input")[0];
input1.addEventListener("keyup",()=>{
    let in_value=input1.value.toUpperCase();
    let itemss=results.getElementsByTagName('a');
        for(let j=0;j<itemss.length;j++){
        let contents=itemss[j].getElementsByClassName("content")[0];
        let text=contents.innerHTML;
        console.log(text);
        if(text.toUpperCase().indexOf(in_value)>-1){
            results.style.display="block";
            results.style.height=
            itemss[j].style.display="flex";
        }
        else{
            itemss[j].style.display="none";
        }
        if(input1.value==0){
            results.style.display="none";
        }
        else{
            results.style.display="block";
        }
    }
});


