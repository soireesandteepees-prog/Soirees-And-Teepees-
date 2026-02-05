'use client'

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Added usePathname
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "@/redux/store";
import { logout } from "@/redux/slice/authSlice";
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Image as ImageIcon, 
  LogOut, 
  TrendingUp,
  Clock,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { BookingState } from "@/redux/slice/BookingSlice";

export default function Admin() {
    const router = useRouter();
    const pathname = usePathname(); // Get current path for sidebar active state
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [bookings, setBookings] = useState<BookingState[]>([]);
    const { isAuthenticated } = useSelector((state: AppState) => state.auth);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/admin/login");
        } else {
            fetchDashboardData();
        }
    }, [isAuthenticated, router]);

    const fetchDashboardData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://soirees-and-teepees-production.up.railway.app/api/booking/allbookings');
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setBookings(data.allBookings || []);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    // Dynamic Data Calculations
    const stats = useMemo(() => {
        const total = bookings.length;
        const pending = bookings.filter(b => b.status === 'pending').length;
        
        // FIXED: Dynamically calculate total from successful payments only
        const totalPayments = bookings
            .filter(b => b.paymentStatus?.toLowerCase() === 'paid' || b.paymentStatus?.toLowerCase() === 'success')
            .reduce((sum, b) => sum + (Number(b.totalAmount) || 0), 0);

        return { total, pending, totalPayments };
    }, [bookings]);

    const handleLogout = () => {
        dispatch(logout());
        router.push("/admin/login");
    };

    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold text-primary_button tracking-tight">Admin Panel</h2>
                    <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mt-1">Soirées & Teepees</p>
                </div>
                
                <nav className="flex-1 p-4 space-y-1">
                    {/* Fixed Sidebar active logic */}
                    <NavItem href="/admin" icon={<LayoutDashboard size={18} />} label="Dashboard" active={pathname === '/admin'} />
                    <NavItem href="/admin/booking" icon={<CalendarCheck size={18} />} label="Bookings" active={pathname === '/admin/booking'} />
                    <NavItem href="/admin/gallery" icon={<ImageIcon size={18} />} label="Gallery" active={pathname === '/admin/gallery'} />
                </nav>

                <div className="p-4 border-t">
                    <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10">
                <header className="mb-10">
                    <h1 className="text-3xl font-black text-gray-900">Dashboard</h1>
                    <p className="text-gray-500 font-medium">Real-time overview of your booking performance.</p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {isLoading ? (
                        <><StatSkeleton /><StatSkeleton /><StatSkeleton /></>
                    ) : (
                        <>
                            <StatCard 
                                title="Total Bookings" 
                                value={stats.total.toString()} 
                                icon={<CalendarCheck className="text-blue-600" />} 
                                trend="Lifetime events" 
                            />
                            <StatCard 
                                title="Pending Approval" 
                                value={stats.pending.toString()} 
                                icon={<Clock className="text-orange-500" />} 
                                trend="Needs action"
                                highlight={stats.pending > 0}
                            />
                            {/* DYNAMIC REVENUE CARD */}
                            <StatCard 
                                title="Total Payments" 
                                value={`₦${stats.totalPayments.toLocaleString()}`} 
                                icon={<ShieldCheck className="text-green-600" />} 
                                trend="Confirmed Revenue" 
                            />
                        </>
                    )}
                </div>

                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Management Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <ToolCard 
                        href="/admin/booking" 
                        title="Manage Bookings" 
                        desc="View full schedule, update status, and track payments."
                        icon={<CalendarCheck size={32} />}
                    />
                    <ToolCard 
                        href="/admin/gallery" 
                        title="Update Gallery" 
                        desc="Add new party setups and keep your portfolio fresh."
                        icon={<ImageIcon size={32} />}
                    />
                </div>
            </main>
        </div>
    );
};

// --- Updated NavItem to fix visibility issues ---
function NavItem({ href, icon, label, active = false }: { href: string, icon: any, label: string, active?: boolean }) {
    return (
        <Link 
            href={href} 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                active 
                ? 'bg-primary_button text-black shadow-md shadow-primary_button/20' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`}
        >
            <span className={active ? "text-black" : "text-gray-400"}>{icon}</span>
            {label}
        </Link>
    );
}

// (StatCard, ToolCard, and StatSkeleton remain same as previous high-quality version)
function StatCard({ title, value, icon, trend, highlight = false }: { title: string, value: string, icon: any, trend: string, highlight?: boolean }) {
    return (
        <div className={`bg-white p-6 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1 ${highlight ? 'border-orange-200 bg-orange-50/30' : 'border-gray-100'}`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${highlight ? 'bg-white shadow-sm' : 'bg-gray-50'}`}>{icon}</div>
                <span className={`text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded-full ${highlight ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>{trend}</span>
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{title}</p>
            <h3 className="text-3xl font-black text-gray-900 mt-1">{value}</h3>
        </div>
    );
}

function ToolCard({ href, title, desc, icon }: { href: string, title: string, desc: string, icon: any }) {
    return (
        <Link href={href} className="group flex items-center justify-between bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary_button/20 transition-all">
            <div className="flex items-center gap-5">
                <div className="text-primary_button bg-primary_button/5 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div>
                    <h4 className="text-lg font-bold text-gray-800">{title}</h4>
                    <p className="text-gray-400 text-sm max-w-[200px] leading-tight">{desc}</p>
                </div>
            </div>
            <ChevronRight className="text-gray-300 group-hover:text-primary_button group-hover:translate-x-1 transition-all" />
        </Link>
    );
}

function StatSkeleton() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 animate-pulse">
            <div className="flex justify-between mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
                <div className="w-16 h-5 bg-gray-100 rounded-full"></div>
            </div>
            <div className="w-24 h-4 bg-gray-100 rounded mb-2"></div>
            <div className="w-16 h-8 bg-gray-200 rounded"></div>
        </div>
    );
}