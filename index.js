const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if(soundState === 'off'){
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.play();
    }
    else if(soundState === 'on'){
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        myAudio.pause();
    }
}

// Play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');
const navItem2=document.querySelector('.menuIcon')
const Header1=document.querySelector('mainHeader')
var isTrue=true
var isTrue2=false
navItem2.addEventListener('click',()=>{
if (isTrue) {
    SideNav.style.right="-450px"
    mainHeader.style.width="100%"
    isTrue=false
    isTrue2=true
}else{
    SideNav.style.right="0px"
    mainHeader.style.width="90%"
    isTrue=true
    isTrue2=false
}})
window.addEventListener('scroll',()=>{
    let s=window.scrollY
    if (isTrue2) {
        mainHeader.style.width="100%"
    }if(s>120){
        mainHeader.style.background="#262626"
    }else if(s<60){
        mainHeader.style.background="transparent"
        // mainHeader.style.width="90%"

    }
})


btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}


// Part 1 javascript functionality ends here
$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})

