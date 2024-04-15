const contacto = () =>{
    const contactoEl = document.querySelector('.contacto')
    contactoEl.innerHTML = `
    <h2 class="contacto-escribime">Escribime</h2>
        <form class="formulario" action="">
            <div class="container__fieldset">
                <div class="fieldset">
                    <label class="form-label" for="name">Nombre</label>
                    <input class="input" type="text" name="name" id="name" placeholder="Tu nombre">
                </div>
                <div class="fieldset">
                    <label class="form-label" for="email">Email</label>
                    <input class="input" type="email" name="email" id="email" placeholder="tu@mail.com">
                </div>
            </div>
            <div class="fieldset">
                <label class="form-label" for="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10" class="textarea"></textarea>
            </div>
            <div class="container-button">
                <button class="button">Enviar <img class="logo-enviar" src="./images/avion-de-papel.png" alt=""></button>
            </div>
        </form>`
        const formEl = document.querySelector('.formulario');
        formEl.addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            const data = {
                to: form.email.value,
                message: form.message.value,
            };
            const response = await fetch('https://apx-api.vercel.app/api/utils/dwf', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data),
            });
            form.reset();
            return response.json();
        });
    
}

contacto()
