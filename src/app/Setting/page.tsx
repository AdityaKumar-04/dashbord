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
      <Pagetitle title='Settings' className='pb-5' />
      <DataTable columns={columns} data={Data} />

    </div >
  );
}

type Payment = {
  setting:string
  value:string
}

export const Data: Payment[] = [
  {
    setting:"Accounts",
    value:"Active"
  },
  {
    setting:"Notifications",
    value:"True"
  },
  {
    setting:"Language",
    value:"English"
  },
  {
    setting:"Theme",
    value:"Dark"
  },
  

]


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "setting",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
]
