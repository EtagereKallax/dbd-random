class Engine {

  pickRandomRole() {
    let id = this._pickRandomNumber(ROLES);

    return { id: id, role: ROLES[id] };
  }

  pickRandomCharacter(role) {
    let id, character;

    switch(role) {
      case ROLES[0]:
        id = this._pickRandomNumber(KILLERS);
        character = KILLERS[id];
        break;
      case ROLES[1]:
        id = this._pickRandomNumber(SURVIVORS);
        character = SURVIVORS[id]
        break;
    }

    return { id: id, character: character };
  }

  pickRandomPerks(role) {
    let ids, perks;
    switch(role) {
      case ROLES[0]:
        ids = this._getRandomNumberBetween(4, 0, KILLER_PERKS.length);
        perks = ids.map(function(id) {
          return KILLER_PERKS[id];
        });
        break;
      case ROLES[1]:
        ids = this._getRandomNumbersBetween(4, 0, SURVIVOR_PERKS.length);
        perks = ids.map(function(id) {
          return SURVIVOR_PERKS[id];
        });
        break;
    }

    return { ids: ids, perks: perks };
  }

  pickRandomSurvivorItem() {
    let id = this._pickRandomNumber(SURVIVOR_ITEMS);
    let item = SURVIVOR_ITEMS[id];

    return { id: id, type: item.type, name: item.name, frenchName: item.frenchName };
  }

  pickRandomAddons(character) {
    let ids, names, frenchNames;

    if($.inArray(character, KILLERS) !== -1) {
      ids = this._getRandomNumbersBetween(2, 0, KILLER_POWERS[character].addons.length - 1);
      names = ids.map(function(id) {
        return KILLER_POWERS[character].addons[id].name;
      });
      frenchNames = ids.map(function(id) {
        return KILLER_POWERS[character].addons[id].frenchName;
      });
    } else {
      ids = this._getRandomNumbersBetween(2, 0, ITEMS_ADDONS[character].length - 1);
      names = ids.map(function(id) {
        return ITEMS_ADDONS[character][id].name;
      });
      frenchNames = ids.map(function(id) {
        return ITEMS_ADDONS[character][id].frenchName;
      });
    }

    return { ids: ids, names: names, frenchNames: frenchNames };
  }
}
