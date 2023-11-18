
const app = document.querySelector('#listaPokemon');

let URL ="https://pokeapi.co/api/v2/pokemon/";


for (let i = 1; i <= 151; i++){
    fetch (URL + i)
        .then((res) => res.json())
        .then(data => mostrarPokemon(data));
}


function mostrarPokemon(poke){
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML= ` 
    
    <p class="pokemon-id-back"></p>
    <div class="pokemon-imagen">
     <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}" >
    </div>
    <div class="nombre-contendor">
     <p class="pokemon-id"># ${poke.id}</p>
     <h2 class="pokempon-nombre">${poke.name}</h2>
     <div class="pokemont-tipos">
       <p class="electric tipo"></p>tipo
       <p class="fnghti tipo">tipo</p>
     </div>
     <div class="pokemont-stats">
       <p class="stat">${poke.height}m</p>
       <p class="stat">${poke.weight}Kg</p>
     </div>

    `;
    listaPokemon.append(div);
    
}



