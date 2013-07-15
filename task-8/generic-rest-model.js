var GenericRestaurantModel = Backbone.Model.extend({

    defaults: {
        state: "open",
    currentOccupancy: 0
    },

    validate: function(attributes){
        switch(attributes.state){
            case "open": 
                if(attributes.currentOccupancy < 0){
                    return "currentOccupancy must be >= 0";
                }
                break;
            case "close":
                if(attributes.currentOccupancy != 0){
                    return "currentOccupancy must be 0";
                }
                break;
            default:
                return "Expected 'open' or 'close' state";
        }
    },

    visitorCame: function() {
        return this.set({currentOccupancy: this.get("currentOccupancy") + 1}, {validate: true});
    },

    visitorLeft: function() {
        this.set({currentOccupancy: this.get("currentOccupancy") - 1}, {validate: true});
        if (this.get("currentOccupancy") == 0){
            this.set({state: "close"}, {validate: true});
        }
    },
    openRestaurant: function() {
        return this.set({state: "open"}, {validate: true});
    }
});
