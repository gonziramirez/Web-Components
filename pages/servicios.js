const services = () =>{
    const containerProyectos = document.querySelector('.proyectos')
    const containerServicesEl = document.querySelector('.services-container')
    if(containerServicesEl){
        fetch('https://preview.contentful.com/spaces/r6v3uqivrej5/environments/master/entries?access_token=Mgv6FA9Gkr6LS5niW6jtxnGT_queq-m398SW1hUUr3g&content_type=webComponents')
    .then((response=> response.json()))
    .then((data)=> {
        const services = data.items[0].fields.welcomeTitle
        const servicesImg = data.includes.Asset[0].fields.file.url
        containerServicesEl.innerHTML = `
        <div class="services__container-title">
            <h1 class="services-title">Mis</br><span class="services__title-color">${services}</span></h1>
        </div>
        <div class="services__container-img">
            <img class="services-img" src="${servicesImg}" alt="">
        </div>`
    })
    }
    fetch('https://preview.contentful.com/spaces/r6v3uqivrej5/environments/master/entries?access_token=Mgv6FA9Gkr6LS5niW6jtxnGT_queq-m398SW1hUUr3g&content_type=proyectos')
    .then((response=> response.json()))
    .then((data)=> {
        
        const proyectoTitle1 = data.items[0].fields.proyectoTitle

        const proyectoDescription1 = data.items[0].fields.proyectoDescription
      
        const proyectoImg1 = data.includes.Asset[0].fields.file.url

        const proyectoTitle2 = data.items[1].fields.proyectoTitle

        const proyectoDescription2 = data.items[1].fields.proyectoDescription
      
        const proyectoImg2 = data.includes.Asset[1].fields.file.url

        const proyectoTitle3 = data.items[2].fields.proyectoTitle

        const proyectoDescription3 = data.items[2].fields.proyectoDescription
      
        const proyectoImg3 = data.includes.Asset[2].fields.file.url






        containerProyectos.innerHTML = `
        <h2 class="proyectos-title">Mis <span class="proyectos-title-color">servicios</span></h2>
        <div class="proyectos-container">
            <article class="proyecto">
                <img class="proyecto-img" src="${proyectoImg1}" alt="">
                <div class="proyectos-container__texto">
                    <h2 class="proyectos-container__title">${proyectoTitle1}</h2>
                    <p class="proyectos-container__description">${proyectoDescription1}</p>
                </div>
            </article>
            <article class="proyecto">
                <img class="proyecto-img" src="${proyectoImg2}" alt="">
                <div class="proyectos-container__texto">
                    <h2 class="proyectos-container__title">${proyectoTitle2}</h2>
                    <p class="proyectos-container__description">${proyectoDescription2}</p>
                </div>
            </article>
            <article class="proyecto">
                <img class="proyecto-img" src="${proyectoImg3}"" alt="">
                <div class="proyectos-container__texto">
                    <h2 class="proyectos-container__title">${proyectoTitle3}</h2>
                    <p class="proyectos-container__description">${proyectoDescription3}</p>
                </div>
            </article>
        </div>
        `
    })
}

services()