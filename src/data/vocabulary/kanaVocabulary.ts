export interface KanaVocab {
  word: string;
  reading: string;
  meaning: string;
}

export const kanaVocabularyMap: Record<string, KanaVocab[]> = {
  'あ': [
    { word: '青い', reading: 'あおい', meaning: '蓝色的' },
    { word: '秋', reading: 'あき', meaning: '秋天' },
    { word: '朝', reading: 'あさ', meaning: '早晨' },
  ],
  'い': [
    { word: '色', reading: 'いろ', meaning: '颜色' },
    { word: '犬', reading: 'いぬ', meaning: '狗' },
    { word: '家', reading: 'いえ', meaning: '家' },
  ],
  'う': [
    { word: '上', reading: 'うえ', meaning: '上面' },
    { word: '海', reading: 'うみ', meaning: '海' },
    { word: '生まれる', reading: 'うまれる', meaning: '出生' },
  ],
  'え': [
    { word: '映画', reading: 'えいが', meaning: '电影' },
    { word: '駅', reading: 'えき', meaning: '车站' },
    { word: '絵', reading: 'え', meaning: '画' },
  ],
  'お': [
    { word: '大きい', reading: 'おおきい', meaning: '大的' },
    { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
    { word: 'お金', reading: 'おかね', meaning: '钱' },
  ],
  'か': [
    { word: '風', reading: 'かぜ', meaning: '风' },
    { word: '紙', reading: 'かみ', meaning: '纸' },
    { word: '傘', reading: 'かさ', meaning: '伞' },
  ],
  'き': [
    { word: '木', reading: 'き', meaning: '树' },
    { word: '着る', reading: 'きる', meaning: '穿' },
    { word: '黄色い', reading: 'きいろい', meaning: '黄色的' },
  ],
  'く': [
    { word: '口', reading: 'くち', meaning: '嘴' },
    { word: '暗い', reading: 'くらい', meaning: '暗的' },
    { word: '果物', reading: 'くだもの', meaning: '水果' },
  ],
  'け': [
    { word: '元気', reading: 'げんき', meaning: '精神好' },
    { word: '携帯', reading: 'けいたい', meaning: '手机' },
    { word: '怪我', reading: 'けが', meaning: '受伤' },
  ],
  'こ': [
    { word: '子供', reading: 'こども', meaning: '孩子' },
    { word: '心', reading: 'こころ', meaning: '心' },
    { word: '声', reading: 'こえ', meaning: '声音' },
  ],
  'さ': [
    { word: '魚', reading: 'さかな', meaning: '鱼' },
    { word: '酒', reading: 'さけ', meaning: '酒' },
    { word: '寒い', reading: 'さむい', meaning: '冷的' },
  ],
  'し': [
    { word: '白い', reading: 'しろい', meaning: '白色的' },
    { word: '先生', reading: 'せんせい', meaning: '老师' },
    { word: '市', reading: 'し', meaning: '市' },
  ],
  'す': [
    { word: '好き', reading: 'すき', meaning: '喜欢' },
    { word: '水', reading: 'みず', meaning: '水' },
    { word: '涼しい', reading: 'すずしい', meaning: '凉爽的' },
  ],
  'せ': [
    { word: '先生', reading: 'せんせい', meaning: '老师' },
    { word: '世界', reading: 'せかい', meaning: '世界' },
    { word: '背が高い', reading: 'せがたかい', meaning: '个子高' },
  ],
  'そ': [
    { word: '外', reading: 'そと', meaning: '外面' },
    { word: '空', reading: 'そら', meaning: '天空' },
    { word: 'そう', reading: 'そう', meaning: '那样' },
  ],
  'た': [
    { word: '高い', reading: 'たかい', meaning: '高的/贵的' },
    { word: '食べる', reading: 'たべる', meaning: '吃' },
    { word: '立つ', reading: 'たつ', meaning: '站' },
  ],
  'ち': [
    { word: '小さい', reading: 'ちいさい', meaning: '小的' },
    { word: '地図', reading: 'ちず', meaning: '地图' },
    { word: '違い', reading: 'ちがい', meaning: '不同' },
  ],
  'つ': [
    { word: '月', reading: 'つき', meaning: '月亮' },
    { word: '強い', reading: 'つよい', meaning: '强的' },
    { word: '次', reading: 'つぎ', meaning: '下一个' },
  ],
  'て': [
    { word: '手', reading: 'て', meaning: '手' },
    { word: '天気', reading: 'てんき', meaning: '天气' },
    { word: '出る', reading: 'でる', meaning: '出去' },
  ],
  'と': [
    { word: '友達', reading: 'ともだち', meaning: '朋友' },
    { word: '鳥', reading: 'とり', meaning: '鸟' },
    { word: '遠い', reading: 'とおい', meaning: '远的' },
  ],
  'な': [
    { word: '夏', reading: 'なつ', meaning: '夏天' },
    { word: '中', reading: 'なか', meaning: '里面' },
    { word: '泣く', reading: 'なく', meaning: '哭' },
  ],
  'に': [
    { word: '日本', reading: 'にほん', meaning: '日本' },
    { word: '肉', reading: 'にく', meaning: '肉' },
    { word: '荷物', reading: 'にもつ', meaning: '行李' },
  ],
  'ぬ': [
    { word: '抜く', reading: 'ぬく', meaning: '拔出' },
    { word: '縫う', reading: 'ぬう', meaning: '缝' },
    { word: '盗む', reading: 'ぬすむ', meaning: '偷' },
  ],
  'ね': [
    { word: '猫', reading: 'ねこ', meaning: '猫' },
    { word: '眠い', reading: 'ねむい', meaning: '困的' },
    { word: '値段', reading: 'ねだん', meaning: '价格' },
  ],
  'の': [
    { word: '飲む', reading: 'のむ', meaning: '喝' },
    { word: '乗る', reading: 'のる', meaning: '乘坐' },
    { word: '農村', reading: 'のうそん', meaning: '农村' },
  ],
  'は': [
    { word: '花', reading: 'はな', meaning: '花' },
    { word: '春', reading: 'はる', meaning: '春天' },
    { word: '走る', reading: 'はしる', meaning: '跑' },
  ],
  'ひ': [
    { word: '日', reading: 'ひ', meaning: '日/太阳' },
    { word: '人', reading: 'ひと', meaning: '人' },
    { word: '左', reading: 'ひだり', meaning: '左' },
  ],
  'ふ': [
    { word: '冬', reading: 'ふゆ', meaning: '冬天' },
    { word: '船', reading: 'ふね', meaning: '船' },
    { word: '古い', reading: 'ふるい', meaning: '旧的' },
  ],
  'へ': [
    { word: '部屋', reading: 'へや', meaning: '房间' },
    { word: '平和', reading: 'へいわ', meaning: '和平' },
    { word: '下手', reading: 'へた', meaning: '不擅长' },
  ],
  'ほ': [
    { word: '本', reading: 'ほん', meaning: '书' },
    { word: '星', reading: 'ほし', meaning: '星星' },
    { word: '欲しい', reading: 'ほしい', meaning: '想要的' },
  ],
  'ま': [
    { word: '町', reading: 'まち', meaning: '城镇' },
    { word: '窓', reading: 'まど', meaning: '窗户' },
    { word: '待つ', reading: 'まつ', meaning: '等' },
  ],
  'み': [
    { word: '水', reading: 'みず', meaning: '水' },
    { word: '道', reading: 'みち', meaning: '路' },
    { word: '右', reading: 'みぎ', meaning: '右' },
  ],
  'む': [
    { word: '虫', reading: 'むし', meaning: '虫子' },
    { word: '難しい', reading: 'むずかしい', meaning: '难的' },
    { word: '夢', reading: 'ゆめ', meaning: '梦' },
  ],
  'め': [
    { word: '目', reading: 'め', meaning: '眼睛' },
    { word: '飯', reading: 'めし', meaning: '饭' },
    { word: '名医', reading: 'めいい', meaning: '名医' },
  ],
  'も': [
    { word: '森', reading: 'もり', meaning: '森林' },
    { word: '持つ', reading: 'もつ', meaning: '持有' },
    { word: '燃える', reading: 'もえる', meaning: '燃烧' },
  ],
  'や': [
    { word: '山', reading: 'やま', meaning: '山' },
    { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
    { word: '安い', reading: 'やすい', meaning: '便宜的' },
  ],
  'ゆ': [
    { word: '雪', reading: 'ゆき', meaning: '雪' },
    { word: '夢', reading: 'ゆめ', meaning: '梦' },
    { word: '夕方', reading: 'ゆうがた', meaning: '傍晚' },
  ],
  'よ': [
    { word: '夜', reading: 'よる', meaning: '夜晚' },
    { word: '読む', reading: 'よむ', meaning: '读' },
    { word: '良い', reading: 'よい', meaning: '好的' },
  ],
  'ら': [
    { word: '来る', reading: 'くる', meaning: '来' },
    { word: '楽しい', reading: 'たのしい', meaning: '快乐的' },
    { word: '立派', reading: 'りっぱ', meaning: '出色的' },
  ],
  'り': [
    { word: '旅行', reading: 'りょこう', meaning: '旅行' },
    { word: '料理', reading: 'りょうり', meaning: '料理' },
    { word: '理由', reading: 'りゆう', meaning: '理由' },
  ],
  'る': [
    { word: '留守', reading: 'るす', meaning: '不在家' },
    { word: '流れる', reading: 'ながれる', meaning: '流动' },
    { word: '留守番', reading: 'るすばん', meaning: '看家' },
  ],
  'れ': [
    { word: '歴史', reading: 'れきし', meaning: '历史' },
    { word: 'レストラン', reading: 'れすとらん', meaning: '餐厅' },
    { word: '冷たい', reading: 'つめたい', meaning: '冷的' },
  ],
  'ろ': [
    { word: '六', reading: 'ろく', meaning: '六' },
    { word: '論文', reading: 'ろんぶん', meaning: '论文' },
    { word: '老化', reading: 'ろうか', meaning: '老化' },
  ],
  'わ': [
    { word: '私', reading: 'わたし', meaning: '我' },
    { word: '若い', reading: 'わかい', meaning: '年轻的' },
    { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
  ],
  'を': [
    { word: 'を', reading: 'を', meaning: '宾语助词' },
  ],
  'ん': [
    { word: '日本', reading: 'にほん', meaning: '日本' },
    { word: '本', reading: 'ほん', meaning: '书' },
    { word: '先生', reading: 'せんせい', meaning: '老师' },
  ],
  'が': [
    { word: '学校', reading: 'がっこう', meaning: '学校' },
    { word: '元気', reading: 'げんき', meaning: '精神好' },
    { word: '外国', reading: 'がいこく', meaning: '外国' },
  ],
  'ぎ': [
    { word: '銀行', reading: 'ぎんこう', meaning: '银行' },
    { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
    { word: '義理', reading: 'ぎり', meaning: '情义' },
  ],
  'ぐ': [
    { word: '口', reading: 'ぐち', meaning: '牢骚' },
    { word: '偶然', reading: 'ぐうぜん', meaning: '偶然' },
    { word: '具合', reading: 'ぐあい', meaning: '情况' },
  ],
  'げ': [
    { word: '元気', reading: 'げんき', meaning: '精神好' },
    { word: '下着', reading: 'したぎ', meaning: '内衣' },
    { word: '現実', reading: 'げんじつ', meaning: '现实' },
  ],
  'ご': [
    { word: '五', reading: 'ご', meaning: '五' },
    { word: '午後', reading: 'ごご', meaning: '下午' },
    { word: '言葉', reading: 'ことば', meaning: '语言' },
  ],
  'ざ': [
    { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
    { word: '残念', reading: 'ざんねん', meaning: '遗憾' },
    { word: '雑草', reading: 'ざっそう', meaning: '杂草' },
  ],
  'じ': [
    { word: '時間', reading: 'じかん', meaning: '时间' },
    { word: '自転車', reading: 'じてんしゃ', meaning: '自行车' },
    { word: '地震', reading: 'じしん', meaning: '地震' },
  ],
  'ず': [
    { word: '図書館', reading: 'としょかん', meaning: '图书馆' },
    { word: '頭', reading: 'あたま', meaning: '头' },
    { word: 'ずっと', reading: 'ずっと', meaning: '一直' },
  ],
  'ぜ': [
    { word: '全部', reading: 'ぜんぶ', meaning: '全部' },
    { word: '絶対', reading: 'ぜったい', meaning: '绝对' },
    { word: '前', reading: 'まえ', meaning: '前面' },
  ],
  'ぞ': [
    { word: '象', reading: 'ぞう', meaning: '大象' },
    { word: '雑巾', reading: 'ぞうきん', meaning: '抹布' },
    { word: '増える', reading: 'ふえる', meaning: '增加' },
  ],
  'だ': [
    { word: '大学', reading: 'だいがく', meaning: '大学' },
    { word: '大丈夫', reading: 'だいじょうぶ', meaning: '没问题' },
    { word: '大事', reading: 'だいじ', meaning: '重要' },
  ],
  'ぢ': [
    { word: '地震', reading: 'じしん', meaning: '地震' },
    { word: '縮む', reading: 'ちぢむ', meaning: '缩小' },
  ],
  'づ': [
    { word: '続く', reading: 'つづく', meaning: '继续' },
    { word: '気づく', reading: 'きづく', meaning: '注意到' },
  ],
  'で': [
    { word: '電話', reading: 'でんわ', meaning: '电话' },
    { word: '出口', reading: 'でぐち', meaning: '出口' },
    { word: '電車', reading: 'でんしゃ', meaning: '电车' },
  ],
  'ど': [
    { word: 'どうぞ', reading: 'どうぞ', meaning: '请' },
    { word: '友達', reading: 'ともだち', meaning: '朋友' },
    { word: '動物', reading: 'どうぶつ', meaning: '动物' },
  ],
  'ば': [
    { word: '場所', reading: 'ばしょ', meaning: '场所' },
    { word: '馬', reading: 'うま', meaning: '马' },
    { word: 'バス', reading: 'ばす', meaning: '公交车' },
  ],
  'び': [
    { word: '美しい', reading: 'うつくしい', meaning: '美丽的' },
    { word: '必要', reading: 'ひつよう', meaning: '必要' },
    { word: '美容院', reading: 'びよういん', meaning: '美容院' },
  ],
  'ぶ': [
    { word: '分かる', reading: 'わかる', meaning: '明白' },
    { word: '文化', reading: 'ぶんか', meaning: '文化' },
    { word: 'ぶつぶつ', reading: 'ぶつぶつ', meaning: '嘟囔' },
  ],
  'べ': [
    { word: '勉強', reading: 'べんきょう', meaning: '学习' },
    { word: '便利', reading: 'べんり', meaning: '方便' },
    { word: '別', reading: 'べつ', meaning: '另外' },
  ],
  'ぼ': [
    { word: '帽子', reading: 'ぼうし', meaning: '帽子' },
    { word: 'ボール', reading: 'ぼーる', meaning: '球' },
    { word: '暴力', reading: 'ぼうりょく', meaning: '暴力' },
  ],
  'ぱ': [
    { word: 'パン', reading: 'ぱん', meaning: '面包' },
    { word: 'パーティー', reading: 'ぱーてぃー', meaning: '派对' },
    { word: 'パソコン', reading: 'ぱそこん', meaning: '电脑' },
  ],
  'ぴ': [
    { word: 'ピアノ', reading: 'ぴあの', meaning: '钢琴' },
    { word: 'ピンク', reading: 'ぴんく', meaning: '粉色' },
    { word: 'ピザ', reading: 'ぴざ', meaning: '披萨' },
  ],
  'ぷ': [
    { word: 'プール', reading: 'ぷーる', meaning: '游泳池' },
    { word: 'プレゼント', reading: 'ぷれぜんと', meaning: '礼物' },
    { word: 'プログラム', reading: 'ぷろぐらむ', meaning: '程序' },
  ],
  'ぺ': [
    { word: 'ペン', reading: 'ぺん', meaning: '钢笔' },
    { word: 'ページ', reading: 'ぺーじ', meaning: '页' },
    { word: 'ペット', reading: 'ぺっと', meaning: '宠物' },
  ],
  'ぽ': [
    { word: 'ポスト', reading: 'ぽすと', meaning: '邮筒' },
    { word: 'ポケット', reading: 'ぽけっと', meaning: '口袋' },
    { word: 'ポーズ', reading: 'ぽーず', meaning: '姿势' },
  ],
  'きゃ': [
    { word: 'キャンプ', reading: 'きゃんぷ', meaning: '露营' },
    { word: 'キャベツ', reading: 'きゃべつ', meaning: '卷心菜' },
  ],
  'きゅ': [
    { word: '急行', reading: 'きゅうこう', meaning: '快车' },
    { word: '休憩', reading: 'きゅうけい', meaning: '休息' },
  ],
  'きょ': [
    { word: '今日', reading: 'きょう', meaning: '今天' },
    { word: '教室', reading: 'きょうしつ', meaning: '教室' },
  ],
  'しゃ': [
    { word: '写真', reading: 'しゃしん', meaning: '照片' },
    { word: '社会', reading: 'しゃかい', meaning: '社会' },
  ],
  'しゅ': [
    { word: '主食', reading: 'しゅしょく', meaning: '主食' },
    { word: '趣味', reading: 'しゅみ', meaning: '爱好' },
  ],
  'しょ': [
    { word: '紹介', reading: 'しょうかい', meaning: '介绍' },
    { word: '食事', reading: 'しょくじ', meaning: '饭食' },
  ],
  'ちゃ': [
    { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
    { word: '茶色', reading: 'ちゃいろ', meaning: '茶色' },
  ],
  'ちゅ': [
    { word: '注文', reading: 'ちゅうもん', meaning: '点单' },
    { word: '中国', reading: 'ちゅうごく', meaning: '中国' },
  ],
  'ちょ': [
    { word: 'ちょっと', reading: 'ちょっと', meaning: '稍微' },
    { word: '調子', reading: 'ちょうし', meaning: '状态' },
  ],
  'にゃ': [
    { word: 'にゃんこ', reading: 'にゃんこ', meaning: '猫咪' },
  ],
  'にゅ': [
    { word: '入院', reading: 'にゅういん', meaning: '住院' },
  ],
  'にょ': [
    { word: '女性', reading: 'じょせい', meaning: '女性' },
  ],
  'ひゃ': [
    { word: '百', reading: 'ひゃく', meaning: '一百' },
  ],
  'ひゅ': [
    { word: '表現', reading: 'ひょうげん', meaning: '表现' },
  ],
  'ひょ': [
    { word: '表', reading: 'ひょう', meaning: '表格' },
  ],
  'みゃ': [
    { word: '宮城', reading: 'みやぎ', meaning: '宫城' },
  ],
  'みゅ': [
    { word: 'ミュージック', reading: 'みゅーじっく', meaning: '音乐' },
  ],
  'みょ': [
    { word: '名古屋', reading: 'なごや', meaning: '名古屋' },
  ],
  'りゃ': [
    { word: '両方', reading: 'りょうほう', meaning: '双方' },
  ],
  'りゅ': [
    { word: '旅行', reading: 'りょこう', meaning: '旅行' },
    { word: '料理', reading: 'りょうり', meaning: '料理' },
  ],
  'りょ': [
    { word: '旅行', reading: 'りょこう', meaning: '旅行' },
    { word: '利用', reading: 'りよう', meaning: '利用' },
  ],
  'ぎゃ': [
    { word: 'ギャグ', reading: 'ぎゃぐ', meaning: '笑料' },
  ],
  'ぎゅ': [
    { word: '牛肉', reading: 'ぎゅうにく', meaning: '牛肉' },
  ],
  'ぎょ': [
    { word: '魚', reading: 'さかな', meaning: '鱼' },
    { word: '漁業', reading: 'ぎょぎょう', meaning: '渔业' },
  ],
  'じゃ': [
    { word: 'じゃあ', reading: 'じゃあ', meaning: '那么' },
  ],
  'じゅ': [
    { word: '授業', reading: 'じゅぎょう', meaning: '上课' },
    { word: '自由', reading: 'じゆう', meaning: '自由' },
  ],
  'じょ': [
    { word: '女性', reading: 'じょせい', meaning: '女性' },
    { word: '紹介', reading: 'しょうかい', meaning: '介绍' },
  ],
  'びゃ': [
    { word: '百万', reading: 'ひゃくまん', meaning: '百万' },
  ],
  'びゅ': [
    { word: '美容', reading: 'びよう', meaning: '美容' },
  ],
  'びょ': [
    { word: '病院', reading: 'びょういん', meaning: '医院' },
  ],
  'ぴゃ': [
    { word: 'ピャン', reading: 'ぴゃん', meaning: '砰' },
  ],
  'ぴゅ': [
    { word: 'ピュア', reading: 'ぴゅあ', meaning: '纯粹' },
  ],
  'ぴょ': [
    { word: 'ピョンピョン', reading: 'ぴょんぴょん', meaning: '蹦蹦跳跳' },
  ],
};

export const katakanaVocabularyMap: Record<string, KanaVocab[]> = {
  'ア': [
    { word: 'アイス', reading: 'あいす', meaning: '冰/冰淇淋' },
    { word: 'アパート', reading: 'あぱーと', meaning: '公寓' },
    { word: 'アルバイト', reading: 'あるばいと', meaning: '兼职' },
  ],
  'イ': [
    { word: 'インク', reading: 'いんく', meaning: '墨水' },
    { word: 'インターネット', reading: 'いんたーねっと', meaning: '互联网' },
    { word: 'イタリア', reading: 'いたりあ', meaning: '意大利' },
  ],
  'ウ': [
    { word: 'ウインドウ', reading: 'ういんどう', meaning: '窗户' },
    { word: 'ウイルス', reading: 'ういるす', meaning: '病毒' },
    { word: 'ウエートレス', reading: 'うえーとれす', meaning: '女服务员' },
  ],
  'エ': [
    { word: 'エアコン', reading: 'えあこん', meaning: '空调' },
    { word: 'エレベーター', reading: 'えれべーたー', meaning: '电梯' },
    { word: 'エンジン', reading: 'えんじん', meaning: '引擎' },
  ],
  'オ': [
    { word: 'オレンジ', reading: 'おれんじ', meaning: '橙子' },
    { word: 'オーストラリア', reading: 'おーすとらりあ', meaning: '澳大利亚' },
    { word: 'オンライン', reading: 'おんらいん', meaning: '在线' },
  ],
  'カ': [
    { word: 'カメラ', reading: 'かめら', meaning: '照相机' },
    { word: 'カレンダー', reading: 'かれんだー', meaning: '日历' },
    { word: 'カップ', reading: 'かっぷ', meaning: '杯子' },
  ],
  'キ': [
    { word: 'キロ', reading: 'きろ', meaning: '公里/千克' },
    { word: 'キリスト', reading: 'きりすと', meaning: '基督' },
    { word: 'キャビン', reading: 'きゃびん', meaning: '客舱' },
  ],
  'ク': [
    { word: 'クラス', reading: 'くらす', meaning: '班级' },
    { word: 'クリスマス', reading: 'くりすます', meaning: '圣诞节' },
    { word: 'クッキー', reading: 'くっきー', meaning: '饼干' },
  ],
  'ケ': [
    { word: 'ケーキ', reading: 'けーき', meaning: '蛋糕' },
    { word: 'ゲーム', reading: 'げーむ', meaning: '游戏' },
    { word: 'ケータイ', reading: 'けーたい', meaning: '手机' },
  ],
  'コ': [
    { word: 'コーヒー', reading: 'こーひー', meaning: '咖啡' },
    { word: 'コンピューター', reading: 'こんぴゅーたー', meaning: '电脑' },
    { word: 'コート', reading: 'こーと', meaning: '外套' },
  ],
  'サ': [
    { word: 'サッカー', reading: 'さっかー', meaning: '足球' },
    { word: 'サービス', reading: 'さーびす', meaning: '服务' },
    { word: 'サラダ', reading: 'さらだ', meaning: '沙拉' },
  ],
  'シ': [
    { word: 'シャツ', reading: 'しゃつ', meaning: '衬衫' },
    { word: 'シャワー', reading: 'しゃわー', meaning: '淋浴' },
    { word: 'シーズン', reading: 'しーずん', meaning: '季节' },
  ],
  'ス': [
    { word: 'スーパー', reading: 'すーぱー', meaning: '超市' },
    { word: 'ストーブ', reading: 'すとーぶ', meaning: '暖炉' },
    { word: 'スポーツ', reading: 'すぽーつ', meaning: '运动' },
  ],
  'セ': [
    { word: 'セーター', reading: 'せーたー', meaning: '毛衣' },
    { word: 'セール', reading: 'せーる', meaning: '打折' },
    { word: 'セット', reading: 'せっと', meaning: '套装/设置' },
  ],
  'ソ': [
    { word: 'ソファー', reading: 'そふぁー', meaning: '沙发' },
    { word: 'ソフト', reading: 'そふと', meaning: '软件/软' },
    { word: 'ソックス', reading: 'そっくす', meaning: '袜子' },
  ],
  'タ': [
    { word: 'タクシー', reading: 'たくしー', meaning: '出租车' },
    { word: 'タオル', reading: 'たおる', meaning: '毛巾' },
    { word: 'タイプ', reading: 'たいぷ', meaning: '类型' },
  ],
  'チ': [
    { word: 'チーズ', reading: 'ちーず', meaning: '奶酪' },
    { word: 'チケット', reading: 'ちけっと', meaning: '票' },
    { word: 'チーム', reading: 'ちーむ', meaning: '队伍' },
  ],
  'ツ': [
    { word: 'ツアー', reading: 'つあー', meaning: '旅行团' },
    { word: 'ツリー', reading: 'つりー', meaning: '树/圣诞树' },
  ],
  'テ': [
    { word: 'テーブル', reading: 'てーぶる', meaning: '桌子' },
    { word: 'テスト', reading: 'てすと', meaning: '考试' },
    { word: 'テレビ', reading: 'てれび', meaning: '电视' },
  ],
  'ト': [
    { word: 'トマト', reading: 'とまと', meaning: '番茄' },
    { word: 'トイレ', reading: 'といれ', meaning: '厕所' },
    { word: 'ドア', reading: 'どあ', meaning: '门' },
  ],
  'ナ': [
    { word: 'ナイフ', reading: 'ないふ', meaning: '刀' },
    { word: 'ナプキン', reading: 'なぷきん', meaning: '餐巾' },
  ],
  'ニ': [
    { word: 'ニュース', reading: 'にゅーす', meaning: '新闻' },
    { word: 'ニット', reading: 'にっと', meaning: '针织' },
  ],
  'ヌ': [
    { word: 'ヌード', reading: 'ぬーど', meaning: '裸体' },
  ],
  'ネ': [
    { word: 'ネクタイ', reading: 'ねくたい', meaning: '领带' },
    { word: 'ネックレス', reading: 'ねっくれす', meaning: '项链' },
  ],
  'ノ': [
    { word: 'ノート', reading: 'のーと', meaning: '笔记本' },
    { word: 'ノック', reading: 'のっく', meaning: '敲门' },
  ],
  'ハ': [
    { word: 'ハンカチ', reading: 'はんかち', meaning: '手帕' },
    { word: 'ハンバーガー', reading: 'はんばーがー', meaning: '汉堡' },
    { word: 'ハイキング', reading: 'はいきんぐ', meaning: '远足' },
  ],
  'ヒ': [
    { word: 'ヒント', reading: 'ひんと', meaning: '提示' },
    { word: 'ヒーター', reading: 'ひーたー', meaning: '加热器' },
  ],
  'フ': [
    { word: 'フルーツ', reading: 'ふるーつ', meaning: '水果' },
    { word: 'フライパン', reading: 'ふらいぱん', meaning: '平底锅' },
  ],
  'ヘ': [
    { word: 'ヘリコプター', reading: 'へりこぷたー', meaning: '直升机' },
  ],
  'ホ': [
    { word: 'ホテル', reading: 'ほてる', meaning: '酒店' },
    { word: 'ホーム', reading: 'ほーむ', meaning: '站台/家' },
    { word: 'ホッチキス', reading: 'ほっちきす', meaning: '订书机' },
  ],
  'マ': [
    { word: 'マッチ', reading: 'まっち', meaning: '火柴' },
    { word: 'マラソン', reading: 'まらそん', meaning: '马拉松' },
    { word: 'マンション', reading: 'まんしょん', meaning: '公寓' },
  ],
  'ミ': [
    { word: 'ミルク', reading: 'みるく', meaning: '牛奶' },
    { word: 'ミサイル', reading: 'みさいる', meaning: '导弹' },
  ],
  'ム': [
    { word: 'ムード', reading: 'むーど', meaning: '气氛' },
  ],
  'メ': [
    { word: 'メニュー', reading: 'めにゅー', meaning: '菜单' },
    { word: 'メガネ', reading: 'めがね', meaning: '眼镜' },
    { word: 'メール', reading: 'めーる', meaning: '邮件' },
  ],
  'モ': [
    { word: 'モーター', reading: 'もーたー', meaning: '马达' },
    { word: 'モデル', reading: 'もでる', meaning: '模型' },
  ],
  'ヤ': [
    { word: 'ヤード', reading: 'やーど', meaning: '院子' },
  ],
  'ユ': [
    { word: 'ユニフォーム', reading: 'ゆにふぉーむ', meaning: '制服' },
  ],
  'ヨ': [
    { word: 'ヨーロッパ', reading: 'よーろっぱ', meaning: '欧洲' },
    { word: 'ヨガ', reading: 'よが', meaning: '瑜伽' },
  ],
  'ラ': [
    { word: 'ラジオ', reading: 'らじお', meaning: '收音机' },
    { word: 'ラーメン', reading: 'らーめん', meaning: '拉面' },
    { word: 'ランチ', reading: 'らんち', meaning: '午餐' },
  ],
  'リ': [
    { word: 'リモコン', reading: 'りもこん', meaning: '遥控器' },
    { word: 'リサイクル', reading: 'りさいくる', meaning: '回收' },
    { word: 'リズム', reading: 'りずむ', meaning: '节奏' },
  ],
  'ル': [
    { word: 'ルール', reading: 'るーる', meaning: '规则' },
    { word: 'ルーム', reading: 'るーむ', meaning: '房间' },
  ],
  'レ': [
    { word: 'レストラン', reading: 'れすとらん', meaning: '餐厅' },
    { word: 'レポート', reading: 'れぽーと', meaning: '报告' },
    { word: 'レコード', reading: 'れこーど', meaning: '记录/唱片' },
  ],
  'ロ': [
    { word: 'ロボット', reading: 'ろぼっと', meaning: '机器人' },
    { word: 'ロケット', reading: 'ろけっと', meaning: '火箭' },
    { word: 'ロック', reading: 'ろっく', meaning: '摇滚/锁' },
  ],
  'ワ': [
    { word: 'ワイン', reading: 'わいん', meaning: '葡萄酒' },
    { word: 'ワッフル', reading: 'わっふる', meaning: '华夫饼' },
  ],
  'ヲ': [
    { word: 'ヲ', reading: 'を', meaning: '宾语助词' },
  ],
  'ン': [
    { word: 'サンドイッチ', reading: 'さんどいっち', meaning: '三明治' },
    { word: 'ランドセル', reading: 'らんどせる', meaning: '书包' },
  ],
  'ガ': [
    { word: 'ガソリン', reading: 'がそりん', meaning: '汽油' },
    { word: 'ガラス', reading: 'がらす', meaning: '玻璃' },
    { word: 'ガム', reading: 'がむ', meaning: '口香糖' },
  ],
  'ギ': [
    { word: 'ギター', reading: 'ぎたー', meaning: '吉他' },
  ],
  'グ': [
    { word: 'グラム', reading: 'ぐらむ', meaning: '克' },
    { word: 'グラス', reading: 'ぐらす', meaning: '玻璃杯' },
  ],
  'ゲ': [
    { word: 'ゲスト', reading: 'げすと', meaning: '客人' },
  ],
  'ゴ': [
    { word: 'ゴルフ', reading: 'ごるふ', meaning: '高尔夫' },
    { word: 'ゴム', reading: 'ごむ', meaning: '橡胶' },
  ],
  'ザ': [
    { word: 'ザル', reading: 'ざる', meaning: '竹筛' },
  ],
  'ジ': [
    { word: 'ジーンズ', reading: 'じーんず', meaning: '牛仔裤' },
    { word: 'ジャズ', reading: 'じゃず', meaning: '爵士乐' },
  ],
  'ズ': [
    { word: 'ズボン', reading: 'ずぼん', meaning: '裤子' },
  ],
  'ゼ': [
    { word: 'ゼリー', reading: 'ぜりー', meaning: '果冻' },
    { word: 'ゼミ', reading: 'ぜみ', meaning: '研讨会' },
  ],
  'ゾ': [
    { word: 'ゾーン', reading: 'ぞーん', meaning: '区域' },
  ],
  'ダ': [
    { word: 'ダンス', reading: 'だんす', meaning: '舞蹈' },
    { word: 'ダイヤ', reading: 'だいや', meaning: '钻石' },
  ],
  'ヂ': [
    { word: 'ヂ', reading: 'ぢ', meaning: '（极少使用）' },
  ],
  'ヅ': [
    { word: 'ヅ', reading: 'づ', meaning: '（极少使用）' },
  ],
  'デ': [
    { word: 'デザイン', reading: 'でざいん', meaning: '设计' },
    { word: 'デジカメ', reading: 'でじかめ', meaning: '数码相机' },
  ],
  'ド': [
    { word: 'ドライブ', reading: 'どらいぶ', meaning: '开车' },
    { word: 'ドレス', reading: 'どれす', meaning: '礼服' },
    { word: 'ドル', reading: 'どる', meaning: '美元' },
  ],
  'バ': [
    { word: 'バス', reading: 'ばす', meaning: '公交车/浴缸' },
    { word: 'バター', reading: 'ばたー', meaning: '黄油' },
    { word: 'バスケット', reading: 'ばすけっと', meaning: '篮子' },
  ],
  'ビ': [
    { word: 'ビール', reading: 'びーる', meaning: '啤酒' },
    { word: 'ビデオ', reading: 'びでお', meaning: '视频' },
    { word: 'ビニール', reading: 'びにーる', meaning: '塑料' },
  ],
  'ブ': [
    { word: 'ブーツ', reading: 'ぶーつ', meaning: '靴子' },
    { word: 'ブルー', reading: 'ぶるー', meaning: '蓝色' },
  ],
  'ベ': [
    { word: 'ベッド', reading: 'べっど', meaning: '床' },
    { word: 'ベル', reading: 'べる', meaning: '铃' },
    { word: 'ベンチ', reading: 'べんち', meaning: '长椅' },
  ],
  'ボ': [
    { word: 'ボタン', reading: 'ぼたん', meaning: '按钮' },
    { word: 'ボール', reading: 'ぼーる', meaning: '球' },
    { word: 'ボックス', reading: 'ぼっくす', meaning: '箱子' },
  ],
  'パ': [
    { word: 'パン', reading: 'ぱん', meaning: '面包' },
    { word: 'パーティー', reading: 'ぱーてぃー', meaning: '派对' },
    { word: 'パソコン', reading: 'ぱそこん', meaning: '电脑' },
  ],
  'ピ': [
    { word: 'ピアノ', reading: 'ぴあの', meaning: '钢琴' },
    { word: 'ピンク', reading: 'ぴんく', meaning: '粉色' },
    { word: 'ピザ', reading: 'ぴざ', meaning: '披萨' },
  ],
  'プ': [
    { word: 'プール', reading: 'ぷーる', meaning: '游泳池' },
    { word: 'プレゼント', reading: 'ぷれぜんと', meaning: '礼物' },
    { word: 'プログラム', reading: 'ぷろぐらむ', meaning: '程序' },
  ],
  'ペ': [
    { word: 'ペン', reading: 'ぺん', meaning: '钢笔' },
    { word: 'ページ', reading: 'ぺーじ', meaning: '页' },
    { word: 'ペット', reading: 'ぺっと', meaning: '宠物' },
  ],
  'ポ': [
    { word: 'ポスト', reading: 'ぽすと', meaning: '邮筒' },
    { word: 'ポケット', reading: 'ぽけっと', meaning: '口袋' },
    { word: 'ポーズ', reading: 'ぽーず', meaning: '姿势' },
  ],
  'キャ': [
    { word: 'キャンプ', reading: 'きゃんぷ', meaning: '露营' },
    { word: 'キャベツ', reading: 'きゃべつ', meaning: '卷心菜' },
  ],
  'キュ': [
    { word: 'キューブ', reading: 'きゅーぶ', meaning: '方块' },
  ],
  'キョ': [
    { word: 'キャビア', reading: 'きゃびあ', meaning: '鱼子酱' },
  ],
  'シャ': [
    { word: 'シャツ', reading: 'しゃつ', meaning: '衬衫' },
    { word: 'シャワー', reading: 'しゃわー', meaning: '淋浴' },
  ],
  'シュ': [
    { word: 'シューズ', reading: 'しゅーず', meaning: '鞋子' },
    { word: 'ジュース', reading: 'じゅーす', meaning: '果汁' },
  ],
  'ショ': [
    { word: 'ショー', reading: 'しょー', meaning: '表演' },
    { word: 'ショート', reading: 'しょーと', meaning: '短的' },
  ],
  'チャ': [
    { word: 'チャンス', reading: 'ちゃんす', meaning: '机会' },
    { word: 'チャンネル', reading: 'ちゃんねる', meaning: '频道' },
  ],
  'チュ': [
    { word: 'チューブ', reading: 'ちゅーぶ', meaning: '管子' },
  ],
  'チョ': [
    { word: 'チョーク', reading: 'ちょーく', meaning: '粉笔' },
    { word: 'チョコレート', reading: 'ちょこれーと', meaning: '巧克力' },
  ],
  'ニャ': [
    { word: 'ニャンニャン', reading: 'にゃんにゃん', meaning: '喵喵' },
  ],
  'ニュ': [
    { word: 'ニュース', reading: 'にゅーす', meaning: '新闻' },
  ],
  'ニョ': [
    { word: 'ニョロニョロ', reading: 'にょろにょろ', meaning: '蜿蜒' },
  ],
  'ヒャ': [
    { word: 'ヒャク', reading: 'ひゃく', meaning: '百' },
  ],
  'ヒュ': [
    { word: 'ヒューマン', reading: 'ひゅーまん', meaning: '人类' },
  ],
  'ヒョ': [
    { word: 'ヒョウ', reading: 'ひょう', meaning: '豹' },
  ],
  'ミャ': [
    { word: 'ミャンマー', reading: 'みゃんまー', meaning: '缅甸' },
  ],
  'ミュ': [
    { word: 'ミュージック', reading: 'みゅーじっく', meaning: '音乐' },
  ],
  'ミョ': [
    { word: 'ミョウガ', reading: 'みょうが', meaning: '茗荷' },
  ],
  'リャ': [
    { word: 'リャク', reading: 'りゃく', meaning: '略' },
  ],
  'リュ': [
    { word: 'リュック', reading: 'りゅっく', meaning: '背包' },
  ],
  'リョ': [
    { word: 'リョリ', reading: 'りょうり', meaning: '料理' },
  ],
  'ギャ': [
    { word: 'ギャラリー', reading: 'ぎゃらりー', meaning: '画廊' },
    { word: 'ギャップ', reading: 'ぎゃっぷ', meaning: '差距' },
  ],
  'ギュ': [
    { word: 'ギュウ', reading: 'ぎゅう', meaning: '牛' },
  ],
  'ギョ': [
    { word: 'ギョザ', reading: 'ぎょざ', meaning: '饺子' },
  ],
  'ジャ': [
    { word: 'ジャズ', reading: 'じゃず', meaning: '爵士乐' },
    { word: 'ジャンプ', reading: 'じゃんぷ', meaning: '跳跃' },
  ],
  'ジュ': [
    { word: 'ジュース', reading: 'じゅーす', meaning: '果汁' },
  ],
  'ジョ': [
    { word: 'ジョギング', reading: 'じょぎんぐ', meaning: '慢跑' },
  ],
  'ビャ': [
    { word: 'ビャッコ', reading: 'びゃっこ', meaning: '白虎' },
  ],
  'ビュ': [
    { word: 'ビューティー', reading: 'びゅーてぃー', meaning: '美容' },
  ],
  'ビョ': [
    { word: 'ビョウキ', reading: 'びょうき', meaning: '生病' },
  ],
  'ピャ': [
    { word: 'ピャン', reading: 'ぴゃん', meaning: '砰' },
  ],
  'ピュ': [
    { word: 'ピュア', reading: 'ぴゅあ', meaning: '纯粹' },
  ],
  'ピョ': [
    { word: 'ピョンピョン', reading: 'ぴょんぴょん', meaning: '蹦蹦跳跳' },
  ],
};
