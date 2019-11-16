const dnd = require('dnd5-srd');

const dataSet = dnd.data.proficiencies;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name}: ${searchResult.type}`;
        if (searchResult.classes && searchResult.classes.length > 0) {
            pretty += `\nClasses: ${searchResult.classes.map(classObj => classObj.name).join(', ')}`;
        }
        if (searchResult.races && searchResult.races.length > 0) {
            pretty += `\nRaces: ${searchResult.races.map(race => race.name).join(', ')}`;
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
