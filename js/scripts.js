// example plant = {
// water: 0,
// soil: 0,
// light: 0
//}

const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

