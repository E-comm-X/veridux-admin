import Image from 'next/image'
import React from 'react'

export default function UserGroupHome() {
  return (
    <main className='text-[#000000A1] '>
      <Image width={486.59} height={497.14} src="/20944201.jpg"/>
      <h3 className='font-semibold'>Permission Groups Management</h3>
      <p className='font-normal'>Streamline permission control by creating and managing permission groups.</p>
      <button className='text-center py-2 px-4 bg-[#000000] outline-none'>Create New Permission</button>
    </main>
  )
}
