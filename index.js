const { Telegraf } = require("telegraf");

const data = require("./text.json");

const bot = new Telegraf("7752147336:AAHbjajZuXZ7Mw2W5ssG0F4DoU1XpVDuMK8");
bot.start((ctx) => ctx.reply(data.list));
bot.help((ctx) => ctx.reply(data.list));
bot.command("linearSearch", (ctx) => ctx.reply(data.linearSearch));
bot.command("binarySearch", (ctx) => ctx.reply(data.binarySearch));
bot.command("bubbleSort", (ctx) => ctx.reply(data.bubbleSort));
bot.command("radixSort", (ctx) => ctx.reply(data.radixSort));
bot.command("mergeSort", (ctx) => ctx.reply(data.mergeSort));
bot.command("insertionSort", (ctx) => ctx.reply(data.insertionSort));
bot.command("selectionSort", (ctx) => ctx.reply(data.selectionSort));
bot.command("quickSort", (ctx) => ctx.reply(data.quickSort));

bot.on("text", (ctx) => {
  const message = ctx.message.text;
  const validCommands = [
    "/linearSearch",
    "/binarySearch",
    "/bubbleSort",
    "/radixSort",
    "/mergeSort",
    "/insertionSort",
    "/selectionSort",
    "/quickSort",
    "/help",
    "/start",
  ];

  if (!validCommands.includes(message)) {
    // Reply to wrong text input
    ctx.reply(
      "Sorry, I don't recognize this command. Use /help to see available commands."
    );
  }
});
C:\Users\HP\Documents\GitHub\Realtime-Chat-Box

bot.launch();
