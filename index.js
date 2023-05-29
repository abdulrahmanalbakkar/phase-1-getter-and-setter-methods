class Circle {
    constructor(radius){
        this.radius = radius;
    }
    
    // get methods:
    get diameter(){
        return 2 * this.radius;
    } 
    get circumference(){
        return 2 *  Math.PI * this.radius;
    }
    get area(){
        return  Math.PI * this.radius ** 2;
    }

    // set methods:
    set diameter(diameter){
        this.radius = diameter / 2;
    }
    set circumference(circumference){
        this.radius = circumference / (2 *  Math.PI)
    }
    set area(area){
        this.radius = Math.sqrt(area /  Math.PI)
    }
}
