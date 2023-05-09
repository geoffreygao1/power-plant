// plant = {
// water: 0,
// soil: 0,
// light: 0
// }

// Individual Functions 

// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// Function Factory

// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// };

// const changeState = (state, prop) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + 1
//   }
// };

// const changeState = (state, prop, value) => ({
//   ...state,
//   [prop] : (state[prop] || 0) + value
// })

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
};

// +2 : state
// +1 : value => changeState(prop)(value) : function Level1(state) [preloads prop and value]
// BASE : prop  => changeState(prop): function Base(value) [preloads prop]

//Base functions
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");
//Level 1 Functions
const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)


const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

/* function storeState() {
  let currentState = {};
  return function(stateChangeFunction) {
  const newState = stateChangeFunction(currentState);
  currentState = { ...newState };
  return newState;
  }
  } */

const stateControl = storeState();

// const fedPlant = stateControl(blueFood);
// // {soil: 5}
// const plantFedAgain = stateControl(greenFood);
// // {soil:15 }

