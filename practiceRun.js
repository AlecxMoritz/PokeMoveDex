// doc elements







// search button
const moveSearch = document.getElementById("moveSearch");

// api stuff
const baseURL = 'https://pokeapi.co/api/v2/move/';
let url;

// console.log("hello World");

// fetch(url)
// .then(response => {
//     return response.json();
// }).then(moveData => {
//     console.log(moveData);
// })

// hide info cards






function searchMove() {
    let moveName = moveSearch.value;
    if (moveName.trim() ==""){
        alert("You haven't enerted a move yet!")
    } else {
        url = baseURL + moveName.split(" ").join("-").toLowerCase();
        console.log(url);
    fetch(url) // running a fetch out to the api with the new concated url
.then(response => { // response is the promise we create to represent the data
    return response.json() // converts that response into a json object
}).then(moveData => { // and theeeeeen
    popPage(moveData);  // log the data
})

}
}

function popPage(moveData){
    document.getElementById("starters").style.display = "none";
    document.getElementById("moveData").style.display = "flex";

    console.log(moveData);
    console.log("Move Details");

    console.log("Name: ", moveData.names[2].name);
    document.getElementById("moveTitle").innerHTML = moveData.names[2].name;

    console.log("English Flavor text: ", moveData.flavor_text_entries[2].flavor_text);
    document.getElementById("flavorText").innerHTML = moveData.flavor_text_entries[2].flavor_text;

    console.log("Move Type: ", moveData.type.name);
    document.getElementById("moveType").innerHTML = moveData.type.name;


    console.log("Damage class: ", moveData.damage_class.name);
    document.getElementById("damageClass").innerHTML = moveData.damage_class.name;

    console.log("Accuracy: ", moveData.accuracy);
    document.getElementById("moveAcc").innerHTML = moveData.accuracy;

    console.log("Power: ", moveData.power);
    document.getElementById("movePower").innerHTML = moveData.power;

    console.log("Power Points: ", moveData.pp);
    document.getElementById("movePP").innerHTML = moveData.pp;

    console.log("Priority: ", moveData.priority);
    document.getElementById("movePriority").innerHTML = moveData.priority;



}

