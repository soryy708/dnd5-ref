const dnd = require('dnd5-srd');

const dataSet = dnd.data.races;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name}:`;
        if (searchResult.subraces && searchResult.subraces.length > 0) {
            pretty += `\nSubraces: ${searchResult.subraces.map(subrace => subrace.name).join(', ')}`;
        }
        pretty += `\nSize: ${searchResult.size} - ${searchResult.size_description}`;
        pretty += `\n${searchResult.alignment}`;
        pretty += `\n${searchResult.age}`;
        pretty += `\nLanguages: ${searchResult.languages.map(language => language.name).join(', ')}`;
        pretty += `\n${searchResult.language_desc}`;
        if (searchResult.traits && searchResult.traits.length > 0) {
            pretty += `\nTraits: ${searchResult.traits.map(trait => trait.name).join(', ')}`;
        }
        if (searchResult.trait_options && searchResult.trait_options.choose) {
            pretty += `\nChoose ${searchResult.trait_options.choose} from:`;
            pretty += `\n${searchResult.trait_options.from.map(choice => `${choice.name}+${choice.bonus}`).join(', ')}`;
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
    return dataSet.filter(data => data.name.toLowerCase().includes(searchString.toLowerCase()));
}

module.exports = {
    searchResultsToString,
    searchByName,
};
