module.exports = {

    name: "quote",
    description: "Send a random inspirational quote",
    guildOnly: true,

    execute(message) {
        const quotes = require('./QuoteStorage.json');
        let rand = parseInt(Math.random() * quotes.length);

        message.channel.send(quotes[rand]);
    }
}