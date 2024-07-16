import React from "react";

function ArrayMethods() {
  const muscleCars = [
    "Ford Mustang",
    "Chevrolet Camaro",
    "Dodge Challenger",
    "Pontiac GTO",
    "Chevrolet Chevelle SS",
    "Plymouth Barracuda",
    "Dodge Charger",
    "Ford Torino",
    "Buick GSX",
    "Oldsmobile 442",
    "Mercury Cougar",
    "AMC AMX",
    "Plymouth Road Runner",
    "Chevrolet Nova SS",
    "Dodge Dart",
    "Pontiac Firebird",
    "Shelby GT500",
    "Chevrolet Corvette",
    "Plymouth GTX",
    "Ford Falcon",
  ];

  return (
    <div>
      <h1>ARRAY_METHODS</h1>
      <button
        onClick={() => {
          console.log(muscleCars.length);
        }}
      >
        Length
      </button>
      <button
        onClick={() => {
          for (let i = 0; i < muscleCars.length; i++) {
            console.log(`🚗${muscleCars[i]} 🚗`);
          }
        }}
      >
        USE-LOOP
      </button>
      <button
        onClick={() => {
          console.log(muscleCars[12]);
          console.log(muscleCars.at(12));
        }}
      >
        Arrat_at
      </button>
      <button
        onClick={() => {
          console.log(muscleCars.toString());
        }}
      >
        Array-string
      </button>
      <button
        onClick={() => {
          console.log(muscleCars.join("🚘"));
        }}
      >
        Array-join
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          muscleCars.push("Mercury Cyclone", "AMC Javelin");
          console.log(muscleCars);
        }}
      >
        Push
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          console.log(muscleCars.pop());
        }}
      >
        Pop
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          console.log(muscleCars.shift());
        }}
      >
        Shift
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          console.log(
            muscleCars.unshift("Ford Ranchero GT", "Chrysler 300 Hurst")
          );
          console.log(muscleCars);
        }}
      >
        UnShift
      </button>
      <button onClick={() => {
        console.log(muscleCars);
        muscleCars.splice(2,1,"HM contessa")
        console.log(muscleCars);
      }}>Splice-rmv</button>
      <button onClick={() => {
         console.log(muscleCars);
         muscleCars.splice(2,0,"HM contessa","RETRO-GT")
         console.log(muscleCars);
      }}>Splice-add</button>
      <button onClick={() => {}}>Splice</button>
    </div>
  );
}

export default ArrayMethods;
