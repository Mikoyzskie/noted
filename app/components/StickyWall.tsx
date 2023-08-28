import React from 'react'
import { IoIosAdd } from 'react-icons/io';

export default function StickyWall() {
    return (
        <div className='sticky-container w-full flex flex-col'>
            <h1 className="sticky-container__header text-4xl mb-8">Sticky Wall</h1>
            <div className="sticky-container__main border rounded-md">
                <ul className='sticky-container__content grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 '>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#ffdada]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#fdf2b3]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#d1eaed]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#ffd4a9]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#DFCCFB]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#C7E9B0]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#EEE0C9]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#E6BA95]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#ffd4a9]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md shadow-md bg-[#ffd4a9]'>
                        <h3 className="sticky-notes__header text-xl font-bold">Test 1</h3>
                    </li>
                    <li className='sticky-notes p-6 rounded-md bg-[#ebebeb] text-5xl flex justify-center items-center hover:cursor-pointer hover:shadow-inner'>
                        <IoIosAdd />
                    </li>
                </ul>
            </div>
        </div>
    )
}
