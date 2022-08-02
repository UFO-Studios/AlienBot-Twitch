const TwitchBot = require('twitch-bot')
 
const Bot = new TwitchBot({
  username: 'TADbot',
  oauth: 'oauth:dwiaj91j1KKona9j9d1420',
  channels: ['niceygylive']
})
 
Bot.on('join', channel => {
  console.log(`Joined channel: ${channel}`)
})
 
Bot.on('error', err => {
  console.log(err)
})
 
Bot.on('message', chatter => {
  if(chatter.message === '!test') {
    Bot.say('Command executed! PogChamp')
  }
})
