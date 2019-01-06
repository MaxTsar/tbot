const TelegramBot = require('node-telegram-bot-api');
const Agent = require('socks5-https-client/lib/Agent')

// replace the value below with the Telegram token you receive from @BotFather
const token = '777935821:AAE7a9-qKmJDAIfaLMWqtHHXhZMd3J5v7QM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
	polling: true,
	request: {
		proxy: 'https://188.166.249.2:9050/'
	}
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('> > >', msg)
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});