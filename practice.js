const feetToMile = (feet) => {
    const mile = feet * 0.000189394;
    return mile;
}



// console.log(feetToMile(500));
// console.log(normalFunctionFeetToMile(500));

function normalFunctionFeetToMile (feet) {
    const mile = feet * 0.000189394;
    return mile;
}


function woodCalculator(chairNo, tableNo, bedNo){
    const chairWood = 1;
    const tableWood = 3;
    const bedWood = 5;
    // return ((chairWood*chairNo) + (tableWood*tableNo) + ( bedWood* bedNo));
    const total = (chairWood*chairNo) + (tableWood*tableNo) + ( bedWood* bedNo);
    return total;
}


const totalRequiredWood = woodCalculator(5, 3, 2);
// console.log(totalRequiredWood);


const friend = ['sumon', 'ornob', 'rubi', 'salman', 'sam'];

// console.log(friend[2].length)
const tFrnd = (a,b) => {
    return (a.length - b.length);
}


function tinyFriend (arr) {
    let tinyFr = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i-1].length > arr[i].length) {
            tinyFr = arr[i];
        }
        else{
            tinyFr = arr[i-1];
        }

    }
    return tinyFr;
}

const tFriend = tinyFriend(friend);

// console.log(tFriend);

function brickCalcultor (floorNumber) {
    const firstTen = 15;
    const secondTen = 12;
    const rest = 10;
    
    let bricksNum = 0;
    if(floorNumber <= 10){

        bricksNum = floorNumber * 1000 * firstTen;
        return bricksNum;

    }
    else if(floorNumber <= 20) {
        const firstTenBricks = 15*1000*10;
        const restFloor = floorNumber - 10;
        const secondTenBricks = 12*1000*restFloor;
        bricksNum = firstTenBricks + secondTenBricks;
        return bricksNum;
    }
    else {
        const firstTenBricks = 15*1000*10;
        const secondTenBricks = 12*1000*10;
        const restFloor = floorNumber - 20;
        bricksNum = firstTenBricks + secondTenBricks + (10*1000*restFloor);
        return bricksNum;
    }
}

const totalBricks = brickCalcultor (15);

console.log(totalBricks);