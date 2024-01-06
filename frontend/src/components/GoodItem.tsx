import {ITender} from "../models";

interface GoodItemProps {
    item: ITender,
    onClick: () => void
}

export function GoodItem({item, onClick}: GoodItemProps) {
    return (
        <div className="border-amber-600 rounded-xl border-4 flex flex-wrap w-full overflow-hidden">
            <h2 className="text-center p-2 text-white font-semibold bg-amber-600 text-2xl w-full">{item.name}</h2>
            <div className="flex justify-between w-full p-6">
                <img className="cursor-pointer rounded-xl w-40 h-40" src={item.image} alt="photo-image" onClick={onClick}/>
                <div className="flex flex-col items-start justify-around w-[50%]">
                    <p>{item.description || "Без описания"}</p>
                    <p className="w-full text-center bg-orange-300 text-white rounded-xl p-2">{item.cost}р</p>
                </div>
                <div className="flex flex-col justify-center w-[20%] gap-4">
                    <button className="w-full bg-blue-400 text-white rounded-xl p-2">Забронировать</button>
                    <button className="w-full bg-green-400 text-white rounded-xl p-2">Написать</button>
                </div>
            </div>
        </div>
    )
}