//----------------------------------------
// 載入必要的模組
//----------------------------------------
var linebot = require('linebot');
var express = require('express');


//----------------------------------------
// 填入自己在Line Developers的channel值
//----------------------------------------
var bot = linebot({
    channelId: '1655448675',
    channelSecret: '94433e2199a2be4703ad4c97524e8ac5',
    channelAccessToken:
    '41oUiYEYoNJYkSu0XKq9ME8bpN21PuOl9UbFaPdT1r8kZfspDxGaP7CasH0AnHZ4Dnzd3pPT8RMmLMBHOrAmPBDdC8fUsZsnqpaPcoNz/5QVDewaowlBMAEJxzTEHbKa5SdnjR9d0norPx03yqJuvgdB04t89/1O/w1cDnyilFU='
});


//----------------------------------------
// 機器人接受訊息的處理
//----------------------------------------
bot.on('message', function(event) {
    event.reply('Hello, 你好');  
});


//----------------------------------------
// 建立一個網站應用程式app
// 如果連接根目錄, 交給機器人處理
//----------------------------------------
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


//----------------------------------------
// 可直接取用檔案的資料夾
//----------------------------------------
app.use(express.static('public'));


//----------------------------------------
// 監聽3000埠號, 
// 或是監聽Heroku設定的埠號
//----------------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("正在監聽埠號:", port);
});