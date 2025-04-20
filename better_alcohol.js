elements.alcohol.viscosity = 1.144;
elements.water.viscosity = 1; //define reference viscosity of 1
elements.wine = {
  color: "#410100",
  behavior: behaviors.LIQUID,
  reactions: {
    virus: { elem2: null },
    plague: { elem2: null },
  },
  viscosity: 2.23, //EXERCISE 8: VISCOSITY OF PURE LIQUIDS AND SOLUTIONS
  //tempHigh: 97,
  burn: 20,
  burnTime: 60,
  burnInto: "alcohol",
  fireColor: ["#80ACF0", "#96CDFE", "#bee6d4"],
  category: "alcohol",
  state: "liquid",
  density: 803,
  stain: -0.25,
};

elements.alcohol = {
  color: "#fffcfc",
  behavior: behaviors.LIQUID,
  reactions: {
    grape: { elem1: "wine", elem2: "wine" },
  },
  stateHigh: "alcoholGas",
  tempHigh: 257,
  category: "alcohol",
};

elements.alcoholGas = {
  color: "#fffcfc",
  behavior: behaviors.GAS,
  category: "alcohol",
  state: "gas",
  density: 1100,
  stateLow: "alcohol",
  tempLow: 256,
  temp: 257,
};

//Wiskey

elements.grain = {
  color: ["#e2ceb3", "#e8d8c2", "#eee2d1", "#f3ebe1", "#f9f5f0"],
  behavior: behaviors.WALL,
  category: "food",
  breakInto: "smashedGrain",
};

elements.smashedGrain = {
  color: ["#d6bfa3", "#cfae91", "#c7a27f", "#b89373", "#a88265"],
  behavior: behaviors.POWDER,
  density: 1.5,
  category: "food",
  reactions: {
    water: {
      elem1: "mash",
      elem2: "mash",
      chance: 0.3,
      tempMin: 70,
      tempMax: 100,
    },
  },
};

elements.mash = {
  color: ["#bfa67d", "#b18b5a", "#a97d4d", "#a17342", "#8e6434", "#7f572b"],
  behavior: behaviors.LIQUID,
  density: 10,
  viscosity: 4,
  category: "alcohol",
  reactions: {
    yeast: { elem1: "wash", elem2: "wash" },
  },
};

elements.wash = {
  color: ["#c7a15b", "#b68b4b", "#a8783e", "#9e6c31", "#8f5d28", "#7c4a1d"],
  behavior: behaviors.LIQUID,
  temp: 50,
  stateHigh: "whiskeyGas",
  tempHigh: 150,
  category: "alcohol",
};

elements.whiskeyGas = {
  color: ["#f4d8a8", "#eacb97", "#ddba84", "#d0ab74", "#c29d68", "#b28e5c"],
  behavior: behaviors.GAS,
  category: "alcohol",
  state: "gas",
  density: 0.3,
  stateLow: "whiskey",
  tempLow: 150,
  temp: 151,
};

elements.whiskey = {
  color: ["#c58f36", "#b87e2b", "#a86e24", "#95601e", "#7f4f17", "#6c4012"],
  behavior: behaviors.LIQUID,
  category: "alcohol",
  temp: 50,
  stateHigh: "whiskeyGas",
  tempHigh: 150,
  stateLow: "frozenWhiskey",
  tempLow: -10,
};

elements.frozenWhiskey = {
  color: ["#e0d4c2", "#d3c7b6", "#c7baaa", "#baae9e", "#aea292", "#a19687"],
  behavior: behaviors.WALL,
  category: "alcohol",
  state: "solid",
  density: 1140,
  stateHigh: "whiskey",
  tempHigh: -10,
  temp: -20,
};

// Vodka
elements.mashed_potato = {
  reactions: {
    water: {
      elem1: "coldPotato",
      elem2: "coldPotato",
      tempMin: 0,
      tempMax: 20,
    },
  },
  color: ["#F7F6E4", "#F0ECD4", "#E4D38B"],
  behavior: behaviors.STURDYPOWDER,
  tempHigh: 400,
  stateHigh: ["ash", "steam", null, null, null],
  burn: 3,
  burnTime: 300,
  burnInto: ["ash", "steam", "smoke", "smoke", "smoke"],
  category: "food",
  state: "solid",
  density: 675,
  isFood: true,
  hidden: true,
};
elements.coldPotato = {
  color: ["#d2c9b5", "#c7bfae", "#bbb4a6", "#b0aa9f", "#a49f97", "#99958f"],
  behavior: behaviors.POWDER,
  category: "food",
  temp: 5,
  reactions: {
    yeast: {
      elem1: "vodka",
      elem2: "vodka",
      chance: 0.7,
    },
  },
};

elements.vodka = {
  color: ["#e7edf2", "#dbe3ea", "#d0d9e1", "#c4ced9", "#b9c4d0", "#adb9c8"],
  behavior: behaviors.LIQUID,
  category: "alcohol",
  temp: 15,
};

// Tequila

elements.agave = {
  color: ["#7fae99", "#74a690", "#699d88", "#5e9580", "#548c78", "#498470"],
  behavior: behaviors.WALL,
  category: "life",
  temp: 23,
  breakInto: "agaveCore",
};

elements.agaveCore = {
  color: ["#d8e4d3", "#cdd9c6", "#c1ceba", "#b6c3ad", "#aab9a1", "#9fae94"],
  behavior: behaviors.POWDER,
  category: "food",
  temp: 23,
  burn: 20,
  burnTime: 60,
  burnInto: "roastedAgave",
  fireColor: ["#80ACF0", "#96CDFE", "#bee6d4"],
};

elements.roastedAgave = {
  color: ["#a76c42", "#99633c", "#8b5a36", "#7d502f", "#6f4729", "#613d23"],
  behavior: behaviors.POWDER,
  category: "food",
  temp: 70,
  breakInto: "agaveJuice",
};

elements.agaveJuice = {
  color: ["#f1deac", "#e7d39d", "#ddc88d", "#d3bd7e", "#c9b26f", "#bfa660"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  temp: 23,
  reactions: {
    yeast: {
      elem1: "tequila",
      elem2: "tequila",
      chance: 0.6,
    },
  },
};

elements.tequila = {
  color: ["#deb376", "#d1a66a", "#c4985e", "#b78b53", "#aa7e47", "#9d703b"],
  behavior: behaviors.LIQUID,
  category: "alcohol",
  temp: 13,
};

// Champagne

elements.champaneGrapes = {
  color: ["#9f74b2", "#b16fa5", "#c47da0", "#da8ea4", "#e4939f"],
  behavior: behaviors.WALL,
  category: "food",
  breakInto: "must",
};

elements.must = {
  color: ["#f1d1b1", "#e6c49f", "#d9b28e", "#cda67d", "#c0946c"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  reactions: {
    alcohol: {
      elem1: "baseWine",
      elem2: "baseWine",
      chance: 0.5,
    },
  },
};

elements.baseWine = {
  color: ["#f2e0bb", "#e6d19d", "#d9c687", "#cbbf72", "#c1b45d"],
  behavior: behaviors.LIQUID,
  reactions: {
    wine: {
      elem1: "cuvee",
      elem2: "cuvee",
      chance: 0.4,
    },
  },
  viscosity: 2.23, //EXERCISE 8: VISCOSITY OF PURE LIQUIDS AND SOLUTIONS
  //tempHigh: 97,
  burn: 20,
  burnTime: 60,
  burnInto: "alcohol",
  fireColor: ["#80ACF0", "#96CDFE", "#bee6d4"],
  category: "alcohol",
  state: "liquid",
  density: 803,
  stain: -0.25,
};

elements.cuvee = {
  color: ["#f2e4b0", "#e2d193", "#d1c27e", "#bfa76b", "#b48c58"],
  behavior: behaviors.LIQUID,
  reactions: {
    sugar: {
      elem1: "sugaryCuvee",
      elem2: "sugaryCuvee",
      chance: 0.4,
    },
  },
  viscosity: 2.23,
  burn: 20,
  burnTime: 60,
  fireColor: ["#80ACF0", "#96CDFE", "#bee6d4"],
  category: "alcohol",
  state: "liquid",
  density: 803,
  stain: -0.25,
};

elements.sugaryCuvee = {
  color: ["#f1d089", "#e0c67a", "#d1b56c", "#c39e5f", "#b78751"],
  behavior: behaviors.LIQUID,
  reactions: {
    carbon_dioxide: {
      elem1: "champagne",
      elem2: "champagne",
      chance: 0.5,
    },
  },
  viscosity: 2.23,
  category: "alcohol",
  state: "liquid",
  density: 803,
  stain: -0.25,
};

elements.champagne = {
  color: ["#f1e0b2", "#e4c97f", "#d8b76f", "#f8e6c3", "#ecd89b", "#c9a15b"],
  behavior: behaviors.LIQUID,
  viscosity: 2.23,
  category: "alcohol",
  state: "liquid",
  density: 803,
  stain: -0.25,
};

// Brazilian rum

elements.sugarCane = {
  color: ["#d3e4b2", "#c2d89e", "#b0cb8c", "#a0bc79", "#8ea867"],
  behavior: behaviors.WALL,
  category: "life",
  breakInto: ["crushedSugarCane", "sugar"],
};

elements.crushedSugarCane = {
  color: ["#c4c88e", "#b3b97b", "#a3a96a", "#929958", "#818947"],
  behavior: behaviors.POWDER,
  category: "powders",
  temp: 23,
  reactions: {
    water: {
      elem1: "sugarCaneSyrup",
      elem2: "sugarCaneSyrup",
      tempMin: 70,
      tempMax: 100,
    },
  },
};

elements.sugarCaneSyrup = {
  color: ["#d4a153", "#c89042", "#b77f36", "#a56f2b", "#935f21"],
  behavior: behaviors.LIQUID,
  viscosity: 1000,
  density: 1.4,
  state: "liquid",
  category: "liquids",
  tempHigh: 120,
  stateHigh: "burnt_sugar",
  burn: 5,
  burnTime: 200,
  reactions: {
    yeast: {
      elem1: "brazilianRum",
      elem2: "brazilianRum",
    },
  },
};

elements.brazilianRum = {
  color: ["#f3e0a2", "#e7ce87", "#dcbf6d", "#cfa055", "#c18e45"],
  behavior: behaviors.LIQUID,
  viscosity: 2.23,
  category: "alcohol",
  state: "liquid",
  density: 803,
  stain: -0.25,
};

elements.cork = {
  color: ["#a67c52", "#b08968", "#c19a6b", "#8b5e3c", "#7a4c32"],
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  density: 1140,
};
