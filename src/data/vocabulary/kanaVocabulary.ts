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
