var email = document.getElementById("exampleFormControlTextarea1")
var btn = document.getElementById("btnValue")



btn.addEventListener('click', function(){
    alert(email.value)
});


var btnLight = document.querySelector(".btn-light");
var btnDark = document.querySelector(".btn-dark");
var body = document.querySelector("body");
var section = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("navbar a");
var footer = document.querySelector("footer")

btnDark.addEventListener("click",function(){
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btnDark.style.display = "nome";
    btnLight.style.display = "block";


    navLinks.forEach(function(link){
        link.style.setProperty("color", "white", "important")
    })

    section.forEach(function(sec){
        sec.style.backgroundColor = "rgba(241, 166, 213, 0.4)"
    })

    footer.style.backgroundColor =  "rgba(241, 166, 213, 0.4)"
    

});

btnLight.addEventListener("click",function(){
    body.style.backgroundColor = "white";
    body.style.color = "black";
    btnDark.style.display = "nome";
    btnLight.style.display = "block";


    navLinks.forEach(function(link){
        link.style.setProperty("color", "black", "important");
})

section.forEach(function(sec){
    sec.style.backgroundColor = "rgb(248, 162, 149)"
})

footer.style.backgroundColor = "rgb(248, 162, 149)"


});






// function AlertValue(){
    // alert(email.value);
// }