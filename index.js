fetch('https://www.fishwatch.gov/developers')
.then(response => response.json())
    .then(data => console.log(data));
    
