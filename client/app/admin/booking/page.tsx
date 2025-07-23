'use client'

import { useState, useEffect, useCallback } from "react"
import { BookingState } from "@/redux/slice/BookingSlice";
import { FaSpinner } from 'react-icons/fa'; // You can use other spinner icons too
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import toast from "react-hot-toast";



export default function Booking() {
    const [currentStep, setCurrentStep] = useState(1);
    const [booking, setBooking] = useState<BookingState[]>([]);
    const [isLoading, setIsloading] = useState(false);
    const [pending, setPending] = useState<BookingState[]>([]);
    const [completed, setCompleted] = useState<BookingState[]>([]);
    const [cancelled, setCancelled] = useState<BookingState[]>([]);

    const fetchBookings = async () => {
        setIsloading(true);
        try {
            const response = await fetch('https://soiressandteepees-production.up.railway.app/api/booking/allbookings', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            });
    
            if (!response.ok) {
            throw new Error('Failed to submit booking');
            }
            const data = await response.json();
            setBooking(data.allBookings);
            console.log(data);
        } catch (error: any) {
            console.error('Error submitting booking:', error);
        } finally {
            setIsloading(false);
        }
    }


    const filterPendingBooking = booking.filter(book => {
        return book.status?.toLowerCase().includes('pending');
    });


    const filterCompletedBooking = booking.filter(book => {
        return book.status?.toLowerCase().includes('completed')
    });

    const filterCancelledBooking = booking.filter(book => {
        return book.status?.toLowerCase().includes('cancelled')
    });



    useEffect(() => {
        fetchBookings();
    }, [currentStep]);

    useEffect(() => {
        setPending(filterPendingBooking)
        setCancelled(filterCancelledBooking);
        setCompleted(filterCompletedBooking);
    }, [booking])

    
    return (
        <div className="w-full relative my-5">
            <h1 className="text-2xl font-bold pl-7 pb-3">Bookings</h1>
            <section className="relative w-full py-4 shadow-lg bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center space-x-10">
                        {[
                        { step: 1, title: 'All' },
                        { step: 2, title: 'Pending' },
                        { step: 3, title: 'Completed' },
                        { step: 4, title: 'Cancelled' }
                        ].map((item, index) => (
                        <div key={item.step} 
                            className="flex items-center cursor-pointer"
                            onClick={() => setCurrentStep(item.step)} 
                        >
                            <div className={`flex flex-col lg:flex-row  items-center ${index > 0 ? ' md:ml-8' : ''}`}>
                            <span className={`ml-0 font-medium ${
                                currentStep === item.step ? 'text-primary_button border-b-2 border-primary_button rounded-sm' : 'text-gray-500'
                            }`}>
                                {item.title}
                            </span>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative w-full">
                <div>
                    {currentStep === 1 && (
                        <div className="relative w-full flex py-5">
                            {isLoading ? <FaSpinner className="animate-spin text-primary_button w-full mr-2 flex text-2xl text-center justify-center"/> : 
                                <div className="relative w-full md:mx-[20%]">
                                    {booking.length === 0 ? 
                                    <span className="p-4 text-center text-gray-500 flex justify-center">No Booking Found</span> : 
                                    <div className="relative w-[95%] space-y-3 mx-3">
                                        {booking.map(books => (
                                            <BookingDiv key={books.id} books={books} fetchBookings={fetchBookings}/>
                                        ))}
                                    </div>
                                    }
                                </div>
                            }
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="relative w-full flex py-5">
                            {isLoading ? <FaSpinner className="animate-spin text-primary_button w-full mr-2 flex text-2xl text-center justify-center"/> : 
                                <div className="relative w-full md:mx-[20%]">
                                    {pending.length === 0 ? 
                                    <span className="p-4 text-center text-gray-500">No Booking Found</span> : 
                                    <div className="relative w-[95%] space-y-3 mx-3">
                                        {pending.map(books => (
                                            <BookingDiv key={books.id} books={books} fetchBookings={fetchBookings}/>
                                        ))}
                                    </div>
                                    }
                                </div>
                            }
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="relative w-full flex py-5">
                            {isLoading ? <FaSpinner className="animate-spin text-primary_button w-full mr-2 flex text-2xl text-center justify-center"/> : 
                                <div className="relative w-full md:mx-[20%]">
                                    {completed.length === 0 ? 
                                    <span className="p-4 text-center text-gray-500">No Booking Found</span> : 
                                    <div className="relative w-[95%] space-y-3 mx-3">
                                        {completed.map(books => (
                                            <BookingDiv key={books.id} books={books} fetchBookings={fetchBookings}/>
                                        ))}
                                    </div>
                                    }
                                </div>
                            }
                        </div>
                    )}


                    {currentStep === 4 && (
                        <div className="relative w-full flex py-5">
                            {isLoading ? <FaSpinner className="animate-spin text-primary_button w-full mr-2 flex text-2xl text-center justify-center"/> : 
                                <div className="relative w-full md:mx-[20%]">
                                    {cancelled.length === 0 ? 
                                    <span className="p-4 text-center text-gray-500">No Booking Found</span> : 
                                    <div className="relative w-[95%] space-y-3 mx-3">
                                        {cancelled.map(books => (
                                            <BookingDiv key={books.id} books={books} fetchBookings={fetchBookings}/>
                                        ))}
                                    </div>
                                    }
                                </div>
                            }
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}


 const BookingDiv = ({books, fetchBookings}: {books: BookingState, fetchBookings: () => {}}) => {
    
    const capitalizeFirstLetter = (str: string | undefined) => {
        if (!str || typeof str !== 'string') {
            return "";
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const statusOptions = ["pending", "completed", "cancelled"];

    const updateStatus = async (bookingId: string, newStatus: string) => {
        const bookingStatus = {
            status: newStatus
        }
        try {
            const patch = await fetch(`https://soiressandteepees-production.up.railway.app/api/booking/${bookingId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingStatus)
            })
            const response = await patch.json()
            console.log(response);
            toast.success(response.message);
            fetchBookings();
        } catch (err) {
            console.error(err);
            toast.error("Failed to update booking.");
        }
    };

    return (
        <div key={books.id} className="relative w-full border rounded-md border-primary_button">
            <div className="p-2 flex flex-col">
                <div className=" flex justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-xl text-gray-700">{capitalizeFirstLetter(books.packageType)} Party</span>
                        <span className="text-xs text-gray-500 italic font-medium">{books.email}, {capitalizeFirstLetter(books.parentName)}</span>
                        <span className="text-xs italic text-gray-500 font-medium">{books.phone}</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-xl text-gray-700 mr-10">${books.totalAmount}</span>
                        <span className={`text-xs items-center space-x-1 font-medium flex ${books.paymentStatus === 'pending' && 'text-yellow-500'} ${books.paymentStatus === 'paid' && 'text-green-500'} ${books.paymentStatus === 'failed' && 'text-red-500'}`}>
                            <div className={`w-2 h-2 rounded-full ${books.paymentStatus === 'pending' && 'bg-yellow-500'} ${books.paymentStatus === 'completed' && 'bg-green-500'} ${books.paymentStatus === 'cancelled' && 'bg-red-500'}`}></div>
                            <span>
                                {capitalizeFirstLetter(books.paymentStatus as string)}
                            </span>
                        </span>
                    </div>
                </div>

                <div className="flex">
                    <div className="text-xs mt-7 text-gray-500 italic font-medium">
                        {new Date(books.createdAt as string).toDateString()}
                    </div>
                    <div className="shadow-lg mt-4 relative  w-[25%] text-center flex rounded-md justify-center mx-auto">
                        <div className="flex p-2">
                            {/* <span className={`text-xs items-center pr-2 space-x-1 font-medium flex ${books.status === 'pending' && 'text-yellow-500'} ${books.status === 'completed' && 'text-green-500'} ${books.status === 'cancelled' && 'text-red-500'}`}>
                                <div className={`w-2 h-2 rounded-full ${books.status === 'pending' && 'bg-yellow-500'} ${books.status === 'completed' && 'bg-green-500'} ${books.status === 'cancelled' && 'bg-red-500'}`}></div>
                                <span>
                                    {capitalizeFirstLetter(books.status as string)}
                                </span>
                            </span>
                            <MdKeyboardArrowDown className="text-md"/> */}

                            <select
                                value={books.status}
                                onChange={(e) => updateStatus(books.id as string, e.target.value)}
                                className={`text-xs items-center pr-2 space-x-1 font-medium flex ${books.status === 'pending' && 'text-yellow-500'} ${books.status === 'completed' && 'text-green-500'} ${books.status === 'cancelled' && 'text-red-500'}`}
                            >
                                
                                {statusOptions.map((status) => (
                                    <option key={status} value={status}>
                                        {capitalizeFirstLetter(status as string)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div >
                        <MdKeyboardArrowRight className="text-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}