const dnd = require('dnd5-srd');

const dataSet = dnd.data.equipment;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name}: ${searchResult.equipment_category}`;
        switch (searchResult.equipment_category) {
            case 'Weapon': {
                pretty += `\n${searchResult.weapon_category} ${searchResult.weapon_range}`;
                pretty += `\nDamage: ${searchResult.damage.damage_dice} +${searchResult.damage.damage_bonus} ${searchResult.damage.damage_type.name}`;
                break;
            }
            case 'Armor': {
                pretty += `\nCategory: ${searchResult.armor_category}. AC: ${searchResult.armor_class.base}`;
                if (searchResult.armor_class.max_bonus) {
                    pretty += ` + up to ${searchResult.armor_class.max_bonus}`;
                }
                if (searchResult.armor_class.dex_bonus) {
                    pretty += ' + DEX bonus';
                }
                pretty += `\nMinimum STR: ${searchResult.str_minimum}`;
                if (searchResult.stealth_disadvantage) {
                    pretty += '\nCauses stealth disadvantage';
                }
                break;
            }
        }
        return pretty;
    });
    
    let str = prettySearchResults[0];
    if (prettySearchResults.length > 1) {
        str += `\n(${prettySearchResults.length - 1} more results)`;
    }
    return str;
}

function searchByName(searchTerms) {
    const searchString = searchTerms.join(' ');
    return dataSet.filter(data => data.name.toLowerCase().includes(searchString.toLowerCase()));
}

module.exports = {
    searchResultsToString,
    searchByName,
};
