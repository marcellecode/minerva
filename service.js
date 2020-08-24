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
            containerRepos.innerHTML+=`
            <div class="card">
                <img src="./assets/github-logo.png" alt="logo do github" class="card-img">
                <div class="body-card">
                    <div class="description-card">
                        <h4>`+item.name+`</h4>
                    </div>
                    <div class="card-stars">

                    </div>
                </div>
            </div> 
            `;
        })
    })
    
