export interface IPersonInfo {
    name: string
    position: string
    phone?: string
    mail?: string
}

export interface INewsBlock {
    id: number
    title: string,
    date: Date,
    body?: string
}