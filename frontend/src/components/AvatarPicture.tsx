import avatar1 from '../assets/anonumus_profile_pictures/avatar-1.jpg'
import avatar2 from '../assets/anonumus_profile_pictures/avatar-2.jpg'
import avatar3 from '../assets/anonumus_profile_pictures/avatar-3.jpg'
import avatar4 from '../assets/anonumus_profile_pictures/avatar-4.jpg'
import avatar5 from '../assets/anonumus_profile_pictures/avatar-5.jpg'
import avatar6 from '../assets/anonumus_profile_pictures/avatar-6.jpg'

const AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

const SIZES : {[key : number] : string} = {
    32: "w-32",
    40: "w-40",
    16: "w-16"
}

const BORDERS : {[key : string] : string} = {
    orange: "border-orange-600",
    white: "border-white"
}

function getRandomAvatar() {
    return AVATARS[Math.round(Math.random() * 5)]
}

interface AvatarPictureProps {
    source?: string,
    size?: number,
    borderColor?: string
    className? : string
}

export function AvatarPicture({source, size = 32, borderColor = "white", className}: AvatarPictureProps) {
    if (!source) return (
        <div className={`${SIZES[size]} ${BORDERS[borderColor]} rounded-full overflow-hidden border-[3px] ${className}`}>
            <img className="object-cover"
             src={getRandomAvatar()} alt="empty-avatar"/>
        </div>
    )
    return (
        <img className={`w-${size} h-${size} rounded-full`}
             src={source} alt="avatar"/>
    )
}