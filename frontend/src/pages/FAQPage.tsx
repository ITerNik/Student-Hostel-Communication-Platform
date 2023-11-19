
export function FAQPage() {
    return (
        <>
            <div className="bg-gray-100 flex flex-col font-intertight items-center justify-start mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full mb-20">
                <h1 className="font-semibold mt-[87px] text-5xl text-gray-800 mb-20">
                    Ответы на часто задаваемые вопросы
                </h1>
                <div className="flex flex-row items-center justify-between w-[90%] mt-20 mx-auto mx-5 border-amber-600 border-b-4 pb-16">
                    <h2 className="font-semibold text-[34px] text-gray-800">
                        Вопрос
                    </h2>
                    <div className="px-4 py-2 rounded-full bg-gray-300 text-3xl">+</div>
                </div>
                <div className="flex flex-row items-center justify-between w-[90%] mt-20 mx-auto mx-5 border-amber-600 border-b-4 pb-16">
                    <h2 className="font-semibold text-[34px] text-gray-800">
                        Вопрос
                    </h2>
                    <div className="px-4 py-2 rounded-full bg-gray-300 text-3xl">+</div>
                </div>
                <div className="flex flex-row items-center justify-between w-[90%] mt-20 mx-auto mx-5 pb-16">
                    <h2 className="font-semibold text-4xl sm:text-[32px] md:text-[34px] text-gray-800">
                        Вопрос
                    </h2>
                    <div className="px-5 py-2 rounded-full bg-gray-300 text-3xl">-</div>
                </div>
                <p className="font-semibold w-[90%] pb-40  text-[22px] text-gray-800 border-amber-600 border-b-4">
                    Описание - ответ на вопрос
                </p>
            </div>
        </div>
        </>
    )
}