client.on('message', async message => {

  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];

  if(cmd === `${prefix}dog`) {

    let msg = await message.channel.send("Génération en cours...")
    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)

    if(!{body}) return message.channel.send("Réessayez...")

      let dEmbed = new Discord.MessageEmbed()
      .setColor("#DC143C")
      .setImage(body.message)
      .setTimestamp()
      .setFooter(`AkaRuiDeSu`)

      message.channel.send({embed: dEmbed})
      msg.delete();

}})
