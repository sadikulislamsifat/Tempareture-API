
 const API_KEY = `dcf199382fd384b079dc54e8a9955994`;
 const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
 };

 const displayTemperature = data => {
    // console.log(data.weather[0].main)
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
//     const city = document.getElementById('city');
//     city.innerText = data.name;
//     const clouds = document.getElementById('clouds');
//     clouds.innerText = data.weather[0].main ? data.weather[0].main : 'No Clouds';
       setInnerText('city', data.name);
       setInnerText('clouds', data.weather[0].main);
       document.getElementById('location').value = '';
};

// use function to set inner text
 const setInnerText = (id, text) => {
    const city = document.getElementById(id);
    city.innerText = text;
 }
 const loadSearchValue = () =>{
    const locationinputField = document.getElementById('location');
    const location = locationinputField.value ;
    loadTemperature(location);
    location.value = ' ';
 }
//  document.getElementById('location').addEventListener('keypress', function(e){
//    console.log(e.key)
//    if(e.key === 'Enter'){
//       loadSearchValue();
//    }
//  })

 document.getElementById('search').addEventListener('click', function(){
   loadSearchValue();
   
    
 });

 loadTemperature('dhaka');