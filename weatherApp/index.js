const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const iconField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const from = document.querySelector("form");
const input= document.querySelector(".searchField");

 let target = "Kathmandu";
const fetchData = async(target)=>{
    try {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=bbfdfc6f243846918e124735240408&q=${target}`);
            const data = await res.json();
            const {
                current:{temp_c,condition:{text,icon}},
                location:{ name,localtime}}=data;
        console.log(data);
        temperatureField.innerHTML=`${temp_c}&deg;c`;
        cityField.innerHTML=name;
        iconField.src=icon;
        weatherField.innerHTML=text;
        const exactTime=localtime.split(" ")[1];
        const exactDate=localtime.split(" ")[0];
        const currentDay = new Date();
        let newDate=getTodaysDay(currentDay.getDay());
        dateField.innerHTML=`${exactTime} -${newDate} ${exactDate}`;
        // console.log(exactTime,exactDate);
    } catch (error) {
    console.log(error);        
    }
};
fetchData(target);

from.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    if(input.value.trim()=== ""){
        alert("Please enter your location");
    }else{
        target=input.value;
        fetchData(target);
    }
})

function getTodaysDay(num){
    switch(num){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
         return "Tuesday";
         case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}