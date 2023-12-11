export interface IPersonInfo {
    name: string
    position: string
    phone?: string
    mail?: string
}

export const AVATARS = {
    first: require('./assets/anonumus_profile_pictures/avatar-1.jpg').default,
    second : require('./assets/anonumus_profile_pictures/avatar-2.jpg').default
}