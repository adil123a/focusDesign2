const soundCloud=document.querySelector('.sound-cloud');const off=document.querySelector('#off');const on=document.querySelector('#on');const myAudio=document.querySelector('#myAudio');off.addEventListener('click',()=>soundTrack('off'));on.addEventListener('click',()=>soundTrack('on'));const soundTrack=(soundState)=>{if(soundState==='off'){on.style.display='block';off.style.display='none';soundCloud.style.color="#08fdd8";myAudio.play()}else if(soundState==='on'){on.style.display='none';off.style.display='block';soundCloud.style.color="#f50057";myAudio.pause()}}
const btnBars=document.querySelector('.bars');const btnTimes=document.querySelector('.times');const SideNav=document.querySelector('.aside');const navItem2=document.querySelector('.menuIcon')
const Header1=document.querySelector('mainHeader')
var isTrue=!0
navItem2.addEventListener('click',()=>{if(isTrue){SideNav.style.right="0px"
mainHeader.style.width="90%"
isTrue=!1}else{SideNav.style.right="-450px"
mainHeader.style.width="100%"
isTrue=!0}})
window.addEventListener('scroll',()=>{let s=window.scrollY
if(isTrue){mainHeader.style.width="100%"}if(s>120){mainHeader.style.background="#262626"}else if(s<60){mainHeader.style.background="transparent"}})
btnBars.addEventListener('click',()=>myFunc('open'));btnTimes.addEventListener('click',()=>myFunc('close'));const myFunc=(navCondition)=>{if(navCondition==='open'){SideNav.classList.add('show-nav');btnTimes.style.display="block";btnBars.style.display="none"}else if(navCondition==='close'){SideNav.classList.remove('show-nav');btnTimes.style.display="none";btnBars.style.display="block"}}
var mainBody=document.getElementById('bodyTag')
let sectionAbout=document.querySelector('#section-about')
var mainContainer=document.getElementById('loaderMain')
var mainSection=document.getElementById('mainSection')
var asideCont=document.getElementById('aside')
function loader(){setTimeout(()=>{mainSection.style.display='block'},7500);setTimeout(()=>{mainBody.style.overflowY='auto'},7600);setTimeout(()=>{mainContainer.remove()},8600)}
