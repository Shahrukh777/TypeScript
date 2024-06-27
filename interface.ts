
// INTERFACE (Loose class) 

interface User {
    readonly name: string,
    id: number,
    email?:string,           // OPTIONAL
    trial: () => string,
    better(): number,
    getCoupon(couponName: string, value: number): number
}

const shahrukh:User = {
    name: "Shahrukh",
    id: 123,
    trial: () => {           // Has to be a method
        return "Start"
    },
    better: () =>{
        return 42
    },
    getCoupon: (name: "coupon", num: 5) =>{      // Allowed 
        return 10
    }
}

// shahrukh.name = "SHAH"    // ERROR






export{}