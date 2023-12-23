import {RequestBlock} from "../components/RequestBlock";

export function RequestsPage() {
    return (
        <>
            <div className="bg-gray-100 flex flex-col font-intertight items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full mb-20">
                    <h1 className="font-semibold mt-[87px] text-5xl text-gray-800 mb-20">
                        Заявки
                    </h1>
                    <RequestBlock header="Заявка на мелкий ремонт в жилых помещениях"/>
                    <RequestBlock header="Заявка на допуск гостей"/>
                </div>
            </div>
        </>
    )
}