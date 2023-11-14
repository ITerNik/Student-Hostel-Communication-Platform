
interface AvatarPictureProps {
    source?: string
}

export function AvatarPicture({source}: AvatarPictureProps) {
    if (!source) return (
        <div className={`w-32
         h-32 rounded-full bg-gray-300`}/>
    )
    return (
        <img className={`w-32 h-32 rounded-full`}
             src={source} alt="avatar"/>
    )
}

export function ProfilePicture({source}: AvatarPictureProps) {
    if (!source) return (
        <div className={`w-14
         h-14 rounded-full bg-gray-300`}/>
    )
    return (
        <img className={`w-14 h-14 rounded-full`}
             src={source} alt="avatar"/>
    )
}