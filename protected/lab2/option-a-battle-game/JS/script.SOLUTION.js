/* ================================================================
   JavaScript — Week 3 — Lab 2 (Option A) · Battle Game · SOLUTION
================================================================= */
"use strict";

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

function announceEnemy(enemy) {
    battleLog.push({
        type: "enemy",
        enemy: { name: enemy.name, emoji: enemy.emoji, hp: enemy.hp, maxHp: enemy.maxHp },
    });
}

function onHit(attackerName, defenderName, damage, defenderHpLeft, wasCrit) {
    battleLog.push({ type: "hit", attackerName, defenderName, damage, defenderHpLeft, wasCrit });
}

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

/* ---- YOUR CODE (answer) — Part A ----------------------------------- */
function attack(attacker, defender, onHit) {
    const baseDamage = attacker.attack + Math.floor(Math.random() * 5) - 2;
    const isCrit = Math.random() < 0.25;
    let damage = isCrit ? baseDamage * 2 : baseDamage;

    defender.hp -= damage;
    if (defender.hp < 0) {
        defender.hp = 0;
    }

    onHit(attacker.name, defender.name, damage, defender.hp, isCrit);
}

/* ---- YOUR CODE (answer) — Part B ------------------------------------ */
function battle(player, enemy) {
    while (player.hp > 0 && enemy.hp > 0) {
        attack(player, enemy, onHit);
        if (enemy.hp > 0) {
            attack(enemy, player, onHit);
        }
    }
    return enemy.hp <= 0;
}

/* ---- YOUR CODE (answer) — Part C ------------------------------------ */
function runBattles(player, enemies, onNewEnemy) {
    for (let i = 0; i < enemies.length; i++) {
        onNewEnemy(enemies[i]);
        if (!battle(player, enemies[i])) {
            return false;
        }
    }
    return true;
}

/* ---- PROVIDED: run one battle, then replay + retry ------------------ */
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
