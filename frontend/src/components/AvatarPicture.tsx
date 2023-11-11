import React from "react";

interface AvatarPictureProps {
    source?: string
    size: number
}

export function AvatarPicture({source, size}: AvatarPictureProps) {
    if (!source) return (
        <div className={`w-${size}
         h-${size} rounded-full bg-gray-300`}/>
    )
    return (
        <img className={`w-${size} h-${size} rounded-full`}
             src={source} alt="avatar"/>
    )
}