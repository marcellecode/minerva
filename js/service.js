let username = 'marcellevargas';
const url = `https://api.github.com/users/${username}/repos`;
const init = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

fetch(url, init)
    .then((response) => response.json())
    .then(repos =>{
        repos.forEach( repo => {
             console.log(repo.name)
         });
    })
