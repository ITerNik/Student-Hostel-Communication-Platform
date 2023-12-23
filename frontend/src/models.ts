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

export interface IQuestionBlock {
    id: number,
    header: string,
    body?: string
}

export interface IBox {
    id: number,
    status: string
}