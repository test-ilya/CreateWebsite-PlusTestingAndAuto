


let log_out = document.getElementById("log_out");
let login = document.getElementById("login_name");

let user_login 

const url = `http://localhost:8080/users/${user_login}`;

async function getUser(){
    const response = await fetch(url,{
        method: 'GET'
    })
    .then(async response => {
        const data = await response.json()
        login.textContent = data.loginName
    })
    .catch(error => {
        console.error("Error: ", error);
        console.log("Server is down!!!")
        login.textContent = "Unknown user, because server is down"
    })

};

getUser();

log_out.addEventListener("click", function(){
    window.location.href = '/index.html'
});



