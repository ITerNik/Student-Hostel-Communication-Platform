import {useState} from "react";
import arrowDown from '../assets/arrow-down.png'
import arrowUp from '../assets/arrow-up.png'
import {INewsBlock, IQuestionBlock} from "../models";

interface ToggleListItemParams {
    header: string,
    body: string,
    date? : Date
}

interface NewsBlockProps {
    block: INewsBlock
}

interface QuestionBlockProps {
    block: IQuestionBlock
}

const BORDER = 'border-amber-600 border-b-4'

function ToggleListItem({header, body, date} : ToggleListItemParams) {
    const [toggled, setToggled] = useState(false)

    function setContentView() {
        setToggled(prev => !prev)
    }

    return (
        <>
            <div className={`transition-all ease cursor-pointer flex flex-row items-center justify-between w-[90%] mt-20 mx-auto mx-5 pb-10 ${toggled ? "" : BORDER}`}
                onClick={setContentView}>
                <h2 className='font-semibold text-4xl text-[34px] text-gray-800'>
                    {header}
                    {date && <p className="mt-2 text-xl">{new Date(date).toLocaleDateString()}</p>}
                </h2>
                <div className="px-2 py-2 rounded-full bg-gray-300 text-3xl">
                    <img src={toggled ? arrowUp : arrowDown} className="w-10" alt="drop-arrow"/></div>
            </div>
            <p className={`transition-opacity ease duration-100 w-[90%] ${toggled ? 'max-h-100 opacity-1' : 'max-h-0 opacity-0'} pb-10 px-10 text-[22px] text-gray-800 border-amber-600 border-b-4`}>
                {body}
            </p>
        </>
    )
}

export function NewsBlock({block} : NewsBlockProps) {
    return (
        <ToggleListItem header={block.header} body={block.description} date={block.publishDate} />
    )
}

export function QuestionBlock({block} : QuestionBlockProps) {
    return (
        <ToggleListItem header={block.header} body={block.body || ""} />
    )
}