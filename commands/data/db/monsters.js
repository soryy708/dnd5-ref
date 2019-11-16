const dnd = require('dnd5-srd');

const dataSet = dnd.data.monsters;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name}: ${searchResult.size} ${searchResult.type}`;
        if (searchResult.special_abilities && searchResult.special_abilities.length > 0) {
            pretty += `\nSpecial abilities:\n\t${searchResult.special_abilities.map(ability => `${ability.name}: ${ability.desc}`).join('\n\t')}`;
        }
        if (searchResult.legendary_actions && searchResult.legendary_actions.length > 0) {
            pretty += `\nLegendary actions:\n\t${searchResult.legendary_actions.map(action => `${action.name}: ${action.desc}`).join('\n\t')}`;
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
