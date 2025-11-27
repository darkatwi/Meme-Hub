
const predictions = [
    "You will open TikTok for '5 minutes' (it becomes 2 hours).",
    "Your code will work... then break for no reason.",
    "You will Google the same error 7 times today.",
    "Someone will ask 'did you try turning it off and on?'.",
    "You will write TODOs and never do them.",
    "A mysterious bug will appear exactly at 3 AM.",
    "You will refresh GitHub 20 times and find nothing new.",
    "Your coffee cup will be empty before you know it.",
    "You will accidentally commit to main. Panic ensues.",
    "You will say 'Just one more episode' 6 times tonight.",
    "Your computer will update during your presentation.",
    "You will star a repo and immediately forget why.",
    "Tomorrow: You will forget your password again.",
    "Your brain will crash before your code does.",
    "You will try to fix a bug, break everything instead."
];


function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

function typeWriter(text, i = 0) {
    const el = document.getElementById("prediction");
    el.textContent = "";
    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}

function predict() {
    const shuffled = shuffle([...predictions]);
    const count = Math.random() < 0.5 ? 1 : 2;
    const selected = shuffled.slice(0, count).join(" ");
    typeWriter(selected);
}

