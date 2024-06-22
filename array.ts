
//ARRAY

const heros: string[] = []         // ARRAY OF TYPE STRING
heros.push("Spiderman")

const numbers: Array<number> = []       // ARRAY OF TYPE NUMBER
numbers.push(12)
console.log(heros)
console.log(numbers)

type User = {
    name: string
    age: number
}
const allUsers: User[] = []           // ARRAY USING OBJECT

allUsers.push({
    name: "Shah",
    age: 21
})
console.log(allUsers)

const model: number[][] = [   //NESTED ARRAY
    [255, 255, 255],
    [123, 456, 789]
]
console.log(model)

// UNION TYPE (MULTIPLE DATA TYPES90)

let score: number | string= 33
score = "45"

type User01 = {
    name: string
    id: number
}
type Admin01 = {
    username: string
    id: number
}
let shahrukh: User01 | Admin01 = {name: "Shahrukh", id: 40}

shahrukh = {username: "AdminShahrukh", id: 1}

// function getDBID(id: number | string){
//     console.log("DBID is" + ' ' + id)
// }
getDBID(3)
getDBID("3")

function getDBID(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    // id.toUpperCase()                    //  WILL RESULT IN ERROR
}

 // ARRAY

//  const data: number[] = [1, 2, 3, "4"]         NOT ALLOWED
const data2: (string | number)[] = [1, "2", 3, "4"]                  //place them in bracket

// LITERAL RESTRICTION

let pi: 3.14 = 3.14
// pi = 345          // CANNOT BE REASSIGNED

let seat: "back" | "middle" | "center"

seat = "back"
// seat = "left"          // ERROR


export{} 