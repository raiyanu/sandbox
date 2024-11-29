let p = console.log;

p("started");


let s = document.querySelector(":root")
let brightnessRange = document.getElementById("brightness")
let rs = getComputedStyle(s);

brightnessRange.addEventListener('input', () => {
    s.style.setProperty('--brightness', brightnessRange.value / 100);
    p(brightnessRange.value / 100);
})

p(rs.getPropertyValue('--brightness'));