import {IPersonInfo} from "../models";


interface ContactInfoProps {
    info : IPersonInfo
    invert? : boolean
}

export function ContactInfo({info, invert} : ContactInfoProps) {
    const textAlign = invert ? 'text-right' : 'text-left'
    const infoClasses = ['flex-col flex text-stone-700 text-md font-semibold', textAlign]

    return (
        <div className={infoClasses.join(' ')}>
            <span>{info.name}</span>
            <span>{info.position}</span>
            <span>{info.phone}</span>
            <span className="text-amber-600">{info.mail}</span>
        </div>
    )
}
