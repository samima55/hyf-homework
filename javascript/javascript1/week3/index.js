
// removing name 
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala"
  ];
  const nameToRemove = "Ahmad";
  function nameRemoving(name,names){
      const index= names.indexOf(name);
      names.splice(index,1);
   }
   
  nameRemoving(nameToRemove,names);
  console.log(names);


  //When will we be there??

  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function calculateTravelTime(travelInformation){
     const duration= travelInformation.destinationDistance/travelInformation.speed;
     const hours= Math.floor(duration);
     const minutes= Math.floor((duration-hours)*60);
     return `${hours} hours and ${minutes} minutes`;
  
    }
  
  const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes


  //Series duration of my life

  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];


  function logOutSeriesText(seriesDurations) {
       let totalPercentage=0
    for(let i=0; i<seriesDurations.length; i++){
      let individualTime =seriesDurations[i].days
      +seriesDurations[i].hours/24
      +seriesDurations[i].minutes/1440;
      let percentage=(individualTime/365)/(80);
      totalPercentage +=percentage;
      console.log(seriesDurations[i].title +" took " +percentage.toFixed(5) +" of my life");
    }
    console.log("In total that is "+ totalPercentage.toFixed(5) +"of my life");
  }
  
  logOutSeriesText(seriesDurations); 

  //Step 3: Smart-ease - Back to the basics!

const notes=[];

function saveNote(content,id){
  const obj= {
    content:content,
    id: id
  }
  notes.push(obj);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id){
  for(let i=0; i<notes.length; i++){
     if(notes[i].id===id){
     return notes[i];
    }
  }
}
const firstNote = getNote(1);
console.log(firstNote);


function logOutNotesFormatted(){
    for(const item of notes){
        console.log(`\n note with id : ${item.id}, has following note: 
         ${item.content}
        `);
    }
}

logOutNotesFormatted();


//CactusIO-interactive (Smart phone usage app) optional


let activities =[];
function addActivity(date,activity, duration){
 activities.push({date:date,activity:activity, duration:duration });
}

addActivity("23/7-18", "Youtube", 30);

function showStatus(activities,limit){
    let timeSpent=0;
    const numerOfactivities= activities.length;
    for(const item of activities){
     timeSpent+=item.duration;
    }
    console.log(`You have added ${numerOfactivities} 
    activities. They amount to ${timeSpent} min. of usage`);
    if (timeSpent>= limit) {
        console.log('You have reached your limit, no more smartphoning for you!');
      }
}

