class Wagon {
    constructor(capacity){
        this.capacity = capacity,
        this.passengers = []
    }

    getAvailableSeatCount (){
        return (this.capacity - (this.passengers.length))
    }

    join(traveler){
        if( this.getAvailableSeatCount() > 0){
            this.passengers.push(traveler)
        }else {console.log('There is no more room on the wagon')}
    }

    shouldQuarantine(){
        for(let passengersIndex = 0; passengersIndex < this.passengers.length; passengersIndex ++){
            if(this.passengers[passengersIndex].isHealthy === false){
                return true
            }
        }
        return false
    }

    totalFood(){
        let totalFood = 0
        for(let passengersIndex = 0; passengersIndex < this.passengers.length; passengersIndex++){
            totalFood += this.passengers[passengersIndex].food
        }
        return totalFood
    }
}