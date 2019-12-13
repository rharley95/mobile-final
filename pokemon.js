let baseData;
let challenger;


function pokeApi() {
    //To randomize the pokemon for first half of project
    const random = Math.floor(Math.random() * 150) + 1  ;
    //It is much easier if under a const
    const url = `https://pokeapi.co/api/v2/pokemon/${random}`;
    fetch(url)
        .then( e => {
            // this is from class
            return e.json();
        })
        // promise number 2 this is where I get stuck and seek resources AND IT IS AWESOME BECAUSE NOW I UNDERSTAND that you have to follow the data from the API by documentation to map it out
        .then( data => {
            // let's see if this works.
            baseData = {
                name: data.name.toUpperCase(),
                id: data.id,
                image: data.sprites['front_default'],
                weight: data.weight,
                height: data.height,
                experience: data.base_experience,
                type: data.types.map( type => type.type.name).join(', '),
                ability: data.abilities.map( abilities => abilities.ability.name).join(', ')
            }
            
            display(baseData);
            displayTwo(baseData);
        })

        
};

//this display the pokemon info at the top

const pokemonInfo = document.getElementById('pokemon-info');
 const display = (data) => {
    const html = 
        ` 
        <h1 class="name">${data.id}. ${data.name}</h1>
        <img class="image" src="${data.image}"/>
        </ br>
        <div class="info"> 
            <ul style="list-style: none;">
            <li><span>Pokedex Number:</span>  ${data.id}</li>
            <li><span>Pokemon Type:</span>  ${data.type}</li>
            <li><span>Pokemon Abilites:</span>  ${data.ability}</li>
            <li><span>Pokemon Weight:</span>  ${data.weight}lb</li>
            <li><span>Pokemon Height:</span>  ${data.height}'</li>
            <li><span>Pokemon Experience:</span>  ${data.experience}</li>
            </ul>
        </div>
        `;
    pokemonInfo.innerHTML = html;
 }

pokeApi();


// batlle info here


const battlerTwo = document.getElementById('challenger-one-info');

//dis displays the first pokemon image data above
const displayTwo = (data) => {
    const html = 
        ` 
        <img class="image" src="${data.image}"/>
        `;
    battlerTwo.innerHTML = html;
 }


// Idea #1: to copy the first api function and make it random to challenger and
// based on type to send an alert of who won.

//challenger info against first pokemon


function theChallenger() {
    const challenge = Math.floor(Math.random() * 150) + 1  ;
    const url = `https://pokeapi.co/api/v2/pokemon/${challenge}`;
    fetch(url)
        .then( e => {
            return e.json();
        })
        .then( data => {
            challenger = {
                id: data.id,
                name: data.name.toUpperCase(),
                image: data.sprites['front_default'],
                experience: data.base_experience,
                type: data.types.map( type => type.type.name).join(', '),
            }
            displayBattle(challenger);
        })
       
};

const battlerOne = document.getElementById('challenger-two-info');

// this displays the new challenger info
const displayBattle = (data) => {
   const html = 
       ` 
       <img class="image" src="${data.image}"/>
       </ br>
       <div class="info"> 
           <ul style="list-style: none;">
           <li><span>Pokedex Number:</span>  ${data.name}</li>
           <li><span>Pokemon Type:</span>  ${data.type}</li>
           <li><span>Pokemon Experience:</span>  ${data.experience}</li>
           </ul>
       </div>
       `;
   battlerOne.innerHTML = html;
}


//battle function

function battle(one, two){

    if( one.experience > two.experience){
        return window.alert(`${one.name}, wins the battle! ${two.name} FAINTS!`);
    } else {
       return window.alert(`${two.name}, wins the battle! ${one.name} FAINTS!`);
    }
   
}

theChallenger();

