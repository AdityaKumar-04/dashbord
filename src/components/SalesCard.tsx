import React from 'react'

export type Salesprops = {
  name: string
  email: string
  salesamount: string
}

export default function SalesCard(props: Salesprops) {
  return (
    <div className="flex flex-wrap justify-between gap-3 ">
      <section className='flex justify-between gap-3'>
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.name}`} alt="avatar" width={200} height={200} />
        </div>
        <div className="text-sm">
          <p className="">{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">{props.email}</div>
        </div>
      </section>
      <p className="">{props.salesamount}</p>
    </div>
  )
}
