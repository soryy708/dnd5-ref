const dnd = require('dnd5-srd');

const dataSet = dnd.data.subraces;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name} (${searchResult.race.name}): ${searchResult.desc}`;
        if (searchResult.languages && searchResult.languages.length > 0) {
            pretty += `\nLanguages: ${searchResult.languages.map(language => language.name).join(', ')}`;
        }
        if (searchResult.language_options && searchResult.language_options.choose) {
            pretty += `\nChoose ${searchResult.language_options.choose} from:`;
            pretty += `\n${searchResult.language_options.from.map(choice => `${choice.name}`).join(', ')}`;
        }
        if (searchResult.racial_traits && searchResult.racial_traits.length > 0) {
            pretty += `\nRacial traits: ${searchResult.racial_traits.map(trait => trait.name).join(', ')}`;
        }
        if (searchResult.racial_trait_options && searchResult.racial_trait_options.choose) {
            pretty += `\nChoose ${searchResult.racial_trait_options.choose} from:`;
            pretty += `\n${searchResult.racial_trait_options.from.map(choice => `${choice.name}+${choice.bonus}`).join(', ')}`;
        }
        if (searchResult.ability_bonuses && searchResult.ability_bonuses.length > 0) {
            pretty += `\nAbility bonuses: ${searchResult.ability_bonuses.map(bonus => `${bonus.name}+${bonus.bonus}`).join(', ')}`;
        }
        if (searchResult.ability_bonus_options && searchResult.ability_bonus_options.choose) {
            pretty += `\nChoose ${searchResult.ability_bonus_options.choose} from:`;
            pretty += `\n${searchResult.ability_bonus_options.from.map(choice => `${choice.name}+${choice.bonus}`).join(', ')}`;
        }
        if (searchResult.starting_proficiencies && searchResult.starting_proficiencies.length > 0) {
            pretty += `\nStarting proficiencies: ${searchResult.starting_proficiencies.map(proficiency => proficiency.name).join(', ')}`;
        }
        if (searchResult.starting_proficiency_options && searchResult.starting_proficiency_options.choose > 0) {
            pretty += `\nChoose ${searchResult.starting_proficiency_options.choose} from:`;
            pretty += `\n${searchResult.starting_proficiency_options.from.map(choice => choice.name).join(', ')}`;
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
    return dataSet.filter(data => data.name.toLowerCase().includes(searchString.toLowerCase()) ||
        data.race.name.toLowerCase().includes(searchString.toLowerCase()));
}

module.exports = {
    searchResultsToString,
    searchByName,
};
