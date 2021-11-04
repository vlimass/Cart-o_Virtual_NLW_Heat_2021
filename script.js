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