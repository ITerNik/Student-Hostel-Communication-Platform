import {QuestionBlock} from "../components/ToggleListItem";
import {questions} from "../repositories/questions";

export function FAQPage() {

    return (
        <>
            <div className="bg-gray-100 flex flex-col font-intertight items-center justify-start mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full mb-20">
                <h1 className="font-semibold mt-[87px] text-5xl text-gray-800 mb-20">
                    Ответы на часто задаваемые вопросы
                </h1>
                {questions.map((block) => <QuestionBlock block={block} />)}
            </div>
        </div>
        </>
    )
}