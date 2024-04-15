const portfolio = () =>{
    const containerAboutMeEl = document.querySelector('.aboutMe')
    console.log()
    fetch('https://preview.contentful.com/spaces/r6v3uqivrej5/environments/master/entries?access_token=Mgv6FA9Gkr6LS5niW6jtxnGT_queq-m398SW1hUUr3g&content_type=aboutMe')
    .then((response=> response.json()))
    .then((data)=> {
        const aboutMeName = data.items[0].fields.soyGonza
        const aboutMeDescription = data.items[0].fields.description
        const aboutMeImg = data.includes.Asset[0].fields.file.url
        
        containerAboutMeEl.innerHTML = `
        <div class="aboutMe__container">
            <div class="about-me__container-text">
                <h2 class="aboutMe-title" about-me>${aboutMeName}</h2>
                <p class="aboutMe-description">
                    ${aboutMeDescription}
                </p>
            </div>
            <img class="aboutMe-img" src="${aboutMeImg}" alt="">
        </div>
        `
        
    })
}

portfolio()