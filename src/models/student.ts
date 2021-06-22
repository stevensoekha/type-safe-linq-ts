import { Grade } from './grade'

export type Student = {
    firstName: string
    lastName: string
    age: number
    email: string
    Grades: Array<Grade>
}

export const Student = (
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    grades?: Array<Grade>
): Student => ({
    firstName,
    lastName,
    age,
    email,
    Grades: grades ? grades : [],
})
