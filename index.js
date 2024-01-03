// Code your solution in this file!
//distance in blocks
function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    const distance = Math.abs(location - hqLocation);
    return distance;
}
const location = 50;
const distance = distanceFromHqInBlocks(location);
console.log(`The distance is ${distance} blocks`)

//Distance from hq in feet
function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
const pickupLocation = 50;
const distanceInFeet = distanceFromHqInFeet(pickupLocation);
console.log(`The distance from Scuber's headquarters is ${distanceInFeet} feet.`);


//distance travelled in feet
function distanceTravelledInFeet(firstBlock, lastBlock) {
    const feetPerBlock = 264;
    //distance in feet
    const distanceInFeet = Math.abs(lastBlock - firstBlock) * feetPerBlock;
    return distanceInFeet;
}

const startBlock = 34;
const endBlock = 38;
const distanceInFeet = distanceTravelledInFeet(firstBlock, lastBlock);
console.log(`The distance is ${distanceInFeet} feet.`);

//Fair price
function calculatesFarePrice(firstBlock, lastBlock) {
    const distanceInFeet = distanceTravelledInFeet(firstBlock, lastBlock);
    const freeDistance = 400;
    const minRideThreshold = 2000;
    const maxRideThreshold = 2500;
    const shortRideRate = 0.02; 
    const longRideFlatFare = 25; 

    if (distanceInFeet <= freeDistance) {
        return 0; 
    } else if (distanceInFeet <= minRideThreshold) 
      return (distanceInFeet - freeDistance) * shortRideRate;
    } else if (distanceInFeet <= maxRideThreshold) {
      return minRideThreshold * shortRideRate;
    } else if (distanceInFeet > maxRideThreshold && distanceInFeet <= maxRideThreshold) {
        return 'cannot travel that far';
    }
const firstBlock = 34;
const lastBlock = 38;
const fare = calculatesFarePrice(firstBlock, lastBlock);
console.log(`The fare for the ride is $${fare.toFixed(2)}`);
