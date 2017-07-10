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
  for(let i=0; i<data.length; i++) {
    sum += data[i].price;
  }
  avg = sum / data.length;
  return '$' + avg;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let newArr = [];
  for(let i=0; i<data.length; i++) {
    if(data[i].price > 14 && data[i].price < 18) {
      newArr.push(data[i].title);
    }
  }
  return newArr;
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let britArr = [];
  for(let i=0; i<data.length; i++) {
    if(data[i].currency_code === 'GBP') {
      britArr.push(data[i].title);
    }
  }
  return britArr;
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodArr = [];
  for(let i=0; i<data.length; i++) {
    for(let j=0; j<data[i].materials.length; j++) {
      if(data[i].materials[j] === 'wood') {
        woodArr.push(data[i].title);
      }
    }
  }
  return woodArr;
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let multiMaterialArr = [];
  for(let i=0; i<data.length; i++) {
    if(data[i].materials.length >= 8) {
      let newItem = {};
      newItem.title = data[i].title;
      newItem.matNum = data[i].materials.length;
      newItem.materials = data[i].materials;
      multiMaterialArr.push(newItem);
    }
  }
  return multiMaterialArr;
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let iMadeArr = [];
  for(let i=0; i<data.length; i++) {
    if(data[i].who_made === 'i_did') {
      iMadeArr.push(data[i]);
    }
  }
  return iMadeArr.length;
}
