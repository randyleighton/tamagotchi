var Tamagotchi = {
  feed: function(){
    this.foodLevel = this.foodLevel + 1;
  },
  sleep: function(){
    this.sleepLevel = this.sleepLevel +1;
  },
  activity: function(){
    this.activityLevel = this.activityLevel + 1;
  },
  initialize: function(tName) {
    this.tName = tName;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function(){
    this.foodLevel = this.foodLevel - 1;
    this.sleepLevel = this.sleepLevel - 1;
    this.activityLevel = this.activityLevel - 1;
  },
  checkIn: function(){
    this.timePasses();
    this.alive();
  },
  alive: function() {
    if ((this.foodLevel <= 0) || (this.sleepLevel <= 0) ||
      (this.activityLevel <= 0)) {
      //he is dead
      this.isAlive = false;
    }else {
      //he is alive
      this.isAlive = true;
    }
  }
}

$(document).ready(function(){
  $('form#tamagotchiGame').submit(function(event){
    event.preventDefault();
    var myPet = Object.create(Tamagotchi);
    var petName = $('#petName').val();
    myPet.initialize(petName);
    $("#output-name").text(myPet.tName);
    $("#output-food").text(myPet.foodLevel);
    $("#output-sleep").text(myPet.sleepLevel);
    $("#output-activity").text(myPet.activityLevel);
  })
})
