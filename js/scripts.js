var Tamagotchi = {
  feed: function(){
    this.foodLevel = this.foodLevel + 1;
    return this.foodLevel;
  },
  sleep: function(){
    this.sleepLevel = this.sleepLevel +1;
    return this.sleepLevel;
  },
  activity: function(){
    this.activityLevel = this.activityLevel + 1;
    return this.activityLevel;
  },
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  alive: function() {
    if ((foodLevel <= 0) || (sleepLevel <= 0) ||
      (activityLevel <= 0)) {
      //he is dead
      this.isAlive = false;
    }else {
      //he is alive
      this.isAlive = true;
    }
  }
}
