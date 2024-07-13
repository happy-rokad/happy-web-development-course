

    abstract class car {
        constructor() {
        }
        abstract speed();
        abstract color();
    }
    class Toyota extends car{
    constructor() {
            super()
        }
        speed(): void {
            console.log("speed is 400");    
        }
        color(){
            console.log("color of car is black");
        }
    }
        
    let t = new Toyota();
    t.speed();
    t.color();