var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack=10;
var playerMoney=10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
    //Ask if player would like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //If player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true) leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from player for skipping
            playerMoney = playerMoney - 2;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
   
    //remove enemy's health by amount set in playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
         }

     //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack
    console.log(
        enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining. "
    );

    //Check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
         } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    for (var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
    }