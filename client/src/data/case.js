const fakeData = [
  {
    "_id": "5896db472bc6c5a1b8a16958",
    "deceased": {
      "name": "Duke",
      "sureName": "Cote",
      "address": {
        "line1": "443 Grattan Street",
        "city": "Williamson",
        "postcode": 9430,
        "country": "Oregon"
      },
      "dob": "1959-05-31 10:22:09",
      "martialStatus": "single"
    },
    "customer": {
      "name": "Vargas",
      "sureName": "Cannon",
      "email": "vargascannon@zilla.com",
      "phone": "(807) 543-3562",
      "contactWay": "phone",
      "timeToCall": "2016-10-27 05:53:30"
    },
    "funeral": {
      "type": "Burial"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2014-10-07 05:01:23",
    "dateModifed": "2016-04-06 08:33:02",
    "isActive": false
  },
  {
    "_id": "5896db47d33b6ce9bc43a22d",
    "deceased": {
      "name": "Hernandez",
      "sureName": "Hines",
      "address": {
        "line1": "768 Autumn Avenue",
        "city": "Freetown",
        "postcode": 8011,
        "country": "Nevada"
      },
      "dob": "1984-03-01 04:10:08",
      "martialStatus": "single"
    },
    "customer": {
      "name": "Marta",
      "sureName": "Stanley",
      "email": "martastanley@zilla.com",
      "phone": "(828) 512-3944",
      "contactWay": "phone",
      "timeToCall": "2016-04-17 04:15:17"
    },
    "funeral": {
      "type": "Tree"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2016-10-16 05:14:04",
    "dateModifed": "2016-10-07 06:06:42",
    "isActive": true
  },
  {
    "_id": "5896db4772972d47d2b7a143",
    "deceased": {
      "name": "Barrera",
      "sureName": "Knapp",
      "address": {
        "line1": "575 Lacon Court",
        "city": "Westboro",
        "postcode": 3994,
        "country": "Northern Mariana Islands"
      },
      "dob": "2009-01-13 10:21:56",
      "martialStatus": "single"
    },
    "customer": {
      "name": "Moore",
      "sureName": "Collier",
      "email": "moorecollier@zilla.com",
      "phone": "(901) 407-3768",
      "contactWay": "phone",
      "timeToCall": "2016-04-06 01:49:37"
    },
    "funeral": {
      "type": "Cremation"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2011-03-08 12:05:55",
    "dateModifed": "2015-07-08 10:10:11",
    "isActive": false
  },
  {
    "_id": "5896db4772b69fcfe97f127c",
    "deceased": {
      "name": "Melton",
      "sureName": "Oneal",
      "address": {
        "line1": "913 Cortelyou Road",
        "city": "Ripley",
        "postcode": 9073,
        "country": "Arkansas"
      },
      "dob": "1985-05-09 10:38:50",
      "martialStatus": "married"
    },
    "customer": {
      "name": "Sparks",
      "sureName": "Salazar",
      "email": "sparkssalazar@zilla.com",
      "phone": "(920) 598-2349",
      "contactWay": "tel",
      "timeToCall": "2016-12-17 09:49:29"
    },
    "funeral": {
      "type": "Burial"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2011-10-03 06:46:38",
    "dateModifed": "2016-05-09 04:11:21",
    "isActive": false
  },
  {
    "_id": "5896db47774632a284834e41",
    "deceased": {
      "name": "Noemi",
      "sureName": "Copeland",
      "address": {
        "line1": "212 Degraw Street",
        "city": "Lowell",
        "postcode": 2538,
        "country": "Ohio"
      },
      "dob": "1993-11-21 02:28:34",
      "martialStatus": "divorced"
    },
    "customer": {
      "name": "Danielle",
      "sureName": "Pate",
      "email": "daniellepate@zilla.com",
      "phone": "(880) 448-2741",
      "contactWay": "post",
      "timeToCall": "2016-10-24 11:00:01"
    },
    "funeral": {
      "type": "Tree"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2016-06-28 11:31:25",
    "dateModifed": "2015-12-29 09:23:21",
    "isActive": false
  },
  {
    "_id": "5896db47a247bcf8ce0c993f",
    "deceased": {
      "name": "Jackson",
      "sureName": "Bates",
      "address": {
        "line1": "838 Kansas Place",
        "city": "Leyner",
        "postcode": 4922,
        "country": "South Carolina"
      },
      "dob": "2010-10-27 11:32:23",
      "martialStatus": "divorced"
    },
    "customer": {
      "name": "Mcbride",
      "sureName": "Morse",
      "email": "mcbridemorse@zilla.com",
      "phone": "(881) 594-2258",
      "contactWay": "post",
      "timeToCall": "2016-02-10 09:26:20"
    },
    "funeral": {
      "type": "Sea"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2015-09-25 03:47:39",
    "dateModifed": "2016-03-18 10:37:26",
    "isActive": true
  },
  {
    "_id": "5896db47aaa2133f05b6f3ca",
    "deceased": {
      "name": "Shaw",
      "sureName": "Warren",
      "address": {
        "line1": "424 President Street",
        "city": "Helen",
        "postcode": 8293,
        "country": "Puerto Rico"
      },
      "dob": "1929-08-10 01:15:12",
      "martialStatus": "single"
    },
    "customer": {
      "name": "Tania",
      "sureName": "Hicks",
      "email": "taniahicks@zilla.com",
      "phone": "(817) 412-2910",
      "contactWay": "post",
      "timeToCall": "2016-08-25 05:32:23"
    },
    "funeral": {
      "type": "Burial"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2013-05-15 08:00:14",
    "dateModifed": "2016-12-28 10:42:49",
    "isActive": false
  },
  {
    "_id": "5896db47c77af2b4e1e412c7",
    "deceased": {
      "name": "Audrey",
      "sureName": "Goodwin",
      "address": {
        "line1": "264 Reed Street",
        "city": "Welda",
        "postcode": 9306,
        "country": "Maryland"
      },
      "dob": "1950-08-24 11:35:02",
      "martialStatus": "divorced"
    },
    "customer": {
      "name": "Josefa",
      "sureName": "Guthrie",
      "email": "josefaguthrie@zilla.com",
      "phone": "(843) 546-2126",
      "contactWay": "phone",
      "timeToCall": "2016-10-05 06:06:23"
    },
    "funeral": {
      "type": "Burial"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2012-10-22 11:07:13",
    "dateModifed": "2017-01-26 04:56:49",
    "isActive": false
  },
  {
    "_id": "5896db47072be7a0c26a90be",
    "deceased": {
      "name": "Stacey",
      "sureName": "Carney",
      "address": {
        "line1": "548 McKinley Avenue",
        "city": "Epworth",
        "postcode": 808,
        "country": "Tennessee"
      },
      "dob": "2008-10-24 07:49:23",
      "martialStatus": "married"
    },
    "customer": {
      "name": "Jami",
      "sureName": "Roth",
      "email": "jamiroth@zilla.com",
      "phone": "(879) 526-2523",
      "contactWay": "tel",
      "timeToCall": "2016-09-27 08:14:26"
    },
    "funeral": {
      "type": "Cremation"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2015-09-22 05:03:53",
    "dateModifed": "2015-01-08 06:48:57",
    "isActive": false
  },
  {
    "_id": "5896db4798c7598bfe9a4bd6",
    "deceased": {
      "name": "Hester",
      "sureName": "Frazier",
      "address": {
        "line1": "941 Cornelia Street",
        "city": "Murillo",
        "postcode": 6039,
        "country": "Rhode Island"
      },
      "dob": "1949-11-24 07:47:13",
      "martialStatus": "married"
    },
    "customer": {
      "name": "Kristina",
      "sureName": "Houston",
      "email": "kristinahouston@zilla.com",
      "phone": "(920) 582-3135",
      "contactWay": "phone",
      "timeToCall": "2016-12-24 07:10:12"
    },
    "funeral": {
      "type": "Sea"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2011-01-13 01:03:26",
    "dateModifed": "2015-03-14 11:00:49",
    "isActive": true
  },
  {
    "_id": "5896db476f17174bd70b80a5",
    "deceased": {
      "name": "Marissa",
      "sureName": "Bartlett",
      "address": {
        "line1": "443 Canal Avenue",
        "city": "Madaket",
        "postcode": 2842,
        "country": "Mississippi"
      },
      "dob": "2011-09-04 04:06:23",
      "martialStatus": "single"
    },
    "customer": {
      "name": "Araceli",
      "sureName": "Rollins",
      "email": "aracelirollins@zilla.com",
      "phone": "(903) 462-2259",
      "contactWay": "tel",
      "timeToCall": "2016-03-23 05:02:06"
    },
    "funeral": {
      "type": "Tree"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2015-04-03 08:08:13",
    "dateModifed": "2016-12-15 10:33:18",
    "isActive": true
  },
  {
    "_id": "5896db475fb1108c54965408",
    "deceased": {
      "name": "Delia",
      "sureName": "Middleton",
      "address": {
        "line1": "561 Harkness Avenue",
        "city": "Watchtower",
        "postcode": 9805,
        "country": "North Carolina"
      },
      "dob": "1959-01-14 07:10:41",
      "martialStatus": "married"
    },
    "customer": {
      "name": "Key",
      "sureName": "Harding",
      "email": "keyharding@zilla.com",
      "phone": "(872) 494-2153",
      "contactWay": "post",
      "timeToCall": "2016-06-24 10:05:48"
    },
    "funeral": {
      "type": "Sea"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2016-01-10 07:22:12",
    "dateModifed": "2015-10-03 02:53:44",
    "isActive": true
  },
  {
    "_id": "5896db477fcb934c5d6a92ef",
    "deceased": {
      "name": "Madelyn",
      "sureName": "Golden",
      "address": {
        "line1": "590 Wyckoff Avenue",
        "city": "Topanga",
        "postcode": 7879,
        "country": "North Dakota"
      },
      "dob": "1970-08-12 02:47:28",
      "martialStatus": "married"
    },
    "customer": {
      "name": "Henry",
      "sureName": "Raymond",
      "email": "henryraymond@zilla.com",
      "phone": "(807) 429-2292",
      "contactWay": "phone",
      "timeToCall": "2016-07-19 02:46:09"
    },
    "funeral": {
      "type": "Burial"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2011-03-30 09:23:28",
    "dateModifed": "2016-10-04 03:40:59",
    "isActive": false
  },
  {
    "_id": "5896db4724cd13ec0b2c86ba",
    "deceased": {
      "name": "Leanne",
      "sureName": "Jefferson",
      "address": {
        "line1": "130 Cox Place",
        "city": "Alden",
        "postcode": 3940,
        "country": "Idaho"
      },
      "dob": "1946-02-24 04:45:46",
      "martialStatus": "married"
    },
    "customer": {
      "name": "Talley",
      "sureName": "Reed",
      "email": "talleyreed@zilla.com",
      "phone": "(972) 477-2882",
      "contactWay": "phone",
      "timeToCall": "2016-03-01 03:57:10"
    },
    "funeral": {
      "type": "Burial"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2014-01-29 01:45:58",
    "dateModifed": "2015-04-04 10:53:15",
    "isActive": false
  },
  {
    "_id": "5896db47c27592b989249692",
    "deceased": {
      "name": "Roy",
      "sureName": "Calhoun",
      "address": {
        "line1": "341 Holmes Lane",
        "city": "Worcester",
        "postcode": 7387,
        "country": "New Jersey"
      },
      "dob": "1958-08-29 03:43:23",
      "martialStatus": "single"
    },
    "customer": {
      "name": "Buckner",
      "sureName": "Parker",
      "email": "bucknerparker@zilla.com",
      "phone": "(906) 524-3941",
      "contactWay": "post",
      "timeToCall": "2016-07-16 06:18:12"
    },
    "funeral": {
      "type": "Sea"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2014-09-23 09:23:23",
    "dateModifed": "2015-03-22 08:42:38",
    "isActive": true
  },
  {
    "_id": "5896db47d489821c682836dd",
    "deceased": {
      "name": "Gomez",
      "sureName": "Farmer",
      "address": {
        "line1": "156 Ocean Court",
        "city": "Kylertown",
        "postcode": 4824,
        "country": "Florida"
      },
      "dob": "1964-12-26 03:35:26",
      "martialStatus": "single"
    },
    "customer": {
      "name": "May",
      "sureName": "Skinner",
      "email": "mayskinner@zilla.com",
      "phone": "(828) 417-2930",
      "contactWay": "tel",
      "timeToCall": "2016-02-13 03:54:43"
    },
    "funeral": {
      "type": "Sea"
    },
    "extra": {
      "dobCertificateUrl": "",
      "MaritalCertificateUrl": ""
    },
    "dateCreated": "2013-06-07 04:27:37",
    "dateModifed": "2016-06-25 06:19:56",
    "isActive": false
  }
];
export default fakeData;
