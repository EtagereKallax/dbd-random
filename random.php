<?php
require('fonctions.php');
if($_SESSION['idUtilisateur'] == null) {
    page('connexion.php');
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>DBD Randomizer</title>
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <link rel="stylesheet" type="text/css" href="css/generic.css">
    <link rel="stylesheet" type="text/css" href="lib/css/jquery.slotmachine.min.css">
    <script src="lib/js/jquery-3.3.1.min.js"></script>
    <script src="lib/js/slotmachine.js"></script>
    <script src="lib/js/jquery.slotmachine.min.js"></script>
    <script src="script/randomizer-constants.js"></script>
    <script src="script/randomizer-data.js"></script>
    <?php 
    echo "<script>";
    echo "SURVIVORS = " . json_encode($_SESSION['survivants']) . ";";
    echo "KILLERS = " . json_encode($_SESSION['tueurs']) . ";";
    echo "</script>";
    ?>
    <script src="script/randomizer-engine.js"></script>
    <script src="script/randomizer-slot-machine-engine.js"></script>
    <script src="script/randomizer-ui-handler.js"></script>
    <script src="script/randomizer-sound-manager.js"></script>
    <script src="script/randomizer-ui-generator.js"></script>
    <script src="script/randomizer-ui-translator.js"></script>
    <script src="script/randomizer-url-builder.js"></script>
    <script src="script/randomizer.js"></script>
</head>
<body>

<div id="randomizer" data-sound-enabled="false">
    <div id="top">
        <div id="role">
            <div class="role-option role-killer"></div>
            <div class="role-option role-survivor"></div>
        </div>
    </div>
    <div id="main">
        <div id="overlay">
            <p id="overlay-text-1">THE WHEELS ARE TURNING!</p>
            <p id="overlay-text-2">LET'S GO!</p>
            <p id="role-result"></p>
        </div>
        <div id="killer">
            <div class="portrait">
                <div class="portrait-image"></div>
                <div class="portrait-name"></div>
            </div>
            <div class="results">
                <div class="misc-result">
                    <div class="item-result">
                        <div class="item-slot">
                            <div class="item-image"></div>
                            <div class="item-name"></div>
                        </div>
                        <div class="item-plus">+</div>
                        <div class="item-addon-slot">
                            <div id="power-addon1" class="item-addon-image blank"></div>
                            <div class="item-addon-name"></div>
                        </div>
                        <div class="item-addon-slot">
                            <div id="power-addon2" class="item-addon-image blank"></div>
                            <div class="item-addon-name"></div>
                        </div>
                    </div>
                    <div class="offer-result">
                        <div class="offer-slot">
                            <div class="offer-image blank"></div>
                            <div class="offer-name"></div>
                        </div>
                    </div>
                </div>
                <div id="killer-perks" class="perks">
                    <div id="killer-perk-slot1" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                    <div id="killer-perk-slot2" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                    <div id="killer-perk-slot3" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                    <div id="killer-perk-slot4" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="survivor">
            <div class="portrait">
                <div class="portrait-image"></div>
                <div class="portrait-name"></div>
            </div>
            <div class="results">
                <div class="misc-result">
                    <div class="item-result">
                        <div class="item-slot">
                            <div id="survivor-item" class="item-image blank"></div>
                            <div class="item-name"></div>
                        </div>
                        <div class="item-plus">+</div>
                        <div class="item-addon-slot">
                            <div id="item-addon1" class="item-addon-image blank"></div>
                            <div class="item-addon-name"></div>
                        </div>
                        <div class="item-addon-slot">
                            <div id="item-addon2" class="item-addon-image blank"></div>
                            <div class="item-addon-name"></div>
                        </div>
                    </div>
                    <div class="offer-result">
                        <div class="offer-slot">
                            <div class="offer-image blank"></div>
                            <div class="offer-name"></div>
                        </div>
                    </div>
                </div>
                <div id="survivor-perks" class="perks">
                    <div id="survivor-perk-slot1" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                    <div id="survivor-perk-slot2" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                    <div id="survivor-perk-slot3" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                    <div id="survivor-perk-slot4" class="perk-slot">
                        <div class="perk-slot-overlay"></div>
                        <div class="perk-slot-image"></div>
                        <div class="perk-slot-name"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="controls">
        <div class="controls-panel">
            <span class="randomize-label">Randomize</span>:
            <button id="change-language" class="button language">Any</button>
            <button id="randomize-killer" data-character="killer" class="button randomizer">Killer</button>
            <button id="randomize-survivor" data-character="survivor" class="button randomizer">Survivor</button>
            <span class="randomize-with-perks-label">with perks</span>: <input id="randomize-with-perks" type="checkbox"
                                                                               checked="checked">
        </div>
        <div class="controls-panel">
            <span class="randomize-label">Randomize</span>:
            <button id="randomize-perks" class="button">Perks Only</button>
            <button id="randomize-items" class="button">Items Only</button>
            <button id="randomize-offers" class="button">Offers Only</button>
        </div>
    </div>
</div>
</div>
</body>
</html>
