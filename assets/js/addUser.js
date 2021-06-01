const form = document.querySelector("form");

const usernameInput = document.querySelector("#username");


function addUser(){

    user = {username: usernameInput.value};

    fetch("https://jsonplaceholder.typicode.com/users",
    {
        method:"POST",
        body: JSON.stringify(user)
    })
        .then(resp=>{
            console.log(resp);
            refreshUsers();
        });
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    addUser();
    })