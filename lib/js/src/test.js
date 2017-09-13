const z = require('./demo.js');

let carGroups = {
  honda: [
    { root: 'Civic',
      year: '2016',
      type: 'Sedan' },
    { root: 'Odessey',
      year: 'dance',
      type: 'SUV' }
  ],
  toyota: [
    { root: 'Corolla',
      year: '2017',
      mpg: '25' },
    { root: 'Camry',
      year: '2017',
      type: 'sedan' },
    { root: 'Prius',
      electricity: '0',
      year: '2017',
      type: 'car' }
  ]
};
let parkingStruct = '1honda-1toyota-2honda';

const parkingComponents = z.createParkingComponents(carGroups, parkingStruct);

console.log('your result is: ', parkingComponents);

/* RESULT SHOULD LOOK LIKE:

{
  1honda: [
    { root: 'Civic',
      year: '2016',
      type: 'Sedan' },
    { root: 'Odessey',
      year: 'dance',
      type: 'SUV' }
  ],
  1toyota: [
    { root: 'Corolla',
      year: '2017',
      mpg: '25' },
    { root: 'Camry',
      year: '2017',
      type: 'sedan' },
    { root: 'Prius',
      electricity: '0',
      year: '2017',
      type: 'car' }
  ],
  2honda: [
    { root: 'Civic',
      year: '2016',
      type: 'Sedan' },
    { root: 'Odessey',
      year: 'dance',
      type: 'SUV' }
  ],
};

*/
