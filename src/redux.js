const reducer = function (state, action) {
  if (action.type === "INCREMENT_AMOUNT") {
    const tempCart = state.pot.map((item) => {
      if (item.id === action.payLoad) {
        return {
          ...item,
          amount: item.amount + 1,
          total: +(
            item.total + +item.price.slice(1, item.price.length - 1)
          ).toFixed(2),
        };
      }
      return item;
    });
    return { ...state, pot: tempCart };
  }
  if (action.type === "DECREMENT_AMOUNT") {
    const tempCart = state.pot.map((item) => {
      if (item.id === action.payLoad) {
        return {
          ...item,
          amount: item.amount > 0 ? item.amount - 1 : 0,
          total:
            item.amount > 0
              ? +(
                  item.total - +item.price.slice(1, item.price.length - 1)
                ).toFixed(2)
              : item.total,
        };
      }
      return item;
    });
    return { ...state, pot: tempCart };
  }
  if (action.type === "TOTAL_AMOUNT") {
    let { total, amount } = state.pot.reduce(
      (itemTotal, item) => {
        const { price, amount } = item;
        const itemsTotal = +item.price.slice(1, price.length - 1) * amount;
        itemTotal.total += itemsTotal;
        itemTotal.amount += amount;
        return itemTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === "ADD_TO_CART") {
    const tempCart = state.pot.filter((item) => item.amount > 0);
    return { ...state, cart: tempCart };
  }
};

export default reducer;
