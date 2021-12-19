class Actor {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(target) {
        target.hull = target.hull - (this.firepower * this.accuracy);
    }
}

class Usscp extends Actor {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy);
    }
}

class Alien extends Actor {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy);
    }
}
/* ============= classes ^^^ ======================== */

const alien = [];
for (let i = 0; i < 6; i++) {
    alien[i] = new Alien(4, 3, .6);
}

const captain = new Usscp(4, 5, .7)
// below log makes sure that variables in sync w constructor
// console.log(captain.firepower)

/* ============= const // objects ^^^^ ========================= */

document.querySelector('#hull-stat').textContent = captain.hull
document.querySelector('#fp-stat').textContent = captain.firepower
document.querySelector('#acc-stat').textContent = captain.accuracy

/* captain */

document.querySelector('#hulla-stat').textContent = alien[0].hull
document.querySelector('#fpa-stat').textContent = alien[0].firepower
document.querySelector('#acca-stat').textContent = alien[0].accuracy

/* alien */

/* stat query selectors ^^^^^ =================== */

// Fuction VVVV */

function startGame(arr, obj) {
    // initiates alien array 
    let i = 0;
    // starts game through window prompt
    const y = window.prompt('Start Game? Y or N?')
    if (y === 'N') {
        console.log('Game Over.')
    }
    if (y === 'Y') {

        while (i < alien.length && alien[i].hull > 0) {
            console.log(`You attack Alien ${i}`)
            // you attack the alien
            obj.attack(arr[i]);

            if (arr[i].hull > 0) {
                console.log(`Alien ${i} Survived and is going to attack! Alien hull: ${arr[i].hull}`)
                // the alien attacks you 
                arr[i].attack(obj);
                // you survived and your hull is __
                console.log(`Alien attacked and you lost hull. Current hull: ${obj.hull}`);

                // attack or retreat 
                const z = prompt("Do you want to attack the next alien or finish the game? ATTACK or RETREAT")
                if (z === "RETREAT") {
                    console.log("Game ended by user.")
                }

            } else {
                if (obj.hull < 0) {
                    console.log("You Lost!");
                };
             
            }
            //  else i += 1;
            // you killed the alien
            console.log(`Good job! The ${i} alien has died`);
            i += 1
        }
        // you won
        console.log("You Won!");
    }
};
// function is called
startGame(alien, captain)





