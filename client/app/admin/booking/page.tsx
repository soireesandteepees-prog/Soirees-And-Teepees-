'use client'

import { useState, useEffect, useMemo } from "react"
import Link from "next/link";
import { BookingState } from "@/redux/slice/BookingSlice";
import { 
  FaSpinner, FaSearch, FaCalendarAlt, FaUser, 
  FaPhoneAlt, FaEnvelope, FaArrowLeft, FaList, FaColumns,
  FaMapMarkerAlt, FaBirthdayCake, FaInfoCircle, FaClock, FaUsers, FaChild, FaPaintBrush, 
  FaPlusCircle, FaRegCommentDots, FaCreditCard
} from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

type StatusType = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export default function Booking() {
    const [view, setView] = useState<'board' | 'list'>('board');
    const [bookings, setBookings] = useState<BookingState[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBooking, setSelectedBooking] = useState<BookingState | null>(null);
    const [activeTab, setActiveTab] = useState<StatusType>('pending');

    const fetchBookings = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://soirees-and-teepees-production.up.railway.app/api/booking/allbookings');
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setBookings(data.allBookings);
            console.log(data);
        } catch (error) {
            toast.error("Could not load bookings");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => { fetchBookings(); }, []);

    const filteredBookings = useMemo(() => {
        return bookings.filter(book => 
            book.parentName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.email?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [bookings, searchQuery]);

    const counts = {
        pending: filteredBookings.filter(b => b.status === 'pending').length,
        confirmed: filteredBookings.filter(b => b.status === 'confirmed').length,
        completed: filteredBookings.filter(b => b.status === 'completed').length,
        cancelled: filteredBookings.filter(b => b.status === 'cancelled').length,
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header & Controls */}
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex items-center justify-between">
                        <Link href="/admin" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary_button transition-colors">
                            <FaArrowLeft /> Back
                        </Link>
                        <div className="flex bg-slate-200/50 p-1 rounded-lg">
                            <button 
                                onClick={() => setView('board')}
                                className={`p-2 rounded-md transition-all ${view === 'board' ? 'bg-white shadow-sm text-primary_button' : 'text-slate-500'}`}
                                title="Board View"
                            >
                                <FaColumns size={16} />
                            </button>
                            <button 
                                onClick={() => setView('list')}
                                className={`p-2 rounded-md transition-all ${view === 'list' ? 'bg-white shadow-sm text-primary_button' : 'text-slate-500'}`}
                                title="List View"
                            >
                                <FaList size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Events Bookings</h1>
                        <div className="relative">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input 
                                type="text"
                                placeholder="Search bookings..."
                                className="pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl w-full md:w-80 focus:ring-2 focus:ring-primary_button/20 outline-none transition-all shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {view === 'board' && (
                    <div className="flex gap-2 border-b mb-4 border-slate-200 overflow-x-auto pb-1 no-scrollbar">
                        {(['pending', 'confirmed', 'completed', 'cancelled'] as StatusType[]).map((status) => (
                            <button
                                key={status}
                                onClick={() => setActiveTab(status)}
                                className={`px-6 py-3 text-sm font-bold capitalize transition-all relative whitespace-nowrap ${
                                    activeTab === status ? 'text-primary_button' : 'text-slate-400 hover:text-slate-600'
                                }`}
                            >
                                {status}
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${activeTab === status ? 'bg-primary_button/10' : 'bg-slate-100'}`}>
                                    {counts[status]}
                                </span>
                                {activeTab === status && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary_button rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                )}

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-24">
                        <FaSpinner className="animate-spin text-primary_button text-4xl mb-4" />
                        <p className="text-slate-400 font-medium">Loading your events...</p>
                    </div>
                ) : (
                    <>
                        {view === 'board' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {filteredBookings
                                    .filter(b => b.status === activeTab)
                                    .map(book => (
                                        <div 
                                            key={book.id} 
                                            onClick={() => setSelectedBooking(book)}
                                            className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${getStatusColor(book.status as string)}`}>
                                                    {book.packageType}
                                                </div>
                                                <p className="font-black text-slate-900 text-lg">₦{book.totalAmount?.toLocaleString()}</p>
                                            </div>
                                            <h3 className="font-bold text-xl text-slate-800 group-hover:text-primary_button transition-colors truncate">
                                                {book.parentName}
                                            </h3>
                                            <p className="text-sm text-slate-400 mb-6 truncate">{book.email}</p>
                                            
                                            <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-[11px] font-bold">
                                                <span className="flex items-center gap-1.5 text-slate-500">
                                                    <FaCalendarAlt className="text-slate-300"/> {new Date(book.createdAt as string).toLocaleDateString()}
                                                </span>
                                                <div className="flex gap-2">
                                                    {/* Display Payment Type (Deposit/Full) */}
                                                    <span className="bg-slate-100 text-slate-500 px-2 py-1 rounded-lg uppercase">
                                                        {book.paymentType || 'N/A'}
                                                    </span>
                                                    {/* Improved Payment Status Badge */}
                                                    <span className={`px-2 py-1 rounded-lg ${getPaymentStatusClass(book.paymentStatus)}`}>
                                                        {book.paymentStatus?.replace('_', ' ').toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                
                                {filteredBookings.filter(b => b.status === activeTab).length === 0 && (
                                    <div className="col-span-full py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                                        <p className="text-slate-400 font-medium">No {activeTab} bookings found.</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden overflow-x-auto shadow-sm animate-in fade-in duration-500">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-slate-50 border-b border-slate-200">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Client</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Package</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Amount</th>
                                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                            <th className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {filteredBookings.map(book => (
                                            <tr key={book.id} className="hover:bg-slate-50/80 transition-colors cursor-pointer group" onClick={() => setSelectedBooking(book)}>
                                                <td className="px-6 py-4">
                                                    <p className="font-bold text-slate-900">{book.parentName}</p>
                                                    <p className="text-xs text-slate-400">{book.email}</p>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-slate-600 font-medium">{book.packageType}</td>
                                                <td className="px-6 py-4 text-sm font-black text-slate-900">₦{book.totalAmount?.toLocaleString()}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${getStatusColor(book.status as string)}`}>
                                                        {book.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <FaInfoCircle className="text-slate-300 group-hover:text-primary_button transition-colors inline" />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Detailed Dialog Modal */}
            {selectedBooking && (
                <BookingDetailModal 
                    book={selectedBooking} 
                    onClose={() => setSelectedBooking(null)} 
                    refresh={fetchBookings} 
                />
            )}
        </div>
    )
}

/** * BOARD COLUMN COMPONENT 
 */
// function BoardColumn({ title, status, bookings, onOpen }: { title: string, status: string, bookings: BookingState[], onOpen: (b: BookingState) => void }) {
//     const columnBookings = bookings.filter(b => b.status === status);
//     return (
//         <div className="flex flex-col gap-4">
//             <div className="flex items-center justify-between px-2">
//                 <h3 className="font-bold text-slate-900 flex items-center gap-2">
//                     {title} <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-medium">{columnBookings.length}</span>
//                 </h3>
//             </div>
//             <div className="flex flex-col gap-3 min-h-[500px] bg-slate-100/50 p-3 rounded-2xl border border-dashed border-slate-200">
//                 {columnBookings.map(book => (
//                     <div 
//                         key={book.id} 
//                         onClick={() => onOpen(book)}
//                         className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary_button/30 transition-all cursor-pointer group"
//                     >
//                         <div className="flex justify-between items-start mb-2">
//                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{book.packageType}</span>
//                             <p className="font-black text-slate-900 text-sm">₦{book.totalAmount?.toLocaleString()}</p>
//                         </div>
//                         <p className="font-bold text-slate-800 group-hover:text-primary_button transition-colors truncate">{book.parentName}</p>
//                         <div className="flex items-center gap-3 mt-3 text-[11px] text-slate-500 font-medium">
//                             <span className="flex items-center gap-1"><FaCalendarAlt size={10} className="text-slate-300"/> {new Date(book.createdAt as string).toLocaleDateString()}</span>
//                             <span className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold ${book.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
//                                 {book.paymentStatus}
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//                 {columnBookings.length === 0 && (
//                     <div className="flex items-center justify-center h-20 text-slate-400 text-xs font-medium italic">
//                         No bookings here
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


/**
 * BOOKING DETAIL DIALOG (SHADCN STYLE)
 */
function BookingDetailModal({ book, onClose, refresh }: { book: BookingState, onClose: () => void, refresh: () => void }) {
    const payments = book.Payments || [];
    const updateStatus = async (newStatus: string) => {
        const loadingToast = toast.loading("Updating status...");
        try {
            const response = await fetch(`https://soirees-and-teepees-production.up.railway.app/api/booking/${book.id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if(!response.ok) throw new Error();
            toast.success("Status Updated", { id: loadingToast });
            refresh();
            onClose();
        } catch (err) {
            toast.error("Failed to update", { id: loadingToast });
        }
    };

    const handleResendBalance = async () => {
        const loadingToast = toast.loading("Generating link...");
        try {
            const response = await fetch(`https://soirees-and-teepees-production.up.railway.app/api/booking/${book.id}/resend-balance`, {
                method: 'POST'
            });
            if (!response.ok) throw new Error();
            toast.success("Balance link sent to client!", { id: loadingToast });
        } catch (err) {
            toast.error("Failed to send link", { id: loadingToast });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Booking Details</h2>
                        <p className="text-[10px] text-slate-400 font-mono mt-1">ID: {book.id}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><IoClose size={24}/></button>
                </div>
                
                <div className="p-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Customer Section */}
                        <div className="space-y-6">
                            <section>
                                <label className="text-[10px] uppercase font-bold text-primary_button block mb-4 tracking-widest">Customer Information</label>
                                <div className="space-y-4">
                                    <DetailItem icon={<FaUser/>} label="Parent Name" value={book.parentName} />
                                    <DetailItem icon={<FaEnvelope/>} label="Email Address" value={book.email} />
                                    <DetailItem icon={<FaPhoneAlt/>} label="Phone Number" value={book.phone} />
                                    <DetailItem icon={<FaMapMarkerAlt/>} label="Location" value={`${book.address}, ${book.city}`} />
                                </div>
                            </section>

                            <section>
                                <label className="text-[10px] uppercase font-bold text-primary_button block mb-4 tracking-widest">Child's Details</label>
                                <div className="space-y-4">
                                    <DetailItem icon={<FaChild/>} label="Child's Name" value={book.childName} />
                                    <DetailItem icon={<FaBirthdayCake/>} label="Child's Age" value={`${book.childAge} Years Old`} />
                                </div>
                            </section>
                        </div>

                        {/* Event Section */}
                        <div className="space-y-6">
                            <section>
                                <label className="text-[10px] uppercase font-bold text-primary_button block mb-4 tracking-widest">Event Logistics</label>
                                <div className="space-y-4">
                                    <DetailItem icon={<FaBirthdayCake/>} label="Package Type" value={book.packageType} />
                                    <DetailItem icon={<FaCalendarAlt/>} label="Event Date" value={book.eventDate} />
                                    <DetailItem icon={<FaClock/>} label="Time & Duration" value={`${book.eventTime} (${book.eventDuration} Hours)`} />
                                    <DetailItem icon={<FaUsers/>} label="Guest Count" value={`${book.guestCount} Guests`} />
                                </div>
                            </section>

                            <section>
                                <label className="text-[10px] uppercase font-bold text-primary_button block mb-4 tracking-widest">Customization</label>
                                <div className="space-y-4">
                                    <DetailItem 
                                        icon={<FaPaintBrush/>} 
                                        label="Theme" 
                                        value={Array.isArray(book.theme) && book.theme.length > 0 ? book.theme.join(", ") : "Default Theme"} 
                                    />
                                    <DetailItem 
                                        icon={<FaPlusCircle/>} 
                                        label="Add-Ons" 
                                        value={Array.isArray(book.addOns) && book.addOns.length > 0 ? book.addOns.join(", ") : "None"} 
                                    />
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Full Width Special Requests */}
                    {book.specialRequests && (
                        <div className="mt-8 pt-6 border-t border-slate-100">
                             <DetailItem icon={<FaRegCommentDots/>} label="Special Requests" value={book.specialRequests} />
                        </div>
                    )}

                    {/* Amount Card */}
                    <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <label className="text-[10px] uppercase font-bold text-primary_button block mb-4 tracking-widest">Financial Summary</label>

                        {book.paymentStatus !== 'paid' && (
                            <button 
                                onClick={handleResendBalance}
                                className="flex items-center gap-2 text-[10px] font-bold bg-[#d6665b] hover:bg-[#d6665b]/80 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-primary_button text-white transition-all shadow-sm"
                            >
                                <FaEnvelope size={10} /> RESEND BALANCE LINK
                            </button>
                        )}

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-xs font-medium text-slate-500 mb-1">Total</p>
                                <p className="text-xl font-black text-slate-900">₦{book.totalAmount?.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500 mb-1">Payment Type</p>
                                <p className="text-sm font-bold text-slate-700 capitalize">
                                    {book.paymentType === 'deposit' ? '⚡ Deposit Only' : '✅ Full Payment'}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500 mb-1">Status</p>
                                <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${getPaymentStatusClass(book.paymentStatus)}`}>
                                    {book.paymentStatus?.replace('_', ' ')}
                                </span>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-medium text-slate-500 mb-1">Balance Due</p>
                                <p className={`text-sm font-bold ${book.paymentStatus === 'paid' ? 'text-green-600' : 'text-red-500'}`}>
                                    ₦{book.paymentStatus === 'paid' ? '0' : (book.totalAmount! / 2).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Status Update */}
                    <div className="mt-8">
                        <label className="text-xs font-bold text-slate-700 block mb-3">Update Pipeline Status</label>
                        <select 
                            defaultValue={book.status}
                            onChange={(e) => updateStatus(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 font-bold text-slate-700 focus:ring-4 focus:ring-primary_button/10 outline-none shadow-sm"
                        >
                            <option value="pending">⏳ Pending Review</option>
                            <option value="confirmed">📧 Confirmed (Sends Balance Link)</option>
                            <option value="completed">🎉 Completed (Sends Receipt)</option>
                            <option value="cancelled">❌ Cancelled / Void</option>
                        </select>
                    </div>
                    
                    <div className="mt-8 border-t border-slate-100 pt-6">
                        <label className="text-[10px] uppercase font-bold text-slate-400 block mb-4 tracking-widest">
                            Payment History & Logs
                        </label>
                        
                        <div className="space-y-3">
                            {payments.length > 0 ? payments.map((pay: any) => (
                                <div key={pay.id} className="flex items-center justify-between bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-full ${pay.type === 'balance' ? 'bg-green-50 text-green-500' : 'bg-blue-50 text-blue-500'}`}>
                                            <FaCreditCard size={12}/>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-700 capitalize">{pay.type} Payment</p>
                                            <p className="text-[10px] text-slate-400">{new Date(pay.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-slate-900">₦{pay.amount?.toLocaleString()}</p>
                                        <span className="text-[9px] font-bold text-green-500 uppercase">Succeeded</span>
                                    </div>
                                </div>
                            )) : (
                                <div className="text-center py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                    <p className="text-[10px] text-slate-400 italic">No payment records found for this booking.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

function DetailItem({ icon, label, value }: { icon: any, label: string, value: any }) {
    return (
        <div className="flex gap-3">
            <div className="text-slate-300 mt-1">{icon}</div>
            <div>
                <p className="text-[10px] font-medium text-slate-400">{label}</p>
                <p className="text-sm font-bold text-slate-700 leading-tight">{value || 'N/A'}</p>
            </div>
        </div>
    );
}

function getPaymentStatusClass(status: string | undefined) {
    switch(status?.toLowerCase()) {
        case 'paid': return 'bg-green-50 text-green-600';
        case 'partially_paid': return 'bg-blue-50 text-blue-600 border border-blue-100';
        case 'failed': return 'bg-red-50 text-red-600';
        default: return 'bg-orange-50 text-orange-600';
    }
}

function getStatusColor(status: string) {
    switch(status?.toLowerCase()) {
        case 'completed': return 'bg-green-50 text-green-600 border-green-100';
        case 'confirmed': return 'bg-blue-50 text-blue-600 border-blue-100'; // Added for your new status
        case 'cancelled': return 'bg-red-50 text-red-600 border-red-100';
        default: return 'bg-orange-50 text-orange-600 border-orange-100';
    }
}