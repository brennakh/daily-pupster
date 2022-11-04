//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.message)
      document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


//const sadPupper = document.getElementById("yesButton");
//sadPupper.addEventListener("click", iFeelLikeShit)

//const happyPupper = document.getElementById("noButton");
//happyPupper.addEventListener("click", iDontFeelLikeShit)

function iFeelLikeShit(){
  document.getElementById("result")
  .innerHTML = "Sorry to hear that <3 Here's a cute pupper to cheer you up";
  document.getElementById("pups").style.display='block';
  document.getElementById("morepups")
  .innerHTML = "(refresh for more pups)";
}

function iDontFeelLikeShit(){
  document.getElementById("result").innerHTML = "Nice! this pupster is having a good day too!";
  document.getElementById("pups").style.display='block';
  document.getElementById("morepups")
  .innerHTML = "(refresh for more pups)";
}