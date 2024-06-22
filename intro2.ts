
// READONLY *** OPTIONAL

type User = {
    readonly id: string
    name: string
    age: number
    creditCardNo?: number    // OPTIONAL  (var?:type)
}
let myUser: User = {
    id: "123",
    name: "shah",
    age: 21,

}
myUser.name = "Shahrukh" 
// myUser.id = "s75a"  // COMPILATION ERROR  (READONLY)

// MIXMATCH

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    carddate: string
}

type cardDetais = cardNumber & cardDate & {   //COMBINE  ***  ONLY FOR BIG SETS
    cvv: number
}

