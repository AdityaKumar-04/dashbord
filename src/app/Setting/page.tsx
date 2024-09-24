'use client';

import Pagetitle from '@/components/Pagetitle';
import { DataTable } from '@/components/ui/Datatable';
import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

// Define the Payment type
type Payment = {
  setting: string;
  value: string;
};

// Sample data
const Data: Payment[] = [
  {
    setting: "Accounts",
    value: "Active"
  },
  {
    setting: "Notifications",
    value: "True"
  },
  {
    setting: "Language",
    value: "English"
  },
  {
    setting: "Theme",
    value: "Dark"
  },
];

// Define the columns for the DataTable
 const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "setting",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

// Main component for the Order page
export default function Orderpage() {
  return (
    <div>
      <Pagetitle title='Settings' className='pb-5' />
      <DataTable columns={columns} data={Data} />
    </div>
  );
}
