import {Link} from "react-router-dom";
import {AvatarPicture} from "./AvatarPicture";

export function Header() {
    return (
        <header>
            <div>
                <nav className="h-20 flex justify-between sm:justify-center items-center bg-orange-300 shadow border-b-2 border-amber-600 px-[30px]">
                    <Link to="/register">
                        <AvatarPicture size={16} borderColor="white" />
                    </Link>
                    <div className="hidden sm:flex justify-between mx-auto text-stone-700 text-xl font-semibold w-[75%] md:w-[60%]">
                        <Link to="/"><span className="hover:text-white">Главная</span></Link>
                        <Link to="/news"><span className="hover:text-white">Новости</span></Link>
                        <Link to="/faq"><span className="hover:text-white">F&Q</span></Link>
                        <Link to="/laundry"><span className="hover:text-white">Прачечная</span></Link>
                        <Link to="/market"><span className="hover:text-white">Барахолка</span></Link>
                        <Link to="/requests"><span className="hover:text-white">Заявки</span></Link>
                    </div>
                    <div className="flex sm:hidden font-semibold items-center">
                        menu
                    </div>
                </nav>
            </div>
        </header>
    )
}