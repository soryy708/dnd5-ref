const dnd = require('dnd5-srd');

const dataSet = dnd.data.weaponProperties;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name}: ${searchResult.desc.join('\n')}`;
        if (searchResult.page) {
            pretty += `\nPlayers handbook page #${searchResult.page}`;
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
