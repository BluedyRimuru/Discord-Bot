client.on('message', function(message) {


      let NoPermEmbed = new Discord.MessageEmbed()
      .setTitle('Commande /kick')
      .setDescription("**Description :** Cette commande vous permet de kick un utilisateur de votre serveur discord.")
      .addField("**Utilisation de la commande :**",`
      /kick [@user] [Raison]`)
      .addField("**Erreurs trouvées :**", "Vous n'avez pas la permission de kick cet utilisateur ou n'avez tout simplement pas la permission de kick.")
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
      
    
      let NoMentionEmbed = new Discord.MessageEmbed()
      .setTitle('Commande /kick')
      .setDescription("**Description :** Cette commande vous permet de kick un utilisateur de votre serveur discord.")
      .addField("**Utilisation de la commande :**",`
      /kick [@user] [Raison]`)
      .addField("**Erreurs trouvées :**", "Vous n'avez pas mentionné d'utilisateur")
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
      
   
      let NoUserFoundEmbed = new Discord.MessageEmbed()
      .setTitle('Commande /kick')
      .setDescription("**Description :** Cette commande vous permet de bannir définitivement un utilisateur de votre serveur discord.")
      .addField("**Utilisation de la commande :**",`
      /ban [@user] [Raison]`)
      .addField("**Erreurs trouvées :**", "L'utilisateur mentionné n'a pas été trouvé ou est inexistant")
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
        
      let PasPermEmbed = new Discord.MessageEmbed()
      .setTitle('🚨 Erreur, je n\'ai pas la permission nécessaire ! 🚨')
      .setColor('RED')
      .setFooter("AkaRuiDeSu")
      .setTimestamp();
      if(message.content.startsWith(prefix + 'kick')){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(NoPermEmbed);
        if(message.mentions.users.size === 0) {
          return message.channel.send(NoMentionEmbed);
        }
    
        let kick = message.guild.member(message.mentions.users.first());
    
    
        if(!kick) {
          return message.channel.send(NoUserFoundEmbed);
        }
        if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.channel.send(PasPermEmbed);
        kick.kick().then(member => {
          let KickGeneralEmbed = new Discord.MessageEmbed()
          .setTitle(`:ballot_box_with_check: ${member.user.username} vient de se faire kick par ${message.author.username} ! :ballot_box_with_check:`)
          .setColor('GREEN')
          .setFooter("AkaRuiDeSu")
          .setTimestamp();
    
          let KickMpEmbed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} vient de t'expulser du serveur ${message.guild.name} puisque tu n'as pas respecté le règlement du serveur !
          Tu peux revenir sur le serveur en rejoignant avec une nouvelle invitation. 
          Respecte le règlement cette fois-ci ! :)`)
          .setColor('GREEN')
          .setFooter("AkaRuiDeSu")
          .setTimestamp();
          message.channel.send(KickGeneralEmbed)
          member.user.send(KickMpEmbed)
        })
    }});
