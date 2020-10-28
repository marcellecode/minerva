let username = 'marcellevargas';
const url = `https://api.github.com/users/${username}/repos`;
const init = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

fetch(url, init)
    .then((response) => response.json())
    .then(repos => {
        var containerRepos = document.getElementById("projectsCards");
        repos.map(item => {
            containerRepos.innerHTML += `
            <div class="card">

            <img src="./assets/img/github-logo.png" alt="logo do github" class="card-img">
            <div class="body-card">
            <div class="description-card">
            <h6 class="language">`+ item.language + `</h6>
                        <h4>`+ item.name + `</h4>
                        <h5>`+ item.description + `</h5>
                    </div>
                    <div class="card-stars">
                        <h4>`+ item.stargazers_count + `</h4>
                    </div>
                </div>
            </div> 
            `;
        })
    })

