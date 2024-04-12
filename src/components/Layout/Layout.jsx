import { Suspense } from "react"
import { AppBar } from "../AppBar/AppBar"
import { Outlet } from "react-router-dom"
import { Loader } from "../Loader/Loader"


export const Layout = () =>{ 
    return(
        <div>
            <Suspense fallback={<Loader/>}>
                <AppBar/>
            <Outlet />
            </Suspense>
        </div>
    )
}