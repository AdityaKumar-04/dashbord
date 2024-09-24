'use client'

import Pagetitle from '@/components/Pagetitle';
import { DataTable } from '@/components/ui/Datatable';
import { ColumnDef, createRow, getPaginationRowModel, } from '@tanstack/react-table';
import { Button } from "@/components/ui/button"
import * as React from 'react';
import { cn } from '@/lib/utils';

type Props = {}

export default function Orderpage({ }: Props) {
  return (
    <div>
      <Pagetitle title='Order' className='pb-5' />
      <DataTable columns={columns} data={Data} />

    </div >
  );
}

type Payment = {
  order: string
  status: string
  lastorder: string
  method: string
}

export const Data: Payment[] = [
  {
    order: "ORD001",
    status: "pending",
    lastorder: "2023-01-15",
    method: "Credit Card"
  },
  {
    order: "ORD002",
    status: "shipped",
    lastorder: "2023-01-17",
    method: "Debit Card"
  },
  {
    order: "ORD003",
    status: "delivered",
    lastorder: "2023-01-20",
    method: "PayPal"
  },
  {
    order: "ORD004",
    status: "canceled",
    lastorder: "2023-01-22",
    method: "Credit Card"
  },
  {
    order: "ORD005",
    status: "pending",
    lastorder: "2023-01-25",
    method: "Debit Card"
  },
  {
    order: "ORD006",
    status: "shipped",
    lastorder: "2023-01-28",
    method: "Credit Card"
  },
  {
    order: "ORD007",
    status: "pending",
    lastorder: "2023-01-30",
    method: "PayPal"
  },
  {
    order: "ORD008",
    status: "delivered",
    lastorder: "2023-02-01",
    method: "Credit Card"
  },
  {
    order: "ORD009",
    status: "canceled",
    lastorder: "2023-02-03",
    method: "Debit Card"
  },
  {
    order: "ORD010",
    status: "shipped",
    lastorder: "2023-02-05",
    method: "Credit Card"
  },
  {
    order: "ORD011",
    status: "pending",
    lastorder: "2023-02-08",
    method: "PayPal"
  },
  {
    order: "ORD012",
    status: "delivered",
    lastorder: "2023-02-10",
    method: "Debit Card"
  },
  {
    order: "ORD013",
    status: "shipped",
    lastorder: "2023-02-12",
    method: "Credit Card"
  },
  {
    order: "ORD014",
    status: "pending",
    lastorder: "2023-02-14",
    method: "PayPal"
  },
  {
    order: "ORD015",
    status: "delivered",
    lastorder: "2023-02-17",
    method: "Credit Card"
  },
  {
    order: "ORD016",
    status: "canceled",
    lastorder: "2023-02-19",
    method: "Debit Card"
  },
  {
    order: "ORD017",
    status: "shipped",
    lastorder: "2023-02-22",
    method: "Credit Card"
  },
  {
    order: "ORD018",
    status: "pending",
    lastorder: "2023-02-25",
    method: "PayPal"
  },
  {
    order: "ORD019",
    status: "delivered",
    lastorder: "2023-02-27",
    method: "Debit Card"
  },
  {
    order: "ORD020",
    status: "shipped",
    lastorder: "2023-03-01",
    method: "Credit Card"
  }


  // ...
]


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
          "bg-green-500 capitalize": row.getValue("status") === "delivered",
          "bg-red-500 capitalize": row.getValue("status") === "canceled",
          "bg-yellow-500 capitalize": row.getValue("status") === "pending",
          "bg-blue-500 capitalize": row.getValue("status") === "shipped",


        }
           
        )}>
          {row.getValue("status")}
        </div>)
    }
  },
  {
    accessorKey: "lastorder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]
