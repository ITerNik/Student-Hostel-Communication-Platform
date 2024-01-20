import boxReady from '../assets/laundry-state/washing-ready.jpg'
import boxBusy from '../assets/laundry-state/washing-busy.jpg'
import boxInProgress from '../assets/laundry-state/washing-in-progress.jpg'


const IMAGES : {[key: string]: string} = {
    READY: boxReady,
    BUSY: boxBusy,
    IN_PROGRESS: boxInProgress
}

const STATES : {[key: string]: string} = {
    READY: 'Бокс готов',
    BUSY: 'Свободен',
    IN_PROGRESS: 'В работе'
}

export function BoxStatus({state = 'busy', onClick} : {state: string, onClick: () => void}) {
    return (
        <div className="cursor-pointer rounded-xl border-orange-600 border-4 max-w-[250px] overflow-hidden relative"
        onClick={onClick}>
            <img src={IMAGES[state] || boxBusy} alt="box-state"
            className="object-cover"/>
            <h3 className="absolute top-0 right-0 bg-orange-600 text-white px-2 py-1 rounded-bl-xl">Бокс №</h3>
            <h3 className="absolute bottom-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-tr-xl">{STATES[state] || STATES['BUSY']}</h3>
        </div>
    )
}
