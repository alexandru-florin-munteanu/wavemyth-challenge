export const PURCHASE_DEAL = "PURCHASE_DEAL";

export const CHECKOUT = "CHECKOUT";

// Actions declarations

export const purchaseDeal = (payload) => ({
  type: PURCHASE_DEAL,
  payload,
});

export const checkout = () => ({
  type: CHECKOUT,
});
