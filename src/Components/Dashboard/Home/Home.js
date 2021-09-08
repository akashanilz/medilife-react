import React from 'react'

function Home() {
    return (
        <div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div className="p-6 max-w-sm  bg-yellow-300 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">

                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Total Clients</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                        <div className="p-6 max-w-sm  bg-red-300 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">

                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Total Employees</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                        <div className="p-6 max-w-sm  bg-blue-300 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">

                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Samples Collected</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                        <div className="p-6 max-w-sm  bg-pink-400 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">

                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Samples Pending</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                        <div className="p-6 max-w-sm  bg-green-300 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">

                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Appointments Scheduled</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                        <div className="p-6 max-w-sm  bg-purple-300 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">

                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Appointments Completed</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
