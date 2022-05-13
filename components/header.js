import React from 'react'

export default function Header() {
    return (
        <div className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <a className="uppercase text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">
                            Odisha Job Board
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
