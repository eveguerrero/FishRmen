
const fishWatch = "https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export"
    
    const getFish = () => { 
    fetch (fishWatch)
    .then(res => res.json())
    .then(data => (displayFish(data)));
    }

    const form = document.getElementById('fish-review');
    
  form.addEventListener('submit', (e) => {
   e.preventDefault();
    
           const fishObject = {}
           fishObject.name = document.getElementById('new-name').value;
           fishObject.water = document.getElementById('new-water').value;
           fishObject.image = document.getElementById('new-image').value;
           fishObject.rating = document.getElementById('new-rating').value;
           fishObject.comment = document.getElementById('new-comment').value;

           displayFish(fishObject)
       })

       function displayFish(fish) {

         const fishDisplay = document.getElementById('fish-display');

         const image = document.createElement('img');
           image.src = fish.src;
  
           image.addEventListener('click', () => {
               document.querySelector('.detail-image').src = fish.image;
               document.querySelector('.name').innerHTML = fish.name;
               document.querySelector('.water').innerHTML = fish.water;
               document.querySelector('#rating-display').innerHTML = fish.rating;
               document.querySelector('#comment-display').innerHTML = fish.comment;

           }) 
           fishDisplay.appendChild(image);
         }

         function displayFishes(fishes) {
             fishes.forEach(fish => {

                 displayFish(fish);
             });
         }

       document.addEventListener('DOMContentLoaded', getFish)








 




   


    
