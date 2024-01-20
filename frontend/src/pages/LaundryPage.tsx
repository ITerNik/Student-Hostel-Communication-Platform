import {BoxStatus} from "../components/BoxStatus";
import {Modal} from "../components/Modal";
import {useEffect, useState} from "react";
import {IBox} from "../models.ts";

export function LaundryPage() {
    const [modal, setModal] = useState(false)
    const [box, setBox] = useState(0)
    const [boxesData, setBoxesData] = useState<IBox[]>([])

    async function loadData() {
        fetch('http://localhost:8080/boxes')
            .then(response => response.json())
            .then(response => setBoxesData(response), error => alert(error))
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
        <>
            <div className="bg-gray-100 flex flex-col font-intertight items-center justify-start mx-auto w-full">
                <h1 className="font-semibold mt-[87px] text-5xl text-gray-800 mb-10">
                    Прачечная
                </h1>
                <div className="text-stone-700 text-[26px] font-semibold flex justify-end gap-4 w-[80%] mb-10">
                    <h2>Найти бокс:</h2>
                    <input type="text" placeholder="№" className="border-orange-600 border-4 rounded-xl text-center w-[10%]"/>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center w-[90%] mb-20">
                    {boxesData.map(box => <BoxStatus state={box.status} key={box.id} onClick={() => {setModal(true); setBox(box.id)}}/>)}

                    {modal && <Modal title="Информация о заказе" onClose={() => setModal(false)}>
                        Бокс №{box}
                    </Modal>}
                </div>
            </div>
        </>
    )
}