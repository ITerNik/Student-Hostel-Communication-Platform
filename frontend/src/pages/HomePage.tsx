import {AvatarPicture} from "../components/AvatarPicture";
import {administrationMembers} from "../../administrationMembers";
import hostelFacade from "../assets/hostel-facade.png"
import lineThrough from "../assets/vector-zigzag-line.svg"
import {PersonDescription} from "../components/PersonDescription";

export function HomePage() {
    return (
        <div className="relative h-[2165px]">
            <div className="w-[80%] mx-auto py-[80px]">
                <div className="font-semibold">
                    <h1 className="text-[56px] leading-[56px]">Общежитие №4 <br /> Университета ИТМО</h1>
                    <p className="text-lg mt-5 text-orange-600">ул. Белорусская д.6, лит. А</p>
                </div>
                <div className="text-right mt-[320px]">
                    <h2 className="text-[56px] font-semibold text-orange-600">Общая информация</h2>
                    <h3 className="text-3xl">Администрация общежития</h3>
                </div>
                <div className="pl-16 flex flex-col mt-[80px]">
                    <PersonDescription size={40} info={administrationMembers[0]} align="start" />
                    <PersonDescription size={32} info={administrationMembers[1]} align="end" />
                    <PersonDescription size={40} info={administrationMembers[2]} align="start" />
                </div>
                <div className="px-10 flex flex-col mt-[240px]">
                    <PersonDescription size={40} info={administrationMembers[3]} align="start" />
                    <div className="flex items-center self-end w-[65%]">
                        <p className="text-orange-600 text-xl font-semibold mr-10">Подписывайся на <span className="underline">группу ВК Студсовета</span></p>
                        <AvatarPicture size={32} borderColor="orange"/>
                    </div>
                </div>
            </div>
            <img src={lineThrough} alt="line-through"
                     className="absolute top-[15%] w-[95%] h-[85%] mx-auto inset-x-0"/>
            <img src={hostelFacade} alt="hostel-facade"
            className="absolute top-[3%] h-[400px] object-cover w-[43%] rounded-bl-2xl rounded-tl-2xl right-0 border-[3px] border-amber-600"/>
        </div>
    )
}