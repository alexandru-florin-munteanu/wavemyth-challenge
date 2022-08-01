const cart = {
  items: [],
};

const purchaseDeal = (state, action) => ({
  ...state,
  items: [...state.items, action.payload],
});

const checkout = (state) => ({
  ...state,
  items: [],
});
const actionTypeCases = {
  PURCHASE_DEAL: purchaseDeal,
  CHECKOUT: checkout,
};

const reducer = (state = { ...cart }, action) => {
  try {
    return actionTypeCases[action.type].call(null, state, action);
  } catch (ignore) {
    return state;
  }
};

export default reducer;
