// Require Discord.js
const Discord = require("discord.js");

//Require Moment.js
//var moment = require('moment'); 
//moment().format(); 

const {eventsList} = require("./remind.js");
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
        for(let i = 0; i < newList.length; i++){
            if(i === 0){
                message.channel.send(newList[i]);
            }
            else{
                message.channel.send("\n" + newList[i]);
            }
        }

    }
    
}