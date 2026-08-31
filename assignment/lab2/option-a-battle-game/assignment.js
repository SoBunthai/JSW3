/* ================================================================
   JavaScript — Week 3 — Lab 2 (Option A) · Battle Game
   ----------------------------------------------------------------
   Fight 5 enemies in a row, easiest to hardest. They hit harder as
   you go, and every hit (yours and theirs) can land a CRITICAL —
   double damage — so there's a real chance you lose. Watch the
   fight play out turn by turn — the result (win/lose) only shows
   once the fight is over, then you're asked to play again.

   Uses: OBJECT (player/enemy), ARRAY (`enemies`), FUNCTION
   (`attack`, `battle`, `runBattles`), CALLBACK (`onHit` and
   `onNewEnemy` — functions passed in as parameters that YOU call,
   without needing to know what they do inside). What they do
   inside is next week's topic (DOM), already built for you, so you
   can see your functions drive a real page — you never write any
   DOM code here.

   Run: open index.html with Live Server, F12 for the console.
   ================================================================ */
"use strict";

/* ---- PROVIDED: DOM refs, rendering, prompts, playback, retry —
   do not edit ------------------------------------------------------- */
const playerNameEl = document.getElementById("player-name");
const playerHpFillEl = document.getElementById("player-hp-fill");
const playerHpTextEl = document.getElementById("player-hp-text");

const enemyEmojiEl = document.getElementById("enemy-emoji");
const enemyNameEl = document.getElementById("enemy-name");
const enemyHpFillEl = document.getElementById("enemy-hp-fill");
const enemyHpTextEl = document.getElementById("enemy-hp-text");

const statusEl = document.getElementById("status");
const logEl = document.getElementById("message-log");

const ENEMY_TEMPLATE = [
    { name: "Slime",  emoji: "🟢", hp: 20,  attack: 4 },
    { name: "Goblin", emoji: "👹", hp: 40,  attack: 7 },
    { name: "Wolf",   emoji: "🐺", hp: 60,  attack: 10 },
    { name: "Orc",    emoji: "🧌", hp: 80,  attack: 14 },
    { name: "Dragon", emoji: "🐉", hp: 100, attack: 20 },
];

const TURN_DELAY_MS = 600;

let currentPlayer = null;
let currentEnemy = null;
let battleLog = [];

function updateHpBar(fillEl, textEl, hp, maxHp) {
    const shown = hp > 0 ? hp : 0;
    const pct = Math.round((shown / maxHp) * 100);
    fillEl.style.width = pct + "%";
    textEl.textContent = shown + " / " + maxHp;
}

function logMessage(text) {
    const li = document.createElement("li");
    li.textContent = text;
    logEl.append(li);
}

/* makePlayer — returns null if the player hits Cancel on the name
   prompt, so startRun() below knows to stop instead of starting a
   fight with a fake default name. */
function makePlayer() {
    const name = prompt("Enter your hero's name:");
    if (name === null) {
        return null;
    }
    return { name, hp: 190, maxHp: 190, attack: 20 };
}

function makeEnemies() {
    return ENEMY_TEMPLATE.map((e) => (
        { name: e.name, emoji: e.emoji, hp: e.hp, maxHp: e.hp, attack: e.attack }
    ));
}

function renderPlayer(player) {
    currentPlayer = player;
    playerNameEl.textContent = player.name;
    updateHpBar(playerHpFillEl, playerHpTextEl, player.hp, player.maxHp);
}

/* announceEnemy — passed into runBattles() below as `onNewEnemy`.
   You'll call it once per enemy; you don't need to know what it
   does inside (same idea as onHit). Right now it just RECORDS the
   event — see playBattleLog below for why. */
function announceEnemy(enemy) {
    battleLog.push({
        type: "enemy",
        enemy: { name: enemy.name, emoji: enemy.emoji, hp: enemy.hp, maxHp: enemy.maxHp },
    });
}

/* onHit — this is the CALLBACK you pass into attack(). Like
   announceEnemy, it just RECORDS the hit for now. `wasCrit` just
   controls whether the log message gets a "CRITICAL!" tag. */
function onHit(attackerName, defenderName, damage, defenderHpLeft, wasCrit) {
    battleLog.push({ type: "hit", attackerName, defenderName, damage, defenderHpLeft, wasCrit });
}

/* Your functions below run instantly (that's how JS normally
   works) and finish before anyone can watch anything happen. So
   instead of rendering live, onHit/announceEnemy just RECORD what
   happened into `battleLog`. Once your runBattles() is done, THIS
   function replays that log one event at a time, half a second
   apart, so the fight actually animates on screen. */
function playBattleLog(log, onFinished) {
    let i = 0;
    function step() {
        if (i >= log.length) {
            onFinished();
            return;
        }
        const event = log[i];
        i++;

        if (event.type === "enemy") {
            currentEnemy = event.enemy;
            enemyEmojiEl.textContent = event.enemy.emoji;
            enemyNameEl.textContent = event.enemy.name;
            updateHpBar(enemyHpFillEl, enemyHpTextEl, event.enemy.hp, event.enemy.maxHp);
            logMessage("A wild " + event.enemy.emoji + " " + event.enemy.name + " appears!");
        } else {
            const critTag = event.wasCrit ? " CRITICAL HIT!" : "";
            logMessage(event.attackerName + " hits " + event.defenderName + " for " +
                event.damage + " dmg." + critTag);
            if (currentPlayer && event.defenderName === currentPlayer.name) {
                updateHpBar(playerHpFillEl, playerHpTextEl, event.defenderHpLeft, currentPlayer.maxHp);
            } else if (currentEnemy) {
                updateHpBar(enemyHpFillEl, enemyHpTextEl, event.defenderHpLeft, currentEnemy.maxHp);
            }
        }

        setTimeout(step, TURN_DELAY_MS);
    }
    step();
}
/* ---- END PROVIDED ------------------------------------------------- */


/* =================================================================
   YOUR CODE — Part A: attack(attacker, defender, onHit)

   Step 1 — roll a base damage number, close to attacker.attack:
     const baseDamage = attacker.attack + Math.floor(Math.random() * 5) - 2;
     (Math.random() gives 0-0.99..., so this line gives attacker.attack
     minus 2, minus 1, plus 0, plus 1, or plus 2 — 5 equally likely
     outcomes.)

   Step 2 — 25% chance of a CRITICAL HIT that doubles the damage:
     const isCrit = Math.random() < 0.25;
     let damage = isCrit ? baseDamage * 2 : baseDamage;
     (Math.random() < 0.25 is true about 1 time in 4 — that's the
     "25% chance" part.)

   Step 3 — apply it:
     defender.hp -= damage; (not below 0 — if it goes negative, set
     it to 0)

   Step 4 — report it:
     onHit(attacker.name, defender.name, damage, defender.hp, isCrit)
   ================================================================= */
function attack(attacker, defender, onHit) {

}


/* =================================================================
   YOUR CODE — Part B: battle(player, enemy)
     while player.hp > 0 && enemy.hp > 0:
       attack(player, enemy, onHit)
       if enemy.hp > 0: attack(enemy, player, onHit)
     return true if player won (enemy.hp <= 0), else false
     Hint: `onHit` here is the same PROVIDED function from above —
     just pass it straight through into attack().
   ================================================================= */
function battle(player, enemy) {

}


/* =================================================================
   YOUR CODE — Part C: runBattles(player, enemies, onNewEnemy)
     for each enemy in `enemies`:
       onNewEnemy(enemy)
       if battle(player, enemy) is false: return false right away
     if the loop finishes, return true (player beat all 5)
     Hint: `onNewEnemy` is a callback parameter, just like `onHit`
     — call it once per enemy, right before you battle() it.
   ================================================================= */
function runBattles(player, enemies, onNewEnemy) {

}


/* ---- PROVIDED: run one battle, then replay + retry — do not edit -- */
function startRun() {
    const player = makePlayer();
    if (player === null) {
        statusEl.textContent = "Battle cancelled.";
        return;
    }
    const enemies = makeEnemies();

    battleLog = [];
    logEl.innerHTML = "";
    renderPlayer(player);
    statusEl.textContent = player.name + "'s adventure begins... watch the fight!";

    const victory = runBattles(player, enemies, announceEnemy);

    playBattleLog(battleLog, function () {
        statusEl.textContent = victory
            ? player.name + " defeated all 5 enemies! VICTORY!"
            : player.name + " was defeated. GAME OVER.";

        const playAgain = confirm((victory ? "You won! " : "You lost. ") + "Play again?");
        if (playAgain) {
            startRun();
        } else {
            statusEl.textContent = "Thanks for playing!";
        }
    });
}

startRun();
