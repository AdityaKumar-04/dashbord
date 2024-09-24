
import Pagetitle from "@/components/Pagetitle";
import Card, { CardContent, CardProps } from "@/components/Card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import Barchat from "@/components/Barchat";
import SalesCard, { Salesprops } from "@/components/SalesCard";

const cardData:CardProps[] = [
  {
    label:"Total Revenue",
    amount:"$1,234,567",
    discription:"+20.1% from last month",
    icons:DollarSign
  },
  
  {
    label:"Subscriptions",
    amount:"+2350",
    discription:"+180.1% from last month",
    icons:Users
  },
  
  {
    label:"Sales",
    amount:"+12,234",
    discription:"+19% from last month",
    icons:CreditCard
  },
  
  {
    label:"Active Now",
    amount:"+573",
    discription:"+201 since last hour",
    icons:Activity
  },
  
]
const salesData:Salesprops[] = [
  {
    name:'Olivia Martin',
    email:'olivia.martin@email.com',
    salesamount:"+$1,999.00"
  },
  {
    name:'Jackson Lee',
    email:'isabella.nguyen@email.com',
    salesamount:"+$1,999.00"
  },
  {
    name:'Isabella Nguyen',
    email:'isabella.nguyen@email.com',
    salesamount:"+$39.00"
  },
  {
    name:'William Kim',
    email:'will@email.com',
    salesamount:"+$299.00"
  },
  {
    name:'Sofia Davis',
    email:'sofia.davis@email.com',
    salesamount:"+$39.00"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Pagetitle title="Dashboard" className="tracking-wide"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data,index)=>{
          return(
            <Card key={index} label={data.label} amount={data.amount} discription={data.discription} icons={data.icons} />
          )
        })}
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 transition-all">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <Barchat/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <p className="">Recent Sales</p>
          <p className="text-sm text-gray-500">You made 265 sales this month.</p>
          {salesData.map((item,index)=>{
            return(
              <SalesCard key={index}
                email={item.email}
                name={item.name}
                salesamount={item.salesamount}
              
              />
            )
          })}
        </CardContent>
      </section>
    </div>
  )
}
