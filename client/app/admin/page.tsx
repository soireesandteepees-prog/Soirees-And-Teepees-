'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { useEffect } from "react";

export default function Admin() {
    const router = useRouter();
    const {isAuthenticated} = useSelector((state: AppState) => state.auth);

    
    useEffect(() => {
    if (!isAuthenticated) {
        router.push("/admin/login");
        console.log(isAuthenticated);
        }
    }, [isAuthenticated]);


    return(
        <div  className="my-24 mx-[5%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Link href='/admin/booking' className="w-full h-64 justify-center flex items-center-safe bg-primary_button/40 border-primary_button border-3  rounded-xl font-bold text-3xl hover:scale-105">
                        Manage Bookings
                </Link>
                <div className="w-full h-64 justify-center flex items-center-safe bg-primary_button/40 border-primary_button border-3 rounded-xl font-bold text-3xl hover:scale-105">
                    <Link href='/admin/gallery'>
                        Manage Gallery
                    </Link>
                </div>
            </div>
        </div>
    );
};