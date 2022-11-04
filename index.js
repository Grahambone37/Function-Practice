// start
function start() {
    let firstAnswer = window.prompt("Do you head left, or right?")
    if (firstAnswer === "left") {
        goLeft()
    } else if (firstAnswer === "right") {
        goRight()
    }
}

// start, left
function goLeft() {
    let secondAnswer = window.prompt("You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?")
    if (secondAnswer === "back") {
        start()
    } else if (secondAnswer === "follow") {
        follow()
    } else if (secondAnswer === "continue") {
        progress()
    }
}

//start, left, follow
function follow() {
    let thirdAnswer = window.prompt("You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.")
    if (thirdAnswer === "back") {
        goLeft()
    } else if (thirdAnswer === "stay") {
        stay()
    } else if (thirdAnswer === "spread the word") {
        spreadTheWord()
    }
}

//start, left, follow, stay
function stay() {
    let fourthAnswer = window.prompt("You live happily amongst the cats for the rest of your days.")
    if (fourthAnswer === "back") {
        follow()
    }
}

//start, left, follow, spread the word
function spreadTheWord() {
    let fourthAnswer = window.prompt("After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.")
    if (fourthAnswer === "back") {
        follow()
    }
}

//start, left, continue
function progress() {
    let thirdAnswer = window.prompt("You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that leads up towards the light. Which do you take?")
    if (thirdAnswer === "back") {
        goLeft()
    } else if (thirdAnswer === "ladder") {
        ladder()
    } else if (thirdAnswer === "staircase") {
        staircase()
    }
}

//start, left, continue, ladder
function ladder() {
    let fourthAnswer = window.prompt("After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.")
    if (fourthAnswer === "back") {
        progress()
    }
}

//start, left, continue, staircase
function staircase() {
    let fourthAnswer = window.prompt("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
    if (fourthAnswer === "back")
    progress()
}

//start, right
function goRight() {
    let secondAnswer = window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon all together. Will you take the path past or away from the dragon?")
    if (secondAnswer === "back") {
        start()
    } else if (secondAnswer === "past") {
        pastTheDragon()
    } else if (secondAnswer === "away") {
        away()
    }
}

//start, right, past
function pastTheDragon() {
    let thirdAnswer = window.prompt("The dragon awakes asnd sits upright. You only have a moment to respond, to stay or to run:")
    if (thirdAnswer === "back") {
        goRight()
    } else if (thirdAnswer === "stay") {
        stayWithDragon()
    } else if (thirdAnswer === "run") {
        runFromDragon()
    }
}

//start, right, past, stay
function stayWithDragon() {
    let fourthAnswer = window.prompt("You and the dragon have an uplifting conversation about local politics and become lefelong friends.")
    if (fourthAnswer === "back") {
        pastTheDragon()
    }
}

//start, right, past, run
function runFromDragon() {
    let fourthAnswer = window.prompt("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
    if (fourthAnswer === "back") {
        pastTheDragon()
    }
}

//start, right, away
function away() {
    let thirdAnswer = window.prompt("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?")
    if (thirdAnswer === "back") {
        goRight()
    } else if (thirdAnswer === "draw") {
        drawFlower()
    } else if (thirdAnswer === "pick") {
        pickFlower()
    }
}

//start, right, away, draw
function drawFlower() {
    let fourthAnswer = window.prompt("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed but over time discover joy in sharing the drawing with you friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.")
    if (fourthAnswer === "back") {
        away()
    }
}

//start, right, away, pick
function pickFlower() {
    let fourthAnswer = window.prompt("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.")
    if (fourthAnswer === "back") {
        away()
    }
}

start()