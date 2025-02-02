/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  // ============= Selecting the class cards ============
  const myCard = document.querySelector('.cards');

  
axios.get("https://api.github.com/users/imxande")

.then(response => {
  const usersData = response.data;
  // console.log(usersData);
  const newcard = cardCreator(response.data);
  
  myCard.appendChild(newcard);
});


  // newCard.appendChild(cardCreator(usersData));
// usersData.map((item)=>{
//   console.log(item);
// })

  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
  
  
  
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  '	grifmang',
  '	skyesaj',
  'keveightysev',
  'brittanymae01',
  'msearles25',
  'robby-o',
  'davidhennig'
];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



// card creator function
function cardCreator(obj){
  const newCardDiv = document.createElement('div');
  const new_img = document.createElement('img')
  const newCardInfo = document.createElement('div')
  const nameH3 = document.createElement('h3');
  const paraP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const linkA = document.createElement('a'); 
  const followerP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  

  // add classes
  newCardDiv.classList.add('card');
  newCardInfo.classList.add('card-info');
  nameH3.classList.add('name');
  paraP.classList.add('username');

 // set text content
 new_img.src = obj.avatar_url;
 nameH3.textContent = obj.name;
 paraP.textContent = obj.login;
 locationP.textContent = obj.location;
 profileP.textContent= `Profile: `;
 linkA.setAttribute("href", obj.html_url);
 linkA.textContent = obj.html_url;
 followerP.textContent = `Followers: ${obj.followers}`;
 followingP.textContent = `Following: ${obj.following}`;
 bioP.textContent = obj.bio;
 
 // set up structure
 newCardDiv.appendChild(new_img);
 newCardDiv.appendChild(newCardInfo);
 newCardInfo.appendChild(nameH3);
 newCardInfo.appendChild(paraP);
 newCardInfo.appendChild(locationP);
 newCardInfo.appendChild(profileP);
 profileP.appendChild(linkA);
 newCardInfo.appendChild(followerP);
 newCardInfo.appendChild(followingP);
 newCardInfo.appendChild(bioP);

// adding a bit of style
linkA.style.fontSize = "20px";
 
return newCardDiv;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

followersArray = axios.get("https://api.github.com/users/imxande/followers")
.then(response => {

  response.data.forEach(follower =>
    axios
      .get(`https://api.github.com/users/${follower.login}`)
      .then(response => {
        myCard.appendChild(cardCreator(response.data));
      })
  );
})
