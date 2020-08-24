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
        repos.forEach(repo => {
            //console.log(repo.name, repo.description)
            // var node = document.createElement("h4");
            // var textnode = document.createTextNode(repo.name);
            // var node = document.createElement("h5");
            // var textnode = document.createTextNode(repo.descript);
            // node.appendChild(textnode);
            // document.getElementById("repos").appendChild(node);
            // var att = document.createAttribute("class");       // Create a "class" attribute
            // att.value = "card";  

            // var att = document.createAttribute("class");       // Create a "class" attribute
            // att.value = "card";  
            
            var cards = document.createElement("div").setAttributeNode(att);
            
            var bodyCard = document.createElement("div").setAttributeNode("body-card");
            var nameCard = document.createElement("h4")
            var nameBodyCard = document.createTextNode(repo.name);

            var descriptionCard = document.createElement("h5");
            var descriptionBodyCard = document.createTextNode(repo.description);
            
            nameCard.appendChild(nameBodyCard);
            descriptionCard.appendChild(descriptionBodyCard);
            
            cards.appendChild(nameCard).appendChild(descriptionCard);

            document.getElementById("projects-cards").appendChild(cards);
        });
    })
    
