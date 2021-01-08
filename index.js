const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
  
  const newUsers = [];
  
  client.on("ready", () => {
    console.log("I am ready!");
  });

  
  client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
    newUsers[guild.id].set(member.id, member.user);
  
    if (newUsers[guild.id].size > 10) {
      const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
      guild.channels.find(channel => channel.name === "「♥〢𝑊𝑒𝑙𝑐𝑜𝑚𝑒").send("Be Servere D V N   N I T R O Khosh Omadi\n" + userlist).then(message => message.delete(15000)).catch(err => err);
      newUsers[guild.id].clear();
    }
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
  });



var used1 = false;
client.on('ready', () => {
    console.log('On ShoD ');
    client.user.setStatus('online').catch(console.error);
    setInterval(() => {
      let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0)
      var guild = client.guilds.cache.get('724360597038301199')
      var onlineCount = guild.members.cache.filter(m => m.presence.status === 'online').size 
        if(used1){
          client.user.setActivity(`تعداد کاربران : ${membersCount}`,{
          type: 'LISTENING'
/*           url: 'https://www.twitch.tv/XXX', */
          });
        used1 = false;}
      else{
         client.user.setActivity("Welcome To Divinity=))",{
        type: "LISTENING"
        });
        used1 = true;}
    }, 25000);

});


client.login(config.token);
