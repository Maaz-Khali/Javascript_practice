let resturant = {
    name:'pizzahut',
    guestCapacity:75,
    guestCount:0,
    checkavailability: function (partySize){
        let seatsLeft= this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount= this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount= this.guestCount - partySize
    }
}

resturant.seatParty(72);
console.log(resturant.checkavailability(5));
resturant.removeParty(5)
console.log(resturant.checkavailability(5));
