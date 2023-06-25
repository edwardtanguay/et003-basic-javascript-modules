import * as tools from './tools.js';


console.log(frameworks);
shuffle(frameworks);
console.log(frameworks);


// long functions

export const shuffle = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }
};