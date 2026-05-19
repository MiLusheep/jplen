import type { GrammarLesson } from '../../types/grammar';

export const n2GrammarData: GrammarLesson[] = [
  {
    id: 'n2-l1',
    level: 'N2',
    title: '逆接与让步',
    description: '学习表示转折和让步的语法，包括～のに、～ても、～としても等。',
    order: 1,
    points: [
      {
        id: 'n2-p1',
        level: 'N2',
        title: '～のに',
        titleJp: '～のに',
        pattern: '普通体 + のに',
        explanation: '表示逆接，"却…""明明…却…"。含有意外、不满、遗憾等感情色彩。前后项是矛盾关系，后项不是说话人期望的结果。',
        examples: [
          { japanese: '何度も説明したのに、まだ分かっていません。', reading: 'なんどもせつめいしたのに、まだわかっていません。', chinese: '明明解释了好多次，却还没明白。' },
          { japanese: '雨が降っているのに、外で遊んでいます。', reading: 'あめがふっているのに、そとであそんでいます。', chinese: '明明在下雨，却在外面玩。' },
          { japanese: '勉強したのに、試験に落ちました。', reading: 'べんきょうしたのに、しけんにおちました。', chinese: '明明学习了，考试却没及格。' },
        ],
        quiz: [
          { id: 'n2-p1-q1', question: '「のに」表示什么关系？', options: ['原因', '目的', '逆接', '条件'], correctIndex: 2, explanation: 'のに表示逆接，"明明…却…"，含有意外或不满。' },
        ],
        order: 1,
      },
      {
        id: 'n2-p2',
        level: 'N2',
        title: '～としても',
        titleJp: '～としても',
        pattern: '动词辞书形/た形 + としても',
        explanation: '表示假设的让步，"即使…也…"。与「ても」不同，としても侧重于假设性更强的情况，"就算假设…也…"。',
        examples: [
          { japanese: 'たとえ失敗したとしても、後悔はしません。', reading: 'たとえしっぱいしたとしても、こうかいはしません。', chinese: '就算失败了，也不后悔。' },
          { japanese: '彼が来ないとしても、会議は始めます。', reading: 'かれがこないとしても、かいぎはじめます。', chinese: '即使他不来，会议也照常开始。' },
        ],
        quiz: [
          { id: 'n2-p2-q1', question: '「たとえ…としても」中的「たとえ」意思是？', options: ['因为', '即使/就算', '但是', '所以'], correctIndex: 1, explanation: 'たとえ意为"即使/就算"，常与としても搭配使用。' },
        ],
        order: 2,
      },
      {
        id: 'n2-p3',
        level: 'N2',
        title: '～ものの',
        titleJp: '～ものの',
        pattern: '普通体 + ものの',
        explanation: '表示逆接，"虽然…但是…"。与「のに」不同，ものの语气较客观，不含不满情绪，侧重"虽然承认前项事实，但后项有不同情况"。',
        examples: [
          { japanese: 'やり方は知っているものの、実際にやったことはありません。', reading: 'やりかたはしっているものの、じっさいにやったことはありません。', chinese: '虽然知道方法，但实际没做过。' },
          { japanese: '約束したものの、行けるかどうか分かりません。', reading: 'やくそくしたものの、いけるかどうかわかりません。', chinese: '虽然答应了，但不知道能不能去。' },
        ],
        quiz: [
          { id: 'n2-p3-q1', question: 'ものの和のに的区别？', options: ['ものの含不满情绪', 'ものの更客观', 'のに更客观', '没有区别'], correctIndex: 1, explanation: 'ものの语气更客观，不含不满；のに含有意外、不满的感情。' },
        ],
        order: 3,
      },
    ],
  },
  {
    id: 'n2-l2',
    level: 'N2',
    title: '强调与限定',
    description: '学习表示强调和限定的语法，包括～さえ、～しか、～こそ等。',
    order: 2,
    points: [
      {
        id: 'n2-p4',
        level: 'N2',
        title: '～さえ～ば',
        titleJp: '～さえ～ば',
        pattern: '名词+さえ + 动词ば形/形容词ければ',
        explanation: '表示唯一条件，"只要…就…"。强调只需要这一个条件就能实现后项。さえ意为"连…都"，与ば搭配表示"只要…就足够了"。',
        examples: [
          { japanese: 'あなたさえいれば、他に何もいりません。', reading: 'あなたさえいれば、ほかになにもいりません。', chinese: '只要有你在，其他什么都不需要。' },
          { japanese: 'お金さえあれば、何でもできます。', reading: 'おかねさえあれば、なんでもできます。', chinese: '只要有钱，什么都能做。' },
          { japanese: '練習さえすれば、上手になります。', reading: 'れんしゅうさえすれば、じょうずになります。', chinese: '只要练习，就能变厉害。' },
        ],
        quiz: [
          { id: 'n2-p4-q1', question: '「只要有时间就能去」怎么说？', options: ['時間さえあれば行ける', '時間しかあれば行ける', '時間こそあれば行ける', '時間まであれば行ける'], correctIndex: 0, explanation: 'さえ+ば表示"只要…就"，强调唯一条件。' },
        ],
        order: 1,
      },
      {
        id: 'n2-p5',
        level: 'N2',
        title: '～こそ',
        titleJp: '～こそ',
        pattern: '名词 + こそ',
        explanation: '表示强调，"才是…""正是…"。强调前面的事物是特别重要的或特别值得一提的。常用于寒暄语中。',
        examples: [
          { japanese: '今回こそ合格したいです。', reading: 'こんかいこそごうかくしたいです。', chinese: '这次一定要合格。' },
          { japanese: 'こちらこそ、よろしくお願いします。', reading: 'こちらこそ、よろしくおねがいします。', chinese: '彼此彼此，请多关照。' },
          { japanese: '努力こそ成功の鍵です。', reading: 'どりょくこそせいこうのかぎです。', chinese: '努力才是成功的关键。' },
        ],
        quiz: [
          { id: 'n2-p5-q1', question: '「こちらこそ」在对话中是什么意思？', options: ['这边', '彼此彼此/我才应该', '当然', '请'], correctIndex: 1, explanation: 'こちらこそ是寒暄用语，意为"彼此彼此/我才应该…"。' },
        ],
        order: 2,
      },
    ],
  },
  {
    id: 'n2-l3',
    level: 'N2',
    title: '伴随与同时',
    description: '学习表示动作伴随和同时进行的语法，包括～に伴って、～とともに、～につれて等。',
    order: 3,
    points: [
      {
        id: 'n2-p6',
        level: 'N2',
        title: '～に伴って',
        titleJp: '～に伴って',
        pattern: '动词辞书形/名词 + に伴って',
        explanation: '表示伴随，"随着…"。强调两个变化同时发生，后项是前项的必然结果。多用于正式文体，如新闻报道、论文等。',
        examples: [
          { japanese: '人口の増加に伴って、住宅問題が深刻になっています。', reading: 'じんこうのぞうかにともなって、じゅうたくもんだいがしんこくになっています。', chinese: '随着人口增加，住房问题变得严重了。' },
          { japanese: '経済成長に伴って、環境問題も悪化しています。', reading: 'けいざいせいちょうにともなって、かんきょうもんだいもあっかしています。', chinese: '随着经济增长，环境问题也在恶化。' },
        ],
        quiz: [
          { id: 'n2-p6-q1', question: 'に伴って的使用场景？', options: ['日常口语', '正式文体', '只用于过去', '只用于否定'], correctIndex: 1, explanation: 'に伴って多用于正式文体，如新闻、论文等。' },
        ],
        order: 1,
      },
      {
        id: 'n2-p7',
        level: 'N2',
        title: '～とともに',
        titleJp: '～とともに',
        pattern: '动词辞书形/名词 + とともに',
        explanation: '表示"与…一起"或"随着…"。可以表示共同动作（和…一起），也可以表示两个变化同时发生（随着…）。比に伴って更口语化。',
        examples: [
          { japanese: '家族とともに日本へ行きました。', reading: 'かぞくとともににほんへいきました。', chinese: '和家人一起去了日本。' },
          { japanese: '年を取るとともに、健康への関心が高まります。', reading: 'としをとるとともに、けんこうへのかんしんがたかまります。', chinese: '随着年龄增长，对健康的关注度也在提高。' },
        ],
        quiz: [
          { id: 'n2-p7-q1', question: '「和朋友一起旅行」用哪个？', options: ['友達に伴って旅行する', '友達とともに旅行する', '友達につれて旅行する', '友達によって旅行する'], correctIndex: 1, explanation: 'とともに可以表示"和…一起"做某事。' },
        ],
        order: 2,
      },
      {
        id: 'n2-p8',
        level: 'N2',
        title: '～につれて',
        titleJp: '～につれて',
        pattern: '动词辞书形/名词 + につれて',
        explanation: '表示比例关系，"越…越…"。强调前项程度加深，后项也随之加深。与に伴って不同，つれて侧重于比例关系而非因果关系。',
        examples: [
          { japanese: '上につれて、気温が下がります。', reading: 'うえにつれて、きおんがさがります。', chinese: '越往上走，气温越低。' },
          { japanese: '練習するにつれて、上手になります。', reading: 'れんしゅうするにつれて、じょうずになります。', chinese: '越练习越厉害。' },
        ],
        quiz: [
          { id: 'n2-p8-q1', question: '「越读越有趣」怎么说？', options: ['読むにつれて面白くなる', '読むに伴って面白くなる', '読むとともに面白くなる', '読むによって面白くなる'], correctIndex: 0, explanation: 'につれて表示比例关系，"越…越…"。' },
        ],
        order: 3,
      },
    ],
  },
  {
    id: 'n2-l4',
    level: 'N2',
    title: '敬语体系',
    description: '学习日语敬语的核心体系，包括尊敬语、谦让语和美化语。',
    order: 4,
    points: [
      {
        id: 'n2-p9',
        level: 'N2',
        title: '尊敬语',
        titleJp: '尊敬語',
        pattern: 'お+动词ます形+になる / 特殊尊敬语',
        explanation: '尊敬语用于抬高对方或话题中的人物的动作。常用特殊尊敬语：いらっしゃる（行く/来る/いる）、おっしゃる（言う）、召し上がる（食べる/飲む）、ご覧になる（見る）。',
        examples: [
          { japanese: '先生はもうお帰りになりました。', reading: 'せんせいはもうおかえりになりました。', chinese: '老师已经回去了。' },
          { japanese: '社長は明日いらっしゃいます。', reading: 'しゃちょうはあしたいらっしゃいます。', chinese: '社长明天来。' },
          { japanese: 'こちらをお召し上がりください。', reading: 'こちらをおめしあがりください。', chinese: '请用这个。' },
        ],
        quiz: [
          { id: 'n2-p9-q1', question: '「言う」的尊敬语是？', options: ['おっしゃる', '申し上げる', 'お言いになる', '言われる'], correctIndex: 0, explanation: '言う的特殊尊敬语是おっしゃる。' },
        ],
        order: 1,
      },
      {
        id: 'n2-p10',
        level: 'N2',
        title: '谦让语',
        titleJp: '謙譲語',
        pattern: 'お+动词ます形+する / 特殊谦让语',
        explanation: '谦让语用于降低自己的动作来抬高对方。常用特殊谦让语：参る（行く/来る）、申す（言う）、いただく（食べる/飲む/もらう）、拝見する（見る）、伺う（訪ねる/聞く）。',
        examples: [
          { japanese: '私が参ります。', reading: 'わたしがまいります。', chinese: '我去。' },
          { japanese: 'お名前を伺ってもよろしいですか。', reading: 'おなまえをうかがってもよろしいですか。', chinese: '可以请问您的名字吗？' },
          { japanese: '資料を拝見しました。', reading: 'しりょうをはいけんしました。', chinese: '我看了资料。' },
        ],
        quiz: [
          { id: 'n2-p10-q1', question: '「見る」的谦让语是？', options: ['ご覧になる', '拝見する', 'お見えになる', '見られる'], correctIndex: 1, explanation: '見る的谦让语是拝見する。ご覧になる是尊敬语。' },
        ],
        order: 2,
      },
    ],
  },
];
