import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../AdminComponents/adminNavbar.js';
import AdminSidebar from '../AdminComponents/adminSidebar.js';
const LayoutAdmin = () => {
    return (
        <div>
            <AdminSidebar />
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <AdminNavbar/>

                <div class="px-6 pt-6 2xl:container">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin;