const dnd = require('dnd5-srd');

const dataSet = dnd.data.classes;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = `${searchResult.name}:`;
        pretty += `\nSubclasses: ${searchResult.subclasses.map(subclass => subclass.name).join(', ')}`;
        pretty += `\nHit die: ${searchResult.hit_die}`;
        pretty += `\nProficiencies: ${searchResult.proficiencies.map(proficiency => proficiency.name).join(', ')}`;
        pretty += `\nSaving throws: ${searchResult.saving_throws.map(savingThrow => savingThrow.name).join(', ')}`;
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
