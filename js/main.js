const teamarray = [
    {
        name : "Wayne",
        secondname : "Barnet",
        job : "Ceo CoFounder",
        img : "wayne-barnett-founder-ceo.jpg"
    },

    {
        name : "Angela",
        secondname : "Caroll",
        job : "Chief Editor",
        img : "angela-caroll-chief-editor.jpg",
        
    },

    {
        name : "Walter",
        secondname : "Gordon",
        job : "Office Manager",
        img : "walter-gordon-office-manager.jpg",
        
    },

    {
        name : "Angela",
        secondname : "Lopez",
        job : "Social Media Manager",
        img : "angela-lopez-social-media-manager.jpg",
        
    },
    
    {
        name : "Scott",
        secondname : "Estrada",
        job : "Developer",
        img : "scott-estrada-developer.jpg",
        
    },

    {
        name : "Barbara",
        secondname : "Ramos",
        job : "Graphic Designer",
        img : "barbara-ramos-graphic-designer.jpg",
        
    }
];

const cards = document.getElementById("cards")

for(let i = 0; i < teamarray.length; i++){

    console.log(teamarray[i].name)
    console.log(teamarray[i].secondname)
    console.log(teamarray[i].job)
    console.log(teamarray[i].img)
    
    cards.innerHTML += 
    `<div class="col-4">
        <div class="card m-2" style="width: 18rem;">
        <img src="./img/${teamarray[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${teamarray[i].name} ${teamarray[i].username}</h5>
          <p class="card-text">${teamarray[i].job}</p>
          <a href="#" class="btn btn-primary">Fire</a>
        </div>
        </div>
    </div>`
}
