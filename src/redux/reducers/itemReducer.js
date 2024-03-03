// const reducer = (state, action) => {
//   if (action.type === "add") {
//     if(state.includes(x=> x.name === action.payload.name)){
//         return state[state.findIndex(x=> x.name === action.payload.name)].order = state[state.findIndex(x=> x.name === action.payload.name)].order+1;
//     }
//     return [...state, action.payload];
//   } else if (action.type === "sub") {
//     return state.filter((item) => item !== action.payload);
//   } else {
//     return state;
//   }
// };

// export default reducer;

// const reducer = (state, action) => {
//   if (action.type === "add") {
//     const existingItemIndex = state.findIndex(
//       (x) => x.name === action.payload.name
//     );
//     if (existingItemIndex !== -1) {
//       // If item already exists, return new state with incremented order
//       return state.map((item, index) =>
//         index === existingItemIndex ? { ...item, order: item.order + 1 } : item
//       );
//     } else {
//       // If item doesn't exist, add it to the state
//       console.log(5050);
//       return [...state, { ...action.payload, order: 1 }];
//     }
//   } else if (action.type === "sub") {
//     // Remove item from state based on payload
//     return state.filter((item) => item !== action.payload);
//   } else {
//     // Return current state for unknown action types
//     return state;
//   }
// };

// export default reducer;

const reducer = (state, action) => {
  if (action.type === "add") {
    const existingItemIndex = state.findIndex(
      (item) => item.name === action.payload.name
    );
    if (existingItemIndex !== -1) {
      return state.map((item, index) =>
        index === existingItemIndex ? { ...item, order: item.order + 1 } : item
      );
    } else {
      return [...state, { ...action.payload, order: 1 }];
    }
  } else if (action.type === "sub") {
    const existingItem = state.find(
      (item) => item.name === action.payload.name
    );
    if (existingItem && existingItem.order > 1) {
      return state.map((item) =>
        item.name === action.payload.name
          ? { ...item, order: item.order - 1 }
          : item
      );
    } else {
      return state.filter((item) => item.name !== action.payload.name);
    }
  } else {
    return state;
  }
};

export default reducer;
