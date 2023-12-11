import {useState} from "react";
import arrowDown from '../assets/arrow-down.png'
import arrowUp from '../assets/arrow-up.png'

interface ToggleListItemParams {
    header: string,
    body: string,
    date?: Date
}

export function ToggleListItem({header, body, date} : ToggleListItemParams) {
    const [toggled, setToggled] = useState(false)

    const border = {
        true: 'border-amber-600 border-b-4',
        false: ''
    }

    function setContentView() {
        setToggled(prev => !prev)
    }

    return (
        <>
            <div className={`transition-all ease-in-out cursor-pointer flex flex-row items-center justify-between w-[90%] mt-20 mx-auto mx-5 pb-10 ${toggled ? border.false : border.true}`}
                onClick={setContentView}>
                <h2 className='font-semibold text-4xl text-[34px] text-gray-800'>
                    {header}
                    {/*TODO: Move to News component*/}
                    {date && <p className="mt-2 text-xl">{date.toLocaleDateString()}</p>}
                </h2>
                <div className="px-2 py-2 rounded-full bg-gray-300 text-3xl">
                    <img src={toggled ? arrowUp : arrowDown} className="w-10" alt="drop-arrow"/></div>
            </div>
            {toggled && <p className='font-semibold w-[90%] pb-40  text-[22px] text-gray-800 border-amber-600 border-b-4'>
                {body}
            </p>}
        </>
    )
}