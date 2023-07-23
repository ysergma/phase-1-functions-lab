// Code your solution in this file!
 function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value
    distance = Number.parseInt(distance);
    return (Math.abs(distance - 42));
  }

  function distanceFromHqInFeet(distance) {
  distanceFromHqInBlocks(distance);
      return (Math.abs((distance*264) - (42*264)));

}
  function distanceTravelledInFeet (start,destination) {
    //returns the number of feet traveled
      var distance=Math.abs((destination - start) *264);
      console.log("distance+1");
      return distance;
  }

function calculatesFarePrice(start, destination) {
    //returns the number of feet traveled
    var distance=Math.abs((destination*264) - (start*264));
    if (distance <= 400) {
        return  0
    } else if (distance > 400 && distance <= 2000 ) {
        let price = ((distance-400) * 2)/100
        return price
    }else if (distance > 2000 && distance <= 2500 ){
        let price = 25
        return price
    }else if (distance > 2500 ){
        return "cannot travel that far";

  }
   }
