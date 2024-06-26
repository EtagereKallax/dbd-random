class RandomizerUiTranslator {
    constructor(language) {
        this.locale = language;
    }

    getTranslation(key) {
        let translations = TRANSLATIONS[this.locale];

        return translations[key];
    }

    setTranslation(language) {
        this.locale = language;
    }

    getLocale() {
        return this.locale;
    }
}

const TRANSLATIONS = {
    'en': {
        "UI_RANDOMIZE_LABEL": "Randomize",
        "UI_RANDOMIZE_WITH_PERKS_LABEL": "with perks",
        "UI_ANY": "French",
        "UI_KILLER": "Killer",
        "UI_SURVIVOR": "Survivor",
        "UI_PERKS_ONLY": "Reselect characters",
        "UI_ITEMS_ONLY": "Items Only",
        "UI_OFFERS_ONLY": "Offers Only",
        "UI_OVERLAY_TEXT1": "THE WHEELS ARE TURNING!",
        "UI_OVERLAY_TEXT2": "LET'S GO!",
        "UI_OVERLAY_RESULT_KILLER": "KILLER IT IS!",
        "UI_OVERLAY_RESULT_SURVIVOR": "SURVIVOR IT IS!",
        "CHARACTER_DWIGHT": "Dwight Fairfield",
        "CHARACTER_MEG": "Meg Thomas",
        "CHARACTER_CLAUDETTE": "Claudette Morel",
        "CHARACTER_JAKE": "Jake Park",
        "CHARACTER_NEA": "Nea Karlsson",
        "CHARACTER_LAURIE": "Laurie Strode",
        "CHARACTER_ACE": "Ace Visconti",
        "CHARACTER_BILL": "Bill Overbeck",
        "CHARACTER_FENG": "Feng Min",
        "CHARACTER_DAVID": "David King",
        "CHARACTER_QUENTIN": "Quentin Smith",
        "CHARACTER_TAPP": "David Tapp",
        "CHARACTER_KATE": "Kate Denson",
        "CHARACTER_ADAM": "Adam Francis",
        "CHARACTER_JEFF": "Jeff Johansen",
        "CHARACTER_JANE": "Jane Romero",
        "CHARACTER_ASH": "Ashley \"Ash\" Joanna Williams",
        "CHARACTER_NANCY": "Nancy Wheeler",
        "CHARACTER_STEVE": "Steve Harrington",
        "CHARACTER_YUI": "Yui Kimura",
        "CHARACTER_ZARINA": "Zarina Kassir",
        "CHARACTER_CHERYL": "Cheryl Mason",
        "CHARACTER_FELIX": "Felix Richter",
        "CHARACTER_ELODIE": "Élodie Rakoto",
        "CHARACTER_YUN": "Yun-Jin Lee",
        "CHARACTER_JILL": "Jill Valentine",
        "CHARACTER_LEON": "Leon Scott Kennedy",
        "CHARACTER_MIKAELA": "Mikaela Reid",
        "CHARACTER_JONAH": "Jonah Vasquez",
        "CHARACTER_YOICHI": "Yoichi Asakawa",
        "CHARACTER_HADDIE": "Haddie Kaur",
        "CHARACTER_ADA": "Ada Wong",
        "CHARACTER_REBECCA": "Rebecca Chambers",
        "CHARACTER_VITTORIO": "Vittorio Toscano",
        "CHARACTER_THALITA": "Thalita Lyra",
        "CHARACTER_RENATO": "Renato Lyra",
        "CHARACTER_GABRIEL": "Gabriel Soma",
        "CHARACTER_NICOLAS": "Nicolas Cage",
        "CHARACTER_ELLEN": "Ellen Ripley",
        "CHARACTER_ALAN": "Alan Wake",
        "CHARACTER_SABLE": "Sable Ward",
        "CHARACTER_TRAPPER": "Evan MacMillan (Trapper)",
        "CHARACTER_WRAITH": "Philip Ojomo (Wraith)",
        "CHARACTER_HILLBILLY": "Max Thompson Jr. (Hillbilly)",
        "CHARACTER_NURSE": "Sally Smithson (Nurse)",
        "CHARACTER_SHAPE": "Michael Myers (Shape)",
        "CHARACTER_HAG": "Lisa Sherwood (Hag)",
        "CHARACTER_DOCTOR": "Herman Carter (Doctor)",
        "CHARACTER_HUNTRESS": "Anna (Huntress)",
        "CHARACTER_CANNIBAL": "Bubba Sawyer (Cannibal)",
        "CHARACTER_NIGHTMARE": "Freddy Krueger (Nightmare)",
        "CHARACTER_PIG": "Amanda Young (Pig)",
        "CHARACTER_Clown": "Jeffrey Hawk (Clown)",
        "CHARACTER_SPIRIT": "Rin Yamaoka (Spirit)",
        "CHARACTER_LEGION": "F. J. S. J. (Legion)",
        "CHARACTER_PLAGUE": "Adiris (Plague)",
        "CHARACTER_GHOSTFACE": "Jed Olsen (Ghost Face)",
        "CHARACTER_DEMOGORGON": "The Demogorgon",
        "CHARACTER_ONI": "Kazan Yamaoka (Oni)",
        "CHARACTER_DEATHSLINGER": "Caleb Quinn (Deathslinger)",
        "CHARACTER_EXECUTIONER": "Pyramid Head (Executioner)",
        "CHARACTER_BLIGHT": "Talbot Grimes (Blight)",
        "CHARACTER_TWINS": "Victor & Charlotte Deshayes (Twins)",
        "CHARACTER_TRICKSTER": "Ji-Woon Hak (Trickster)",
        "CHARACTER_NEMESIS": "Nemesis T-Type (Nemesis)",
        "CHARACTER_CENOBITE": "Elliot Spenser (Cenobite)",
        "CHARACTER_ARTIST": "Carmina Mora (Artist)",
        "CHARACTER_ONRYO": "Sadako Yamamura (Onryo)",
        "CHARACTER_DREDGE": "The Dredge",
        "CHARACTER_MASTERMIND": "Albert Wesker (Mastermind)",
        "CHARACTER_KNIGHT": "Tarhos Kovacs (Knight)",
        "CHARACTER_SKULLMERCHANT": "Adriana Imai (Skull Merchant)",
        "CHARACTER_SINGULARITY": "HUX-A7-13 (Singularity)",
        "CHARACTER_XENOMORPH": "The Xenomorph",
        "CHARACTER_GOODGUY": "Charles Lee Ray (Good Guy)",
        "CHARACTER_UNKNOWN": "The Unknown",
        "PERK_ANURSESCALLING": "A Nurse's Calling",
        "PERK_AGITATION": "Agitation",
        "PERK_ALIENINSTINCT": "Alien Instinct",
        "PERK_AWAKENEDAWARENESS": "Awakened Awareness",
        "PERK_BAMBOOZLE": "Bamboozle",
        "PERK_BARBECUEANDCHILLI": "Barbecue & Chilli",
        "PERK_BATTERIESINCLUDED": "Batteries Included",
        "PERK_BEASTOFPREY": "Beast Of Prey",
        "PERK_BITTERMURMUR": "Bitter Murmur",
        "PERK_BLOODECHO": "Blood Echo",
        "PERK_BLOODWARDEN": "Blood Warden",
        "PERK_BLOODHOUND": "Bloodhound",
        "PERK_BRUTALSTRENGTH": "Brutal Strength",
        "PERK_CALLOFBRINE": "Call of Brine",
        "PERK_CORRUPTINTERVENTION": "Corrupt Intervention",
        "PERK_COULROPHOBIA": "Coulrophobia",
        "PERK_COUPDEGRACE": "Coup de Grâce",
        "PERK_CRUELLIMITS": "Cruel Limits",
        "PERK_DARKDEVOTION": "Dark Devotion",
        "PERK_DARKNESSREVEALED": "Darkness Revealed",
        "PERK_DEADMANSSWITCH": "Dead Man's Switch",
        "PERK_DEADLOCK": "Deadlock",
        "PERK_DEATHBOUND": "Deathbound",
        "PERK_DEERSTALKER": "Deerstalker",
        "PERK_DISCORDANCE": "Discordance",
        "PERK_DISSOLUTION": "Dissolution",
        "PERK_DISTRESSING": "Distressing",
        "PERK_DRAGONSGRIP": "Dragon's Grip",
        "PERK_DYINGLIGHT": "Dying Light",
        "PERK_ENDURING": "Enduring",
        "PERK_ERUPTION": "Eruption",
        "PERK_FIREUP": "Fire Up",
        "PERK_FORCEDHESITATION": "Forced Hesitation",
        "PERK_FORCEDPENANCE": "Forced Penance",
        "PERK_FRANKLINSDEMISE": "Franklin's Demise",
        "PERK_FRIENDSTILTHEEND": "Friends 'til the End",
        "PERK_FURTIVECHASE": "Furtive Chase",
        "PERK_GAMEAFOOT": "Game Afoot",
        "PERK_GEARHEAD": "Gearhead",
        "PERK_GENETICLIMITS": "Genetic Limits",
        "PERK_GRIMEMBRACE": "Grim Embrace",
        "PERK_HEXBLOODFAVOUR": "Hex: Blood Favour",
        "PERK_HEXCROWDCONTROL": "Hex: Crowd Control",
        "PERK_HEXDEVOURHOPE": "Hex: Devour Hope",
        "PERK_HEXFACETHEDARKNESS": "Hex: Face The Darkness",
        "PERK_HEXHAUNTEDGROUND": "Hex: Haunted Ground",
        "PERK_HEXHUNTRESSLULLABY": "Hex: Huntress Lullaby",
        "PERK_HEXNOONEESCAPESDEATH": "Hex: No One Escapes Death",
        "PERK_HEXPENTIMENTO": "Hex: Pentimento",
        "PERK_HEXPLAYTHING": "Hex: Plaything",
        "PERK_HEXRETRIBUTION": "Hex: Retribution",
        "PERK_HEXRUIN": "Hex: Ruin",
        "PERK_HEXTHETHIRDSEAL": "Hex: The Third Seal",
        "PERK_HEXTHRILLOFTHEHUNT": "Hex: Thrill Of The Hunt",
        "PERK_HEXTWOCANPLAY": "Hex: Two Can Play",
        "PERK_HEXUNDYING": "Hex: Undying",
        "PERK_HOARDER": "Hoarder",
        "PERK_HUBRIS": "Hubris",
        "PERK_HYSTERIA": "Hysteria",
        "PERK_IMALLEARS": "I'm All Ears",
        "PERK_INFECTIOUSFRIGHT": "Infectious Fright",
        "PERK_INSIDIOUS": "Insidious",
        "PERK_IRONGRASP": "Iron Grasp",
        "PERK_IRONMAIDEN": "Iron Maiden",
        "PERK_KNOCKOUT": "Knock Out",
        "PERK_LETHALPURSUER": "Lethal Pursuer",
        "PERK_LEVERAGE": "Leverage",
        "PERK_LIGHTBORN": "Lightborn",
        "PERK_MACHINELEARNING": "Machine Learning",
        "PERK_MADGRIT": "Mad Grit",
        "PERK_MAKEYOURCHOICE": "Make Your Choice",
        "PERK_MERCILESSSTORM": "Merciless Storm",
        "PERK_MINDBREAKER": "Mindbreaker",
        "PERK_MONITORANDABUSE": "Monitor & Abuse",
        "PERK_NEMESIS": "Nemesis",
        "PERK_NOWAYOUT": "No Way Out",
        "PERK_NOWHERETOHIDE": "Nowhere To Hide",
        "PERK_OPPRESSION": "Oppression",
        "PERK_OVERCHARGE": "Overcharge",
        "PERK_OVERWHELMINGPRESENCE": "Overwhelming Presence",
        "PERK_PLAYWITHYOURFOOD": "Play with your Food",
        "PERK_POPGOESTHEWEASEL": "Pop Goes the Weasel",
        "PERK_PREDATOR": "Predator",
        "PERK_RANCOR": "Rancor",
        "PERK_RAPIDBRUTALITY": "Rapid Brutality",
        "PERK_REMEMBERME": "Remember Me",
        "PERK_SAVETHEBESTFORLAST": "Save the Best for Last",
        "PERK_SCOURGEHOOKFLOODSOFRAGE": "Scourge Hook: Floods of Rage",
        "PERK_SCOURGEHOOKGIFTOFPAIN": "Scourge Hook: Gift of Pain",
        "PERK_SCOURGEHOOKHANGMANSTRICK": "Scourge Hook: Hangman's Trick",
        "PERK_SCOURGEHOOKMONSTROUSSHRINE": "Scourge Hook: Monstrous Shrine",
        "PERK_SCOURGEHOOKPAINRESONANCE": "Scourge Hook: Pain Resonance",
        "PERK_SEPTICTOUCH": "Septic Touch",
        "PERK_SHADOWBORN": "Shadowborn",
        "PERK_SHATTEREDHOPE": "Shattered Hope",
        "PERK_SLOPPYBUTCHER": "Sloppy Butcher",
        "PERK_SPIESFROMTHESHADOWS": "Spies from the Shadows",
        "PERK_SPIRITFURY": "Spirit Fury",
        "PERK_STARSTRUCK": "Starstruck",
        "PERK_STRIDOR": "Stridor",
        "PERK_SUPERIORANATOMY": "Superior Anatomy",
        "PERK_SURGE": "Surge",
        "PERK_SURVEILLANCE": "Surveillance",
        "PERK_TERMINUS": "Terminus",
        "PERK_TERRITORIALIMPERATIVE": "Territorial Imperative",
        "PERK_THANATOPHOBIA": "Thanatophobia",
        "PERK_THRILLINGTREMORS": "Thrilling Tremors",
        "PERK_THWACK": "THWACK!",
        "PERK_TINKERER": "Tinkerer",
        "PERK_TRAILOFTORMENT": "Trail of Torment",
        "PERK_ULTIMATEWEAPON": "Ultimate Weapon",
        "PERK_UNBOUND": "Unbound",
        "PERK_UNDONE": "Undone",
        "PERK_UNFORESEEN": "Unforeseen",
        "PERK_UNNERVINGPRESENCE": "Unnerving Presence",
        "PERK_UNRELENTING": "Unrelenting",
        "PERK_WHISPERS": "Whispers",
        "PERK_ZANSHINTACTICS": "Zanshin Tactics",
        "PERK_ACEINTHEHOLE": "Ace in the Hole",
        "PERK_ADRENALINE": "Adrenaline",
        "PERK_AFTERCARE": "Aftercare",
        "PERK_ALERT": "Alert",
        "PERK_ANYMEANSNECESSARY": "Any Means Necessary",
        "PERK_APPRAISAL": "Appraisal",
        "PERK_AUTODIDACT": "Autodidact",
        "PERK_BABYSITTER": "Babysitter",
        "PERK_BACKGROUNDPLAYER": "Background Player",
        "PERK_BALANCEDLANDING": "Balanced Landing",
        "PERK_BETTERTHANNEW": "Better Than New",
        "PERK_BETTERTOGETHER": "Better Together",
        "PERK_BITETHEBULLET": "Bite the Bullet",
        "PERK_BLASTMINE": "Blast Mine",
        "PERK_BLOODPACT": "Blood Pact",
        "PERK_BLOODRUSH": "Blood Rush",
        "PERK_BOILOVER": "Boil Over",
        "PERK_BOND": "Bond",
        "PERK_BOONCIRCLEOFHEALING": "Boon: Circle of Healing",
        "PERK_BOONDARKTHEORY": "Boon: Dark Theory",
        "PERK_BOONEXPONENTIAL": "Boon: Exponential",
        "PERK_BOONILLUMINATION": "Boon: Illumination",
        "PERK_BOONSHADOWSTEP": "Boon: Shadow Step",
        "PERK_BORROWEDTIME": "Borrowed Time",
        "PERK_BOTANYKNOWLEDGE": "Botany Knowledge",
        "PERK_BREAKDOWN": "Breakdown",
        "PERK_BREAKOUT": "Breakout",
        "PERK_BUCKLEUP": "Buckle Up",
        "PERK_BUILTTOLAST": "Built to Last",
        "PERK_CALMSPIRIT": "Calm Spirit",
        "PERK_CAMARADERIE": "Camaraderie",
        "PERK_CHAMPIONOFLIGHT": "Champion of Light",
        "PERK_CHEMICALTRAP": "Chemical Trap",
        "PERK_CLAIRVOYANCE": "Clairvoyance",
        "PERK_CORRECTIVEACTION": "Corrective Action",
        "PERK_COUNTERFORCE": "Counterforce",
        "PERK_CUTLOOSE": "Cut Loose",
        "PERK_DANCEWITHME": "Dance With Me",
        "PERK_DARKSENSE": "Dark Sense",
        "PERK_DEADHARD": "Dead Hard",
        "PERK_DEADLINE": "Deadline",
        "PERK_DECEPTION": "Deception",
        "PERK_DECISIVESTRIKE": "Decisive Strike",
        "PERK_DEJAVU": "Deja Vu",
        "PERK_DELIVERANCE": "Deliverance",
        "PERK_DESPERATEMEASURES": "Desperate Measures",
        "PERK_DETECTIVESHUNCH": "Detective's Hunch",
        "PERK_DISTORTION": "Distortion",
        "PERK_DIVERSION": "Diversion",
        "PERK_DRAMATURGY": "Dramaturgy",
        "PERK_EMPATHICCONNECTION": "Empathic Connection",
        "PERK_EMPATHY": "Empathy",
        "PERK_FASTTRACK": "Fast Track",
        "PERK_FIXATED": "Fixated",
        "PERK_FLASHBANG": "Flashbang",
        "PERK_FLIPFLOP": "Flip-Flop",
        "PERK_FOGWISE": "Fogwise",
        "PERK_FORTHEPEOAPLE": "For the People",
        "PERK_FRIENDLYCOMPETITION": "Friendly Competition",
        "PERK_HEADON": "Head On",
        "PERK_HOPE": "Hope",
        "PERK_HYPERFOCUS": "Hyperfocus",
        "PERK_INNERFOCUS": "Inner Focus",
        "PERK_INNERSTRENGTH": "Inner Strength",
        "PERK_INVOCATIONWEAVINGSPIDERS": "Invocation: Weaving Spiders",
        "PERK_IRONWILL": "Iron Will",
        "PERK_KINDRED": "Kindred",
        "PERK_LEADER": "Leader",
        "PERK_LEFTBEHIND": "Left Behind",
        "PERK_LIGHTFOOTED": "Light-Footed",
        "PERK_LIGHTWEIGHT": "Lightweight",
        "PERK_LITHE": "Lithe",
        "PERK_LOWPROFILE": "Low Profile",
        "PERK_LUCKYBREAK": "Lucky Break",
        "PERK_LUCKYSTAR": "Lucky Star",
        "PERK_MADEFORTHIS": "Made for This",
        "PERK_METTLEOFMAN": "Mettle of Man",
        "PERK_NOMITHER": "No Mither",
        "PERK_NOONELEFTBEHIND": "No One Left Behind",
        "PERK_OBJECTOFOBSESSION": "Object of Obsession",
        "PERK_OFFTHERECORD": "Off the Record",
        "PERK_OPENHANDED": "Open-Handed",
        "PERK_OVERCOME": "Overcome",
        "PERK_OVERZEALOUS": "Overzealous",
        "PERK_PARENTALGUIDANCE": "Parental Guidance",
        "PERK_PHARMACY": "Pharmacy",
        "PERK_PLOTTWIST": "Plot Twist",
        "PERK_PLUNDERERSINSTINCT": "Plunderer's Instinct",
        "PERK_POISED": "Poised",
        "PERK_POTENTIALENERGY": "Potential Energy",
        "PERK_POWERSTRUGGLE": "Power Struggle",
        "PERK_PREMONITION": "Premonition",
        "PERK_PROVETHYSELF": "Prove Thyself",
        "PERK_QUICKGAMBIT": "Quick Gambit",
        "PERK_QUICKANDQUIET": "Quick & Quiet",
        "PERK_REACTIVEHEALING": "Reactive Healing",
        "PERK_REASSURANCE": "Reassurance",
        "PERK_REDHERRING": "Red Herring",
        "PERK_REPRESSEDALLIANCE": "Repressed Alliance",
        "PERK_RESIDUALMANIFEST": "Residual Manifest",
        "PERK_RESILIENCE": "Resilience",
        "PERK_RESURGENCE": "Resurgence",
        "PERK_ROOKIESPIRIT": "Rookie Spirit",
        "PERK_SABOTEUR": "Saboteur",
        "PERK_SCAVENGER": "Scavenger",
        "PERK_SCENEPARTNER": "Scene Partner",
        "PERK_SECONDWIND": "Second Wind",
        "PERK_SELFCARE": "Self-Care",
        "PERK_SELFPRESERVATION": "Self-Preservation",
        "PERK_SLIPPERYMEAT": "Slippery Meat",
        "PERK_SMALLGAME": "Small Game",
        "PERK_SMASHHIT": "Smash Hit",
        "PERK_SOLESURVIVOR": "Sole Survivor",
        "PERK_SOLIDARITY": "Solidarity",
        "PERK_SOULGUARD": "Soul Guard",
        "PERK_SPINECHILL": "Spine Chill",
        "PERK_SPRINTBURST": "Sprint Burst",
        "PERK_STAKEOUT": "Stake Out",
        "PERK_STREETWISE": "Streetwise",
        "PERK_STRENGTHINSHADOWS": "Strength in Shadows",
        "PERK_TEAMWORKCOLLECTIVESTEALTH": "Teamwork: Collective Stealth",
        "PERK_TEAMWORKPOWEROFTWO": "Teamwork: Power of Two",
        "PERK_TECHNICIAN": "Technician",
        "PERK_TENACITY": "Tenacity",
        "PERK_THISISNOTHAPPENING": "This is not Happening",
        "PERK_TROUBLESHOOTER": "Troubleshooter",
        "PERK_UNBREAKABLE": "Unbreakable",
        "PERK_UPTHEANTE": "Up the Ante",
        "PERK_URBANEVASION": "Urban Evasion",
        "PERK_VIGIL": "Vigil",
        "PERK_VISIONARY": "Visionary",
        "PERK_WAKEUP": "Wake Up!",
        "PERK_WELLMAKEIT": "We'll Make It",
        "PERK_WEREGONNALIVEFOREVER": "We're Gonna Live Forever",
        "PERK_WICKED": "Wicked",
        "PERK_WINDOWSOFOPPORTUNITY": "Windows of Opportunity",
        "PERK_WIRETAP": "Wiretap"
    },
    'fr': {
        "UI_RANDOMIZE_LABEL": "Randomize",
        "UI_RANDOMIZE_WITH_PERKS_LABEL": "avec perks",
        "UI_ANY": "Anglais",
        "UI_KILLER": "Tueur",
        "UI_SURVIVOR": "Survivant",
        "UI_PERKS_ONLY": "Resélectionner personnages",
        "UI_ITEMS_ONLY": "Objets Uniquement",
        "UI_OFFERS_ONLY": "Sacrifice Uniquement",
        "UI_OVERLAY_TEXT1": "LES ROUES TOURNENT !",
        "UI_OVERLAY_TEXT2": "C'EST PARTI !",
        "UI_OVERLAY_RESULT_KILLER": "TUEUR !",
        "UI_OVERLAY_RESULT_SURVIVOR": "SURVIVANT !",
        "CHARACTER_DWIGHT": "Dwight Fairfield",
        "CHARACTER_MEG": "Meg Thomas",
        "CHARACTER_CLAUDETTE": "Claudette Morel",
        "CHARACTER_JAKE": "Jake Park",
        "CHARACTER_NEA": "Nea Karlsson",
        "CHARACTER_LAURIE": "Laurie Strode",
        "CHARACTER_ACE": "Ace Visconti",
        "CHARACTER_BILL": "Bill Overbeck",
        "CHARACTER_FENG": "Feng Min",
        "CHARACTER_DAVID": "David King",
        "CHARACTER_QUENTIN": "Quentin Smith",
        "CHARACTER_TAPP": "David Tapp",
        "CHARACTER_KATE": "Kate Denson",
        "CHARACTER_ADAM": "Adam Francis",
        "CHARACTER_JEFF": "Jeff Johansen",
        "CHARACTER_JANE": "Jane Romero",
        "CHARACTER_ASH": "Ashley \"Ash\" Joanna Williams",
        "CHARACTER_NANCY": "Nancy Wheeler",
        "CHARACTER_STEVE": "Steve Harrington",
        "CHARACTER_YUI": "Yui Kimura",
        "CHARACTER_ZARINA": "Zarina Kassir",
        "CHARACTER_CHERYL": "Cheryl Mason",
        "CHARACTER_FELIX": "Felix Richter",
        "CHARACTER_ELODIE": "Élodie Rakoto",
        "CHARACTER_YUN": "Yun-Jin Lee",
        "CHARACTER_JILL": "Jill Valentine",
        "CHARACTER_LEON": "Leon Scott Kennedy",
        "CHARACTER_MIKAELA": "Mikaela Reid",
        "CHARACTER_JONAH": "Jonah Vasquez",
        "CHARACTER_YOICHI": "Yoichi Asakawa",
        "CHARACTER_HADDIE": "Haddie Kaur",
        "CHARACTER_ADA": "Ada Wong",
        "CHARACTER_REBECCA": "Rebecca Chambers",
        "CHARACTER_VITTORIO": "Vittorio Toscano",
        "CHARACTER_THALITA": "Thalita Lyra",
        "CHARACTER_RENATO": "Renato Lyra",
        "CHARACTER_GABRIEL": "Gabriel Soma",
        "CHARACTER_NICOLAS": "Nicolas Cage",
        "CHARACTER_ELLEN": "Ellen Ripley",
        "CHARACTER_ALAN": "Alan Wake",
        "CHARACTER_SABLE": "Sable Ward",
        "CHARACTER_TRAPPER": "Evan MacMillan (Piégeur)",
        "CHARACTER_WRAITH": "Philip Ojomo (Spectre)",
        "CHARACTER_HILLBILLY": "Max Thompson Jr. (Montagnard)",
        "CHARACTER_NURSE": "Sally Smithson (Infirmière)",
        "CHARACTER_SHAPE": "Michael Myers (Silhouette)",
        "CHARACTER_HAG": "Lisa Sherwood (Harpie)",
        "CHARACTER_DOCTOR": "Herman Carter (Docteur)",
        "CHARACTER_HUNTRESS": "Anna (Chasseuse)",
        "CHARACTER_CANNIBAL": "Bubba Sawyer (Cannibale)",
        "CHARACTER_NIGHTMARE": "Freddy Krueger (Cauchemar)",
        "CHARACTER_PIG": "Amanda Young (Cochon)",
        "CHARACTER_Clown": "Jeffrey Hawk (Clown)",
        "CHARACTER_SPIRIT": "Rin Yamaoka (Esprit)",
        "CHARACTER_LEGION": "F. J. S. J. (Légion)",
        "CHARACTER_PLAGUE": "Adiris (Épidémie)",
        "CHARACTER_GHOSTFACE": "Jed Olsen (Ghost Face)",
        "CHARACTER_DEMOGORGON": "Le Demogorgon",
        "CHARACTER_ONI": "Kazan Yamaoka (Oni)",
        "CHARACTER_DEATHSLINGER": "Caleb Quinn (Lance-Mort)",
        "CHARACTER_EXECUTIONER": "Pyramid Head (Bourreau)",
        "CHARACTER_BLIGHT": "Talbot Grimes (Fléau)",
        "CHARACTER_TWINS": "Victor & Charlotte Deshayes (Jumeaux)",
        "CHARACTER_TRICKSTER": "Ji-Woon Hak (Farceur)",
        "CHARACTER_NEMESIS": "Nemesis Type T (Nemesis)",
        "CHARACTER_CENOBITE": "Elliot Spenser (Cénobite)",
        "CHARACTER_ARTIST": "Carmina Mora (Artiste)",
        "CHARACTER_ONRYO": "Sadako Yamamura (Onryo)",
        "CHARACTER_DREDGE": "Le Dragage",
        "CHARACTER_MASTERMIND": "Albert Wesker (Mastermind)",
        "CHARACTER_KNIGHT": "Tarhos Kovacs (Chevalier)",
        "CHARACTER_SKULLMERCHANT": "Adriana Imai (Marchande de Crânes)",
        "CHARACTER_SINGULARITY": "HUX-A7-13 (Singularité)",
        "CHARACTER_XENOMORPH": "Le Xénomorphe",
        "CHARACTER_GOODGUY": "Charles Lee Ray (Brave Gars)",
        "CHARACTER_UNKNOWN": "L'Inconnu",
        "PERK_ANURSESCALLING": "Vocation de l'Infirmière",
        "PERK_AGITATION": "Agitation",
        "PERK_ALIENINSTINCT": "Instinct d'Alien",
        "PERK_AWAKENEDAWARENESS": "Perception Éveillée",
        "PERK_BAMBOOZLE": "Déboussoler",
        "PERK_BARBECUEANDCHILLI": "Chili et Barbecue",
        "PERK_BATTERIESINCLUDED": "Piles Incluses",
        "PERK_BEASTOFPREY": "Prédation",
        "PERK_BITTERMURMUR": "Murmure Amer",
        "PERK_BLOODECHO": "Écho Sanguin",
        "PERK_BLOODWARDEN": "Gardien du Sang",
        "PERK_BLOODHOUND": "Limier",
        "PERK_BRUTALSTRENGTH": "Force Brute",
        "PERK_CALLOFBRINE": "Appel de la Mer",
        "PERK_CORRUPTINTERVENTION": "Intervention Impure",
        "PERK_COULROPHOBIA": "Coulrophobie",
        "PERK_COUPDEGRACE": "Coup de Grâce",
        "PERK_CRUELLIMITS": "Limites Cruelles",
        "PERK_DARKDEVOTION": "Sombre Dévotion",
        "PERK_DARKNESSREVEALED": "Ténèbres Révélées",
        "PERK_DEADMANSSWITCH": "Dispositif de l'Homme Mort",
        "PERK_DEADLOCK": "Impasse",
        "PERK_DEATHBOUND": "Lien Mortel",
        "PERK_DEERSTALKER": "Pisteur",
        "PERK_DISCORDANCE": "Discordance",
        "PERK_DISSOLUTION": "Dissolution",
        "PERK_DISTRESSING": "Inquiétant",
        "PERK_DRAGONSGRIP": "Prise du Dragon",
        "PERK_DYINGLIGHT": "Lumière Mourante",
        "PERK_ENDURING": "Tenace",
        "PERK_ERUPTION": "Éruption",
        "PERK_FIREUP": "Intensité Ardente",
        "PERK_FORCEDHESITATION": "Hésitation Forcée",
        "PERK_FORCEDPENANCE": "Pénitence Forcée",
        "PERK_FRANKLINSDEMISE": "Trépas de Franklin",
        "PERK_FRIENDSTILTHEEND": "Amis Pour la Vie",
        "PERK_FURTIVECHASE": "Poursuite Furtive",
        "PERK_GAMEAFOOT": "Ouverture de la Chasse",
        "PERK_GEARHEAD": "Bricolo",
        "PERK_GENETICLIMITS": "Limites Génétiques",
        "PERK_GRIMEMBRACE": "Sombre Étreinte",
        "PERK_HEXBLOODFAVOUR": "Sort : Faveur de Sang",
        "PERK_HEXCROWDCONTROL": "Sort : Contrôle des Foules",
        "PERK_HEXDEVOURHOPE": "Sort : Mangeur d'Espoir",
        "PERK_HEXFACETHEDARKNESS": "Sort : Affrontez les Ténèbres",
        "PERK_HEXHAUNTEDGROUND": "Sort : Terrain Hanté",
        "PERK_HEXHUNTRESSLULLABY": "Sort : Berceuse de la Chasseuse",
        "PERK_HEXNOONEESCAPESDEATH": "Sort : Personne n'Échappe à la Mort",
        "PERK_HEXPENTIMENTO": "Sort : Repentir",
        "PERK_HEXPLAYTHING": "Sort : Jouet",
        "PERK_HEXRETRIBUTION": "Sort : Châtiment",
        "PERK_HEXRUIN": "Sort : Ruine",
        "PERK_HEXTHETHIRDSEAL": "Sort : Le Troisième Sceau",
        "PERK_HEXTHRILLOFTHEHUNT": "Sort : Euphorie de la Chasse",
        "PERK_HEXTWOCANPLAY": "Sort : On Peut Jouer à Deux",
        "PERK_HEXUNDYING": "Sort : Immortel",
        "PERK_HOARDER": "Amasseur",
        "PERK_HUBRIS": "Hubris",
        "PERK_HYSTERIA": "Hystérie",
        "PERK_IMALLEARS": "Je Vous Écoute",
        "PERK_INFECTIOUSFRIGHT": "Peur Contagieuse",
        "PERK_INSIDIOUS": "Insidieux",
        "PERK_IRONGRASP": "Poigne de Fer",
        "PERK_IRONMAIDEN": "Vierge de Fer",
        "PERK_KNOCKOUT": "K. O.",
        "PERK_LETHALPURSUER": "Poursuivant Meurtrier",
        "PERK_LEVERAGE": "Effet de Levier",
        "PERK_LIGHTBORN": "Rejeton de la Lumière",
        "PERK_MACHINELEARNING": "Apprentissage Automatique",
        "PERK_MADGRIT": "Cran Dément",
        "PERK_MAKEYOURCHOICE": "Fais ton Choix",
        "PERK_MERCILESSSTORM": "Tempête Impitoyable",
        "PERK_MINDBREAKER": "Briseur d'Esprit",
        "PERK_MONITORANDABUSE": "Surveillance et Maltraitance",
        "PERK_NEMESIS": "Ennemi Juré",
        "PERK_NOWAYOUT": "Aucune Issue",
        "PERK_NOWHERETOHIDE": "Nulle Part Où Se Cacher",
        "PERK_OPPRESSION": "Oppression",
        "PERK_OVERCHARGE": "Surcharge",
        "PERK_OVERWHELMINGPRESENCE": "Présence Écrasante",
        "PERK_PLAYWITHYOURFOOD": "Jouer avec la Nourriture",
        "PERK_POPGOESTHEWEASEL": "Le Tour est Joué",
        "PERK_PREDATOR": "Prédateur",
        "PERK_RANCOR": "Rancoeur",
        "PERK_RAPIDBRUTALITY": "Brutalité Rapide",
        "PERK_REMEMBERME": "Souviens-Toi de Moi",
        "PERK_SAVETHEBESTFORLAST": "Gardez le Meilleur pour la Fin",
        "PERK_SCOURGEHOOKFLOODSOFRAGE": "Crochet Flagellateur : Flots de Rage",
        "PERK_SCOURGEHOOKGIFTOFPAIN": "Crochet Flagellateur : Don de Souffrance",
        "PERK_SCOURGEHOOKHANGMANSTRICK": "Crochet Flagellateur : Coup du Pendu",
        "PERK_SCOURGEHOOKMONSTROUSSHRINE": "Crochet Flagellateur : Sanctuaire Monstrueux",
        "PERK_SCOURGEHOOKPAINRESONANCE": "Crochet Flagellateur : Écho de Douleur",
        "PERK_SEPTICTOUCH": "Toucher Septique",
        "PERK_SHADOWBORN": "Rejeton de l'Obscurité",
        "PERK_SHATTEREDHOPE": "Espoir Brisé",
        "PERK_SLOPPYBUTCHER": "Boucher Sadique",
        "PERK_SPIESFROMTHESHADOWS": "Espions de l'Ombre",
        "PERK_SPIRITFURY": "Fureur de l'Esprit",
        "PERK_STARSTRUCK": "Fascination",
        "PERK_STRIDOR": "Stridor",
        "PERK_SUPERIORANATOMY": "Anatomie Supérieure",
        "PERK_SURGE": "Surtension",
        "PERK_SURVEILLANCE": "Surveillance",
        "PERK_TERMINUS": "Terminus",
        "PERK_TERRITORIALIMPERATIVE": "Instinct Territorial",
        "PERK_THANATOPHOBIA": "Thanatophobie",
        "PERK_THRILLINGTREMORS": "Firssons Palpitants",
        "PERK_THWACK": "VLAN !",
        "PERK_TINKERER": "Réparateur",
        "PERK_TRAILOFTORMENT": "Piste de Souffrance",
        "PERK_ULTIMATEWEAPON": "Arme Ultime",
        "PERK_UNBOUND": "Inexorable",
        "PERK_UNDONE": "Interrompu",
        "PERK_UNFORESEEN": "Inattendu",
        "PERK_UNNERVINGPRESENCE": "Présence Perturbante",
        "PERK_UNRELENTING": "Implacable",
        "PERK_WHISPERS": "Murmures",
        "PERK_ZANSHINTACTICS": "Tactiques de Zanshin",
        "PERK_ACEINTHEHOLE": "Atout dans la Manche",
        "PERK_ADRENALINE": "Adrénaline",
        "PERK_AFTERCARE": "Suivi des Soins",
        "PERK_ALERT": "Vigilant",
        "PERK_ANYMEANSNECESSARY": "Par Tous les Moyens",
        "PERK_APPRAISAL": "Estimation",
        "PERK_AUTODIDACT": "Autodidacte",
        "PERK_BABYSITTER": "Baby-Sitter",
        "PERK_BACKGROUNDPLAYER": "Joueur Arrière",
        "PERK_BALANCEDLANDING": "Atterrissage Équilibré",
        "PERK_BETTERTHANNEW": "Mieux que Neuf",
        "PERK_BETTERTOGETHER": "Mieux Ensemble",
        "PERK_BITETHEBULLET": "Serrer les Dents",
        "PERK_BLASTMINE": "Mine Explosive",
        "PERK_BLOODPACT": "Pacte de Sang",
        "PERK_BLOODRUSH": "Coup de Collier",
        "PERK_BOILOVER": "Effusion",
        "PERK_BOND": "Lien",
        "PERK_BOONCIRCLEOFHEALING": "Bénédiction : Cercle de Soins",
        "PERK_BOONDARKTHEORY": "Bénédiction : Théorie Ténébreuse",
        "PERK_BOONEXPONENTIAL": "Bénédiction : Exponentiel",
        "PERK_BOONILLUMINATION": "Bénédiction : Illumination",
        "PERK_BOONSHADOWSTEP": "Bénédiction : Marche de l'Ombre",
        "PERK_BORROWEDTIME": "Sursis",
        "PERK_BOTANYKNOWLEDGE": "Connaissances en Botanique",
        "PERK_BREAKDOWN": "Effondrement",
        "PERK_BREAKOUT": "Évasion",
        "PERK_BUCKLEUP": "Accrochez-Vous",
        "PERK_BUILTTOLAST": "Conçu pour Durer",
        "PERK_CALMSPIRIT": "Esprit Calme",
        "PERK_CAMARADERIE": "Camaraderie",
        "PERK_CHAMPIONOFLIGHT": "Champion de la Lumière",
        "PERK_CHEMICALTRAP": "Piège Chimique",
        "PERK_CLAIRVOYANCE": "Clairvoyance",
        "PERK_CORRECTIVEACTION": "Mesure de Correction",
        "PERK_COUNTERFORCE": "Contre-Force",
        "PERK_CUTLOOSE": "Hors de Contrôle",
        "PERK_DANCEWITHME": "Danse Avec Moi",
        "PERK_DARKSENSE": "Sentiment Obscur",
        "PERK_DEADHARD": "Dur à Cuire",
        "PERK_DEADLINE": "Échéance",
        "PERK_DECEPTION": "Supercherie",
        "PERK_DECISIVESTRIKE": "Coup Décisif",
        "PERK_DEJAVU": "Déjà-Vu",
        "PERK_DELIVERANCE": "Libération",
        "PERK_DESPERATEMEASURES": "Mesures Désespérées",
        "PERK_DETECTIVESHUNCH": "Intuition de l'Inspecteur",
        "PERK_DISTORTION": "Distorsion",
        "PERK_DIVERSION": "Diversion",
        "PERK_DRAMATURGY": "Dramaturgie",
        "PERK_EMPATHICCONNECTION": "Connexion Empathique",
        "PERK_EMPATHY": "Empathie",
        "PERK_FASTTRACK": "Voie Rapide",
        "PERK_FIXATED": "Obnubilé",
        "PERK_FLASHBANG": "Grenade Aveuglante",
        "PERK_FLIPFLOP": "À la Revoyure",
        "PERK_FOGWISE": "Débrouillard",
        "PERK_FORTHEPEOAPLE": "Pour le Peuple",
        "PERK_FRIENDLYCOMPETITION": "Compétition Amicale",
        "PERK_HEADON": "De Front",
        "PERK_HOPE": "Espoir",
        "PERK_HYPERFOCUS": "Hyperconcentration",
        "PERK_INNERFOCUS": "Concentration Intérieure",
        "PERK_INNERSTRENGTH": "Force Intérieure",
        "PERK_INVOCATIONWEAVINGSPIDERS": "Invocation : Araignées Tisseuses",
        "PERK_IRONWILL": "Volonté de Fer",
        "PERK_KINDRED": "Parenté",
        "PERK_LEADER": "Meneur",
        "PERK_LEFTBEHIND": "Abandonné",
        "PERK_LIGHTFOOTED": "À Pas de Chat",
        "PERK_LIGHTWEIGHT": "Poids Plume",
        "PERK_LITHE": "Souple",
        "PERK_LOWPROFILE": "Profil Bas",
        "PERK_LUCKYBREAK": "Coup de Chance",
        "PERK_LUCKYSTAR": "Bonne Étoile",
        "PERK_MADEFORTHIS": "Fait Pour Ça",
        "PERK_METTLEOFMAN": "Force de Caractère",
        "PERK_NOMITHER": "Même pas Mal",
        "PERK_NOONELEFTBEHIND": "On n'Abandonne Personne",
        "PERK_OBJECTOFOBSESSION": "Objet d'Obsession",
        "PERK_OFFTHERECORD": "Confidentiel",
        "PERK_OPENHANDED": "Le Coeur sur la Main",
        "PERK_OVERCOME": "Surmonter",
        "PERK_OVERZEALOUS": "Excès de Zèle",
        "PERK_PARENTALGUIDANCE": "Conseils Parentaux",
        "PERK_PHARMACY": "Pharmacie",
        "PERK_PLOTTWIST": "Rebondissement",
        "PERK_PLUNDERERSINSTINCT": "Instinct de Pillard",
        "PERK_POISED": "Assurance",
        "PERK_POTENTIALENERGY": "Énergie Potentielle",
        "PERK_POWERSTRUGGLE": "Bras de Fer",
        "PERK_PREMONITION": "Prémonition",
        "PERK_PROVETHYSELF": "Fais tes Preuves",
        "PERK_QUICKGAMBIT": "Gambit Prompt",
        "PERK_QUICKANDQUIET": "Rapide et Silencieux",
        "PERK_REACTIVEHEALING": "Guérison Réactive",
        "PERK_REASSURANCE": "Réconfort",
        "PERK_REDHERRING": "Leurre",
        "PERK_REPRESSEDALLIANCE": "Alliance Refoulée",
        "PERK_RESIDUALMANIFEST": "Manifeste Résiduel",
        "PERK_RESILIENCE": "Résistance",
        "PERK_RESURGENCE": "Renaissance",
        "PERK_ROOKIESPIRIT": "Détermination du Bleu",
        "PERK_SABOTEUR": "Saboteur",
        "PERK_SCAVENGER": "Récupérateur",
        "PERK_SCENEPARTNER": "Partenaire de Scène",
        "PERK_SECONDWIND": "Second Souffle",
        "PERK_SELFCARE": "Auto-Traitement",
        "PERK_SELFPRESERVATION": "Instinct de Survie",
        "PERK_SLIPPERYMEAT": "Viande Glissante",
        "PERK_SMALLGAME": "Petit Gibier",
        "PERK_SMASHHIT": "Succès Écrasant",
        "PERK_SOLESURVIVOR": "Unique Survivant",
        "PERK_SOLIDARITY": "Solidarité",
        "PERK_SOULGUARD": "Protection de l'Âme",
        "PERK_SPINECHILL": "Frisson",
        "PERK_SPRINTBURST": "Course Effrénée",
        "PERK_STAKEOUT": "En Planque",
        "PERK_STREETWISE": "Débrouillardise",
        "PERK_STRENGTHINSHADOWS": "L'Ombre Fait la Force",
        "PERK_TEAMWORKCOLLECTIVESTEALTH": "Travail d'Équipe : Discrétion Collective",
        "PERK_TEAMWORKPOWEROFTWO": "Travail d'Équipe : Pouvoir des Deux",
        "PERK_TECHNICIAN": "Technicien",
        "PERK_TENACITY": "Ténacité",
        "PERK_THISISNOTHAPPENING": "Ce n'est pas en Train d'Arriver",
        "PERK_TROUBLESHOOTER": "Expert",
        "PERK_UNBREAKABLE": "Indéfectible",
        "PERK_UPTHEANTE": "Augmenter la Mise",
        "PERK_URBANEVASION": "Évasion Urbaine",
        "PERK_VIGIL": "Veillée",
        "PERK_VISIONARY": "Visionnaire",
        "PERK_WAKEUP": "Debout !",
        "PERK_WELLMAKEIT": "Nous Y Arriverons",
        "PERK_WEREGONNALIVEFOREVER": "Nous Vivrons Éternellement",
        "PERK_WICKED": "Malice",
        "PERK_WINDOWSOFOPPORTUNITY": "Parfaite Occasion",
        "PERK_WIRETAP": "Micro Caché"
    }
}
