import { OverviewIcon } from "@/icons"
import {
  Campaign,
  DocumentScanner,
  LocalShipping,
  PeopleAlt,
  Person,
  Receipt,
  SecurityOutlined,
  Sell,
  Settings,
  Storefront,
  WalletOutlined,
} from "@mui/icons-material"

export const navItems = [
  {
    name: "Overview",
    url: "/",
    icon: <OverviewIcon color="primary" />,
    children: [],
  },
  {
    name: "Wallets",
    url: "",
    icon: <WalletOutlined color="primary" />,
    children: [
      {
        name: "Commissions",
        url: "/wallet/commissions",
      },
      {
        name: "End Users Funds",
        url: "/wallet/endusers_funds",
      },
      {
        name: "Vendor Funds",
        url: "/wallet/vendors_funds",
      },
      {
        name: "Purchased Products Funds",
        url: "/wallet/purchased_products_funds",
      },
    ],
  },
  {
    name: "Users",
    url: "",
    icon: <PeopleAlt color="primary" />,
    children: [
      {
        name: "Users",
        url: "/users",
      },
      {
        name: "User Group",
        url: "/users/groups",
      },
    ],
  },

  {
    name: "Vendors",
    url: "",
    icon: <Storefront color="primary" />,
    children: [
      {
        name: "Vendors",
        url: "/vendors",
      },
      {
        name: "Categories",
        url: "/vendors/categories",
      },
    ],
  },
  {
    name: "Product",
    url: "/product",
    icon: <Sell color="primary" />,
    children: [],
  },

  {
    name: "Documents",
    url: "/documents",
    icon: <DocumentScanner color="primary" />,
    children: [],
  },
  {
    name: "Permissions",
    url: "",
    icon: <SecurityOutlined color="primary" />,
    children: [
      {
        name: "Permission Groups",
        url: "/permissions",
      },
      {
        name: "Privileges",
        url: "/privileges",
      },
    ],
  },

  // {
  //   name: "Payment history",
  //   url: "/payment-history",
  //   icon: <Receipt color="primary" />,
  //   children: [],
  // },
  // {
  //   name: "Deliveries",
  //   url: "/deliveries",
  //   icon: <LocalShipping color="primary" />,
  //   children: [],
  // },
  // {
  //   name: "Marketing",
  //   url: "",
  //   icon: <Campaign color="primary" />,
  //   children: [
  //     {
  //       name: "Overview",
  //       url: "/marketing/overview",
  //     },
  //     {
  //       name: "Campaigns",
  //       url: "/marketing/campaigns",
  //     },
  //     {
  //       name: "Create Mail",
  //       url: "/marketing/campaigns/new/email",
  //     },
  //     // {
  //     //   name: "Create Campaign",
  //     //   url: "/marketing/Create-campaign",
  //     // },
  //   ],
  // },
  // {
  //   name: "Settings",
  //   url: "",
  //   icon: <Settings color="primary" />,
  //   children: [
  //     {
  //       name: "General",
  //       url: "/settings",
  //     },
  //     {
  //       name: "Security",
  //       url: "/settings/security",
  //     },
  //     {
  //       name: "Administrator",
  //       url: "/settings/administrator",
  //     },
  //     {
  //       name: "Fintech Services",
  //       url: "/settings/fintech-services",
  //     },
  //     {
  //       name: "Permissions Groups",
  //       url: "/settings/permissions-groups",
  //     },
  //   ],
  // },
  {
    name: "Account",
    url: "/account",
    icon: <Person color="primary" />,
    children: [],
  },
]
