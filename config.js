// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "To you",      // The last comma at the end of each sentence must be in English!! Very important!!
            "My beloved sweetheart",  // Same as above...
            "This is us",
            "Go through every event together",
            "Watch you succeed",
            "We even have a child",
            "And now it is your birthday",
            "I wish all the best things will come to you",
            "I had a wonderful year because of you",
            "I hope we can make more beautiful memories together ",
            "In next year, and the year after that, and the year after that...",
            "Can't wait to see this day come true",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "My beloved sweetheart": "./imgs/you.jpeg",
        "This is us": "./imgs/our.jpeg",
        "Go through every event together": "./imgs/valentine.jpeg",
        "Watch you succeed": "./imgs/succeed.jpeg",
        "We even have a child": "./imgs/child.jpg",
        "And now it is your birthday": "./imgs/birthday.jpeg",
        "I had a wonderful year because of you": "./imgs/moment.jpeg",
        "I hope we can make more beautiful memories together": "./imgs/memories.jpeg",
        // "In next year, and the year after that, and the year after that...": "./imgs/future.jpg",
        "Can't wait to see this day come true": "./imgs/wedding.jpeg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Light on",
        play: "Music",
        bannar_coming: "Banner",
        balloons_flying: "Balloons",
        cake_fadein: "Missing something?",
        light_candle: "Candle!",
        wish_message: "Happy Birthday",
        story: "A MESSAGE FOR YOU",
    }
};
