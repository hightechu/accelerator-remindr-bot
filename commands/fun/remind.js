// Require Discord.js
const Discord = require("discord.js");

//Require Moment.js
//var moment = require('moment'); 
//moment().format(); 

// Reminder Module
module.exports = {
    // Name of Command
    name: 'remind',
    // Description of Command
    description: 'Get reminded for an event',
    // Usage Instructions
    usage: '!remind [year/month/date] [xx:xx:xx] [minsbefore] [eventname]',
    // Guild - TRUE
    guildOnly: true,
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message
    execute(message, args) {
        let eventYDT = arg[0];
        let eventTime = arg[1];
        let minsBefore = arg[2];
        let eventName = arg[3];
        
        //  format so that the Date constructor can recognize the inputs
        let newTime = eventYDT + " " + eventTime;
        let remindDate = new Date(newTime);

        // Get current date and time
        let currentDate = new Date(); 
        let cdSpecific = currentDate.getFullYear() + "/" 
        + (currentDate.getDate()+1)+ "/" 
        + currentDate.getDay() + " " 
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();
        // Get difference in milliseconds
        let diff = Math.abs(remindDate - cdSpecific);
        // Subtract the requested minutes before
        let finalTime = diff - (minsBefore * 60000);
        message.channel.send('Reminder created!');
        // Create the reminder
        setTimeout(function(){
            const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('Reminder!')
            .setDescription(`${message.author}, this is a reminder to attend ` + eventName + " in " + minsBefore + "  minutes")
            .setTimestamp()
            .setFooter('Powered by amongus sussy baka');

        }, finalTime)
        
    },
};