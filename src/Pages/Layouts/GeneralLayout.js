import React from 'react'
import { Outlet } from 'react-router-dom'
import BreadCrumb from '../../Components/BreadCrumb'
import Navbar from '../../Components/Navbar'
function GeneralLayout() {
    return (
        <>
            <Navbar />
             <br />
             <BreadCrumb />
             <br/>
            <Outlet />
        </>
    )
}

export default GeneralLayout