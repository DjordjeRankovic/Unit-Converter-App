let input = document.getElementById('input-value');
let lenghtEl = document.getElementById('lenght-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');

function conversion() {
  let meterToFeet = input.value / 0.3048;
  let feetToMeter = input.value * 0.3048;
  let kgToPound = input.value / 0.4536;
  let poundToKg = input.value * 0.4536;
  let literToGallon = input.value * 0.264;
  let gallonToLiter = input.value / 0.264;

  lenghtEl.innerText =
    input.value +
    ' meters = ' +
    meterToFeet.toFixed(3) +
    ' feet | ' +
    input.value +
    ' feet = ' +
    feetToMeter.toFixed(3) +
    ' meters';

  volumeEl.innerText =
    input.value +
    ' liters = ' +
    literToGallon.toFixed(3) +
    ' gallons | ' +
    input.value +
    ' gallons = ' +
    gallonToLiter.toFixed(3) +
    ' liters';

  massEl.innerText =
    input.value +
    ' kilograms = ' +
    kgToPound.toFixed(3) +
    ' pounds | ' +
    input.value +
    ' pounds = ' +
    poundToKg.toFixed(3) +
    ' kilograms';
}
