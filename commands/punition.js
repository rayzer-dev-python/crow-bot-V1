const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'punition',
    aliases: ['sanction'],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color
        if(process.env.owner ===message.author.id || db.get(`ownermd.${message.author.id}`) === true) {
        if(args[0] === "derank") {
              db.set(`sanction_${message.guild.id}`, "derank")
            message.channel.send(`La punition en cas de __raid__ sera maintenant un **derank**`)
        }  else if(args[0] === "kick") {
            db.set(`sanction_${message.guild.id}`, "kick")
            message.channel.send(`La punition en cas de __raid__ sera maintenant un **kick**`)
        }   else if(args[0] === "ban") {
            db.set(`sanction_${message.guild.id}`, "ban")
            message.channel.send(`La punition en cas de __raid__ sera maintenant un **ban**`)
        }

        } else {

        }
    }
}