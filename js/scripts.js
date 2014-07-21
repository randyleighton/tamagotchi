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
  },
  displayOutput: function() {
    $("#output-food").text(this.foodLevel);
    $("#output-sleep").text(this.sleepLevel);
    $("#output-activity").text(this.activityLevel);
  }
};

$(document).ready(function(){

  $("form#tamagotchiGame").find("input").focus();

  $('form#tamagotchiGame').submit(function(event){
    $('#column2, #column3, #output-row').show();
    event.preventDefault();
    var myPet = Object.create(Tamagotchi);
    var petName = $('#petName').val();
    myPet.initialize(petName);
    $("#output-name").text(myPet.tName);
    myPet.displayOutput();
    $("#check-btn").click(function() {
      myPet.checkIn();
      console.log(myPet.foodLevel);
      myPet.displayOutput();
      if (!myPet.isAlive){
        alert('Sorry your pet is dead :(');
        $('#column2, #column3, #output-row').hide();
      }
    });
    $("#feed-btn").click(function(){
      myPet.feed();
      myPet.displayOutput();
    });
    $("#sleep-btn").click(function(){
      myPet.sleep();
      myPet.displayOutput();
    });
    $("#activity-btn").click(function(){
      myPet.activity();
      myPet.displayOutput();
    });
  });
});
