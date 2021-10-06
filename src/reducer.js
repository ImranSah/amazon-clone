export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
        console.log("New Basket >>>>" + newBasket);
      } else {
        console.warn(`Can't Remove item form basket`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
