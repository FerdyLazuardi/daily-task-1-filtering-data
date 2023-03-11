const data = [
    {
      "_id": "640b3da3c185f4043cc27c78",
      "isActive": true,
      "age": 39,
      "eyeColor": "blue",
      "name": "Tracy Goff",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3da32c55002a7125841d",
      "isActive": false,
      "age": 32,
      "eyeColor": "blue",
      "name": "Vickie Mccarty",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3da3753aae032d96d0ea",
      "isActive": true,
      "age": 25,
      "eyeColor": "blue",
      "name": "Monroe Dickson",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3da331b0bdef16251fe9",
      "isActive": true,
      "age": 29,
      "eyeColor": "green",
      "name": "Clarissa Murray",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3da3a6f4d18df8c72f96",
      "isActive": false,
      "age": 22,
      "eyeColor": "blue",
      "name": "Mcfadden Farmer",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3da337bdb17b1529aecb",
      "isActive": true,
      "age": 23,
      "eyeColor": "green",
      "name": "Brigitte Fletcher",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3da345a7e17807844399",
      "isActive": false,
      "age": 37,
      "eyeColor": "brown",
      "name": "Irene Shannon",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3da35099b652bc240fe6",
      "isActive": false,
      "age": 35,
      "eyeColor": "brown",
      "name": "Berger Castaneda",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3da39c93c9d581b3b2e8",
      "isActive": true,
      "age": 28,
      "eyeColor": "brown",
      "name": "Alexandra Knight",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3da3c64abe7b2d7641fd",
      "isActive": true,
      "age": 39,
      "eyeColor": "green",
      "name": "Maryanne Faulkner",
      "gender": "female",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3da313c32420939f302c",
      "isActive": false,
      "age": 25,
      "eyeColor": "brown",
      "name": "Olson Jacobson",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3da3a0241196a3c9d0aa",
      "isActive": false,
      "age": 34,
      "eyeColor": "green",
      "name": "Shannon Peterson",
      "gender": "male",
      "favoriteFruit": "strawberry"
    }
  ]

let hitung = 0;

for (let i=0; i<data.length; i++){
    if (data[i].age > 30){
        hitung++
    }
}

console.log(hitung);