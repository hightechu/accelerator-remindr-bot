const Discord = require("discord.js");

module.exports = {

    name: "add",
    usage: "!add [eventname] [timestart] [timeEnd] [date]",
    description: "Reads a google calendar",
    guildOnly: true,
    args: true,

    execute(message, args) {
        let desci = "This event has been added to your Google Calendar:\n\n";


        const embed = new Discord.MessageEmbed()
            .setColor("#21de89")
            .setTitle("Done!")
            .setDescription(desci)
            .setTimestamp()
            .setFooter("Powered by Remindr");

        message.channel.send(embed);
    }
}