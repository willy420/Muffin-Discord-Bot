const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '🧁';

const PREFIX = '>';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('Muffin is online!');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
            case 'hey':
                message.channel.sendMessage('Hello!');
                break;
            case 'reddit':
                message.channel.sendMessage('https://www.reddit.com/r/CrownMuffin/');
                break;
            case 'info':
                if(args[1] === 'version'){
                    message.channel.sendMessage('Version ' + version);
                }else{
                    message.channel.sendMessage('Invalid arguments');
                }
                break;
            case 'description':
                message.channel.sendMessage('This is Muffin Bot , created by David - 04.07.2019');
                break;
    }
})

bot.login(token);
