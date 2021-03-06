const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Trip = require('../models/trip');
const User = require('../models/user');
let tripData = [{
  location: 'Barcelona',
  startDate: 'Thu Apr 15 2018 00:00:00 GMT+0100 (CET)',
  image: 'https://static.barcelona.com/var/plain/storage/images/promociones/blocks/commercial/all_skip_the_line_priority_tickets/9496261-2-eng-GB/all_skip_the_line_priority_tickets_block-selection.jpg',
  days: [{
    date: 'Thu Apr 15 2018 00:00:00 GMT+0100 (CET)',
    places: []
  }]
}];

//sometimes get : MongoError: Use of expired sessions is not permitted message

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create({
    username: 'fabTeam',
    email: 'fab@fab.com',
    password: 'password',
    passwordConfirmation: 'password'
  })
    .then(user => {
      tripData = tripData.map(trip => {
        trip.user = user;
        return trip;
      });

      return Trip.create(tripData);
    })
    .then(trips => console.log(`${trips.length} trip(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});




// {
//   name: 'Big Ben',
//   address: 'Westminster, London SW1A 0AA',
//   location: {
//     lat: 51.500828,
//     lng: -0.124636
//   },
//   image: 'https://cdn.images.express.co.uk/img/dynamic/139/590x/secondary/Big-Ben-1034726.jpg',
//   description: 'The Houses of Parliament and Elizabeth Tower, commonly called Big Ben, are among London\'s most iconic landmarks and must-see London attractions. Technically, Big Ben is the name given to the massive bell inside the clock tower, which weighs more than 13 tons (13,760 kg).  The clock tower looks spectacular at night when the four clock faces are illuminated.',
//   rating: 4
// }, {
//   name: 'London Eye',
//   address: 'Lambeth, London SE1 7PB',
//   location: {
//     lat: 51.503337,
//     lng: -0.119542
//   },
//   image: 'https://cdn.images.express.co.uk/img/dynamic/139/590x/secondary/Big-Ben-1034726.jpg',
//   description: 'The London Eye is a giant Ferris wheel on the South Bank of the River Thames in London. The structure is 443 feet tall and the wheel has a diameter of 394 feet. When it opened to the public in 2000 it was the world\'s tallest Ferris wheel.',
//   rating: 4.5
// }
// {"name":"Birtish Museum","address":"Great Russell St, Bloomsbury, London WC1B 3DG","location":{"lat":51.5194133,"lng":-0.1269566},"image":"https://upload.wikimedia.org/wikipedia/commons/5/5a/British_Museum_Great_Court%2C_London%2C_UK_-_Diliff.jpg","description":"amazing museum","rating":5
//  }
