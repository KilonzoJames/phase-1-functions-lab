// // Code your solution in this file!

        function distanceFromHqInBlocks(end){
            const start=42;
            return Math.abs(end-start);
            }console.log(distanceFromHqInBlocks(50))

        function distanceFromHqInFeet(end) {
            const blocks=distanceFromHqInBlocks(end);
            let feet=blocks*264;
            return feet;}
            console.log(distanceFromHqInFeet(50));

        function distanceTravelledInFeet(start, destination) {
            let distance=Math.abs(destination-start);
            let distanceInFeet=distance*264;
            return distanceInFeet;
            }console.log(distanceTravelledInFeet(42,43))

        function calculatesFarePrice(start, destination){
            let ride=distanceTravelledInFeet(start, destination);
            if (ride<=400){
                return 0;
            }else if(400<ride && ride<=2000){
            return .02*(ride-400); 

            }else if(ride>2000 && ride<=2500){
                return 25;
            }else{return 'cannot travel that far';
            }}
            console.log(calculatesFarePrice(50,58))



