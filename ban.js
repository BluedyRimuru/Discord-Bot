client.on('message', function(message) {

      let NoPermEmbed = new Discord.MessageEmbed()
      .setTitle('Commande /ban')
      .setDescription("**Description :** Cette commande vous permet de bannir définitivement un utilisateur de votre serveur discord.")
      .addField("**Utilisation de la commande :**",`
      /ban [@user] [Raison]`)
      .addField("**Erreurs trouvées :**", "Vous n'avez pas la permission de bannir cet utilisateur ou n'avez tout simplement pas la permission de ban.")
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
      
    
      let NoMentionEmbed = new Discord.MessageEmbed()
      .setTitle('Commande /ban')
      .setDescription("**Description :** Cette commande vous permet de bannir définitivement un utilisateur de votre serveur discord.")
      .addField("**Utilisation de la commande :**",`
      /ban [@user] [Raison]`)
      .addField("**Erreurs trouvées :**", "Vous n'avez pas mentionné d'utilisateur")
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
      
   
      let NoUserFoundEmbed = new Discord.MessageEmbed()
      .setTitle('Commande /ban')
      .setDescription("**Description :** Cette commande vous permet de bannir définitivement un utilisateur de votre serveur discord.")
      .addField("**Utilisation de la commande :**",`
      /ban [@user] [Raison]`)
      .addField("**Erreurs trouvées :**", "L'utilisateur mentionné n'a pas été trouvé ou est inexistant")
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
        
      let PasPermEmbed = new Discord.MessageEmbed()
      .setTitle('🚨 Erreur, Ban 🚨')
      .addField("\u200b","Je n'ai pas la permission nécessaire pour bannir cet utilisateur")
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
      
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      let reason = args.slice(1).join('  ');

      if(command === 'ban') {


        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(NoPermEmbed);
        if(message.mentions.users.size === 0) {
          return message.channel.send(NoMentionEmbed);
        }
    
        let ban = message.guild.member(message.mentions.users.first());
    
    
        if(!ban) {
          return message.channel.send(NoUserFoundEmbed);
        }
        if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send(PasPermEmbed);
        ban.ban().then(member => {
          let BanGeneralEmbed = new Discord.MessageEmbed()
          .setTitle("Information de ban")
          .addField(`**Utilisateur Banni :**`, `${member.user.username}`)
          .addField(`**Banni Par :**`, `${message.author.username}`)
          .addField(`**Pour la raison :**`, `${reason}`)
          .setColor('RED')
          .setFooter("AkaRuiDeSu")
          .setTimestamp();
    
          let BanMpEmbed = new Discord.MessageEmbed()
          .addField(`${message.author.username} vient de te bannir du serveur ${message.guild.name} puisque tu n'as pas respecté le règlement du serveur !
          Tu peux revenir sur le serveur en rejoignant avec une nouvelle invitation. 
          Respecte le règlement cette fois-ci ! :)`)
          .setColor('GREEN')
          .setFooter("AkaRuiDeSu")
          .setTimestamp();
          message.channel.send(BanGeneralEmbed)
          member.user.send(BanMpEmbed)
        })
    }});
