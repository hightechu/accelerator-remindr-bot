const Discord = require("discord.js");

module.exports = {

    name: "help",
    description: "Sends a list of available commands",
    guildOnly: true,

    execute(message) {
        let desc = "";
        let laugh_ = "<:laugh:880552620169756742>";

        desc += "**!list**\n";
        desc += "See all of your reminders\n\n";

        desc += "**!timer [reminderName] [mins] **\n";
        desc += "Set a timer for yourself!\n";
        desc += "E.g. `!timer touchGrass 10`\n\n";

        desc += "**!remind [date] [time] [mins before] [reminderName]**\n";
        desc += "Add a reminder to the calendar\n";
        desc += "E.g. `!remind 2021-08-25 8:36:00 10 event`\n\n";

        desc += "**!quote**\n";
        desc += "Send a random inspirational quote";

        const embed = new Discord.MessageEmbed()
            .setColor("#21de89")
            .setTitle("Remindr Commands" + laugh_)
            .setDescription(desc)
            .setTimestamp()
            .setFooter("beating procrastination");

        message.channel.send(embed);
    }
}