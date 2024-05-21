// Utility Types

// Partial: only some parts of the properties

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}


const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })


// Required and Readonly
// Required all the properties Assignment has
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database. etc.
    return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

// assignVerified.grade = 88 // readonly


// recordAssignment(assignGraded) // Required all the properties Assignment has

recordAssignment({ ...assignGraded, verified: true })


// Record 
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
}


// Pick and Omit
// type Pick<T, K extends keyof T>
// From T, pick a set of properties whose keys are in the union K
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

// type Omit<T, K extends string | number | symbol>
// Construct a type with the properties of T except for those in type K.
type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "final project"
}

// the code above is applied to an interface, there could be confusion with the code provided below

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable
// except all null and undefined
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>


// ReturnType 

// type newAssign = { title: string, points: number }
// the code seems to work the same if NewAssign is commented, maybe cause of ts intelligent referring
const createNewAssign = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)


// Parameters
// Obtain the parameters of a function type in a tuple
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)

console.log(tsAssign2);


// Awaited - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))