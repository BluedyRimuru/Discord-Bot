client.on('message', async message => {

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "say") {
      
  message.delete()

if(!message.member.hasPermission("MANAGE_MESSGES")) return message.channel.send(`${message.author.username}, vous n'avez pas la permission d'effectuer cette commande`)

let argsresult;
let mChannel = message.mentions.channels.first()

if(mChannel){
  argsresult = args.slice(1).join("  ")
if(!argsresult) return message.channel.send("Merci de spécifier un message à envoyer")
   mChannel.send(argsresult)
} else {
    argsresult = args.join("  ")
if(!argsresult) return message.channel.send("Merci de lire le message à envoyer")
     message.channel.send(argsresult)
}}})
