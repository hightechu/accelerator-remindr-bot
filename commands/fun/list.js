// Require Discord.js
const Discord = require("discord.js");

//Require Moment.js
//var moment = require('moment'); 
//moment().format(); 

//const {eventsList} = require("./remind.js");
// Reminder Module
module.exports = {
    // Name of Command
    name: 'list',
    // Description of Command
    description: 'See a list of upcoming events',
    // Guild - TRUE
    guildOnly: true,
    // Execute Command - Parameters: message
    execute(message) {
        var newList = eventsList;
        console.log("hi ", eventsList);
        let description = "";
        for(let i = 0; i < newList.length; i++){

                description += newList[i] + "\n";
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('List')
            .setDescription(description)
            .setTimestamp()
            .setFooter('Powered by Remindr');
    
        message.channel.send(embed)

    }
    
}