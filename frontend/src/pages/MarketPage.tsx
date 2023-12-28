import {GoodItem} from "../components/GoodItem";
import {marketPlace} from "../repositories/marketPlace";
import {Modal} from "../components/Modal";
import {useState} from "react";

export function MarketPage() {
    const [modal, setModal] = useState(false)
    const [photo, setPhoto] = useState('')
    return (
        <>
            <div className="bg-gray-100 flex flex-colfont-intertight items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full mb-20">
                    <h1 className="font-semibold mt-[87px] text-5xl text-gray-800 mb-20">
                        Барахолка
                    </h1>
                    <div className="w-[80%] flex-col flex gap-6">
                        {marketPlace.map(good => <GoodItem item={good} onClick={() => {setModal(true); setPhoto(good.image || "")}} key={good.id} />)}
                    </div>
                    {modal && <Modal title="Фото товара" onClose={() => setModal(false)}>
                            <img className="w-[400px] h-[400px]" src={photo} alt="photo-image"/>
                    </Modal>}
                </div>
            </div>
        </>
    )
}