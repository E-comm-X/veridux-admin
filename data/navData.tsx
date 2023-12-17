import { OverviewIcon } from "@/icons"
import {
  Campaign,
  LocalShipping,
  PeopleAlt,
  Person,
  Receipt,
  Sell,
  Settings,
  Storefront,
} from "@mui/icons-material"

export const navItems = [
  {
    name: "Overview",
    url: "/",
    icon: <OverviewIcon color="primary" />,
    children: [],
  },
  {
    name: "Users",
    url: "/users",
    icon: <PeopleAlt color="primary" />,
    children: [],
  },
  {
    name: "Vendors",
    url: "/vendors",
    icon: <Storefront color="primary" />,
    children: [],
  },
  {
    name: "Product",
    url: "/product",
    icon: <Sell color="primary" />,
    children: [],
  },

  {
    name: "Payment history",
    url: "/payment-history",
    icon: <Receipt color="primary" />,
    children: [],
  },
  {
    name: "Deliveries",
    url: "/deliveries",
    icon: <LocalShipping color="primary" />,
    children: [],
  },
  {
    name: "Marketing",
    url: "",
    icon: <Campaign color="primary" />,
    children: [
      {
        name: "Campaigns",
        url: "/marketing/campaigns",
      },
      {
        name: "Create Mail",
        url: "/notifications/create-mail",
      },
      {
        name: "Create Campaign",
        url: "/notifications/Create-campaign",
      },
    ],
  },
  {
    name: "Settings",
    url: "/settings",
    icon: <Settings color="primary" />,
    children: [],
  },
  {
    name: "Account",
    url: "/account",
    icon: <Person color="primary" />,
    children: [],
  },
]
