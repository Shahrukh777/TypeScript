let greetings: string = "Hello, Shahrukh."
console.log(greetings)

greetings.toUpperCase()
let a = 2
// a.toUppercase()

//number
let id = 1234.21

//boolean
let isLoggedIn: boolean = true


//FUNCTIONS + default values

function addTwo(num: number) {
    return num + 2
}
addTwo(10)

function getUpper(str: string){
    console.log(str.toUpperCase())
}
getUpper("shahrukh")

let login = (name:string, age: number, isPaid: boolean = false) => {
    let user = {
        name: name,
        age: age,
        paid: isPaid
    }
    console.log(user.name + " " + user.age + " " + user.paid)
}
login("Shahrukh", 21, true)

// FUNCTION OUTPUT CASE

function add(n: number): number{
    return n + 5
    // return "Shah"     ***** WILL BE ERROR
}

const getHello = ():string =>{
    return ""
}


const heros = ["Ironman", "Thor", "Hulk"]
// const heros = [1, 2, 3]    **********WILL CHANGE TYPE IN NUMBER if not strict
heros.map((hero): string => {          // WILL BECOME STRICT TO STRING
    // console.log(`Hero is ${hero}`)
    return `Hero is ${hero}`
})

//  VOID
function log(mas: string): void{
    console.log(mas)
}

// NEVER *** ERROR HANDLING  *** represents values that are never observed *** ternimates execution of program
function never(mmm: string): never{
    throw new Error(mmm);
}

// FUNCTIONS RETURNING OBJECTS

function createCourse():{name: string, price: number}{
    return {name: "React", price: 499}
}

//  TYPE ALIAS  (A NAME FOR ANY TYPE) *** (All values are required)

type User = {
    name: string,
    age: number,
    isActive: boolean
}
function userCreate(user: User){
console.log(user.name + " " + user.age + " " + user.isActive)
}
userCreate({name: "Shah", age: 21, isActive: true})


type Point = {
    x: number,
    y: number
}
function coordinates(pt: Point){
    console.log(pt.x)
    console.log(pt.y)
}
coordinates({x: 100, y: 100})






export {}