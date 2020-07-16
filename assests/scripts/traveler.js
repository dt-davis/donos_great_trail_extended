class Traveler {
    constructor(name){
        this.name = name,
        this.food = 1
        this.isHealthy = true
    }

    hunt (){
        this.food += 2
    }

    eat (){
        if(this.food <= 0){
            console.log(this.name + ' has no food. ')
            this.isHealthy = false
            console.log(this.name + ' has become unhealthy')
        }else this.food -= 1
    }

}

class Doctor extends Traveler {
    constructor (name){
        super(name)
    }

    heal(Traveler){
        Traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor (name){
        super(name)
        this.food = 2
    }
    
    eat(){
        if(this.food < 2){
            console.log(this.name + ' is no longer healthy')
            this.isHealthy = false
            this.food = 0
        }else this.food -= 2
    }
    
    hunt (){
        this.food += 5
    }

    giveFood (Traveler, numOfFoodUnits){
        if(this.food < numOfFoodUnits){
            console.log(this.name + ' doesnt have that much food')
        }else {
            this.food -= numOfFoodUnits
            Traveler.food += numOfFoodUnits
        }
    }
}