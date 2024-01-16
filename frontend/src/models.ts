export interface IPersonInfo {
    name: string
    position: string
    phone?: string
    mail?: string
}

export interface INewsBlock {
    id: number
    header: string,
    publishDate: Date,
    description: string,
    author: number
}

export interface IQuestionBlock {
    id: number,
    header: string,
    body?: string
}

export interface IBox {
    id: number,
    status: number,
    owner: number
}

export interface ITender {
    id: number,
    name: string,
    cost: number,
    image?: string,
    description?: string
}