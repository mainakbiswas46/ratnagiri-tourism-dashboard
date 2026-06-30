import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="flex min-h-screen bg-slate-50 text-slate-800 font-sans">

            <Sidebar
                open={sidebarOpen}
                setOpen={setSidebarOpen}
            />

            <main
                className={`flex-1 p-8 transition-all duration-300 ${
                    sidebarOpen ? "ml-64" : "ml-0"
                }`}
            >

                <Outlet />

            </main>

        </div>

    );

}