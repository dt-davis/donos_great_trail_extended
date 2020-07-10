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