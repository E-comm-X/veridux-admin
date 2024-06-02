import { UserDataI } from "./User"

export interface WalletI {
  _id: string
  enduser: string
  balance: number
  currency: string
  transactions: TransactionI[]
  locked: boolean
  createdAt: string
  updatedAt: string
  __v: number
  id: string
  purpose: string
  pending_debit: number
  pending_credit: number
}

export interface walletsResponse {
  data: { company_wallets: WalletI[] }
  message: string
  status: string
}

export interface walletInfoResponse {
  data: { company_wallet: WalletI }
  message: string
  status: string
}

export interface TransactionI {
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
    parent_transaction: string
    payment_from: string
    referral_bonus: 5
  }
}

export interface EndUserWalletI {
  _id: string
  enduser: string
  balance: number
  currency: string
  transactions: TransactionI[]
  locked: boolean
  createdAt: string
  updatedAt: string
  __v: number
  id: string
  pending_debit: number
  pending_credit: number
}

export interface EndUserTransactionI {
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
  kind: "debit" | "credit"
  items: EndUserTransactionItemsI[]
  extra_info: {
    parent_transaction: string
    payment_from: string
    referral_bonus: 5
  }
}

export interface EndUserTransactionItemsI {
  product: string
  quantity: number
  _id: string
  price: string
  commission: string
  createdAt: string
  updatedAt: string
  id: string
}
