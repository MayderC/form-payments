import { PAYMENT_STATUS } from "../common/constants/index";


export const createPayment = (name, price, percent) => {
  return {
    id: Date.now(),
    name: name,
    date: new Date().getTime(),
    price: price,
    percent: percent,
    status: PAYMENT_STATUS.pending,
  };
};