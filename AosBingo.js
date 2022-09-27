



function generateBingo(){
    var bingo = document.getElementById("bingo");
    bingo.innerHTML = '';
    var tasks = getTasks();
    shuffle(tasks);
    console.log(tasks);
    var i = 0;
    var j = 0;
    var taskIndex = 0;
    var html = '';
    for(i = 0; i < 5; i++){
        if(html == ''){
            html = '<tr>';
        }else{
            html += '<tr>'
        }

        for(j = 0; j < 5; j++){
            html += '<td>'+tasks[taskIndex]+'</td>';
            taskIndex++;
        }
        html += '</tr>'
    }
    bingo.innerHTML += html;

}

function changeBGBlue(){

}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//---------------------------------------------------
function getWeaponType(){
    var weaponTypes = [
        "Swinging",
        "Slicing",
        "Gloves",
        "Stabbing",
        "Lances",
        "Flurry",
        "Pistol",
        "Rifle"
    ];

    var weaponType = weaponTypes[Math.floor(Math.random()*weaponTypes.length)];
    return weaponType;
}


function getWeapon(){
    var weapons = [
        "Bamboo Sword",
        "Broadsword",
        "Scimitar",
        "Onikiri",
        "Kunitsuna",
        "Katana",
        "Claymore",
        "Hammer",
        "Osafune",
        "Great Sword",
        "Yasutsuna",
        "Muramasa",
        "Warhammer",
        "Battle Axe",
        "Tallhammer",
        "Joyeuse",
        "Ascalon",
        "Dainslef",
        "Claimh Solais",
        "Final Sword",
        "Excalibur",
        "Death's Sickle",
        "Knife",
        "Short Sword",
        "Bastard Sword",
        "Whip Sword",
        "Baselard",
        "Gladius",
        "Combat Knife",
        "Hrunting",
        "Vjaya",
        "Milican's Sword",
        "Mystletain",
        "Gram",
        "Burtgang",
        "Rahab's Sword",
        "Durandal",
        "Laevatain",
        "Kaladbolg",
        "Balmung",
        "Cestus",
        "Whip Knuckle",
        "Poison Fist",
        "Rapier",
        "Cutall",
        "Estoc",
        "Spear",
        "Trident",
        "Gungner",
        "Lance",
        "Partizan",
        "Gabolg",
        "Ronginus' Spear",
        "Valmanway",
        "Mach Punch",
        "Kaiser Knuckle",
        "Handgun",
        "Silver Gun",
        "Positron Rifle"
    ];

    var weapon = weapons[Math.floor(Math.random()*weapons.length)];
    return weapon;
}

function getColor(){
    var colors = [
        "Red",
        "Blue",
        "Yellow"
    ];

    var color = colors[Math.floor(Math.random()*colors.length)];
    return color;
}

function getAbility(){
    var abilities = [
        "Double Jump",
        "Backdash",
        "Slide"
    ];
    var ability = abilities[Math.floor(Math.random()*abilities.length)];
    return ability;
}

function getBoss(){
    var bosses = [
        "Creaking Skull(B)",
        "Manticore(B)",
        "Great Armor(B)",
        "Big Golem(B)",
        "Headhunter",
        "Death",
        "Legion",
        "Balore",
        "Graham",
        "Julius",
        "Chaos"
    ];
    var boss = bosses[Math.floor(Math.random()*bosses.length)];
    return boss;
}

function getRedSoul(){
    var redSouls = [
        "Altair",
        "Arachne",
        "Axe Armor",
        "Balore",
        "Bat",
        "Beam Skeleton",
        "Biphron",
        "Blue Crow",
        "Bomber Armor",
        "Chronomage",
        "Cockatrice",
        "Demon Lord",
        "Disc Armor",
        "Dryad",
        "Durga",
        "Evil Butcher",
        "Fish Head",
        "Flame Demon",
        "Fleaman",
        "Ghost",
        "Giant Skeleton",
        "Gladiator",
        "Harpy",
        "Killer Doll",
        "Killer Fish",
        "Killer Mantle",
        "Kyoma Demon",
        "Legion",
        "Lightning Doll",
        "Mandragora",
        "Man-Eater",
        "Merman",
        "Mudman",
        "Needles",
        "Nemesis",
        "Nightmare",
        "Red Minotaur",
        "Ripper",
        "Rock Armor",
        "Siren",
        "Skeleton",
        "Skull Archer",
        "Skull Millione",
        "Slime",
        "Student Witch",
        "Tiny Devil",
        "Ukoback",
        "Une",
        "Valkyrie",
        "Waiter Skeleton",
        "Werejaguar",
        "Weretiger",
        "Werewolf",
        "Winged Skeleton",
        "Zombie Soldier"
    ];
    var redSoul = redSouls[Math.floor(Math.random()*redSouls.length)];
    return redSoul;
}

function getBlueSoul(){
    var blueSouls = [
        "Alastor",
        "Alura Une",
        "Big Golem",
        "Black Panther",
        "Bone Pillar",
        "Buer",
        "Cagnazzo",
        "Catoblepas",
        "Creaking Skull",
        "Curly",
        "Death",
        "Devil",
        "Final Guard",
        "Flying Armor",
        "Giant Bat",
        "Giant Ghost",
        "Great Armor",
        "Imp",
        "Manticore",
        "Medusa Head",
        "Persephone",
        "Shadow Knight",
        "Sky Fish",
        "Witch"
    ];
    var blueSoul = blueSouls[Math.floor(Math.random()*blueSouls.length)];
    return blueSoul;
}

function getEnemy(){
    var enemies = [
        "Alastor",
        "Altair",
        "Alura Une",
        "Arachne",
        "Arc Demon",
        "Axe Armor",
        "Bael",
        "Basilisk",
        "Bat",
        "Beam Skeleton",
        "Big Golem",
        "Biphron",
        "Blue Crow",
        "Bomber Armor",
        "Bone Pillar",
        "Buer",
        "Cagnazzo",
        "Catoblepas",
        "Chronomage",
        "Cockatrice",
        "Creaking Skull",
        "Curly",
        "Dead Crusader",
        "Dead Warrior",
        "Demon Lord",
        "Devil",
        "Disc Armor",
        "Dryad",
        "Durga",
        "Ectoplasm",
        "Erinys",
        "Evil Butcher",
        "Final Guard",
        "Fish Head",
        "Flame Demon",
        "Fleaman",
        "Flesh Golem",
        "Gargoyle",
        "Ghost",
        "Ghost Dancer",
        "Giant Ghost",
        "Giant Skeleton",
        "Giant Worm",
        "Gladiator",
        "Golem",
        "Gorgon",
        "Great Armor",
        "Gremlin",
        "Harpy",
        "Imp",
        "Iron Golem",
        "Kicker Skeleton",
        "Killer Doll",
        "Killer Fish",
        "Killer Mantle",
        "Kyoma Demon",
        "Lightning Doll",
        "Lilith",
        "Lubicant",
        "Mandragora",
        "Man-Eater",
        "Manticore",
        "Medusa Head",
        "Merman",
        "Mimic",
        "Minotaur",
        "Mudman",
        "Needles",
        "Nemesis",
        "Nightmare",
        "Peeping Eye",
        "Persephone",
        "Poison Worm",
        "Quezlcoatl",
        "Red Crow",
        "Red Minotaur",
        "Ripper",
        "Rock Armor",
        "Shadow Knight",
        "Siren",
        "Skeleton",
        "Skeleton Knight",
        "Skull Archer",
        "Skull Millione",
        "Sky Fish",
        "Slime",
        "Stolas",
        "Student Witch",
        "Succubus",
        "Tiny Devil",
        "Triton",
        "Tsuchinoko",
        "Ukoback",
        "Une",
        "Valkyrie",
        "Waiter Skeleton",
        "Werejaguar",
        "Weretiger",
        "Werewolf",
        "White Dragon",
        "Winged Skeleton",
        "Witch",
        "Wooden Golem",
        "Zombie",
        "Zombie Officer",
        "Zombie Soldier"
    ];
    var enemy = enemies[Math.floor(Math.random()*enemies.length)];
    return enemy;
}

function getAccessory(){
    var accessories = [
        "Ancient Belt",
        "Black Belt",
        "Black Cloak",
        "Cape",
        "Chaos Ring",
        "Crimson Cloak",
        "Flame Necklace",
        "Gold Ring",
        "Heart Pendant",
        "Lucky Charm",
        "Pendant",
        "Rare Ring",
        "Red Scarf",
        "Rune Ring",
        "Satan's Ring",
        "Scarf",
        "Sherman Ring",
        "Skull Necklace",
        "Soul Eater Ring",
        "Tear of Blood"
    ];
    var accessory = accessories[Math.floor(Math.random()*accessories.length)];
    return accessory;
}

function getArmor(){
    var armors = [
        "Casual Clothes",
        "Cloth Tunic",
        "Silk Robe",
        "Leather Plate",
        "Gym Clothes",
        "War Fatigues",
        "Copper Plate",
        "Samurai Armor",
        "Ninja Suit",
        "Soldier Uniform",
        "Army Jacket",
        "Iron Plate",
        "Elfin Robe",
        "Steel Plate",
        "Pitch Black Suit",
        "Armor of Water",
        "Armor of Fire",
        "Silver Plate",
        "Blocking Mail",
        "Olrox's Suit",
        "Gold Plate",
        "Dracula's Tunic",
        "Death's Robe",
        "Eversing",
        "Demon's Mail"
    ];
    var armor = armors[Math.floor(Math.random()*armors.length)];
    return armor;
}

function getArea(){
    var areas = [
        "Castle Corridor",
        "Chapel",
        "Clock Tower",
        "Dance Hall",
        "Inner Quarters",
        "Study",
        "Top Floor",
        "Underground Reservoir",
        "Underground Cemetary",
        "Forbidden Area",
        "The Arena",
        "Floating Gardens",
        "Chaotic Realm"
    ];
    var area = areas[Math.floor(Math.random()*areas.length)];
    return area;
}

function getStatusEffect(){
    var statusEffects = [
        "Poisoned",
        "Petrified",
        "Cursed"
    ];
    var statusEffect = statusEffects[Math.floor(Math.random()*statusEffects.length)];
    return statusEffect;
}

//Needs more tasks and then get 25 random elements from this list
function getTasks(){
    var tasksFinal = [];
    for(var i = 0;i < 25; i++){
        var num = Math.floor((Math.random() * 10) + 1);
        var ammount = Math.floor((Math.random() * 100000) + 30000);
        var weaponType = getWeaponType();
        var weapon = getWeapon();
        var color = getColor();
        var ability = getAbility();
        var boss = getBoss();
        var redSoul = getRedSoul();
        var blueSoul = getBlueSoul();
        var enemy = getEnemy();
        var accessory = getAccessory();
        var armor = getArmor();
        var statusEffect = getStatusEffect();
        var area = getArea();
        var tasks = [
            `Buy a ${weaponType} weapon`,
            `Buy ${num} ${color} souls (can be duplicates)`,
            "Get the soul drop from Legion",
            `Fight and kill ${boss} with ${weapon}`,
            `Kill ${enemy} ${num} time(s)`,
            `Wear ${armor} during ${boss} fight`,
            `Complete ${boss} without healing`,
            `Use ${blueSoul} skill ${num} time(s)`,
            "Climb the waterfall",
            `Get ${statusEffect} ${num} time(s)`,
            "Get the check at the end of WRITG in Arena",
            `Use ${ability} ${num} time(s)`,
            "Ride a Nightmare",
            `Punch ${enemy} ${num} time(s)`,
            `Reach level ${num}`,
            `Spend ${ammount} or more gold`,
            `Use ${redSoul} skill on ${enemy} ${num} time(s)`,
            `Check ${num} room(s) at ${area}`,
            `Get the soul drop from ${enemy}`,
            `Use ${redSoul} skill on ${boss} ${num} time(s)`,
            "Get a soul from the fish in the empty room at reservoir",
            `Unequip all color souls during ${boss} fight`,
            `Eat ${num} different foods`,
            `Divekick ${boss} ${num} times`,
            `Wear ${accessory} during ${boss} fight`
        ]
        tasksFinal.push(tasks[i]);
    }
    
    return tasksFinal;
}