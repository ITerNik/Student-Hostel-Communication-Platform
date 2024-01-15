import {NewsBlock} from "../components/ToggleListItem";
import React, {useEffect, useState} from "react";
import {INewsBlock} from "../models.ts";

export function NewsPage() {
    const [newsStorage, setNewsStorage] = useState<INewsBlock[]>([])
    async function loadData() {
        fetch("http://localhost:8080/news")
            .then(response => response.json())
            .then(response => setNewsStorage(response), error => alert(error))
    }

    async function sendData(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        formData.append("publishDate", new Date().toJSON())
        formData.append("author", '1')

        fetch('http://localhost:8080/news', {
            method : 'POST',
            body : formData
        }).then(response => response.json())
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
        <>
            <div className="bg-gray-100 flex flex-col font-intertight items-center justify-start mx-auto w-full">
                <h1 className="font-semibold text-5xl text-gray-800 py-20">
                    Актуальные новости
                </h1>
                <div className="w-[80%]">
                    <h2 className="font-semibold pb-10 text-3xl text-gray-800 w-full">
                        Оставить новость
                    </h2>
                    <form method="POST" action="http://localhost:8080/news" onSubmit={sendData}>
                        <input type="text" placeholder="Заголовок" className="w-full rounded-xl border-2 border-amber-600 text-2xl p-4 mb-4 font-semibold" name="header"/>
                        <textarea className="w-full resize-none h-40 p-4 rounded-xl border-2 border-amber-600 text-xl" placeholder="Что нового?" name="description"/>
                        <button className="bg-amber-600 text-2xl text-white w-full mt-4 py-3 rounded-xl">
                            Опубликовать
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-start w-[90%] mb-10">

                    {newsStorage.map((block) => <NewsBlock block={block} key={block.id}/>)}
                </div>
            </div>
        </>
    )
}