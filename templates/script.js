 $(document).ready(function(){
     $(window).scroll(function(){
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
     })
 });
 
 /*$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });*/

//slide up script 
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 500})
});

    //toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });

    //owl carousel script
    $('.carousel').owlCarosel({
        margin: 20,
        loop: true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items: 1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            }
            1000:{
                items: 3,
                nav:false
            }
        }
    }); 
});

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkinputs();
});

//const checkinputs = () => {}
function checkinputs(){
    const nameValue = nameValue.value.trim();
    const emailValue = emailValue.value.trim();
    const subjectValue = subjectValue.value.trim();
    const textareaValue = textareaValue.value.trim();

    if (nameValue =='') {
        setErrorFor(nameValue, "name Cannot be blank")
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
}