const Discord = require('discord.js');
const db = require('quick.db')
  //CodeArius
exports.run = async (client, message, args) => {
let kayityetkili = '779775087117074443' //Yetkili
let codeariusver = '778951415686758432'
let codeariusver2 = '778951416655380510'//Verilecek
let codeariusal = '778951422212309002'
let codeariusal2 = '778951423051956236'//Alınacak
let isimön = '✱' //İsmin önüne gelecek simge,tag   

  if(!message.member.roles.cache.has(kayityetkili))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let isim = args[1]
  let yaş = args[2]
  if (!member) return message.channel.send('Bir üye etiketlemelisin.')  //CodeArius
  if (!isim) return message.channel.send('Bir isim yazmalısın.')
  if (!yaş) return message.channel.send('Bir yaş yazmalısın.') //CodeArius
  if (isNaN(yaş)) return message.channel.send('Yaş sadece sayı olarak kabul edilir.')
  let kayıtlımı = await db.fetch(`kayıtlıkişi_${member}`)
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)  //CodeArius
  let toplamaisim = `${isimön} ${isim} ${yaş}`
    //CodeArius
  setTimeout(function(){
  member.setNickname(`${isimön} ${isim} | ${yaş}`)
  },1000)
    setTimeout(function(){
  member.roles.add(codeariusver)  //CodeArius
  },2000)
      setTimeout(function(){
  member.roles.add(codeariusver2)  //CodeArius
  },2000)
    setTimeout(function(){
  member.roles.remove(codeariusal)
  },3000)
  setTimeout(function(){
  member.roles.remove(codeariusal2)
  },3000)
  //CodeArius
let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) + 1 || '0'
const emoji = client.emojis.cache.find(emoji => emoji.name === "5_");

  if(kayıtlımı !== 'evet') {
  db.add(`kayıtk_${message.author.id}`, 1)  //CodeArius
  db.add(`kayıttoplam_${message.author.id}` , 1)
  db.set(`kayıtlıkişi_${member}`, 'evet')
  db.set(`kayıtlıisim_${member}`, toplamaisim)  //CodeArius
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)
  let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription(`${member} kişisinden <@&${codeariusal}> , <@&${codeariusal2}> rolleri alınıp <@&${codeariusver}> , <@&${codeariusver2}> rolleri verildi.

<@!${message.author.id}> **Kişisinin toplam** ${toplam} **adet teyiti oldu.**
`)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter('Zirvedeyiz Aslanım....')
  .setThumbnail("https://cdn.discordapp.com/attachments/745297052883222528/777088136198488084/Woman_Gif_30.gif")
message.channel.send(embed)
  }
  if(kayıtlımı === 'evet'){
  db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)
    let embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription(` **Bu kişi daha önceden de kayıt edilmiş!**

**Kullanıcı daha önce bu isimle kayıt edilmiş!** \`${eskiismi}\``)
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter('Zirvedeyiz Aslanım....')  //CodeArius
  .setThumbnail("https://cdn.discordapp.com/attachments/745297052883222528/777088136198488084/Woman_Gif_30.gif")
message.channel.send(embed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kadın'],
  permLevel: 0
}
exports.help = {
  name: 'k',
  description: "Kadın kullanıcıları kayıt etme komutu.",
  usage: 'kadın @kişi isim yaş'
}