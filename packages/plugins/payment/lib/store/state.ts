enum TransactionState {
  SUCCESS = 1,
  IN_PROGRESS = 2,
  FAILURE = 3,
}

enum TransactionType {
  PAYMENT = 1,
  REFOUND = 2,
}

interface Transaction {
  state: TransactionState;
  type: TransactionType;
  currency: string;
  value: number;
  paymentMethod: string;
}

export interface PaymentState {
  transactions: Array<Transaction>;
}

export const paymentState: PaymentState = {
  transactions: [
    {
      currency: "EUR",
      type: TransactionType.PAYMENT,
      state: TransactionState.SUCCESS,
      paymentMethod: "4242",
      value: 10,
    },
    {
      currency: "EUR",
      type: TransactionType.PAYMENT,
      state: TransactionState.IN_PROGRESS,
      paymentMethod: "4242",
      value: 10,
    },
    {
      currency: "USD",
      type: TransactionType.REFOUND,
      state: TransactionState.SUCCESS,
      paymentMethod: "0101",
      value: 100,
    },
    {
      currency: "USD",
      type: TransactionType.PAYMENT,
      state: TransactionState.FAILURE,
      paymentMethod: "4242",
      value: 10,
    },
  ],
};
