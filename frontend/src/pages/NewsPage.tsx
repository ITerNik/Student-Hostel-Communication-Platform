import {NewsBlock} from "../components/ToggleListItem";
import {breakingNews} from "../breakingNews";

export function NewsPage() {
    return (
        <>
            <div className="bg-gray-100 flex flex-col font-intertight items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full mb-20">
                    <h1 className="font-semibold mt-[87px] text-5xl text-gray-800 mb-20">
                        Актуальные новости
                    </h1>
                    {breakingNews.map((block) => <NewsBlock block={block} key={block.id}/>)}
                </div>
            </div>
        </>
    )
}