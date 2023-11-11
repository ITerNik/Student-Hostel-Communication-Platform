import React from "react";
import {Link} from 'react-router-dom'
import {AvatarPicture} from "./AvatarPicture";

export function NavBar() {
    return (
        <>
            <nav className="h-20 flex justify-center items-center bg-orange-300 shadow border-b-2 border-amber-600 px-20">
                <Link to="/authorization">
                    <AvatarPicture size={14} />
                    {/*<div className="bg-gray-300 rounded-full h-14 w-14" />*/}
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