// Ex 1. Add the .blue CSS class to the th elements

const thElements = document.querySelectorAll('th');

thElements.forEach((element) => {
  element.classList.add('blue');
  //element.className = 'blue'
});

// Ex 2. Count the number of table body rows there are
//       Make the function teamCount() return it
const teamCount = () => {
  // TODO: return the number of teams
  const trElements = document.querySelectorAll('tr');
  return trElements.length -1;
};

// Ex 3. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team (Spezia) should have 39 points.

const list = document.querySelector('tbody');
list.insertAdjacentHTML('beforeend', '<tr><td>15</td><td>Spezia</td><td>39</td></tr>');

// Ex 4. Write some code to sum all points given to all teams
//       Make the function summarizePoints() return it
const summarizePoints = () => {
   const tdScores = document.querySelectorAll('tbody tr td:last-child');
   let total = 0;

   tdScores.forEach(tdScore => {
     total += parseInt(tdScore.innerText);
   })
   return total;
};


// Ex 5. Change the background color of all `<th>` cells to #DDF4FF

const thEl = document.querySelectorAll('th');

thEl.forEach((element) => {
  element.style.backgroundColor = "#DDF4FF";
});



// calls of functions you created on top (DO NOT REMOVE)
console.log(`team count: ${teamCount()}`);
console.log(`summarize points: ${summarizePoints()}`);
