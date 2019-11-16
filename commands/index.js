const commands = [];

commands.push(
    ...require('./data'),
);

commands.push(['help', 'Show this message', (bot, userName, userId, commandId, channelId) => {
    const commandDescriptions = commands.map(arr => {
        let command = arr[0];
        const description = arr[1];
        if (command === 'srd') {
            command = 'srd <topic> <search string>';
        }
        return `\`!${command}\`\t- ${description}`;
    });
    
    bot.sendMessage({
        to: channelId,
        message: [
            'All available commands are:',
            ...commandDescriptions,
        ].join('\n'),
    });
}]);

function getCommand(subject) {
    return commands.find(([command, description, listener]) => command === subject);
}

function getCommandListener(subject) {
    const [command, description, listener] = getCommand(subject);
    return listener;
}

module.exports = {
    getCommandListener,
};
