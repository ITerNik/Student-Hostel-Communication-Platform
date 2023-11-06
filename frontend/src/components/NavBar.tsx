import React from "react";
import {Link} from 'react-router-dom'

export function NavBar() {
    return (
        <>
            <nav className="h-20 flex justify-center items-center bg-orange-300 shadow border-b-2 border-amber-600 px-20">
                <Link to="/authorization">
                    <div className="p-3.5  bg-gray-50 rounded-full justify-start items-start gap-2.5 inline-flex">
                        <div className=" w-8 h-8 relative" />
                    </div>
                </Link>
                <div className="flex justify-between mx-auto gap-x-12 text-stone-700 text-xl font-semibold">
                    <Link to="/news"><span className="hover:text-white">Новости</span></Link>
                    <Link to="/faq"><span className="hover:text-white">F&Q</span></Link>
                    <Link to="/laundry"><span className="hover:text-white">Прачечная</span></Link>
                    <Link to="/market"><span className="hover:text-white">Барахолка</span></Link>
                    <Link to="/requests"><span className="hover:text-white">Заявки</span></Link>
                </div>
            </nav>
        </>
    )
}