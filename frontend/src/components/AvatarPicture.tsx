import avatar1 from '../assets/anonumus_profile_pictures/avatar-1.jpg'
import avatar2 from '../assets/anonumus_profile_pictures/avatar-2.jpg'
import avatar3 from '../assets/anonumus_profile_pictures/avatar-3.jpg'
import avatar4 from '../assets/anonumus_profile_pictures/avatar-4.jpg'
import avatar5 from '../assets/anonumus_profile_pictures/avatar-5.jpg'
import avatar6 from '../assets/anonumus_profile_pictures/avatar-6.jpg'

const AVATARS = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

function getRandomAvatar() {
    return AVATARS[Math.round(Math.random() * 5)]
}

interface AvatarPictureProps {
    source?: string,
    size: number,
    borderColor?: string
    className? : string
}

export function AvatarPicture({source, size, borderColor, className}: AvatarPictureProps) {
    if (!source) return (
        <div className={`w-${size} rounded-full overflow-hidden border-${borderColor} border-[3px] ${className}`}>
            <img className="object-cover"
             src={getRandomAvatar()} alt="empty-avatar"/>
        </div>
    )
    return (
        <img className={`w-${size} h-${size} rounded-full`}
             src={source} alt="avatar"/>
    )
}