const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZWl0YW53aGlwIiwiYSI6ImNrOWEzYjU2djAzdDIzaG55b3U5MzNkOHkifQ.2CCNx9dHQx-OVhOXPgHB0g'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtiude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode