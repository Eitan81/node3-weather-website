const request = require('request')

const forecast = (latitude, longtiude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=aec688c1f2550bf097718aa189d64f2a&query=' + latitude + ',' + longtiude 

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out." + " With " + body.current.wind_dir + " " + body.current.wind_speed + "kph wind."
            )
        }
    })
}

module.exports = forecast