const main = () =>{
    const containerMainEl = document.querySelector('.main-container')
    fetch('https://preview.contentful.com/spaces/r6v3uqivrej5/environments/master/entries?access_token=Mgv6FA9Gkr6LS5niW6jtxnGT_queq-m398SW1hUUr3g&content_type=webComponents')
    .then((response=> response.json()))
    .then((data)=> {
        const welcome = data.items[1].fields.welcomeTitle
        const welcomeImg = data.includes.Asset[1].fields.file.url
        
        containerMainEl.innerHTML = `
        <div class="main__container-title">
            <h1 class="main-title">Hola </br><span class="main__title-color">${welcome}</span></h1>
        </div>
        <div class="main__container-img">
            <img class="main-img" src="${welcomeImg}" alt="">
        </div>`
        
    })
}

main()