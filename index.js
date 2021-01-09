const Discord = require("discord.js");
const client = new Discord.Client();
  
  const newUsers = [];
  
  client.on("ready", () => {
    console.log("I am ready!");
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


client.login(process.env.token);
