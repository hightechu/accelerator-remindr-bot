// Require Discord.js
const Discord = require("discord.js");

//Require Moment.js
var moment = require('moment'); 
moment().format(); 

// Reminder Module
module.exports = {
    // Name of Command
    name: 'timer',
    // Description of Command
    description: 'Set a timer',
    // Usage Instructions
    usage: '[event] [mins]',
    // Guild - TRUE
    guildOnly: true,
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message
    execute(message, args) {
       let momName = args[0];
       let minsUntil = args[1];
       let finalMins = minsUntil * 60000;
       setTimeout(
        function(){
        const embed = new Discord.MessageEmbed()
        .setColor('#20C19E')
        .setTitle('Reminder!')
        .setDescription(`${message.author}, your timer is up! `)
        .setTimestamp()
        .setFooter('Powered by Remindr');
        message.channel.send(embed);
    }, finalMins)
        
    },
};