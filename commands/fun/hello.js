// Ping Module
module.exports = {
    // Name of Command
    name: 'hello',
    // Description of Command
    description: 'Ping!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('hello user!');
    },
};