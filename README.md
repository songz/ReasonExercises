# Exercise 1

Given an object of car types and a string of car positions, return an object with car positions as keys and car types as values

```javascript
Input:
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

createParkingComponents(carGroups, parkingStruct);

// should return:
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

```
