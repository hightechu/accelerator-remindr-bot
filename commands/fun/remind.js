// Require Discord.js
const Discord = require("discord.js");

//Require Moment.js
var moment = require('moment'); 
moment().format(); 

global.eventsList = [];
// Reminder Module
module.exports = {
    // Name of Command
    name: 'remind',
    // Description of Command
    description: 'Get reminded for an event',
    // Usage Instructions
    usage: '[year-month-date] [xx:xx:xx] [minsbefore] [eventname]',
    // Guild - TRUE
    guildOnly: true,
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message
    // eventsList : [],
    execute(message, args) {
        let eventDMY = args[0];
        let eventTime = args[1];
        let minsBefore = args[2];
        let eventName = args[3];
        
        //  format so that the Date constructor can recognize the inputs
        let newTime = eventDMY + "T" + eventTime;
        message.channel.send(newTime);
        let remindDate = new Date(newTime);
        
        // Get current date and time
        // For todays date;
            Date.prototype.today = function () { 
                // return (this.getFullYear() +"-" + (((this.getMonth()+1) < 10)?"0":"") +  (this.getMonth()+1) + "-" + (this.getDate() < 10)?"0":"") + this.getDate();
                
                return this.getFullYear() + "-0" + (this.getMonth()+1) + "-" + this.getDate();
            }
        // 2021-08-26T12:00:00
        // For the time now
            Date.prototype.timeNow = function () {
                return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
            }
        let cdSpecific = new Date().today() + "T" + new Date().timeNow();
        message.channel.send(cdSpecific);
        let cdNew = new Date(cdSpecific);
        // Get difference in milliseconds
        let diff = Math.abs(remindDate - cdNew);
        message.channel.send(diff);
        // Subtract the requested minutes before
        let finalTime = diff - (minsBefore * 60000);
        message.channel.send(finalTime);
        message.channel.send('Reminder created!');
        // Add it to the list
        eventsList = [];
        let tempData = eventName + " at " + eventTime + " on " + eventDMY;
        eventsList.push(tempData);
        console.log("hi", eventsList);
        // Create the reminder
        setTimeout(
            function(){
            const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('Reminder!')
            .setDescription(`${message.author}, this is a reminder to attend ` + eventName + " in " + minsBefore + "  minutes")
            .setTimestamp()
            .setFooter('Powered by Remindr');
            message.channel.send(embed);
        }, finalTime)
        //removes the reminder from the list after message
        for(let i = 0; i < eventsList.length; i++){
            if(eventsList[i] === tempData){
                Array.prototype.splice(i, 1);
            }
        }
    },
};