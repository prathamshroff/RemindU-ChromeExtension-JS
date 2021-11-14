let array = [];
class Reminder {


    constructor(hrs, mins, ap, rem) {
        if (hrs > 12) {
            throw 'Parameter is not valid!';

        }
        this.hours = hrs;
        if (mins > 59) {
            throw 'Parameter is not valid!';
        } else {
            this.minutes = mins;
        }

        this.ampm = ap;
        if (this.ampm === "PM") {
            if (this.hours !== 12) {
                this.hours += 12;
            }
        } else {
        }
        this.remind = rem;
    }

    toString() {
        let s = "Reminder: ";
        s += this.remind + " at ";
        if (this.hours > 12) {
            s += (this.hours - 12) + ":" + this.minutes + " " + this.ampm;
        } else {
            s += this.hours + ":" + this.minutes + " " + this.ampm;
        }

        return s;
    }

}


function timeChecker() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    for (let i = 0; i < array.length; i++) {
        if (array[i].hours === hours && array[i].minutes === minutes) {
            document.getElementById("rand_reminder").innerHTML = array[i].toString();
            let x = array[i];
            let y = array[array.length-1];
            array[i] = y;
            array[array.length-1] = x;
            array.pop();
        }
    }
    if (hours === 20 && minutes === 45) {
        document.getElementById("rand_reminder").innerHTML = "Test Case Up";
    }
    if (hours === 9 && minutes === 0) {
        document.getElementById("rand_reminder").innerHTML = "Have you woken up yet?";
    } else if (hours === 10 && minutes === 0) {
        document.getElementById("rand_reminder").innerHTML = "Have you eaten yet?";
    } else if (hours === 11 && minutes === 0) {
        document.getElementById("rand_reminder").innerHTML = "Remember to take a break!";
    } else if (hours === 12 && minutes === 0) {
        let msg = getMessage();
        if (msg === "Would you like to set a reminder?: ") {
            document.getElementById("rand_reminder").innerHTML = msg;
        } else {
            document.getElementById("rand_reminder").innerHTML = msg;
        }
    } else if (hours === 13 && minutes === 0) {
        console.log("Have you eaten yet? If you haven't, eat!");
    } else if (hours === 13 && minutes === 30) {
        console.log("Remember to stay hydrated!");
    } else if (hours === 14 && minutes === 0) {
        console.log("It's good to take breaks every once in a while!");
    } else if (hours === 15 && minutes === 0) {
        let msg = getMessage();
        console.log(msg);
        if (msg === "Would you like to set a reminder?: ") {
            const input = prompt();
            if (input === "yes" || input === "Yes") {

            }
        }
    } else if (hours === 15 && minutes === 30) {
        console.log("Remember to stay hydrated!")
    } else if (hours === 16 && minutes === 0) {
        let msg = getMessage();
        console.log(msg);
        if (msg === "Would you like to set a reminder?: ") {

        }
    } else if (hours === 16 && minutes === 30) {
        console.log("Have you eaten yet? If you haven't, eat!");
    } else if (hours === 17 && minutes === 15) {
        console.log("Remember to take a break!");
    } else if (hours === 18 && minutes === 0) {
        let msg = getMessage();
        console.log(msg);
        if (msg === "Would you like to set a reminder?: ") {
            const input = prompt();
            if (input === "yes" || input === "Yes") {

            }
        }
    } else if (hours === 18 && minutes === 30) {
        console.log("Remember to stay hydrated!");
    } else if (hours === 19 && minutes === 30) {
        console.log("Have you eaten yet? Remember to eat");
    } else if (hours === 20 && minutes === 30) {
        let msg = getMessage();
        console.log(msg);
        if (msg === "Would you like to set a reminder?: ") {
            const input = prompt();
            if (input === "yes" || input === "Yes") {

            }
        }
    } else if (hours === 21 && minutes === 30) {
        console.log("Remember to stay hydrated");
    } else if (hours === 22 && minutes === 0) {
        let msg = getMessage();
        console.log(msg);
        if (msg === "Would you like to set a reminder?: ") {
            const input = prompt();
            if (input === "yes" || input === "Yes") {

            }
        }
    } else if (hours === 23 && minutes === 0) {
        console.log("Remember to take a break sometimes");
    } else if (hours === 0 && minutes === 0) {
        console.log("Its late! Remember to get a good night's sleep!");
    }
}
timeChecker();
setInterval(function() {
    timeChecker();
}, 60 * 1000);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getMessage() {
    const messages = ["You're doing great!", "Keep up the good work!",
        "Virtual Hug uwu", "Keep Calm and Carry on!", "You're worth something!",
        "It's gonna be ok", "You'll make it through!", "You've got this",
        "Would you like to set a reminder?: "];
    let i = getRandomInt(messages.length);
    return messages[i];
}







