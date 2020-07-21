export class Faq {
    id!: string
    question: string
    answer: string
    appearOnTop: boolean

    constructor(id: string, question: string, answer: string, appearOnTop: boolean) {
        this.id = id
        this.question = question
        this.answer = answer
        this.appearOnTop = appearOnTop
    }
}