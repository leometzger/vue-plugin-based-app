export interface PaymentState {
  debits: Array<string>;
  transactions: Array<string>;
}

export const paymentState = {
  debits: [],
  transactions: [],
};
