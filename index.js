//HQ BLOCKS
//calculates distances below 42nd street
function distanceFromHqInBlocks (someValue) {
    if (someValue<42){
        return(42-someValue);
    }
}

//HQ FEET
//calculates distances below 42nd street
function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks (someValue)*264;
}

//TRAVELFEET
//returns the distance travelled in feet 
function distanceTravelledInFeet(a,b) {
    if (b>a){
        return((b-a)*264);
    }
//returns a distance in feet
    else 
    return ((a-b*264));
}

//FAREPRICE
//gives customers a free sample
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance<= 400){
        return 0;
    }
}
//charges 2 cent per foot..
if (distance>= 400 && distance<= 2000){
    return (distance-400)* 0.02;
}
else if (distance>= 2000 && distance<= 2500){
    return 25;
}
else if (distance > 2500){
    return "cannot travel that far";
}





