const dnd = require('dnd5-srd');

const dataSet = dnd.data.features;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name} (${searchResult.level}): ${searchResult.desc.join('\n')}`;
        pretty += `\nClass: ${searchResult.class.name}`;
        if (searchResult.subclass.name) {
            pretty += ` ${searchResult.subclass.name}`;
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
