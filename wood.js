/*
1. chair -->  3 cft
2. table --> 10 cft
3. bed ----> 50 cft

vary quantity
*/ 

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalChairCost = perChairWood * chairQuantity;
    const totalTableCost = perTableWood * tableQuantity;
    const totalBedCost = perBedWood * bedQuantity;

    const totalWoodCost = totalChairCost + totalTableCost + totalBedCost;
    return totalWoodCost;
}

const totalWood = woodCalculator(0, 1, 0);
console.log(totalWood);