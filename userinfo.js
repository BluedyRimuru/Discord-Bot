client.on("message", message => {
  if(message.content === prefix + "userinfo") {

    if (message.guild.member(message.mentions.users.first())) {
      var user = message.mentions.users.first()
   } else {
      var user = message.author
   }

    const moment = require("moment");

    let inline = true
    let resence = true
    const status = {
        online: "En ligne",
        idle: "Inactif",
        dnd: " Ne pas déranger",
        offline: " Hors-Ligne/Invisble"
    }
    let mentionedUser = message.mentions.users.first() || message.author;
    
    let args = message.content.substring(prefix.length).split(" ");
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author

    if (member.user.bot === true) {
        bot = "Oui";
    } 
    else {
        bot = "Non";
    }

    let servericon = mentionedUser.displayAvatarURL({ format: `jpg`, dynamic: true, size: 1024});
    let embed = new Discord.MessageEmbed()
    .setTitle("__**Vos informations**__")
    .setColor("RED")
    .setThumbnail(servericon)
    .addField("Pseudo", `${member.user.tag}`, inline)
    .addField("ID", `${member.id}`)
    .addField("Bot ", `${bot}`, inline, true)
    .addField("Statut", `${status[member.user.presence.status]}`, inline, true)
    .addField("A rejoint Discord le :", moment(member.user.createdAt).format("LL"), true)
    .setFooter(`Information a propos de ${member.user.username}`)
    .addField('Arrivé sur le serveur', moment(message.guild.members.cache.get(member.id).joinedAt).format("LL"), true)

    .setTimestamp()

    message.channel.send(embed);

}})
