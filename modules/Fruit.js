class Fruit {

    constructor(){
        setx(8);
        sety(8);
    }
    setx(x){
        this.x=x
    }
    setx(y){
        this.y=y
    }

    placeFruit(){
        let a = Math.random() * 15;
        return a ;
    }
}

export { Fruit };