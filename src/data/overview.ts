import { DollarSign, CreditCard, Users, Activity, ShoppingBag, ArrowUpRight } from "lucide-react";

export const overviewData = [
  {
    label: "Total Revenue",
    amount: "₹12.4M",
    description: "↑ 18.4% vs last month",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Orders",
    amount: "45,231",
    description: "↑ 12.1% vs last month",
    trend: "up",
    icon: ShoppingBag,
  },
  {
    label: "Active Customers",
    amount: "8,342",
    description: "↑ 5.2% vs last month",
    trend: "up",
    icon: Users,
  },
  {
    label: "Refund Rate",
    amount: "2.1%",
    description: "↓ 0.4% vs last month",
    trend: "down",
    icon: Activity,
  },
  {
    label: "Conversion Rate",
    amount: "4.8%",
    description: "↑ 1.2% vs last month",
    trend: "up",
    icon: ArrowUpRight,
  },
  {
    label: "Average Order Value",
    amount: "₹1,870",
    description: "↑ 8.4% vs last month",
    trend: "up",
    icon: CreditCard,
  },
  {
    label: "Customer Retention",
    amount: "64%",
    description: "↑ 2.1% vs last month",
    trend: "up",
    icon: Users,
  },
  {
    label: "Revenue Forecast",
    amount: "₹14.2M",
    description: "Projected for next month",
    trend: "neutral",
    icon: DollarSign,
  }
];
