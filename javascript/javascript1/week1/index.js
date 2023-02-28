//age calculator
const yearOfBirth=2000;
let yearFuture= 2040;
let age=yearFuture-yearOfBirth;
console.log("You will be "+ age+ " years old in "+yearFuture);

//dog age calculator
const dogYearOfBirth=2017 ;
let dogYearFuture=2027;
let dogYear=dogYearFuture-dogYearOfBirth;
let shouldShowResultInDogYears=true;
if(shouldShowResultInDogYears){
     dogYear=dogYear*7;
     console.log("Your dog will be " +dogYear +" dog years old in "+ 2027);
}
else{
    dogYear
    console.log("Your dog will be "+dogYear+" human years old in "+dogYearFuture);
}

//house estimator 

const peterHouse = {
    width: 8,
    depth: 10,
    high: 10,
    gardenSizeInM2:100,
    cost:2500000
  };

  const juliaHouse = {
    width: 5,
    depth: 11,
    high: 8,
    gardenSizeInM2:70,
    cost:1000000
  };

  function housePriceCalculator(volumeInMeters,gardenSizeInM2){
   let price=volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
   return price;
}

  let peterHouseVolume=peterHouse.width*peterHouse.depth*peterHouse.high;
  let juliaHouseVolume=juliaHouse.width*juliaHouse.depth*juliaHouse.high;
  let peterHousePrice=housePriceCalculator(peterHouseVolume,peterHouse.gardenSizeInM2);
  let juliaHousePrice=housePriceCalculator(juliaHouseVolume,juliaHouse.gardenSizeInM2);
    
  if(peterHousePrice< peterHouse.cost){
    console.log("Peter is paying too much");
  }
  else{
    console.log("Peter is paying low");
  }

  if(juliaHousePrice<juliaHouse.cost){
    console.log("Julia is paying too much");
  }
  else{
    console.log("Julia is paying low");
  }

//name guess
let firstWords=["Easy", "Awsome","Corporate", "apple","illum","BWM","Mango","smile","funny","shine"];
let secondWords=["Service", "Technology","IT", "Devolpe","Java","JS","Python","Data","stats","Biotech"];
const randomNumber = Math.floor(Math.random() * 10);
let startupName= firstWords[randomNumber]+" "+secondWords[randomNumber];
console.log("The startup: "+startupName+" contains "+startupName.length +" characters");