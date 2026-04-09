// ===============================
// DARK / LIGHT TEMA
// ===============================
const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add("with-transition");
});

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "theme", 
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
}

// ===============================
// TESTAVIMO PUSLAPIS (test.html)
// ===============================

// Temperatūros mygtukas
function simulateTemp() {
    const temps = ["20°C","22°C","23°C"];
    const el = document.getElementById("sensorTemp");
    if(el) el.innerText = temps[Math.floor(Math.random() * temps.length)];
    updateAIMessage();
}

// Judesio mygtukas
function simulateMotion() {
    const motions = ["Judesys: nėra","Judesys: aptiktas"];
    const el = document.getElementById("sensorMotion");
    if(el) el.innerText = motions[Math.floor(Math.random() * motions.length)];
    updateAIMessage();
}

// Trečiasis mygtukas: AI pranešimai priklauso nuo kitų dviejų mygtukų
function updateAIMessage() {
    const aiMsg = document.getElementById("aiMsg");
    if(!aiMsg) return;

    const tempEl = document.getElementById("sensorTemp");
    const motionEl = document.getElementById("sensorMotion");
    let temp = tempEl ? tempEl.innerText : "";
    let motion = motionEl ? motionEl.innerText : "";

    if(motion.includes("aptiktas") && temp.includes("23°C")){
        aiMsg.innerText = "AI: judesys aptiktas ir temperatūra aukšta!";
    } else if(motion.includes("aptiktas")){
        aiMsg.innerText = "AI: judesys aptiktas!";
    } else if(temp.includes("23°C")){
        aiMsg.innerText = "AI: temperatūra aukšta!";
    } else {
        aiMsg.innerText = "AI laukia veiksmų...";
    }
}

// ===============================
// VALDYMO PUSLAPIS (valdymas.html)
// ===============================

let lightOn = false;
let temperature = 22;

// Apšvietimo box
function toggleLightStatus() {
    lightOn = !lightOn;
    const el = document.getElementById("lightStatus");
    if(el) el.innerText = lightOn ? "Įjungtas" : "Išjungtas";
}

// Temperatūros box
function increaseTempValue() {
    temperature++;
    const el = document.getElementById("tempValue");
    if(el) el.innerText = temperature + "°C";
}

function decreaseTempValue() {
    temperature--;
    const el = document.getElementById("tempValue");
    if(el) el.innerText = temperature + "°C";
}

// Trečiasis box: nepriklausomi AI pranešimai
function simulateAIBox() {
    const messages = [
        "AI analizuoja duomenis...",
        "Šviesa įjungta automatiškai",
        "Temperatūra optimizuota",
        "Sistema veikia stabiliai!"
    ];
    const el = document.getElementById("aiMsgBox");
    if(el) el.innerText = messages[Math.floor(Math.random() * messages.length)];
}
