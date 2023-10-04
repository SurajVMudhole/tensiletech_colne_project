var heading=document.getElementById('hero-headline');
var para=document.getElementById('hero-para');
var btn=document.getElementById('hero-btn-detailes');


var optn1=document.getElementById('optn1');
var optn2=document.getElementById('optn2');
var optn3=document.getElementById('optn3');
optn1.addEventListener('click',()=>{
    console.log('optn1');
    setTimeout(function() {
    heading.textContent="We are your startup's tech plugin";
    para.textContent="We empower your startup with comprehensive technological solutions, breaking through barriers and propelling growth to new heights. With our expertise, your journey is poised for accelerated success.";
    btn.textContent="Explore";
    optn1.style.backgroundColor='#E05D5C';
    optn2.style.backgroundColor='gray';
    optn3.style.backgroundColor='gray';
}, 200); 
});
optn2.addEventListener('click',()=>{
    console.log('optn2');
    setTimeout(function(){
    heading.textContent="Need a Team?";
    para.textContent="We incubate startups and form meaningful teams in the process. Come find our Exceptional Teammates among our community and connect with them.";
    btn.textContent="Find out more";
    optn1.style.backgroundColor='gray';
    optn2.style.backgroundColor='#E05D5C';
    optn3.style.backgroundColor='gray';
    },200);
});
optn3.addEventListener('click',()=>{
    console.log('optn3');
    setTimeout(function(){
    heading.textContent="Have an opensource project?";
    para.textContent="Let us assist you in refining your open source project, transforming it into a world-class endeavor. With our extensive network of talented developers and mentors, we'll provide the support and guidance you need to unlock its full potential.";
    btn.textContent="Contact Us";
    optn1.style.backgroundColor='gray';
    optn2.style.backgroundColor='gray';
    optn3.style.backgroundColor='#E05D5C';
    },200);
});
