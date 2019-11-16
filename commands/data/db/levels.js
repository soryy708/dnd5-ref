const dnd = require('dnd5-srd');

const dataSet = dnd.data.levels;

function searchResultsToString(searchResults) {
    if (!searchResults || searchResults.length === 0) {
        return 'No results.';
    }

    const prettySearchResults = searchResults.map(searchResult => {
        let pretty = searchResult.class.name;
        if (searchResult.subclass.name) {
            pretty += ` ${searchResult.subclass.name}`;
        }
        pretty += ` level ${searchResult.level}`;
        if (searchResult.prof_bonus) {
            pretty += `\nProficiency bonus: +${searchResult.prof_bonus}`;
        }
        if (searchResult.ability_score_bonuses) {
            pretty += `\nAbility score bonus: +${searchResult.ability_score_bonuses}`;
        }
        if (searchResult.feature_choices && searchResult.feature_choices.length > 0) {
            pretty += `\nFeature choices: ${searchResult.feature_choices.map(feature => feature.name).join(', ')}`;
        }
        if (searchResult.features && searchResult.features.length > 0) {
            pretty += `\nFeatures: ${searchResult.features.map(feature => feature.name).join(', ')}`;
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
    return dataSet.filter(data => data.class.name.toLowerCase().includes(searchString.toLowerCase()) || (data.subclass.name || '').toLowerCase().includes(searchString.toLowerCase()));
}

module.exports = {
    searchResultsToString,
    searchByName,
};
