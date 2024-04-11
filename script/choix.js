function toggleImageSelection(element) {
    var checkbox = element.querySelector('input[type="checkbox"]');
    var image = element.querySelector('img');

    checkbox.checked = !checkbox.checked;

    if(checkbox.checked) {
        image.classList.add('selected');
    } else {
        image.classList.remove('selected');
    }
}

function selectAllImages() {
    var allImages = document.querySelectorAll('.tueur-item img');
    var selectAll = document.getElementById('selectAll');

    if(selectAll.classList.contains('selected')) {
        selectAll.classList.remove('selected');
        
        for(var i = 0; i < allImages.length; i++) {
            var checkbox = allImages[i].nextElementSibling;
            checkbox.checked = false;
            allImages[i].classList.remove('selected');
        }
    } else {
        selectAll.classList.add('selected');
        
        for(var i = 0; i < allImages.length; i++) {
            var checkbox = allImages[i].nextElementSibling;
            checkbox.checked = true;
            allImages[i].classList.add('selected');
        }
    }
}

let uiTranslator = new RandomizerUiTranslator('fr');
let div = document.getElementById("choix");
let images = [];

for(i = 0; i < SURVIVORS.length; i++) {
    images += [`
        <div class="tueur-item" onclick="toggleImageSelection(this)">
            <img src="img/portraits/survivor/${SURVIVORS[i]}.png" data-id="${SURVIVORS[i]}" name="selected_images[]"><br>
            ${uiTranslator.getTranslation("CHARACTER_" + SURVIVORS[i].toUpperCase())}<br>
            <input type="checkbox" style="display: none;" name="gotsurv[]" value="${SURVIVORS[i]}" />
        </div>
    `];
}

div.innerHTML = images;

div = document.getElementById("choix1");
images = [];

for(i = 0; i < KILLERS.length; i++) {
    images += [`
        <div class="tueur-item" onclick="toggleImageSelection(this)">
            <img src="img/portraits/killer/${KILLERS[i]}.png" data-id="${KILLERS[i]}" name="selected_images[]"><br>
            ${uiTranslator.getTranslation("CHARACTER_" + KILLERS[i].toUpperCase())}<br>
            <input type="checkbox" style="display: none;" name="gottueur[]" value="${KILLERS[i]}" />
        </div>
    `];
}

div.innerHTML = images;

