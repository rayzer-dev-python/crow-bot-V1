const Discord = require("discord.js")
const {MessageEmbed} = require("discord.js")

const db = require("quick.db")
const ms = require("ms")

module.exports = {
    name: 'theme',
    aliases: [],
    run: async (client, message, args) => {
let prefix =  db.get(` ${process.env.owner}.prefix`)
if(prefix === null) prefix = process.env.prefix;
  let color = db.get(`${process.env.owner}.color`) 
   if(color === null  ) color = process.env.color
 
      
        if(process.env.owner ===message.author.id || db.get(`ownermd.${message.author.id}`) === true || db.get(`${message.guild.id}.${message.author.id}.wlmd`) === true) {
            if (!args[0]) return message.reply(':x: **Donne moi une couleur**')
            if (args[0]){
                db.set(`${process.env.owner}.color`, args[0])
                message.channel.send('✔ **Couleur changée**')
            }
} else {

}

    }
}