import {AvatarPicture} from "./AvatarPicture";
import {ContactInfo} from "./ContactInfo";
import {IPersonInfo} from "../models";

interface PersonDescriptionProps {
    size: number,
    info: IPersonInfo,
    align?: string
}

export function PersonDescription({size, info, align = ""} : PersonDescriptionProps) {
    const invert: boolean = align === "end"
    return (
        <div className={`text-lg flex w-[55%] flex-row items-center self-${align}`}>
            {!invert && <AvatarPicture borderColor="orange"
            className="mr-10 w-32"/>}
            <ContactInfo info={info} invert={invert}/>
            {invert && <AvatarPicture size={size} borderColor="orange"
                                               className="ml-10"/>}
        </div>
    )
}