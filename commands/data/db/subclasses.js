const dnd = require('dnd5-srd');

const dataSet = dnd.data.subclasses;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name}: ${searchResult.class.name} (${searchResult.subclass_flavor})`;
        pretty += `\n${searchResult.desc.join('\n')}`;
        if (searchResult.features && searchResult.features.length > 0) {
            pretty += `\nFeatures: ${searchResult.features.map(feature => feature.name).join(', ')}`;
        }
        if (searchResult.spells && searchResult.spells.length > 0) {
            pretty += `\nSpells:\n\t${searchResult.spells.map(spell => `${spell.spell.name}. Prerequisites: ${spell.prerequisites.map(prerequisite => prerequisite.name || prerequisite.type).join(', ')}`).join('\n\t')}`;
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
        data.class.name.toLowerCase().includes(searchString.toLowerCase()) ||
        data.subclass_flavor.toLowerCase().includes(searchString.toLowerCase()));
}

module.exports = {
    searchResultsToString,
    searchByName,
};
