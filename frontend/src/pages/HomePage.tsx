import {AvatarPicture} from "../components/AvatarPicture";
import {ContactInfo} from "../components/ContactInfo";
import {administrationMembers} from "../../administrationMembers";
import hostelFacade from "../assets/hostel-facade.png"
import vectorLine from  "../assets/bg-line-around.svg"

export function HomePage() {
    return (
        <div className="block" >
            <div className="p-16 w-full">
                <h1 className="text-stone-700 text-[46px] font-bold mb-6 w-4/6">Общежитие №4 Университета ИТМО</h1>
                <p className="text-amber-600 text-xl font-semibold">ул. Белорусская д.6, лит. А</p>
            </div>
            <img className="absolute rounded-2xl border-2 border-orange-600 w-1/2 -right-20 top-28"
                 src={hostelFacade} alt="hostel-facade"/>
            <div className="block py-40 px-32 bg-cover" style={{
                backgroundImage : `url(${vectorLine})`

            }}>
                <div className="block mb-16 pt-10 ml-72">
                    <h1 className="text-amber-600 text-[46px] font-bold w-4/6 mb-0 w-full">Общая информация</h1>
                    <p className="text-stone-700 font-semibold text-2xl">Администрация общежития</p>
                </div>
                <div className=" w-full inline-flex gap-x-10 items-center">
                    <AvatarPicture />
                    <ContactInfo info = {administrationMembers[0]} />
                </div>
                <div className=" ml-60 inline-flex gap-x-10 items-center">
                    <ContactInfo info={administrationMembers[1]} invert={true}/>
                    <AvatarPicture />
                </div>
                <div className="w-full inline-flex gap-x-10 items-center mb-16">
                    <AvatarPicture />
                    <ContactInfo info={administrationMembers[2]} />
                </div>
                <p className="w-full text-stone-700 font-semibold text-2xl mb-14">Студенческий совет общежития</p>
                <div className=" inline-flex gap-x-10 items-center">
                    <AvatarPicture />
                    <ContactInfo info={administrationMembers[3]} />
                </div>
                <div className="ml-60 inline-flex gap-x-10 items-center">
                    <p className="text-stone-700 text-md font-semibold">Подписывайся на группу ВК Студсовета</p>
                    <AvatarPicture />
                </div>
            </div>
        </div>
    )
}