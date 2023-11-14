import {Link} from 'react-router-dom'
import {ProfilePicture} from "./AvatarPicture";

export function NavBar() {
    return (
        <>
            <nav className="h-20 flex justify-center items-center bg-orange-300 shadow border-b-2 border-amber-600 px-20">
                <Link to="/register">
                    <ProfilePicture />
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