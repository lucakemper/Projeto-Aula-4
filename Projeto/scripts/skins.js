const armas = [
    ['Vandal', 'https://fpschampion.com/wp-content/uploads/2022/07/Origin-1-1024x479.jpg', 200],
    ['Phantom', 'https://portaldogamer.com.br/wp-content/uploads/2021/05/phanton-ion-valorant.jpg', 210],
    ['Marshall', 'https://files.bo3.gg/uploads/image/33939/image/webp-5127b977004324b7f4bbe403388a993f.webp', 205],
];

armas.map(cadaArma => {
    document.getElementById("armas").innerHTML += ` 
        <div class="arma">
            <img src="${cadaArma[1]}" alt="${cadaArma[0]}">
            <div class="doce">
                <h1>${cadaArma[0]}</h1>
                <p>Valor: ${cadaArma[2]}</p>
                <button type="button" style="padding: 5px 15px; cursor: pointer;">Comprar</button>
            </div>
        </div>
    `;
});