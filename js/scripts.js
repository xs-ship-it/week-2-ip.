function getDayBorn(){alert("Hi there we will start by providing the day and date born click ok to continue");

  let dateString=prompt("Enter date born in the following format:mm/dd/yyyy");

  let gender=prompt("What is your gender female or male?");
  getNameFromDate(dateString,gender);

}

function getNameFromDate(dateString,gender){
    let dateOfBirth=new Date(dateString);
    let dayOfTheWeek=dateOfBirth.getDay();
    let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    let femalenames=["Akusa","Adwoa","Abenaa","Akua","Yaa","Afura","Afua","Ama"]

    if(gender=="male"){
        document.getElementById('displayNameHere').innerHTML="your Akan Name is" + maleNames[dayOfTheWeek];

    }

    else if(gender=="female"){
        document .getElementById('displayNameHere').innerHTML="your Akan Name is" + femaleNames[dayOfTheWeek]
    }

    else if(gender=="undefined"){alert(error)}
}  