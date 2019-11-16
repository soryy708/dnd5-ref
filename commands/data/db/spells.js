const dnd = require('dnd5-srd');

const dataSet = dnd.data.spells;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name} (${searchResult.school.name}): ${searchResult.desc.join('\n')}`;
        if (searchResult.higher_level) {
            pretty += `\n${searchResult.higher_level}`;
        }
        if (searchResult.concentration) {
            pretty += '\nIs a concentration spell.';
        }
        if (searchResult.ritual) {
            pretty += '\nIs a ritual.';
        }
        pretty += `\nRange: ${searchResult.range}`;
        pretty += `\nDuration: ${searchResult.duration}`;
        pretty += `\nCasting time: ${searchResult.casting_time}`;
        if (searchResult.classes.length > 0) {
            pretty += `\nClasses: ${searchResult.classes.map(classObj => classObj.name).join(', ')}`;
        }
        if (searchResult.material) {
            pretty += `\nMaterials: ${searchResult.material}`;
        }
        pretty += `\nPlayers handbook page #${searchResult.page}`;
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
