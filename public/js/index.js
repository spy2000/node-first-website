const day = document.getElementById('day')
const time = document.getElementById('time')
const perieds = document.getElementById('perieds')
const showData = document.getElementById('showData')
const temp = document.getElementById('curr-temp')
const monsoon = document.getElementById('monsoon')
const city = document.getElementById('city')
const inputVal = document.getElementById('inputVal')



const date = new Date();
const weekDays = ["sunday","monday","tuesday","thousday","friday","satuday"]
const getDay = date.getDay()
const currDay = weekDays[getDay]
//geting time
let hours = date.getHours()
const mins = date.getMinutes()
let peried = "AM"
if(hours > 11){
    peried = "PM"
    if(hours > 12){
        hours -= 12
    }
}
day.innerText = currDay
time.innerText = `${hours}:${mins}`
perieds.innerText =`${peried}`;
// console.log(currDay);

const getData = async () => { 
    const val = inputVal.value
    if(val === ""){
        city.innerText = `please enter city name first`
    }
    else{
    api = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=f9f5e814c4b74dd0fb47c66189865e1f`
    try{
        const data = await fetch(api);
        const objData = await data.json()
        const ArryData = [objData]
        // console.log(ArryData);
        temp.innerText = `${ArryData[0].main.temp} °c`;
        city.innerText = `${ArryData[0].sys.country},${ArryData[0].name}`
        // monsoon.innerText =  ArryData[0].weather[0].main
        inputVal.value="";
        const show = ArryData[0].weather[0].main;
        console.log(show);
        if(show === "Clouds"){
            monsoon.innerHTML = `<i class="fas fa-cloud"></i>`
        }
        else if(show === "Haze"){
            monsoon.innerHTML = `<i class="fas fa-sun-haze"></i>`
        }
        else if(show == "sun"){
            monsoon.innerHTML = `<i class="fas fa-sun"></i>`
        }
        else if(show == "Drizzle"){
            monsoon.innerHTML = `<i class="fas fa-cloud-showers-heavy"></i>`
        }
        else{
            monsoon.innerHTML = `<i class="fas fa-sun"></i>`

        }
        
    }
    catch(err){
        console.log(err);
        temp.innerText = "";
        city.innerText="please enter proper city name";
        monsoon.innerText= "";
        inputVal.value="";

    }
}
}


showData.addEventListener('click',getData)