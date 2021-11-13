client.on('message', async message => {

  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];

  if(cmd === `${prefix}cat`) {

    let msg = await message.channel.send("Generating...")
    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)

    if(!{body}) return message.channel.send("J'ai cessé, réessayer !")

      let cEmbed = new Discord.MessageEmbed()
      .setColor("#DC143C")
      .setImage(body.file)
      .setTimestamp()
      .setFooter(`AkaRuiDeSu`)

      message.channel.send({embed: cEmbed})
      msg.delete();

}})
