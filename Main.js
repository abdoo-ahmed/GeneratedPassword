
let button = document.querySelector(".btn");
let passwordRandom = "!@#$^QWERTYUIOPASDFGHJKLMNBVCXZqwertyuiopasdfghjklzxcvbnm0123456789";
let input_Generate = document.querySelector(".input_Generate");
let clickIcon = document.querySelector(".fas");
button.addEventListener("click" , function(){
    let password = "";
    for(let i = 0 ; i<10 ; i++){
        password +=passwordRandom[Math.floor(Math.random() * passwordRandom.length)];
    }
    input_Generate.value = password;
    input_Generate.innerHTML = input_Generate.value

})
clickIcon.addEventListener("click" , function(){
    navigator.clipboard.writeText(input_Generate.value)
    alert("Copied")
})






