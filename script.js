const linksSocialMedia = {
    github : "vlimass",
    youtube : "rocketseat",
    facebook : "rocketseat",
    instagram : "viny_lss",
    twitter : "rocketseat"
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){    
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json()) // Promise 
    .then(data => {
        userName.textContent = data.name
        userLogin.textContent = data.login
        userLink.href = data.html_url
        userAvatar.src = data.avatar_url
        userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()