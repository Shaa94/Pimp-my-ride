let trip = "Perdita 8 10 8";
let trip2 = "Anita 16 3 7";

let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7",
    "Cruella 24 5 21"
]

function tripToParse (voyage){
    let arrayVoyage = voyage.split(" ");
    return arrayVoyage
}

function parseTrips (vols) {
    let vol
    let sac = []
    for(let i = 0; i < vols.length; i++){
        vol = tripToParse(vols[i]);
        sac.push(vol);
    }
    return sac
}
//console.log(parseTrips(tripsToParse))

function getTripsPrice(voyages){
    let sac2 = parseTrips(voyages);
    let prix = 0
    for(let i = 0; i < sac2.length; i++){
        let trip = sac2[i]
        prix = prix + (parseInt(trip[3]))
        console.log(trip[3]);
    }
console.log(sac2);
return prix 
}
let somme = getTripsPrice(tripsToParse);
console.log(somme);