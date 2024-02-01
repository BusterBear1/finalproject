const slideShowImage = document.getElementById("slide-show-image");
const quote = document.getElementById("quote");
let currentimage = 0;
let quoteString;
let random;

let imageUrls = ["./photos/puppies1.jpeg" ,
"./photos/puppies2.jpg" ,
"./photos/puppies3.JPG" 
];

function updateImage(){
    if(currentimage >= imageUrls.length){
        currentimage = 0;
    }

    slideShowImage.src = imageUrls[currentimage];
    currentimage++;
    console.log(currentimage);
}

setInterval(updateImage, 3000);

function getUsers() {
    let url = `https://type.fit/api/quotes`;

    fetch(url)
        .then(r => r.json())
        .then(data => {

            //now that we have the data, do everything
            console.log(data);
             random = Math.floor(Math.random() * data.length) +1;
            quoteString = data[random].text;
            quote.innerHTML = quoteString;
        });
}

getUsers();





