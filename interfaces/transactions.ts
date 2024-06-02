import { UserDataI } from "./User"

export interface TransactionI {
  accounted_for: boolean
  _id: string
  user: UserDataI
  type: string
  payment_provider: string
  payment_method: string
  status: string
  total_amount: number
  amount_payable: number
  transaction_fee: number
  currency: string
  reference: string
  invoice: string
  createdAt: string
  updatedAt: string
  __v: number
  id: string
  kind: "debit" | "credit"
  extra_info: {
    parent_transaction: "65a48f6f5cdc86c7b4378de2"
    payment_from: "EndUser"
    referral_bonus: 5
  }
}

export interface TransactionsResponse {
  data: { transactions: TransactionI[] }
  message: string
  status: string
}

export interface TransactionInfoResponse {
  data: { transactions: TransactionI }
  message: string
  status: string
}
