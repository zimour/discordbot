const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "MTA2NDY2OTQ4NDU4NzE1OTYwMg.GVZaRf.F2-N_FBGqnDuaFtZCsGotpcaBGsROsJS9y8sU8"

const client = new Discord.Client({
    intents: [
        'Guilds',
        'GuildMessages',
        'DirectMessages',
        'MessageContent'
        ]
})

client.on('ready', () => {
    console.log(' Logged in as ' + client.user.tag)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello?!")
    }
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)

client.loadEvents(bot, false)

module.export = bot

let bot = {
    client,
    prefix: "n.",
    owners: ["294812214164979713"]
}

client.login(TOKEN)

