import { UserDataI } from "./User";

export enum TransactionEventType {
  INIT_VENDOR_PAYMENT_FOR_PURCHASED_GOODS = "INIT_VENDOR_PAYMENT_FOR_PURCHASED_GOODS",
  INITIATED_VENDOR_PAYMENT_FOR_PURCHASED_GOODS = "INITIATED_VENDOR_PAYMENT_FOR_PURCHASED_GOODS",
  SUCCESSFUL_VENDOR_PAYMENT_FOR_PURCHASED_GOODS = "SUCCESSFUL_VENDOR_PAYMENT_FOR_PURCHASED_GOODS",
  PRODUCT_PURCHASE_CONFIRMED_BY_USER = "PRODUCT_PURCHASE_CONFIRMED_BY_USER",
  SHIPMENT_CONFIRMED_FOR_PRODUCT_PURCHASE = "SHIPMENT_CONFIRMED_FOR_PRODUCT_PURCHASE",
}

export interface EventI {
  transaction: string;
  eventName: TransactionEventType;
  timestamp: Date;
}

export interface TransactionI {
  accounted_for: boolean;
  _id: string;
  user: UserDataI;
  type: string;
  payment_provider: string;
  payment_method: string;
  status: string;
  total_amount: number;
  amount_payable: number;
  transaction_fee: number;
  currency: string;
  reference: string;
  invoice: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  kind: "debit" | "credit";
  extra_info: {
    parent_transaction: string;
    payment_from: "EndUser";
    referral_bonus: 5;
  };
  events?: EventI[];
}

export interface TransactionsResponse {
  data: { transactions: TransactionI[] };
  message: string;
  status: string;
}

export interface TransactionInfoResponse {
  data: { transactions: TransactionI };
  message: string;
  status: string;
}
