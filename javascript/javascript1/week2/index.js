 
 // full name function
 function getFullname(firstName, surname,useFormalName=false,gender){
    if(useFormalName){
        if(gender==="female"){
          return "Queen " +firstName+" "+surname;
        }
        else{
            return "Lord " +firstName+" "+surname;
        }
    }
    else
    return firstName+" "+surname;
 }
  const fullname1={
    firstName:"Benjamin",
    surname: "Hughes",
    useFormalName: true,
    gender: "male"
  }
  const fullname2={
    firstName :"Alexander",
    surname :"shah",
    useFormalName: true,
    gender: "female"
  }
 console.log(getFullname(fullname1.firstName,fullname1.surname,fullname1.useFormalName,fullname1.gender));
 console.log(getFullname(fullname2.firstName,fullname2.surname,fullname1.gender));

//event application 

function getEventWeekday(DaysToEvent){
  const date= new Date();
  let TodayDate =date.getDay();
    if(DaysToEvent>7){
    while(DaysToEvent>7){
      DaysToEvent=(DaysToEvent%7);
       TodayDate= TodayDate+DaysToEvent;
    }
   }
  const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
  ]
   return weekdays[TodayDate];
}
console.log(getEventWeekday(9)); 

// weather 
function getclothesBasedOnWeather(temprature){
    if(temprature<20 && temprature>=10 ){
      return "spring weather you can weaar a rain jacket"}
    else if(temprature<10 && temprature>=0 ){
        return "weather is cold you need wear warm clothes"}
   else if(temprature<0 && temprature>=-20 ){
    return "Its freezing, wear double winter jackey"}    

    else if(temprature<40 && temprature>=20 ){
      return "summer clothes "}
}
const clothesToWear =getclothesBasedOnWeather (18);
console.log(clothesToWear);

//stduent manager part  

const class07Students = [];

function getNumberOfStudents() {
  return class07Students.length;
}


function addStudentToClass(studentName) {
 let capacity= getNumberOfStudents();
    if(capacity>6 && studentName !=="Queen"){
  console.log("Cannot add more students to class 07");
  
  }
  else if (class07Students.includes(studentName) && studentName !=="Queen"){
    console.log(`Student ${studentName} is already in the class`);
    
  }
   else{
      class07Students.push(studentName);
     console.log(`${studentName} added to the class 07`);
     
   }
}

console.log(addStudentToClass("A"));
console.log(addStudentToClass("B"));
console.log(addStudentToClass("C"));
console.log(addStudentToClass("D"));
console.log(addStudentToClass("A"));
console.log(addStudentToClass("E"));
console.log(addStudentToClass("F"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("G"));
console.log(addStudentToClass("Queen"));

//candy helper optional 

const candyPriceTable={
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewing_gum: 0.03,
 };
 let boughtCandyPrices=[];
 let amountToSpend = Math.random() * 100;
 let moneySpendonCandy;

function addCandy(candyType,weight){
    let customerCandyPrice=0
     switch(candyType){
       case "sweet":
        customerCandyPrice=weight*candyPriceTable.sweet;
       boughtCandyPrices.push(customerCandyPrice);
       console.log(`Tyof candy: sweet , price: ${customerCandyPrice}`);
      
       case "chocolate":
        customerCandyPrice=weight*candyPriceTable.chocolate;
        boughtCandyPrices.push(customerCandyPrice);
        console.log(`Tyof candy:chocolate  , price: ${customerCandyPrice}`)
      case "toffee":
        customerCandyPrice= weight*candyPriceTable.toffee
          boughtCandyPrices.push(customerCandyPrice);
          console.log(`Tyof candy: toffee , price: ${customerCandyPrice}`)
      case "chewing_gum":
        customerCandyPrice=weight*candyPriceTable.chewing_gum;
        boughtCandyPrices.push(customerCandyPrice);
        console.log(`Tyof candy:chewing_gum  , price: ${customerCandyPrice}`)
     }
    
} 
  function calculateMoneySpendonCandy(boughtCandyPrices){
    for(i=0; i<boughtCandyPrices.length; i++){
     moneySpendonCandy=+boughtCandyPrices[i];
    }
    return moneySpendonCandy;
  }



 function canBuyMoreCandy(){
  console.log(`moeny that has been spend on candy ${calculateMoneySpendonCandy(boughtCandyPrices)}`);
  console.log(`money you have to spend ${amountToSpend}`);
   if(calculateMoneySpendonCandy()< amountToSpend){
    return true;
   }
    else return false ;
  }

addCandy("sweet", 20);

