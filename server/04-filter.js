const words = ['spray', 'limit', 'elite', 'exuberant']
const users = [
    {
      "_id": "642591c822b7712f50f187df",
      "name": "Robles Hayes",
      "gender": "male",
      "company": "HANDSHAKE",
      "email": "robleshayes@handshake.com",
      "phone": "+1 (898) 562-2080",
      "address": "976 Havemeyer Street, Smeltertown, New York, 4074",
      "about": "Esse fugiat est eu pariatur fugiat Lorem laborum Lorem quis dolore laboris. Nostrud occaecat elit dolor minim sunt officia minim eiusmod incididunt dolore officia. Sunt sit veniam proident minim exercitation ea irure nisi.\r\n",
      "registered": "2016-03-09T02:58:08 +03:00",
      "latitude": -77.749031,
      "longitude": 57.264498,
      "tags": [
        "nostrud",
        "anim",
        "nisi",
        "ipsum",
        "labore",
        "mollit",
        "anim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Riggs Meyer"
        },
        {
          "id": 1,
          "name": "Solomon Ortiz"
        },
        {
          "id": 2,
          "name": "Trevino Marshall"
        }
      ],
      "greeting": "Hello, Robles Hayes! You have 10 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "642591c8e9f0dc5e21e41263",
      "name": "Case Lawrence",
      "gender": "male",
      "company": "SUSTENZA",
      "email": "caselawrence@sustenza.com",
      "phone": "+1 (921) 492-3667",
      "address": "744 Ocean Parkway, Axis, Northern Mariana Islands, 9753",
      "about": "Nostrud laboris enim commodo cupidatat nulla commodo amet do ullamco non aliquip est fugiat. Nisi consectetur elit ullamco sit minim minim commodo ad nisi magna mollit amet consectetur ullamco. Aute veniam in dolore veniam tempor adipisicing ut fugiat occaecat velit elit id duis est. Et enim ad ea tempor magna enim laborum fugiat labore mollit.\r\n",
      "registered": "2015-09-15T01:48:37 +03:00",
      "latitude": 7.574838,
      "longitude": -151.973118,
      "tags": [
        "quis",
        "mollit",
        "deserunt",
        "irure",
        "excepteur",
        "irure",
        "exercitation"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Concepcion Bean"
        },
        {
          "id": 1,
          "name": "Shanna Soto"
        },
        {
          "id": 2,
          "name": "Love Phelps"
        }
      ],
      "greeting": "Hello, Case Lawrence! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "642591c8b8fc92fc32f2ed57",
      "name": "Blackwell Charles",
      "gender": "male",
      "company": "OHMNET",
      "email": "blackwellcharles@ohmnet.com",
      "phone": "+1 (820) 452-3703",
      "address": "561 Turnbull Avenue, Trona, Louisiana, 9096",
      "about": "Aliquip ullamco deserunt labore ipsum irure irure. Tempor ullamco officia ipsum excepteur ex proident et eiusmod. Lorem et qui adipisicing anim incididunt officia consequat sit. Irure et qui et nisi do. Sunt esse magna proident voluptate qui velit incididunt aliqua Lorem do voluptate Lorem labore reprehenderit. Sunt Lorem do magna fugiat velit ullamco ipsum cupidatat aute enim. Pariatur irure ex enim et veniam quis ipsum reprehenderit.\r\n",
      "registered": "2018-04-03T12:31:52 +03:00",
      "latitude": 67.031118,
      "longitude": 5.200145,
      "tags": [
        "duis",
        "commodo",
        "minim",
        "ullamco",
        "est",
        "deserunt",
        "dolore"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Daugherty Rowland"
        },
        {
          "id": 1,
          "name": "Grant Perkins"
        },
        {
          "id": 2,
          "name": "Mcknight Dean"
        }
      ],
      "greeting": "Hello, Blackwell Charles! You have 8 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "642591c875f2188cbf03a268",
      "name": "Cooper Mcgowan",
      "gender": "male",
      "company": "SUPPORTAL",
      "email": "coopermcgowan@supportal.com",
      "phone": "+1 (894) 569-2363",
      "address": "276 Albee Square, Mappsville, District Of Columbia, 4177",
      "about": "Nostrud sit commodo ut duis voluptate. Magna officia laborum irure in et magna ut eiusmod. Velit officia cupidatat esse cupidatat sit nulla aliqua enim.\r\n",
      "registered": "2018-12-29T05:10:26 +03:00",
      "latitude": -51.625682,
      "longitude": -66.388025,
      "tags": [
        "non",
        "incididunt",
        "laboris",
        "occaecat",
        "sint",
        "nisi",
        "incididunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Hutchinson Edwards"
        },
        {
          "id": 1,
          "name": "Clarice Mckinney"
        },
        {
          "id": 2,
          "name": "Mcmahon Carson"
        }
      ],
      "greeting": "Hello, Cooper Mcgowan! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "642591c83e761dffa150d0e9",
      "name": "Leon Floyd",
      "gender": "male",
      "company": "EXIAND",
      "email": "leonfloyd@exiand.com",
      "phone": "+1 (839) 428-3031",
      "address": "832 Hinsdale Street, Hoehne, Georgia, 5635",
      "about": "Veniam amet id laborum sint cillum pariatur. Fugiat cillum eu id eiusmod culpa ut dolor id laboris reprehenderit occaecat. Aliquip quis duis excepteur do nisi elit consectetur esse. Elit do amet eu ullamco labore do consequat est esse incididunt qui laboris magna sunt.\r\n",
      "registered": "2015-06-28T04:43:20 +03:00",
      "latitude": -51.907398,
      "longitude": 73.979602,
      "tags": [
        "dolor",
        "qui",
        "duis",
        "sint",
        "ex",
        "sit",
        "irure"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lakeisha Merritt"
        },
        {
          "id": 1,
          "name": "Corina Sherman"
        },
        {
          "id": 2,
          "name": "Juliana Owens"
        }
      ],
      "greeting": "Hello, Leon Floyd! You have 6 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "642591c8c730d9f6b37b4e8a",
      "name": "Petersen King",
      "gender": "male",
      "company": "PURIA",
      "email": "petersenking@puria.com",
      "phone": "+1 (895) 495-3790",
      "address": "555 Brightwater Avenue, Crayne, New Jersey, 3684",
      "about": "Ullamco magna cupidatat incididunt ea nulla mollit consectetur dolor id sit nisi. Aliquip sunt nostrud nisi elit proident ex pariatur nostrud amet aliqua. Eiusmod enim deserunt laborum culpa eu commodo cupidatat aliqua anim qui aliquip veniam. Velit nostrud minim velit Lorem deserunt ex. Irure consectetur cillum irure consectetur proident ex enim excepteur ut quis commodo officia ut.\r\n",
      "registered": "2017-08-01T04:13:44 +04:00",
      "latitude": 34.16656,
      "longitude": 32.675926,
      "tags": [
        "laboris",
        "tempor",
        "qui",
        "sunt",
        "ullamco",
        "voluptate",
        "dolore"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sonia Guthrie"
        },
        {
          "id": 1,
          "name": "Lidia Spence"
        },
        {
          "id": 2,
          "name": "Stout Blake"
        }
      ],
      "greeting": "Hello, Petersen King! You have 4 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "642591c8f0e1053797ddcf6c",
      "name": "Rollins Norris",
      "gender": "female",
      "company": "OLUCORE",
      "email": "rollinsnorris@olucore.com",
      "phone": "+1 (917) 489-2722",
      "address": "736 Kimball Street, Cascades, Puerto Rico, 8833",
      "about": "Anim cupidatat minim reprehenderit nisi irure ea eiusmod aliqua tempor. Nulla veniam velit exercitation ut qui. Aliqua laboris sint adipisicing sunt.\r\n",
      "registered": "2022-08-21T12:15:48 +04:00",
      "latitude": -45.20157,
      "longitude": 41.442889,
      "tags": [
        "irure",
        "nulla",
        "velit",
        "pariatur",
        "ut",
        "sit",
        "magna"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Ratliff Clements"
        },
        {
          "id": 1,
          "name": "Valerie Mcintyre"
        },
        {
          "id": 2,
          "name": "Decker Wilkins"
        }
      ],
      "greeting": "Hello, Rollins Norris! You have 5 unread messages.",
      "favoriteFruit": "banana"
    }
  ]
const recortado = words.filter(word=>word.length >= 6)

const femaleUsers = users.filter(user=>user.gender === 'female')




console.log('original', words)
console.log('nuevo', recortado)
console.log(femaleUsers)