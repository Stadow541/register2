const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
let kayityetkili = '778951394958376970' 
let codeariusver = '778951413018525746'
  

  if(!message.member.roles.cache.has(kayityetkili))  
  return message.channel.send(`Bu komutu kullanabilmek için \`🔨 Vip Hammer\` yetkisine sahip olmalısınız.`);
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send('Bir üye etiketlemelisin.')


    setTimeout(function(){
  member.roles.add(codeariusver)  //CodeArius
  },1000)



  let embed = new Discord.MessageEmbed()
  .setColor('YELLOW')
  .setDescription(`**${member} kişisine <@&778951413018525746> rolü verildi.**

<@!${message.author.id}> **Kişisi Vip Komutunu Kullandı**
`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter('Zirvedeyiz Aslanım....')
  .setThumbnail("https://cdn.discordapp.com/attachments/745297052883222528/777088136198488084/Woman_Gif_30.gif")
message.channel.send(embed)
  
  };


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['vip-ver'],
  permLevel: 0
}
exports.help = {
  name: 'vip-ver',
  description: "erkek kullanıcıları kayıt etme komutu.",
  usage: 'vip-ver @kişi '
}