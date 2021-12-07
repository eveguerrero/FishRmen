
    fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "171e674b90msh9a40f27ddb32a16p15e6bdjsnfe86444363cc"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    






// const projectURL = 'the-cocktail-db.p.rapidapi.com';
// function getMeme(){
//     fetch(projectURL)
//     .then(function(response){
//         return response.json();
//     })
//     .then(data => console.log(data));
// }





   


    
