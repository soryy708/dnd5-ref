const db = require('./db');

module.exports = ['srd', 'Get information from the SRD', async (bot, userName, userId, commandId, channelId, serverId, message, evt, args) => {
    if (args.length <= 1) {
        bot.sendMessage({
            to: channelId,
            message: 'What exactly would you like me to find? (missing topic)',
        });
        return;
    }

    if (args.length <= 2) {
        bot.sendMessage({
            to: channelId,
            message: 'What exactly would you like me to find? (missing search string)',
        });
        return;
    }

    const topic = args[1];
    const searchTerms = args.slice(2);

    const data = db[topic];
    if (!data) {
        bot.sendMessage({
            to: channelId,
            message: 'Invalid topic. See `!help-srd` for a list of valid topics.',
        });
        return;
    }

    const searchByNameResults = data.searchByName(searchTerms);

    bot.sendMessage({
        to: channelId,
        message: data.searchResultsToString(searchByNameResults),
    });
}];
