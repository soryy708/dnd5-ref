const db = require('./db');

module.exports = ['help-srd', 'More information about the `!srd` command', (bot, userName, userId, commandId, channelId) => {
    const topics = Object.keys(db);

    bot.sendMessage({
        to: channelId,
        message: [
            `\`<topic>\`\t- Any of the following: ${topics.map(topic => `\`${topic}\``).join(', ')}`,
            '`<search string>`\t- What to look for',
        ].join('\n'),
    });
}];
