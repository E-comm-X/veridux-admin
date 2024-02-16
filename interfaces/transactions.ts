export interface TransactionI {
  _id: string
  user: string
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
}

export interface TransactionsResponse {
  data: { transactions: TransactionI[] }
  message: string
  status: string
}
