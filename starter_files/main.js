// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);

// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum = 0;
  let avg = 0;
  data.forEach(function(item) {
    sum += item.price;
  })
  avg = sum / data.length;
  return '$' + avg;
}

console.log('question 1', question1());

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let newArr = [];
  data.forEach(function(item) {
    if(item.price > 14 && item.price < 18) {
      newArr.push(item.title);
    }
  })
  return newArr;
}

console.log('question 2', question2());

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let britArr = [];
  let result = '';
  data.forEach(function(item) {
    if(item.currency_code === 'GBP') {
      result = `${ item.title } - $${ item.price } GBP`;
      britArr.push(result);
    }
  })
  return britArr;
}

console.log('question 3', question3());

// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodArr = [];
  data.forEach(function(item) {
    item.materials.forEach(function(material) {
      if(material === 'wood') {
        woodArr.push(item.title);
      }
    })
  })
  return woodArr;
}

console.log('question 4', question4());

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let multiMaterialArr = [];
  data.forEach(function(item) {
    if(item.materials.length >= 8) {
      let newItem = {};
      newItem.title = item.title;
      newItem.matNum = item.materials.length;
      newItem.materials = item.materials;
      multiMaterialArr.push(newItem);
    }
  })
  return multiMaterialArr;
}

console.log('question 5', question5());

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let iMadeArr = [];
  data.forEach(function(item) {
    if(item.who_made === 'i_did') {
      iMadeArr.push(item);
    }
  })
  return iMadeArr.length;
}

console.log('question 6', question6());
