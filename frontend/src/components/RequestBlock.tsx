import arrowGo from "../assets/arrow-go.png";
import {Link} from "react-router-dom";

export function RequestBlock({header}: { header: string }) {
    return (
        <Link to="/"
              className='transition-all ease cursor-pointer flex flex-row items-center justify-between w-[90%] mt-20 mx-auto mx-5 pb-20 border-orange-600 border-b-4'>
            <h2 className='font-semibold text-4xl text-[34px] text-gray-800'>
                {header}
            </h2>
            <div className="px-2 py-2 rounded-full bg-gray-300 text-3xl">
                <img src={arrowGo} className="w-10" alt="drop-arrow"/>
            </div>
        </Link>
    )
}