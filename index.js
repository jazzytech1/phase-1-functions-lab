// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    if (number > 42){
    return (number - 42)  
} else {
    return (42-number)
}
}
function distanceFromHqInFeet(number) {
 return  distanceFromHqInBlocks(number)*264
}
function distanceTravelledInFeet(start,destination) {
    if (destination > start){
        return ((destination - start)*264)
    } else {
        return ((start-destination)*264)
    }  
}
function calculatesFarePrice(start, destination){
    const feet= distanceTravelledInFeet (start,destination)
    if (feet <= 400) {
        return 0
    }else if (feet > 400 && feet <= 2000) {
        return (feet - 400)*.02
    }else if (feet > 2000 && feet <=2500) {
        return 25
    }else {
        return "cannot travel that far"
    }

}