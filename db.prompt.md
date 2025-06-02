
5. 在 db.js 中，用 SQLite 在 movie_quotes table 新增以下資料
   欄位名稱
```sql
CREATE TABLE movie_quotes (
                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                              provider TEXT NOT NULL,
                              movie_name TEXT NOT NULL,
                              quote TEXT NOT NULL,
                              votes INTEGER DEFAULT 0
);
```
資料如下，請使用雙引號來表達字串

```
劉政諺	霍爾的移動城堡	愛不是尋找一個完美的人，而是學會用完美的眼光欣賞那個並不完美的人。
陳泓諺	我的失憶女友	I love you very much, probably more than anybody could love another person.
林仕鈞	那些年	也許在那個平行時空裡，我們是在一起的。
周竑宇	當男人戀愛時	跟你爸爸說，你女兒現在有人照顧，不會再孤單了。
贝俊德	真愛至上	To me, you are perfect.
李信緯	派特的幸福劇本	治好我的瘋狂的唯一辦法，就是你做出比我更瘋狂的事。謝謝妳。我愛妳。
江笠瑄	little women	I Believe We Have Some Power Over Who We Love. It Isn’t Something That Just Happens To A Person
洪立安	你的名字	相遇不計取數的世界裏，和命運的那人相逢是困難的。而即使相逢了，又如何證明這就是命運的那人呢。兩人相逢的物語，在無限壯大的世界中描述。兩人被命運引導而相逢。
汪辰諺	麥迪遜之橋	This kind of certainty comes but once in a lifetime.
黃家俐	little women	Just because my dreams are different than yours doesn't mean they're unimportant
彭定康	crazy rich asian	It's not my job to make you feel like a man. I can't make you something you're not.
鄭健良	when life gives you tangerines	Even as I gently press my heart to soothe it down, the moon wanes, yet the young heart remains.
張志成	Titanic 	Promise me you'll survive. That you won't give up, no matter what happens, no matter how hopeless. Promise me now, Rose, and never let go of that promise.
張溱銍	那些年，我們一起追的女孩	我一直以為我會是最先長大的那個，沒想到，竟然是你。
陳奮延	花束般的戀愛	我們一路走來的風景很美，就只差了一步
蔡育霖	征服情海	You complete me.
陳柏龍	你的名字	我已經記不得你的名字，卻還記得喜歡你。
吳尚恩	王牌冤家	Sand is overrated. It's just tiny little rocks.
凃劭宇	花束般的戀愛	聽說如果男生問女生花名，男生這輩子只要看到這種花，就會想起那個女生。
陳建豪	曾經 愛是唯一	曾經擁有的，不要忘記。不能得到的，更要珍惜。屬於自己的，不要放棄。已經失去的，留作回憶。
許源強	花束般的戀愛	戀愛這種東西可不能一人一半，戀愛就是一人一份
林雨葳	暮光之城	但是你，你的氣味，對我來說就像毒品一樣。你就像我私人的海洛因一樣。只有你才能讓我如此上癮
吳心樂	你的名字	只要記住你的名字，不管你在世界的哪個地方，我一定會去見你。
林德偉	樂來越愛你	總會有個地方能讓我實現，對自己的期許。
楊承翰	派特的幸福劇本	Thank you, I love you. I knew it in the minute I met you. I’m sorry it took so long for me to catch up. I just got stuck
郭睿豐	那些年，我們一起追的女孩	我就是笨蛋啦！大笨蛋才能追你那麼久！
李緯哲	如果能再愛一次	「舉得起放得下的叫舉重，舉得起放不下的叫負重。 可惜，大多數人的愛情，都是負重的。」
陳雋濤	初戀	你能愛上讓你珍惜人生的人，是人生中的一件幸福。
陳澤安	你的名字	只要記住你的名字，不管你在世界的哪個地方，我一定會去見你。
何冠慶	真愛每一天	We’re all traveling through time together, every day of our lives. All we can do is do our best to relish this remarkable ride.
裴俊秀	功夫熊貓, 	A panda know how to use kung fu
黄国新	霍爾的移動城堡	世界這麼大，人生這麼長，總會有這麼一個人，讓你想要溫柔的對待。
楊秉奇	愛在黎明破曉時	當我了解了一個人的一切時，我才真正墜入愛河。
康晏甄	傲慢與偏見	Married life is happiness, completely is a chance to question.
黃建凱	新娘不是我	如果你愛上某人你就說出來，你立刻說出來，大聲地說出來。不然你就會錯過時機了。
林宸逵	在午夜希臘時	we’re one, but we’re not the same.我們雖然是不同個體，卻可以一同面對。
袁晟哲	當男人戀愛時	跟你爸爸說，你女兒現在有人照顧，不會再孤單了。
張鈞皓	半生緣	對於愛情而言，半生已足矣
賴嘉安	愛在黎明破曉時	如果世上有什麼奇蹟，一定是盡力理解某個人，並與之同甘共苦
江建瑩	你的名字	我已經記不得你的名字，卻還記得喜歡你。
陳建辰	鐵達尼號	一個人一生可以愛上很多的人，等你獲得真正屬於你的幸福之後，你就會明白之前的傷痛其實是一種財富，它讓你學會更好地去把握和珍惜你愛的人。
洪嘉隆	真愛挑日子	喜歡，是看到一個人的優點；愛，是接受一個人的缺點。
卓奕呈	真愛挑日子	我無法控制自己對你的難以忘懷，但也不再有所期待
王霖翔	花束般的戀愛	你有看過向三個月沒有上床的女朋友求婚的男人嗎
廖敏涵	跳躍吧!時空少女	我在未來等你
何爰慧	阿甘正傳	你得在向前走之前，放下過去。
王冠今	花束般的戀愛	妳有出軌過嗎?
魏志成	喜劇之王	不去上班你養我啊?
李鈞盛	星之聲	也許，思念可以超越時間與距離。
劉俊呈	一個巨星的誕生	當夜色來臨，曲終人散，我會記得我們現在的樣子。
陳堃益	手札情緣	相愛絕對不簡單，甚至非常艱難，我們必須每天付出心力經營，但我想這麼做，因為我想要你，永遠擁有所有的你。你和我，每一天。