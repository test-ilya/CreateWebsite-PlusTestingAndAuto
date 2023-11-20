
let input_login = document.getElementById("input_login");
let input_password = document.getElementById("input_password");
let status_auth = document.getElementById("status_auth");
let btn_enter = document.getElementById("btn_enter");
let checkbox = document.getElementById("check");
let input_login_free = document.getElementById("input_login_free");
let btn_enter_free = document.getElementById("btn_enter_free");

const status_auth_error = "Authorization error";
const status_auth_suc = "Authorization successful";

checkBox();

const urlPut = 'http://localhost:8080/users';
async function updateUser(){
    let user_free = {
        id: 1,
        loginName: input_login_free.value
    }
    const response = await fetch(urlPut,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            },
        body: JSON.stringify(user_free)
    })
};

btn_enter_free.addEventListener("click", function(){
    if(input_login_free.value != ""){
        status_auth.textContent = status_auth_suc
        status_auth.style.color = "green"
        setTimeout(function(){
            window.location.href = '/html_sections/main.html'
        }, 1000);   
        updateUser();
    } else {
        status_auth.textContent = status_auth_error
        status_auth.style.color = "red"
    }
});


const urlJoin = "http://localhost:8080/api/user/login";
async function joinUser(){
    let user = {
        loginName: input_login.value,
        password: input_password.value
    }
    const response = await fetch(urlJoin,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            },
        body: JSON.stringify(user)
    })
    .then(async response => {
        const data = await response.json()
        if(data.message == "loggedIn successfully"){
            status_auth.textContent = status_auth_suc
            status_auth.style.color = "green"
            setTimeout(function(){
                window.location.href = '/html_sections/main.html'
            }, 1000);   
        } else if (data.status != 200) {
            status_auth.textContent = status_auth_error
            status_auth.style.color = "red"
        }
    })
    .catch(error => {
        console.error("Error: ", error);
        console.log("Server is down!!!")
        status_auth.textContent = status_auth_error
        status_auth.style.color = "red"
    })
};

btn_enter.addEventListener("click", function(){
    joinUser();
});


function checkBox(){
    checkbox.addEventListener("click", function(){
        if (checkbox.checked == true){
            input_login.style.display = "none"
            input_password.style.display = "none"
            btn_enter.style.display = "none"
            input_login_free.style.display = "block"
            btn_enter_free.style.display = "block"
        } 
        else if(checkbox.checked == false){
            input_login.style.display = ""
            input_password.style.display = ""
            btn_enter.style.display = ""
            input_login_free.style.display = "none"
            btn_enter_free.style.display = "none"
        }})
};
