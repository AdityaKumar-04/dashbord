'use client'

import Pagetitle from '@/components/Pagetitle';
import { DataTable } from '@/components/ui/Datatable';
import { ColumnDef } from '@tanstack/react-table';

import * as React from 'react';


type Payment = {
  name: string
  email: string
  lastorder: string
  method: string
}

const Data: Payment[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    lastorder: "2022-01-01",
    method: "Credit Card"
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    lastorder: "2022-01-01",
    method: "Credit Card"
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    lastorder: "2022-05-15",
    method: "PayPal"
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    lastorder: "2023-01-10",
    method: "Bank Transfer"
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    lastorder: "2023-06-23",
    method: "Debit Card"
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    lastorder: "2023-07-05",
    method: "Cash"
  },
  {
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    lastorder: "2022-03-19",
    method: "Credit Card"
  },
  {
    name: "James Anderson",
    email: "james.anderson@example.com",
    lastorder: "2023-02-11",
    method: "Debit Card"
  },
  {
    name: "Olivia Martin",
    email: "olivia.martin@example.com",
    lastorder: "2023-04-12",
    method: "PayPal"
  },
  {
    name: "Lucas White",
    email: "lucas.white@example.com",
    lastorder: "2022-12-20",
    method: "Bank Transfer"
  },
  {
    name: "Ava Thompson",
    email: "ava.thompson@example.com",
    lastorder: "2023-01-25",
    method: "Credit Card"
  },
  {
    name: "William Garcia",
    email: "william.garcia@example.com",
    lastorder: "2022-11-14",
    method: "Cash"
  },
  {
    name: "Mia Rodriguez",
    email: "mia.rodriguez@example.com",
    lastorder: "2023-03-08",
    method: "Debit Card"
  },
  {
    name: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    lastorder: "2022-06-29",
    method: "PayPal"
  },
  {
    name: "Charlotte Hernandez",
    email: "charlotte.hernandez@example.com",
    lastorder: "2023-08-09",
    method: "Bank Transfer"
  },
  {
    name: "Benjamin Lopez",
    email: "benjamin.lopez@example.com",
    lastorder: "2023-05-17",
    method: "Credit Card"
  },
  {
    name: "Amelia Gonzalez",
    email: "amelia.gonzalez@example.com",
    lastorder: "2022-04-04",
    method: "Debit Card"
  },
  {
    name: "Noah Clark",
    email: "noah.clark@example.com",
    lastorder: "2022-09-28",
    method: "Cash"
  },
  {
    name: "Isabella Lewis",
    email: "isabella.lewis@example.com",
    lastorder: "2023-07-21",
    method: "PayPal"
  },
  {
    name: "Logan Walker",
    email: "logan.walker@example.com",
    lastorder: "2023-10-02",
    method: "Bank Transfer"
  },
  {
    name: "Harper Young",
    email: "harper.young@example.com",
    lastorder: "2022-08-18",
    method: "Credit Card"
  }


  // ...
]


const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <img src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`} alt="avatar" className='h-10 w-10' />
          <p className="">{row.getValue("name")}</p>
        </div>)


    }
  },
  {
    accessorKey: "email",
    header: "Email",
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

export default function Userpage() {
  return (
    <div>
      <Pagetitle title='Users' className='pb-5' />
      <DataTable columns={columns} data={Data} />

    </div >
  );
}
