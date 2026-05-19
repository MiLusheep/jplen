import type { GrammarLesson } from '../../types/grammar';

export const n4GrammarData: GrammarLesson[] = [
  {
    id: 'n4-l1',
    level: 'N4',
    title: '可能表达',
    description: '学习如何表达"能做/会做"某事，以及可能态的构成方式。',
    order: 1,
    points: [
      {
        id: 'n4-p1',
        level: 'N4',
        title: '动词可能态',
        titleJp: '動詞の可能態',
        pattern: '动词可能态 + る',
        explanation: '可能态表示"能做/会做"某事。构成方式：①一段动词去る加られる → られる；②五段动词词尾う段→え段+る（如書く→書ける）；③する→できる；④くる→こられる。口语中一段动词的「られる」常缩略为「れる」。',
        examples: [
          { japanese: '日本語が話せます。', reading: 'にほんごがはなせます。', chinese: '我会说日语。' },
          { japanese: 'この漢字が読めますか。', reading: 'このかんじがよめますか。', chinese: '你会读这个汉字吗？' },
          { japanese: '一人で来られます。', reading: 'ひとりでこられます。', chinese: '我能一个人来。' },
        ],
        quiz: [
          { id: 'n4-p1-q1', question: '「書く」的可能态是什么？', options: ['書ける', '書かれる', '書けるる', '書くれる'], correctIndex: 0, explanation: '五段动词变可能态：词尾う段→え段+る。書く→書ける。' },
        ],
        order: 1,
      },
      {
        id: 'n4-p2',
        level: 'N4',
        title: '～ことができる（能够做）',
        titleJp: '～ことができる',
        pattern: '动词辞书形 + ことができる',
        explanation: '「ことができる」是另一种表达可能的方式，比可能态更正式。意思是"能够做……"。与可能态的区别：可能态更口语化，「ことができる」更书面化。',
        examples: [
          { japanese: '泳ぐことができます。', reading: 'およぐことができます。', chinese: '我会游泳。' },
          { japanese: 'ここで写真を撮ることができません。', reading: 'ここでしゃしんをとることができません。', chinese: '这里不能拍照。' },
        ],
        quiz: [
          { id: 'n4-p2-q1', question: '「ことができる」前面接什么形式？', options: ['辞书形', 'ます形', 'て形', 'た形'], correctIndex: 0, explanation: '「ことができる」前面接动词辞书形（原形）。' },
        ],
        order: 2,
      },
    ],
  },
  {
    id: 'n4-l2',
    level: 'N4',
    title: '授受表达',
    description: '学习日语中"给/收到"的表达方式，这是日语中最体现人际关系的语法。',
    order: 2,
    points: [
      {
        id: 'n4-p3',
        level: 'N4',
        title: 'あげる（我→别人给）',
        titleJp: '～てあげる',
        pattern: 'A は B に ～てあげる',
        explanation: '「てあげる」表示"我为别人做某事"或"我给别人某物"。动作方向是从自己向外。注意：对长辈或上级直接说「てあげる」不太礼貌，有"施恩"的感觉，应避免使用。',
        examples: [
          { japanese: '友達にプレゼントをあげました。', reading: 'ともだちにプレゼントをあげました。', chinese: '我给了朋友礼物。' },
          { japanese: '妹に本を読んであげました。', reading: 'いもうとにほんをよんであげました。', chinese: '我给妹妹读了书。' },
        ],
        quiz: [
          { id: 'n4-p3-q1', question: '「てあげる」的动作方向是？', options: ['从自己向外', '从外向自己', '互相', '没有方向'], correctIndex: 0, explanation: '「てあげる」表示自己为别人做，方向是从自己向外。' },
        ],
        order: 1,
      },
      {
        id: 'n4-p4',
        level: 'N4',
        title: 'もらう（别人→我收到）',
        titleJp: '～てもらう',
        pattern: 'A は B に/から ～てもらう',
        explanation: '「てもらう」表示"请别人为自己做某事"或"从别人那里收到"。动作方向是向着自己。强调"受益"——别人做了某事，我因此受益。',
        examples: [
          { japanese: '先生に日本語を教えてもらいました。', reading: 'せんせいににほんごをおしえてもらいました。', chinese: '我请老师教了日语。' },
          { japanese: '友達からプレゼントをもらいました。', reading: 'ともだちからプレゼントをもらいました。', chinese: '我从朋友那里收到了礼物。' },
        ],
        quiz: [
          { id: 'n4-p4-q1', question: '「てもらう」强调的是什么？', options: ['自己受益', '对方受益', '双方受益', '没有特别含义'], correctIndex: 0, explanation: '「てもらう」强调自己从对方的动作中受益。' },
        ],
        order: 2,
      },
      {
        id: 'n4-p5',
        level: 'N4',
        title: 'くれる（别人→我给）',
        titleJp: '～てくれる',
        pattern: 'B は（私に）～てくれる',
        explanation: '「てくれる」表示"别人为我做某事"。与「てもらう」的区别：主语不同。「てくれる」的主语是给的人，「てもらう」的主语是收的人。同样强调"受益"。',
        examples: [
          { japanese: '友達が手伝ってくれました。', reading: 'ともだちがてつだってくれました。', chinese: '朋友帮了我。' },
          { japanese: '母が料理を作ってくれました。', reading: 'ははがりょうりをつくってくれました。', chinese: '妈妈给我做了饭。' },
        ],
        quiz: [
          { id: 'n4-p5-q1', question: '「てくれる」的主语是谁？', options: ['给的人（别人）', '收的人（自己）', '都可以', '没有主语'], correctIndex: 0, explanation: '「てくれる」的主语是给别人做某事的人。' },
        ],
        order: 3,
      },
    ],
  },
  {
    id: 'n4-l3',
    level: 'N4',
    title: '条件表达',
    description: '学习日语中表示条件的「と」「ば」「たら」「なら」四种表达。',
    order: 3,
    points: [
      {
        id: 'n4-p6',
        level: 'N4',
        title: '～と（必然条件）',
        titleJp: '～と',
        pattern: '动词辞书形 + と',
        explanation: '「と」表示必然的条件关系，"一……就……"。用于自然规律、习惯、必然结果。不能用于表达意志、请求、劝诱等。比如「春になると花が咲きます」（一到春天花就开）。',
        examples: [
          { japanese: 'このボタンを押すと、ドアが開きます。', reading: 'このボタンをおすと、ドアがあきます。', chinese: '按这个按钮，门就会开。' },
          { japanese: '朝になると、鳥が鳴きます。', reading: 'あさになると、とりがなきます。', chinese: '一到早上，鸟就会叫。' },
        ],
        quiz: [
          { id: 'n4-p6-q1', question: '「と」不能用于以下哪种表达？', options: ['意志/请求', '自然规律', '习惯', '必然结果'], correctIndex: 0, explanation: '「と」不能用于表达意志、请求、劝诱等主观表达。' },
        ],
        order: 1,
      },
      {
        id: 'n4-p7',
        level: 'N4',
        title: '～たら（假定条件）',
        titleJp: '～たら',
        pattern: '动词た形 + ら',
        explanation: '「たら」是最常用的条件表达，可以用于各种情况：假定、发现、顺序等。用法最广泛，口语中最常见。构成方式：把た形的「た」换成「たら」。',
        examples: [
          { japanese: '雨が降ったら、家にいます。', reading: 'あめがふったら、いえにいます。', chinese: '如果下雨的话，我就在家。' },
          { japanese: '家に帰ったら、電話してください。', reading: 'いえにかえったら、でんわしてください。', chinese: '到家了的话，请打电话。' },
        ],
        quiz: [
          { id: 'n4-p7-q1', question: '「たら」的构成方式是？', options: ['た形+ら', '辞书形+ら', 'て形+ら', 'ない形+ら'], correctIndex: 0, explanation: '「たら」的构成：动词た形把「た」换成「たら」。' },
        ],
        order: 2,
      },
      {
        id: 'n4-p8',
        level: 'N4',
        title: '～ば（条件假设）',
        titleJp: '～ば',
        pattern: '动词ば形',
        explanation: '「ば」用于假设条件，"如果……的话"。构成：一段动词去る+れば；五段动词词尾う段→え段+ば；する→すれば。与「たら」的区别：「ば」更书面化，且后句不能是过去的事实。',
        examples: [
          { japanese: '安ければ、買います。', reading: 'やすければ、かいます。', chinese: '如果便宜的话就买。' },
          { japanese: '時間があれば、遊びに行きます。', reading: 'じかんがあれば、あそびにいきます。', chinese: '如果有时间的话就去玩。' },
        ],
        quiz: [
          { id: 'n4-p8-q1', question: '「する」的ば形是什么？', options: ['すれば', 'したら', 'すと', 'すなら'], correctIndex: 0, explanation: 'する→すれば。这是不规则变化，需要单独记忆。' },
        ],
        order: 3,
      },
      {
        id: 'n4-p9',
        level: 'N4',
        title: '～なら（承接话题）',
        titleJp: '～なら',
        pattern: '名词/动词辞书形 + なら',
        explanation: '「なら」用于承接对方的话题，"如果是……的话"。与「ば」「たら」不同，「なら」是针对对方提到的事情做出回应。比如对方说"我想去日本"，你可以说"日本ならいいところですよ"。',
        examples: [
          { japanese: '日本語なら、少し分かります。', reading: 'にほんごなら、すこしわかります。', chinese: '日语的话，我懂一点。' },
          { japanese: '食事なら、あのレストランがいいですよ。', reading: 'しょくじなら、あのレストランがいいですよ。', chinese: '吃饭的话，那家餐厅不错哦。' },
        ],
        quiz: [
          { id: 'n4-p9-q1', question: '「なら」的主要用法是什么？', options: ['承接对方话题', '表达必然结果', '表达过去事实', '表达禁止'], correctIndex: 0, explanation: '「なら」用于承接对方提到的话题，"如果是……的话"。' },
        ],
        order: 4,
      },
    ],
  },
  {
    id: 'n4-l4',
    level: 'N4',
    title: '被动与使役',
    description: '学习被动语态和使役语态，表达"被……"和"让……做"。',
    order: 4,
    points: [
      {
        id: 'n4-p10',
        level: 'N4',
        title: '被动语态（れる/られる）',
        titleJp: '受身態',
        pattern: '动词被动态 + れる/られる',
        explanation: '被动语态表示"被……"。构成：一段动词去る+られる；五段动词词尾う段→あ段+れる；する→される。日语的被动语态除了表示"被做"，还常用于表达"受害/困扰"（迷惑の受身），这是日语特有的用法。',
        examples: [
          { japanese: '先生に褒められました。', reading: 'せんせいにほめられました。', chinese: '被老师表扬了。' },
          { japanese: '雨に降られて、濡れました。', reading: 'あめにふられて、ぬれました。', chinese: '被雨淋了，湿了。' },
        ],
        quiz: [
          { id: 'n4-p10-q1', question: '日语被动语态特有的用法是什么？', options: ['迷惑の受身（受害被动）', '尊敬被动', '自然被动', '中立被动'], correctIndex: 0, explanation: '日语特有的"迷惑の受身"表示因某事而困扰，如「雨に降られる」（被雨淋而困扰）。' },
        ],
        order: 1,
      },
      {
        id: 'n4-p11',
        level: 'N4',
        title: '使役语态（せる/させる）',
        titleJp: '使役態',
        pattern: '动词使役态 + せる/させる',
        explanation: '使役语态表示"让/使……做"。构成：一段动词去る+させる；五段动词词尾う段→あ段+せる；する→させる。可以是强制（让做），也可以是许可（允许做）。',
        examples: [
          { japanese: '子供に野菜を食べさせます。', reading: 'こどもにやさいをたべさせます。', chinese: '让孩子吃蔬菜。' },
          { japanese: '学生に自由に発言させました。', reading: 'がくせいにじゆうにはつげんさせました。', chinese: '让学生自由发言了。' },
        ],
        quiz: [
          { id: 'n4-p11-q1', question: '「食べる」的使役态是什么？', options: ['食べさせる', '食べれる', '食べられる', '食べされる'], correctIndex: 0, explanation: '一段动词使役态：去る+させる。食べる→食べさせる。' },
        ],
        order: 2,
      },
    ],
  },
  {
    id: 'n4-l5',
    level: 'N4',
    title: '引用与传闻',
    description: '学习如何引用别人的话和表达传闻。',
    order: 5,
    points: [
      {
        id: 'n4-p12',
        level: 'N4',
        title: '～と言います（引用）',
        titleJp: '～と言います',
        pattern: '简体句 + と言います',
        explanation: '「と言います」用于引用别人说的话或自己的想法。前面接简体句。相当于中文的"说……"。礼貌体是「と言っています」。',
        examples: [
          { japanese: '田中さんは明日来ると言いました。', reading: 'たなかさんはあしたくるといいました。', chinese: '田中说明天来。' },
          { japanese: '先生は「もっと勉強しなさい」と言いました。', reading: 'せんせいは「もっとべんきょうしなさい」といいました。', chinese: '老师说"请多学习"。' },
        ],
        quiz: [
          { id: 'n4-p12-q1', question: '「と言います」前面接什么形式？', options: ['简体句', '敬体句', 'て形', 'た形'], correctIndex: 0, explanation: '「と言います」前面接简体句（普通体）。' },
        ],
        order: 1,
      },
      {
        id: 'n4-p13',
        level: 'N4',
        title: '～そうです（传闻）',
        titleJp: '～そうです（伝聞）',
        pattern: '简体句 + そうです',
        explanation: '「そうです」接在简体句后表示传闻，"听说……"。与样态的「そうです」不同：传闻的「そう」前面是完整句子，样态的「そう」前面是动词去ます/形容词词干。比如「降るそうです」（听说要下雨）vs「降りそうです」（看起来要下雨）。',
        examples: [
          { japanese: '明日は雨が降るそうです。', reading: 'あしたはあめがふるそうです。', chinese: '听说明天要下雨。' },
          { japanese: 'あの映画は面白いそうです。', reading: 'あのえいがはおもしろいそうです。', chinese: '听说那部电影很有趣。' },
        ],
        quiz: [
          { id: 'n4-p13-q1', question: '传闻的「そうです」和样态的「そうです」区别在于？', options: ['前面接续不同', '完全一样', '语调不同', '没有区别'], correctIndex: 0, explanation: '传闻「そう」前接完整简体句，样态「そう」前接动词去ます/形容词词干。' },
        ],
        order: 2,
      },
      {
        id: 'n4-p14',
        level: 'N4',
        title: '～そうです（样态）',
        titleJp: '～そうです（様態）',
        pattern: '动词去ます/形容词词干 + そうです',
        explanation: '样态的「そうです」表示根据外观判断，"看起来……""似乎……"。动词去ます+そうです（降りそうです=看起来要下雨），い形容词去い+そうです（美味しそう=看起来好吃），な形容词直接+そうです（元気そう=看起来精神）。',
        examples: [
          { japanese: '美味しそうなケーキですね。', reading: 'おいしそうなケーキですね。', chinese: '看起来很好吃的蛋糕呢。' },
          { japanese: '雨が降りそうです。', reading: 'あめがふりそうです。', chinese: '看起来要下雨了。' },
        ],
        quiz: [
          { id: 'n4-p14-q1', question: '「美味しい」的样态形式是什么？', options: ['美味しそうです', '美味しいそうです', '美味しくそうです', '美味しいそうな'], correctIndex: 0, explanation: 'い形容词样态：去い+そうです。美味しい→美味しそうです。' },
        ],
        order: 3,
      },
    ],
  },
];
