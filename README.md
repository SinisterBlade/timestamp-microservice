Timestamp Microservice
======================

This is a Timestamp Microservice created for a [freeCodeCamp](https://www.freecodecamp.org/) API Project.


API
---
- The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
- A date string is valid if can be successfully parsed by `new Date(date_string)`.
- If the date string is empty the service uses the current timestamp.
- If the date string is valid the api returns a JSON having the structure
    `{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
    e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`
- If the date string is invalid the api returns a JSON having the structure
    `{"error" : "Invalid Date" }`.

