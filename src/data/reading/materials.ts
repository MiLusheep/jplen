import type { ReadingMaterial } from '../../types/reading';

export const readingData: ReadingMaterial[] = [
  {
    id: 'read-l1',
    title: '日本的花见文化',
    titleJp: '日本のお花見文化',
    category: 'culture',
    difficulty: 'beginner',
    level: 'N5',
    wordCount: 180,
    estimatedTime: 5,
    tags: ['文化', '季节', '花見'],
    content: [
      {
        text: '春になると、日本では桜が咲きます。',
        reading: 'はるになると、にほんではさくらがさきます。',
        annotations: [
          { word: '桜', reading: 'さくら', meaning: '樱花', startIndex: 8, endIndex: 10 },
          { word: '咲きます', reading: 'さきます', meaning: '开花', startIndex: 11, endIndex: 15 },
        ],
      },
      {
        text: '多くの人々が公園に行って、お花見をします。',
        reading: 'おおくのひとびとがこうえんにいって、おはなみをします。',
        annotations: [
          { word: '花見', reading: 'はなみ', meaning: '赏花', startIndex: 16, endIndex: 18 },
        ],
      },
      {
        text: 'お花見では、友達や家族と一緒に食事を楽しみます。',
        reading: 'おはなみでは、ともだちやかぞくといっしょにしょくじをたのしみます。',
      },
      {
        text: '桜の下で、お弁当を食べながら、きれいな花を見るのはとてもいい気分です。',
        reading: 'さくらのしたで、おべんとうをたべながら、きれいなはなをみるのはとてもいいきぶんです。',
      },
    ],
    comprehension: [
      {
        id: 'read-l1-q1',
        question: '日本人在春天赏什么花？',
        options: ['菊花', '樱花', '梅花', '玫瑰'],
        correctIndex: 1,
      },
      {
        id: 'read-l1-q2',
        question: '花见时人们通常做什么？',
        options: ['只看花', '和朋友家人一起吃饭', '工作', '学习'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l2',
    title: '便利店的日常',
    titleJp: 'コンビニの日常',
    category: 'daily',
    difficulty: 'beginner',
    level: 'N5',
    wordCount: 150,
    estimatedTime: 4,
    tags: ['日常', '便利店', '生活'],
    content: [
      {
        text: '日本にはたくさんのコンビニがあります。',
        reading: 'にほんにはたくさんのコンビニがあります。',
      },
      {
        text: 'コンビニでは、おにぎりやお弁当、飲み物などを買うことができます。',
        reading: 'コンビニでは、おにぎりやおべんとう、のみものなどをかうことができます。',
        annotations: [
          { word: 'おにぎり', reading: 'おにぎり', meaning: '饭团', startIndex: 8, endIndex: 13 },
        ],
      },
      {
        text: '朝、多くのサラリーマンがコンビニで朝ご飯を買います。',
        reading: 'あさ、おおくのサラリーマンがコンビニであさごはんをかいます。',
      },
      {
        text: 'コンビニはとても便利です。',
        reading: 'コンビニはとてもべんりです。',
      },
    ],
    comprehension: [
      {
        id: 'read-l2-q1',
        question: '在便利店可以买到什么？',
        options: ['衣服', '饭团和便当', '家具', '汽车'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l3',
    title: '日本的学校生活',
    titleJp: '日本の学校生活',
    category: 'culture',
    difficulty: 'beginner',
    level: 'N5',
    wordCount: 200,
    estimatedTime: 5,
    tags: ['文化', '学校', '生活'],
    content: [
      {
        text: '日本の学校は四月に始まります。',
        reading: 'にほんのがっこうはしがつにはじまります。',
        annotations: [
          { word: '始まります', reading: 'はじまります', meaning: '开始', startIndex: 8, endIndex: 13 },
        ],
      },
      {
        text: '学生たちは制服を着て学校に行きます。',
        reading: 'がくせいたちはせいふくをきてがっこうにいきます。',
        annotations: [
          { word: '制服', reading: 'せいふく', meaning: '制服', startIndex: 5, endIndex: 7 },
        ],
      },
      {
        text: '授業は午前八時半から午後三時までです。',
        reading: 'じゅぎょうはごぜんはちじはんからごごさんじまでです。',
      },
      {
        text: '放課後、多くの学生が部活をします。',
        reading: 'ほうかご、おおくのがくせいがぶかつをします。',
        annotations: [
          { word: '部活', reading: 'ぶかつ', meaning: '社团活动', startIndex: 9, endIndex: 11 },
        ],
      },
      {
        text: '部活はとても楽しいですが、大変です。',
        reading: 'ぶかつはとてもたのしいですが、たいへんです。',
      },
    ],
    comprehension: [
      {
        id: 'read-l3-q1',
        question: '日本的学校几月开始？',
        options: ['九月', '四月', '一月', '十月'],
        correctIndex: 1,
      },
      {
        id: 'read-l3-q2',
        question: '放学后很多学生做什么？',
        options: ['回家', '打工', '社团活动', '看电视'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'read-l4',
    title: '日本的电车',
    titleJp: '日本の電車',
    category: 'daily',
    difficulty: 'intermediate',
    level: 'N4',
    wordCount: 220,
    estimatedTime: 6,
    tags: ['交通', '日常', '電車'],
    content: [
      {
        text: '日本の電車は時間にとても正確です。',
        reading: 'にほんのでんしゃはじかんにとてもせいかくです。',
        annotations: [
          { word: '正確', reading: 'せいかく', meaning: '准确的', startIndex: 10, endIndex: 12 },
        ],
      },
      {
        text: '朝のラッシュアワーは、電車がとても混みます。',
        reading: 'あさのラッシュアワーは、でんしゃがとてもこみます。',
        annotations: [
          { word: '混みます', reading: 'こみます', meaning: '拥挤', startIndex: 16, endIndex: 20 },
        ],
      },
      {
        text: '駅員さんが乗客を電車に押し込む光景も見られます。',
        reading: 'えきいんさんがじょうきゃくをでんしゃにおしこむこうけいもみられます。',
        annotations: [
          { word: '駅員', reading: 'えきいん', meaning: '站员', startIndex: 0, endIndex: 2 },
          { word: '押し込む', reading: 'おしこむ', meaning: '推入', startIndex: 13, endIndex: 17 },
        ],
      },
      {
        text: '電車の中では、携帯電話で話してはいけません。',
        reading: 'でんしゃのなかでは、けいたいでんわではなしてはいけません。',
      },
      {
        text: 'マナーモードにして、静かに過ごすのがルールです。',
        reading: 'マナーモードにして、しずかにすごすのがルールです。',
      },
    ],
    comprehension: [
      {
        id: 'read-l4-q1',
        question: '日本电车有什么特点？',
        options: ['经常晚点', '非常准时', '很空', '很慢'],
        correctIndex: 1,
      },
      {
        id: 'read-l4-q2',
        question: '电车里可以打电话吗？',
        options: ['可以', '不可以', '只有早上可以', '只有周末可以'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l5',
    title: '日本的新年',
    titleJp: '日本のお正月',
    category: 'culture',
    difficulty: 'intermediate',
    level: 'N4',
    wordCount: 250,
    estimatedTime: 7,
    tags: ['文化', '节日', '正月'],
    content: [
      {
        text: 'お正月は日本で一番大切な行事です。',
        reading: 'おしょうがつはにほんでいちばんたいせつなぎょうじです。',
        annotations: [
          { word: '行事', reading: 'ぎょうじ', meaning: '活动/节日', startIndex: 13, endIndex: 15 },
        ],
      },
      {
        text: '十二月三十一日を「大晦日」と言います。',
        reading: 'じゅうにがつさんじゅういちにちを「おおみそか」といいます。',
        annotations: [
          { word: '大晦日', reading: 'おおみそか', meaning: '除夕', startIndex: 11, endIndex: 14 },
        ],
      },
      {
        text: '大晦日の夜、多くの人がお寺に行って、鐘を聞きます。',
        reading: 'おおみそかのよる、おおくのひとがおてらにいって、かねをききます。',
      },
      {
        text: 'これを「除夜の鐘」と言います。鐘は百八回鳴ります。',
        reading: 'これを「じょやのかね」といいます。かねはひゃくはちかいなります。',
        annotations: [
          { word: '除夜の鐘', reading: 'じょやのかね', meaning: '除夕钟声', startIndex: 4, endIndex: 9 },
        ],
      },
      {
        text: '元旦には、家族でおせち料理を食べます。',
        reading: 'がんたんには、かぞくでおせちりょうりをたべます。',
        annotations: [
          { word: 'おせち料理', reading: 'おせちりょうり', meaning: '年菜', startIndex: 8, endIndex: 13 },
        ],
      },
      {
        text: '子供たちはお年玉をもらって、とても喜びます。',
        reading: 'こどもたちはおとしだまをもらって、とてもよろこびます。',
        annotations: [
          { word: 'お年玉', reading: 'おとしだま', meaning: '压岁钱', startIndex: 5, endIndex: 8 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l5-q1',
        question: '除夕夜钟声敲多少下？',
        options: ['100下', '108下', '80下', '120下'],
        correctIndex: 1,
      },
      {
        id: 'read-l5-q2',
        question: '元旦吃什么？',
        options: ['寿司', '拉面', '年菜（おせち）', '咖喱'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'read-l6',
    title: '温泉之旅',
    titleJp: '温泉旅行',
    category: 'travel',
    difficulty: 'intermediate',
    level: 'N4',
    wordCount: 230,
    estimatedTime: 6,
    tags: ['旅行', '温泉', '文化'],
    content: [
      {
        text: '日本には約三千の温泉地があります。',
        reading: 'にほんにはやくさんぜんのおんせんちがあります。',
        annotations: [
          { word: '温泉地', reading: 'おんせんち', meaning: '温泉地', startIndex: 7, endIndex: 10 },
        ],
      },
      {
        text: '温泉に入ると、体も心もリラックスできます。',
        reading: 'おんせんにはいると、からだもこころもリラックスできます。',
      },
      {
        text: '温泉に入る前に、体をきれいに洗わなければなりません。',
        reading: 'おんせんにはいるまえに、からだをきれいにあらわなければなりません。',
        annotations: [
          { word: '洗わなければなりません', reading: 'あらわなければなりません', meaning: '必须洗', startIndex: 13, endIndex: 23 },
        ],
      },
      {
        text: 'これは日本の温泉のマナーです。',
        reading: 'これはにほんのおんせんのマナーです。',
      },
      {
        text: 'また、温泉でタオルをお湯に入れてはいけません。',
        reading: 'また、おんせんでタオルをおゆにいれてはいけません。',
        annotations: [
          { word: 'お湯', reading: 'おゆ', meaning: '热水', startIndex: 10, endIndex: 12 },
        ],
      },
      {
        text: '温泉旅館では、浴衣を着ておいしい料理を楽しむことができます。',
        reading: 'おんせんりょかんでは、ゆかたをきておいしいりょうりをたのしむことができます。',
        annotations: [
          { word: '浴衣', reading: 'ゆかた', meaning: '浴衣/夏季和服', startIndex: 8, endIndex: 10 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l6-q1',
        question: '进温泉之前必须做什么？',
        options: ['换衣服', '把身体洗干净', '喝水', '做操'],
        correctIndex: 1,
      },
      {
        id: 'read-l6-q2',
        question: '什么不能放进温泉水里？',
        options: ['手', '脚', '毛巾', '头'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 'read-l7',
    title: '日本的工作文化',
    titleJp: '日本の仕事文化',
    category: 'culture',
    difficulty: 'intermediate',
    level: 'N3',
    wordCount: 300,
    estimatedTime: 8,
    tags: ['文化', '仕事', '社会'],
    content: [
      {
        text: '日本の会社では、チームワークがとても重視されています。',
        reading: 'にほんのかいしゃでは、チームワークがとてもじゅうしされています。',
        annotations: [
          { word: '重視', reading: 'じゅうし', meaning: '重视', startIndex: 12, endIndex: 14 },
        ],
      },
      {
        text: '個人の成果よりも、グループ全体の成果が評価される傾向があります。',
        reading: 'こじんのせいかよりも、グループぜんたいのせいかがひょうかされるけいこうがあります。',
        annotations: [
          { word: '評価', reading: 'ひょうか', meaning: '评价', startIndex: 18, endIndex: 20 },
          { word: '傾向', reading: 'けいこう', meaning: '倾向', startIndex: 23, endIndex: 25 },
        ],
      },
      {
        text: 'そのため、自分の意見を控えめにする人が少なくありません。',
        reading: 'そのため、じぶんのいけんをひかえめにするひとがすくなくありません。',
        annotations: [
          { word: '控えめ', reading: 'ひかえめ', meaning: '克制/谦虚', startIndex: 9, endIndex: 12 },
        ],
      },
      {
        text: 'また、残業は長い間当たり前のように行われてきました。',
        reading: 'また、ざんぎょうはながいあいだあたりまえのようにおこなわれてきました。',
        annotations: [
          { word: '残業', reading: 'ざんぎょう', meaning: '加班', startIndex: 3, endIndex: 5 },
        ],
      },
      {
        text: 'しかし最近では、ワークライフバランスの重要性が認識されるようになり、変化が進んでいます。',
        reading: 'しかしさいきんでは、ワークライフバランスのじゅうようせいがにんしきされるようになり、へんかがすすんでいます。',
        annotations: [
          { word: '認識', reading: 'にんしき', meaning: '认识', startIndex: 20, endIndex: 22 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l7-q1',
        question: '日本公司最重视什么？',
        options: ['个人能力', '团队协作', '学历', '年龄'],
        correctIndex: 1,
      },
      {
        id: 'read-l7-q2',
        question: '最近日本工作文化有什么变化？',
        options: ['加班更多了', '开始重视工作生活平衡', '不再需要团队合作', '取消了加班费'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l8',
    title: '日本的漫画文化',
    titleJp: '日本の漫画文化',
    category: 'culture',
    difficulty: 'intermediate',
    level: 'N3',
    wordCount: 280,
    estimatedTime: 7,
    tags: ['文化', '漫画', '芸術'],
    content: [
      {
        text: '日本の漫画は世界中で人気があります。',
        reading: 'にほんのまんがはせかいじゅうでにんきがあります。',
      },
      {
        text: '漫画の歴史は古く、江戸時代の浮世絵にまで遡ることができます。',
        reading: 'まんがのれきしはふるく、えどじだいうきよえにまでさかのぼることができます。',
        annotations: [
          { word: '遡る', reading: 'さかのぼる', meaning: '追溯', startIndex: 18, endIndex: 22 },
        ],
      },
      {
        text: '現代の漫画は、少年漫画、少女漫画、青年漫画など多様なジャンルに分かれています。',
        reading: 'げんだいのまんがは、しょうねんまんが、しょうじょまんが、せいねんまんがなどたようなジャンルにわかれています。',
        annotations: [
          { word: '多様', reading: 'たよう', meaning: '多样', startIndex: 22, endIndex: 24 },
        ],
      },
      {
        text: '日本では、電車の中で漫画を読む人の姿がよく見られます。',
        reading: 'にほんでは、でんしゃのなかでまんがをよむひとのすがたがよくみられます。',
      },
      {
        text: 'また、漫画からアニメ化される作品も多く、両方のメディアが影響し合っています。',
        reading: 'また、まんがからアニメかされるさくひんもおおく、りょうほうのメディアがえいきょうしあっています。',
        annotations: [
          { word: '影響し合う', reading: 'えいきょうしあう', meaning: '互相影响', startIndex: 24, endIndex: 30 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l8-q1',
        question: '日本漫画的历史可以追溯到什么时代？',
        options: ['明治时代', '江户时代', '平安时代', '昭和时代'],
        correctIndex: 1,
      },
      {
        id: 'read-l8-q2',
        question: '漫画和动画是什么关系？',
        options: ['完全无关', '互相影响', '动画更受欢迎', '漫画已经过时'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l9',
    title: '日本的传统工艺',
    titleJp: '日本の伝統工芸',
    category: 'culture',
    difficulty: 'intermediate',
    level: 'N3',
    wordCount: 290,
    estimatedTime: 8,
    tags: ['文化', '工芸', '伝統'],
    content: [
      {
        text: '日本には数多くの伝統工芸が受け継がれています。',
        reading: 'にほんにはかずおおくのでんとうこうげいがうけつがれています。',
        annotations: [
          { word: '受け継ぐ', reading: 'うけつぐ', meaning: '继承', startIndex: 11, endIndex: 15 },
        ],
      },
      {
        text: '陶磁器、漆器、染織など、各地に独特の技術が残っています。',
        reading: 'とうじき、しっき、せんしょくなど、かくちにどくとくのぎじゅつがのこっています。',
        annotations: [
          { word: '陶磁器', reading: 'とうじき', meaning: '陶瓷器', startIndex: 0, endIndex: 3 },
          { word: '漆器', reading: 'しっき', meaning: '漆器', startIndex: 5, endIndex: 7 },
        ],
      },
      {
        text: 'しかし、後継者不足が深刻な問題となっています。',
        reading: 'しかし、こうけいしゃぶそくがしんこくなもんだいとなっています。',
        annotations: [
          { word: '後継者', reading: 'こうけいしゃ', meaning: '继承人', startIndex: 4, endIndex: 7 },
        ],
      },
      {
        text: '若い世代が都市に流出するにつれて、伝統技術を守る人が減っています。',
        reading: 'わかいせだいがとしにりゅうしゅつするにつれて、でんとうぎじゅつをまもるひとがへっています。',
        annotations: [
          { word: '流出', reading: 'りゅうしゅつ', meaning: '流出', startIndex: 8, endIndex: 10 },
        ],
      },
      {
        text: '一方で、伝統工芸と現代デザインを融合させる試みも進んでいます。',
        reading: 'いっぽうで、でんとうこうげいとげんだいデザインをゆうごうさせるこころみもすすんでいます。',
        annotations: [
          { word: '融合', reading: 'ゆうごう', meaning: '融合', startIndex: 14, endIndex: 16 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l9-q1',
        question: '传统工艺面临的最大问题是什么？',
        options: ['材料不足', '继承人不足', '技术过时', '没有市场'],
        correctIndex: 1,
      },
      {
        id: 'read-l9-q2',
        question: '文章提到传统工艺有什么新尝试？',
        options: ['完全放弃', '与现代表设计融合', '只做出口', '降低品质'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l10',
    title: '日本的教育制度',
    titleJp: '日本の教育制度',
    category: 'society',
    difficulty: 'advanced',
    level: 'N2',
    wordCount: 350,
    estimatedTime: 9,
    tags: ['社会', '教育', '制度'],
    content: [
      {
        text: '日本の教育制度は、六・三・三・四制を基本としています。',
        reading: 'にほんのきょういくせいどは、ろく・さん・さん・よんせいをきほんとしています。',
      },
      {
        text: 'すなわち、小学校六年、中学校三年、高等学校三年、大学四年という構成です。',
        reading: 'すなわち、しょうがっこうろくねん、ちゅうがっこうさんねん、こうとうがっこうさんねん、だいがくよねんというこうせいです。',
        annotations: [
          { word: 'すなわち', reading: 'すなわち', meaning: '也就是说', startIndex: 0, endIndex: 4 },
        ],
      },
      {
        text: '義務教育は小学校から中学校までの九年間ですが、事実上ほぼ全員が高校に進学します。',
        reading: 'ぎむきょういくはしょうがっこうからちゅうがっこうまでのきゅうねんかんですが、じじつじょうほぼぜんいんがこうこうにしんがくします。',
        },
      {
        text: '大学受験は厳しい競争を伴い、多くの学生が塾に通っています。',
        reading: 'だいがくじゅけんはきびしいきょうそうをともない、おおくのがくせいがじゅくにかよっています。',
        annotations: [
          { word: '伴う', reading: 'ともなう', meaning: '伴随', startIndex: 9, endIndex: 11 },
        ],
      },
      {
        text: '近年では、グローバル化に対応するため、英語教育の早期化や国際バカロレアの導入など、制度改革が進められています。',
        reading: 'きんねんでは、グローバルかにたいおうするため、えいごきょういくのそうきかやこくさいバカロレアのどうにゅうなど、せいどかいかくがすすめられています。',
        annotations: [
          { word: '早期化', reading: 'そうきか', meaning: '提前化', startIndex: 22, endIndex: 25 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l10-q1',
        question: '日本的义务教育是几年？',
        options: ['6年', '9年', '12年', '16年'],
        correctIndex: 1,
      },
      {
        id: 'read-l10-q2',
        question: '近年教育改革的方向是什么？',
        options: ['减少英语课', '应对全球化', '取消大学考试', '缩短义务教育'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l11',
    title: '少子高齢化社会',
    titleJp: '少子高齢化社会',
    category: 'society',
    difficulty: 'advanced',
    level: 'N2',
    wordCount: 340,
    estimatedTime: 9,
    tags: ['社会', '人口', '問題'],
    content: [
      {
        text: '日本は世界で最も速いスピードで高齢化が進んでいる国の一つです。',
        reading: 'にほんはせかいでもっともはやいスピードでこうれいかがすすんでいるくにのひとつです。',
      },
      {
        text: '少子高齢化に伴い、労働力不足や社会保障費の増大が深刻な課題となっています。',
        reading: 'しょうしこうれいかにともない、ろうどうりょくぶそくやしゃかいほしょうひのぞうだいがしんこくなかだいとなっています。',
        annotations: [
          { word: '伴い', reading: 'ともない', meaning: '伴随', startIndex: 6, endIndex: 9 },
        ],
      },
      {
        text: '政府は女性や高齢者の労働参加を促す政策を推進していますが、依然として課題は山積しています。',
        reading: 'せいふはじょせいやこうれいしゃのろうどうさんかをうながすせいさくをすいしんしていますが、いぜんとしてかだいはやませきしています。',
        annotations: [
          { word: '促す', reading: 'うながす', meaning: '促进', startIndex: 15, endIndex: 17 },
          { word: '山積', reading: 'やませき', meaning: '堆积如山', startIndex: 35, endIndex: 37 },
        ],
      },
      {
        text: '地方では過疎化が進み、地域社会の維持が困難になっています。',
        reading: 'ちほうではかそかがすすみ、ちいきしゃかいいじがこんなんになっています。',
        annotations: [
          { word: '過疎化', reading: 'かそか', meaning: '人口稀疏化', startIndex: 4, endIndex: 7 },
        ],
      },
      {
        text: 'この問題に対する解決策として、外国人労働者の受け入れ拡大やAIの活用などが議論されています。',
        reading: 'このもんだいにたいするかいけつさくとして、がいこくじんろうどうしゃのうけいれかくだいやAIのかつようなどがぎろんされています。',
      },
    ],
    comprehension: [
      {
        id: 'read-l11-q1',
        question: '少子老龄化带来的问题是什么？',
        options: ['人口过多', '劳动力不足和社会保障费增加', '房价下跌', '学校过多'],
        correctIndex: 1,
      },
      {
        id: 'read-l11-q2',
        question: '文章提到了哪些解决方向？',
        options: ['减少社会保障', '接受外国劳动力和利用AI', '减少老年人就业', '降低退休年龄'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l12',
    title: '日本的企业文化',
    titleJp: '日本の企業文化',
    category: 'society',
    difficulty: 'advanced',
    level: 'N2',
    wordCount: 330,
    estimatedTime: 9,
    tags: ['社会', '企業', '文化'],
    content: [
      {
        text: '日本の企業文化は、終身雇用と年功序列を特徴としてきました。',
        reading: 'にほんのきぎょうぶんかは、しゅうしんこようとねんこうじょれつをとくちょうとしてきました。',
        annotations: [
          { word: '終身雇用', reading: 'しゅうしんこよう', meaning: '终身雇佣', startIndex: 8, endIndex: 12 },
          { word: '年功序列', reading: 'ねんこうじょれつ', meaning: '论资排辈', startIndex: 13, endIndex: 17 },
        ],
      },
      {
        text: 'かつては一度入社すれば定年まで同じ会社で働くのが一般的でした。',
        reading: 'かつてはいちどにゅうしゃすればていねんまでおなじかいしゃではたらくのがいっぱんてきでした。',
      },
      {
        text: 'しかし、バブル崩壊後、こうした制度は徐々に変化しつつあります。',
        reading: 'しかし、バブルほうかいご、こうしたせいどはじょじょにへんかしつつあります。',
        annotations: [
          { word: '崩壊', reading: 'ほうかい', meaning: '崩溃', startIndex: 6, endIndex: 8 },
        ],
      },
      {
        text: '成果主義の導入や、副業の解禁など、働き方の多様化が進んでいます。',
        reading: 'せいかしゅぎのどうにゅうや、ふくぎょうのかいきんなど、はたらきかたのたようかがすすんでいます。',
        annotations: [
          { word: '成果主義', reading: 'せいかしゅぎ', meaning: '业绩主义', startIndex: 0, endIndex: 4 },
        ],
      },
      {
        text: 'それでも、日本特有の「報・連・相」などのコミュニケーション文化は根強く残っています。',
        reading: 'それでも、にほんとくゆうの「ほう・れん・そう」などのコミュニケーションぶんかはねづよくのこっています。',
        annotations: [
          { word: '報・連・相', reading: 'ほう・れん・そう', meaning: '报告·联络·商谈', startIndex: 9, endIndex: 15 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l12-q1',
        question: '日本企业文化的传统特征是什么？',
        options: ['自由转职', '终身雇佣和论资排辈', '业绩主义', '副业自由'],
        correctIndex: 1,
      },
      {
        id: 'read-l12-q2',
        question: '「報・連・相」是什么？',
        options: ['三种假期', '报告·联络·商谈', '三个部门', '三种奖金'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l13',
    title: '日本哲学思想',
    titleJp: '日本の哲学思想',
    category: 'culture',
    difficulty: 'advanced',
    level: 'N1',
    wordCount: 400,
    estimatedTime: 10,
    tags: ['文化', '哲学', '思想'],
    content: [
      {
        text: '日本の哲学思想は、神道、仏教、儒教が融合した独自の体系を形成しています。',
        reading: 'にほんのてつがくしそうは、しんとう、ぶっきょう、じゅきょうがゆうごうしたどくじのたいけいをけいせいしています。',
        annotations: [
          { word: '融合', reading: 'ゆうごう', meaning: '融合', startIndex: 17, endIndex: 19 },
        ],
      },
      {
        text: 'とりわけ「無常」という概念は、日本文化の真髄をなすものと言えましょう。',
        reading: 'とりわけ「むじょう」というがいねんは、にほんぶんかのしんずいをなすものといえましょう。',
        annotations: [
          { word: '無常', reading: 'むじょう', meaning: '无常', startIndex: 5, endIndex: 7 },
          { word: '真髄', reading: 'しんずい', meaning: '精髓', startIndex: 17, endIndex: 19 },
        ],
      },
      {
        text: '万物は常に変化し、永遠に続くものはないという認識は、文学や芸術にも深い影響を及ぼしています。',
        reading: 'ばんぶつはつねにへんかし、えいえんにつづくものはないというにんしきは、ぶんがくやげいじゅつにもふかいえいきょうをおよぼしています。',
        annotations: [
          { word: '及ぼす', reading: 'およぼす', meaning: '波及/影响', startIndex: 33, endIndex: 36 },
        ],
      },
      {
        text: '「もののあはれ」という美意識も、この無常観に由来しています。',
        reading: '「もののあはれ」というびいしきも、このむじょうかんにゆらいしています。',
        annotations: [
          { word: 'もののあはれ', reading: 'もののあはれ', meaning: '物哀/万物之哀', startIndex: 2, endIndex: 9 },
          { word: '由来', reading: 'ゆらい', meaning: '由来', startIndex: 18, endIndex: 20 },
        ],
      },
      {
        text: 'これは、移ろいゆくものの中に美しさを見出す、日本独自の感性を表しています。',
        reading: 'これは、うつろいゆくもののなかにうつくしさをみいだす、にほんどくじのかんせいをあらわしています。',
        annotations: [
          { word: '見出す', reading: 'みいだす', meaning: '发现/找到', startIndex: 15, endIndex: 18 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l13-q1',
        question: '日本哲学思想融合了哪些体系？',
        options: ['基督教和佛教', '神道、佛教和儒教', '道教和佛教', '伊斯兰教和神道'],
        correctIndex: 1,
      },
      {
        id: 'read-l13-q2',
        question: '「もののあはれ」是什么意思？',
        options: ['万物之哀/在变化中感受美', '万物有灵', '因果报应', '天地合一'],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 'read-l14',
    title: '日本の環境問題',
    titleJp: '日本の環境問題',
    category: 'society',
    difficulty: 'advanced',
    level: 'N1',
    wordCount: 380,
    estimatedTime: 10,
    tags: ['社会', '環境', '問題'],
    content: [
      {
        text: '日本は高度経済成長の過程で深刻な環境問題を経験しました。',
        reading: 'にほんはこうどけいざいせいちょうのかていでしんこくなかんきょうもんだいをけいけんしました。',
      },
      {
        text: '水俣病や四日市喘息など、公害病の被害は今なお続いています。',
        reading: 'みなまたびょうやよっかいちぜんそくなど、こうがいびょうのひがいはいまなおつづいています。',
        annotations: [
          { word: '水俣病', reading: 'みなまたびょう', meaning: '水俣病', startIndex: 0, endIndex: 3 },
          { word: '公害病', reading: 'こうがいびょう', meaning: '公害病', startIndex: 13, endIndex: 16 },
        ],
      },
      {
        text: 'これを契機として、日本は世界でも類を見ないほど厳しい環境規制を導入するに至りました。',
        reading: 'これをけいきとして、にほんはせかいでもたぐいをみないほどきびしいかんきょうきせいをどうにゅうするにいたりました。',
        annotations: [
          { word: '契機', reading: 'けいき', meaning: '契机', startIndex: 4, endIndex: 6 },
          { word: '至る', reading: 'いたる', meaning: '到达', startIndex: 35, endIndex: 37 },
        ],
      },
      {
        text: '現在では、再生可能エネルギーの導入や脱炭素社会の実現に向けた取り組みが加速しています。',
        reading: 'げんざいでは、さいせいかのうエネルギーのどうにゅうやだつたんそしゃかいのじつげんにむけたとりくみがかそくしています。',
        annotations: [
          { word: '脱炭素', reading: 'だつたんそ', meaning: '脱碳', startIndex: 18, endIndex: 21 },
        ],
      },
      {
        text: 'しかしながら、原発依存からの脱却は容易ではなく、エネルギー政策の転換は依然として模索の段階にあります。',
        reading: 'しかしながら、げんぱついぞんからのだっきゃくはようではなく、エネルギーせいさくのてんかんはいぜんとしてもさくのだんかいにあります。',
        annotations: [
          { word: '脱却', reading: 'だっきゃく', meaning: '摆脱', startIndex: 11, endIndex: 13 },
          { word: '模索', reading: 'もさく', meaning: '摸索', startIndex: 35, endIndex: 37 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l14-q1',
        question: '日本为什么引入严格的环境法规？',
        options: ['国际压力', '经历了严重的公害病', '经济衰退', '自然灾害'],
        correctIndex: 1,
      },
      {
        id: 'read-l14-q2',
        question: '日本能源政策面临什么困难？',
        options: ['能源过多', '摆脱核电依赖不容易', '没有可再生能源', '国际制裁'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 'read-l15',
    title: '日本語の言語特性',
    titleJp: '日本語の言語特性',
    category: 'culture',
    difficulty: 'advanced',
    level: 'N1',
    wordCount: 370,
    estimatedTime: 10,
    tags: ['文化', '言語', '学問'],
    content: [
      {
        text: '日本語は、話し手と聞き手の関係によって表現が大きく変わるという特徴を持っています。',
        reading: 'にほんごは、はなしてとききてのかんけいによってひょうげんがおおきくかわるというとくちょうをもっています。',
      },
      {
        text: 'いわゆる敬語システムはその典型であり、相手との距離感を言語的に調整する機能を果たしています。',
        reading: 'いわゆるけいごシステムはそのてんけいであり、あいてとのきょりかんをげんごてきにちょうせいするきのうをはたしています。',
        annotations: [
          { word: '典型', reading: 'てんけい', meaning: '典型', startIndex: 11, endIndex: 13 },
        ],
      },
      {
        text: 'また、主語が省略されることが多いのも日本語の顕著な特徴です。',
        reading: 'また、しゅごがしょうりゃくされることがおおいのもにほんごのけんちょなとくちょうです。',
        annotations: [
          { word: '顕著', reading: 'けんちょ', meaning: '显著', startIndex: 17, endIndex: 19 },
        ],
      },
      {
        text: '文脈から判断することが前提とされており、これが外国人学習者にとって大きな壁となっています。',
        reading: 'ぶんみゃくからはんだんすることがぜんていとされており、これががいこくじんがくしゅしゃにとっておおきなかべとなっています。',
        annotations: [
          { word: '前提', reading: 'ぜんてい', meaning: '前提', startIndex: 13, endIndex: 15 },
        ],
      },
      {
        text: 'さらに、漢字、ひらがな、カタカナという三種類の文字を使い分ける体系は、世界の言語の中でも極めて稀な存在と言わざるを得ません。',
        reading: 'さらに、かんじ、ひらがな、カタカナというさんしゅるいのもじをつかいわけるたいせいは、せかいのげんごのなかでもきわめてまれなそんざいといわざるをえません。',
        annotations: [
          { word: '稀', reading: 'まれ', meaning: '稀少', startIndex: 37, endIndex: 38 },
        ],
      },
    ],
    comprehension: [
      {
        id: 'read-l15-q1',
        question: '日语表达根据什么而变化？',
        options: ['天气', '说话人和听话人的关系', '时间', '地点'],
        correctIndex: 1,
      },
      {
        id: 'read-l15-q2',
        question: '日语使用几种文字体系？',
        options: ['一种', '两种', '三种', '四种'],
        correctIndex: 2,
      },
    ],
  },
];
