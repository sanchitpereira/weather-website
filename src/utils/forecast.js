const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+encodeURIComponent(latitude)+'&lon='+longitude+'&appid=65448da134a52341bd0390d41b7abc89'

    request({ url, json:true }, ( error, {body})=>{

        if (error){
            callback('Unable to connect to loaction services', undefined)
        }else if(body.error === 0){
            callback('Either latitude or longitude is not proper', undefined)
        }else {
            callback(undefined, body.daily[0].weather[0].description +" It is currently "+ body.current.temp + " . There is a " + body.current.dew_point)
        
        }  
    })
    

}


module.exports = forecast