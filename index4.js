
/* Javascriot code*/

var listOfcountry = [
     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg ",
          countryname: "Oman",
          population: "5,106,626  ",
          reigion: "MiddleEast ",
          capital: "Muscat",
     },
     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg ",
          countryname: "Qatar",
          population: " 2,881,053",
          reigion: " MiddleEast",
          capital: "Doha",
     },
     {
          flag: " https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg ",
          countryname: "SaudiArabia",
          population: " 34,813,871",
          reigion: " MiddleEast",
          capital: "jeddah",
     },
     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg ",
          countryname: "Kuwait",
          population: "4,270,571  ",
          reigion: "MiddleEast ",
          capital: "Al Asimah",
     },

     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg ",
          countryname: "UAE ",
          population: " 3,400,800 ",
          reigion: " middleEast",
          capital: "Adudhabi",
     },
     {
          flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg ",
          countryname: "India ",
          population: "1,380,004,385 ",
          reigion: "Asia ",
          capital: "New Delhi",
     },
     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg ",
          countryname: "Pakistan",
          population: "220,892,340",
          reigion: "South-Central Asia ",
          capital: "Islamabad",
     },

     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg ",
          countryname: "Bangaladesh ",
          population: " 164,689,383",
          reigion: " Asia",
          capital: "Dhaka",
     },

     {
          flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg ",
          countryname: "USA ",
          population: " 331,449,281",
          reigion: " Europe",
          capital: "Washington, D.C.",
     },
     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg ",
          countryname: "Canada ",
          population: "37,742,154 ",
          reigion: " 	Atlantic region",
          capital: "Ottawa",
     },

     {
          flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg ",
          countryname: " United Kingdom ",
          population: "67,363,000",
          reigion: "North West",
          capital: "London",
     },
     {
          flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg ",
          countryname: "Norway ",
          population: "697,549 ",
          reigion: "	Northern Europe ",
          capital: "Oslo",
     },
];

function crateFlag(listOfcountry) {
     const myElement = document.createElement("div");

     myElement.setAttribute("class", "decode");

     document.body.append(myElement);
     myElement.innerHTML = `
  <img  class="flag" src=${listOfcountry.flag} width="200px" height="150px"/>
  <div class="text">
  <h3>${listOfcountry.countryname}</h3>
  <p><b>Population:</b>${listOfcountry.population}</p>
  <p><b>Region:</b>${listOfcountry.reigion}</p>
  <p><b>Capital:</b>${listOfcountry.capital}</P>
  </div>
  </div>
  `;
}

for (var i = 0; i < listOfcountry.length; i++) {
     crateFlag(listOfcountry[i]);
}
