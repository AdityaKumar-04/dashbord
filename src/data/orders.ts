export type OrderStatus = "Completed" | "Processing" | "Refunded" | "Failed";

export interface Order {
  id: string;
  customerName: string;
  product: string;
  paymentMethod: string;
  revenue: string;
  status: OrderStatus;
  city: string;
  date: string;
}

export const ordersData: Order[] = [
  { id: "ORD-7001", customerName: "Olivia Martin", product: "MacBook Pro 16\"", paymentMethod: "Credit Card", revenue: "₹2,49,900", status: "Completed", city: "Mumbai", date: "2024-10-24" },
  { id: "ORD-7002", customerName: "Jackson Lee", product: "iPhone 15 Pro", paymentMethod: "UPI", revenue: "₹1,34,900", status: "Processing", city: "Delhi", date: "2024-10-24" },
  { id: "ORD-7003", customerName: "Isabella Nguyen", product: "AirPods Pro 2", paymentMethod: "Debit Card", revenue: "₹24,900", status: "Completed", city: "Bengaluru", date: "2024-10-23" },
  { id: "ORD-7004", customerName: "William Kim", product: "Apple Watch Ultra 2", paymentMethod: "Credit Card", revenue: "₹89,900", status: "Refunded", city: "Chennai", date: "2024-10-22" },
  { id: "ORD-7005", customerName: "Sofia Davis", product: "iPad Pro 12.9\"", paymentMethod: "UPI", revenue: "₹1,12,900", status: "Completed", city: "Hyderabad", date: "2024-10-22" },
  { id: "ORD-7006", customerName: "Liam Johnson", product: "Sony WH-1000XM5", paymentMethod: "Net Banking", revenue: "₹29,990", status: "Completed", city: "Pune", date: "2024-10-21" },
  { id: "ORD-7007", customerName: "Emma Brown", product: "Samsung Galaxy S24 Ultra", paymentMethod: "Credit Card", revenue: "₹1,29,999", status: "Processing", city: "Kolkata", date: "2024-10-21" },
  { id: "ORD-7008", customerName: "Noah Garcia", product: "Dyson V15 Detect", paymentMethod: "Debit Card", revenue: "₹62,900", status: "Completed", city: "Ahmedabad", date: "2024-10-20" },
  { id: "ORD-7009", customerName: "Ava Martinez", product: "Kindle Paperwhite", paymentMethod: "UPI", revenue: "₹13,999", status: "Failed", city: "Jaipur", date: "2024-10-19" },
  { id: "ORD-7010", customerName: "Elijah Robinson", product: "Nike Air Max 97", paymentMethod: "Credit Card", revenue: "₹16,995", status: "Completed", city: "Surat", date: "2024-10-18" },
  { id: "ORD-7011", customerName: "Mia Clark", product: "Premium Leather Backpack", paymentMethod: "UPI", revenue: "₹8,499", status: "Completed", city: "Lucknow", date: "2024-10-17" },
  { id: "ORD-7012", customerName: "James Rodriguez", product: "Sony PlayStation 5", paymentMethod: "Credit Card", revenue: "₹54,990", status: "Processing", city: "Kanpur", date: "2024-10-16" },
  { id: "ORD-7013", customerName: "Charlotte Lewis", product: "LG 55\" OLED TV", paymentMethod: "Net Banking", revenue: "₹1,45,000", status: "Completed", city: "Nagpur", date: "2024-10-15" },
  { id: "ORD-7014", customerName: "Benjamin Walker", product: "Bose QuietComfort Earbuds II", paymentMethod: "UPI", revenue: "₹25,900", status: "Refunded", city: "Indore", date: "2024-10-14" },
  { id: "ORD-7015", customerName: "Amelia Hall", product: "Fitbit Charge 6", paymentMethod: "Debit Card", revenue: "₹14,999", status: "Completed", city: "Thane", date: "2024-10-13" },
];
