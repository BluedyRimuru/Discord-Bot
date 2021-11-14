client.on("message", message => {
  if(message.content === prefix + "serveurinfo") {


const verlvl = {
  0: "Aucun",
  1: "Bas",
  2: "Moyen",
  3: "(╯°□°）╯︵ ┻━┻",
  4: "(ノಠ益ಠ)ノ彡┻━┻"  
}

let inline = true
let servericon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
let serverembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setThumbnail(servericon)
  .setTitle("__**Informations du serveur**__")
  .addField("Nom", message.guild.name, inline)
  .addField("ID", message.guild.id, inline)
  .addField("Owner :crown:", message.guild.owner, inline)
  .addField("Région", message.guild.region, inline)
  .addField("Nombre de membres",  `${message.guild.memberCount}`, inline)
  .addField("Serveur crée le :", message.member.joinedAt)
  .setTimestamp()
  .setFooter(`Informations à propos de ${message.guild.name}`);


message.channel.send(serverembed);

}})
