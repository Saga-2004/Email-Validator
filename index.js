console.log("Hello");

let resp = document.getElementById("responsePara");
let goForChecking = document.getElementById("goForChecking");
let email = document.getElementById("email");
API = "ema_live_fHr7y8n8TAGlZ8hEUZoLJZMLJAVoKE73rmqtz1ku";
goForChecking.addEventListener("click",async (e)=>{
    e.preventDefault();
    
    resp.innerHTML = `<img src="/bouncing-circles.svg" height="50px"  alt="" srcset="">`
    
    if(email.value === ""){
        resp.innerHTML = " "
        resp.innerHTML = `<p>Please Write Something...</p>`;
    }
    else if(!email.value.includes('@')){
        resp.innerHTML = " "
        resp.innerHTML = `<p>Your email should contain "@"</p>`;
    }
    else{
    let res = await fetch(`https://api.emailvalidation.io/v1/info?apikey=${API}&email=${email.value}`);
    let data = await res.json();
    
    resp.innerHTML = " "
    
    for (let key in data){
        resp.innerHTML += `<p>${key}: "${data[key]}"</p>`;
    }
}
})

