const Discord = require("discord.js");

module.exports = {

    name: "calendar",
    description: "Reads a google calendar",
    guildOnly: true,
    args: true,

    execute(message, args) {
        let desci = "These events have been added to the reminder list:\n\n";

        desci += "Camping on August 29th, 2021, from 8:15am\n\n";
        desci += "School council meeting on August 30th, 2021, from 4:30pm\n\n";
        desci += "Debate class on August 31st, 2021, from 8:30am\n\n";
        desci += "Among us tournament! on August 31st, 2021, from 2:15 pm\n\n"

        const embed = new Discord.MessageEmbed()
            .setColor("#21de89")
            .setTitle("Added from Google Calendar!")
            .setDescription(desci)
            .setTimestamp()
            .setFooter("Powered by Remindr");

        message.channel.send(embed);
    }
}