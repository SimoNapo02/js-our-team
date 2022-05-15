// aggiungo le nemacard dei dipendenti

const teamCards = [
    {
        nome: "Wayne Barnett",
        img: "img/wayne-barnett-founder-ceo.jpg",
        posizione: "Founder & CEO",
    },
    {
        nome: "Angela Caroll",
        img: "img/angela-caroll-chief-editor.jpg",
        posizione: "Chief Editor",
    },
    {
        nome: "Walter Gordon",
        img: "img/walter-gordon-office-manager.jpg",
        posizione: "Office Manager",
    },
    {
        nome: "Angela Lopez",
        img: "img/angela-lopez-social-media-manager.jpg",
        posizione: "Social Media Manager",
    },
    {
        nome: "Scott Estrada",
        img: "img/scott-estrada-developer.jpg",
        posizione: "Developer",
    },
    {
        nome: "Barbara Ramos",
        img: "img/barbara-ramos-graphic-designer.jpg",
        posizione: "Graphic Designer",
    },
];

// prendo dall'html gli elemnti necessari
const teamCardsContainer = document.querySelector(".team-container");

// creo un ciclo per creare e stampare le card in html
for (let i = 0; i < teamCards.length; i++) {
    const card = `
    <div class="team-card">
        <div class="card-image">
            <img src="${teamCards[i].img}" alt="${teamCards[i].nome}">
        </div>
        <div class="card-text">
            <h3>${teamCards[i].nome}</h3>
            <p>${teamCards[i].posizione}</p>
        </div>
    </div>`;

    
    teamCardsContainer.innerHTML += card;
}
