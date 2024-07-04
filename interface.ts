
// INTERFACE (Loose class) 

interface User {
    readonly name: string,
    id: number,
    email?:string,           // OPTIONAL
    trial: () => string,     // RETURN TYPE STRING
    better(): number,        // RETURN TYPE NUMBER
    getCoupon(couponName: string, value: number): number  // WITH PARAMETERS
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


interface point {
    x: number;
    y: number;
}
function coord(pt: point){
    console.log("x: " + pt.x);
    console.log("y: " + pt.y)
}
coord({x: 100, y: 200})


export{}