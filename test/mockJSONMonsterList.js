var mockJSONMonsterList = 
{
"monsterList" : [
{
    "name": "Goblin",
    "hit_points": 7,
	"armor_class": 15,
    "strength": 8,
    "dexterity": 14,
    "constitution": 10,
    "intelligence": 10,
    "wisdom": 8,
    "charisma": 8,
    "strMod": -1,
    "dexMod": 2,
    "conMod": 0,
    "intMod": 0,
    "wisMod": -1,
    "chaMod": -1,
    "actions": [
        {
            "name": "Scimitar",
            "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
            "attack_bonus": 4,
            "damage_dice": "1d6",
            "damage_bonus": 2
        },
        {
            "name": "Shortbow",
            "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
            "attack_bonus": 4,
            "damage_dice": "1d6",
            "damage_bonus": 2
        }
    ],
    "challenge_rating": "1/4",
    "initiative": 12
}, 
{
    "name": "Tarrasque",
    "hit_points": 676,
	"armor_class": 25,
    "strength": 30,
    "dexterity": 11,
    "constitution": 30,
    "intelligence": 3,
    "wisdom": 11,
    "charisma": 11,
    "strMod": 10,
    "dexMod": 0,
    "conMod": 10,
    "intMod": -4,
    "wisMod": 0,
    "chaMod": 0,
    "actions": [
        {
            "name": "Multiattack",
            "desc": "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tai l. It can use its Swallow instead of its bite."
        },
        {
            "name": "Bite",
            "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.",
            "attack_bonus": 19,
            "damage_dice": "4d12",
            "damage_bonus": 10
        },
        {
            "name": "Claw",
            "desc": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage.",
            "attack_bonus": 19,
            "damage_dice": "4d8",
            "damage_bonus": 10
        },
        {
            "name": "Horns",
            "desc": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage.",
            "attack_bonus": 19,
            "damage_dice": "4d10",
            "damage_bonus": 10
        },
        {
            "name": "Tail",
            "desc": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.",
            "attack_bonus": 19,
            "damage_dice": "4d6",
            "damage_bonus": 10
        },
        {
            "name": "Frightful Presence",
            "desc": "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
        },
        {
            "name": "Swallow",
            "desc": "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
        }
    ],
    "challenge_rating": "30",
    "initiative": 2
}
]};

module.exports = mockJSONMonsterList;