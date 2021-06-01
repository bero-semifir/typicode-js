const userList = document.querySelector('div.userList');

let user = {
    username: "Michel",
    email: "truc@hotmail.com",
}
// tableau pour contenir les utilisateurs
let users = [];

fetch("https://jsonplaceholder.typicode.com/users",
    {
        method: "GET",
        // dans le cadre d'une requêtte POST (Ajout de données)
        // method:"POST",
        // body:'{"username":"Michel"}'
        // Alternative
        // body: JSON.stringify(user)
    })
    // à la récupération de la reponse, je fait la conversion du body en JSON
    .then(resp => resp.json())
    // quand la conversion est terminée, j'assigne mes utilisateurs au tableau users
    .then(json => {
        users = json
        console.log(users)
        refreshUsers();
    });
console.log(users);

// function refreshUsers(){}
const refreshUsers = () => {

    userList.innerHTML = "";
    users.forEach(user=>{
        const p = document.createElement("p");
        p.innerText = user.username;
        userList.appendChild(p);
    })
}