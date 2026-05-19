import type { GrammarLesson } from '../../types/grammar';

export const n1GrammarData: GrammarLesson[] = [
  {
    id: 'n1-l1',
    level: 'N1',
    title: '限定与排除',
    description: '学习表示限定和排除的语法，包括～を限りに、～ならでは、～をおいて等。',
    order: 1,
    points: [
      {
        id: 'n1-p1',
        level: 'N1',
        title: '～をおいて',
        titleJp: '～をおいて',
        pattern: '名词 + をおいて',
        explanation: '表示排除，"除了…之外（没有别的）"。强调只有这个选择，语气非常强烈。常与「ない」搭配，表示"除了…之外没有更合适的了"。',
        examples: [
          { japanese: '彼をおいて、この仕事を任せられる人はいません。', reading: 'かれをおいて、このしごとをまかせられるひとはいません。', chinese: '除了他之外，没有人能胜任这项工作。' },
          { japanese: 'この問題を解決できるのは、田中先生をおいてほかにいません。', reading: 'このもんだいをかいけつできるのは、たなかせんせいをおいてほかにいません。', chinese: '能解决这个问题的人，除了田中老师之外没有别人了。' },
        ],
        quiz: [
          { id: 'n1-p1-q1', question: '「をおいて」的语气？', options: ['轻微建议', '强烈排除', '普通比较', '时间限定'], correctIndex: 1, explanation: 'をおいて语气非常强烈，表示"除了…之外没有别的"。' },
        ],
        order: 1,
      },
      {
        id: 'n1-p2',
        level: 'N1',
        title: '～ならでは',
        titleJp: '～ならでは',
        pattern: '名词 + ならではの + 名词 / ならでは + 可能否定',
        explanation: '表示"只有…才有的""非…莫属"。强调某事物的独特性，只有这个特定的人或地方才能做到。',
        examples: [
          { japanese: '京都ならではの美しい景色ですね。', reading: 'きょうとならではのうつくしいけしきですね。', chinese: '这是只有京都才有的美丽景色。' },
          { japanese: 'プロの料理人ならではの味です。', reading: 'プロのりょうりにんならではのあじです。', chinese: '这是专业厨师才能做出的味道。' },
          { japanese: '母ならではの優しさを感じます。', reading: 'ははならではのやさしさをかんじます。', chinese: '感受到只有母亲才有的温柔。' },
        ],
        quiz: [
          { id: 'n1-p2-q1', question: '「ならでは」表示什么？', options: ['排除', '唯一性/独特性', '时间限制', '原因'], correctIndex: 1, explanation: 'ならでは表示"只有…才有的"独特性。' },
        ],
        order: 2,
      },
      {
        id: 'n1-p3',
        level: 'N1',
        title: '～を限りに',
        titleJp: '～を限りに',
        pattern: '名词 + を限りに',
        explanation: '表示以某事为限，"以…为限""到…为止"。强调某个时间点或事件作为界限，之后情况会改变。',
        examples: [
          { japanese: '今日を限りにタバコをやめます。', reading: 'きょうをかぎりにタバコをやめます。', chinese: '以今天为限，我要戒烟。' },
          { japanese: '今学期を限りに、この学校を転校します。', reading: 'こんがっきをかぎりに、このがっこうをてんこうします。', chinese: '这学期结束后，我就转学了。' },
        ],
        quiz: [
          { id: 'n1-p3-q1', question: '「今日を限りに」是什么意思？', options: ['今天开始', '以今天为限/到今天为止', '今天也', '今天之前'], correctIndex: 1, explanation: 'を限りに表示"以…为限"，之后情况改变。' },
        ],
        order: 3,
      },
    ],
  },
  {
    id: 'n1-l2',
    level: 'N1',
    title: '逆接与让步（高级）',
    description: '学习更高级的逆接表达，包括～とはいえ、～ものを、～と思いきや等。',
    order: 2,
    points: [
      {
        id: 'n1-p4',
        level: 'N1',
        title: '～とはいえ',
        titleJp: '～とはいえ',
        pattern: '普通体/名词 + とはいえ',
        explanation: '表示让步，"虽说…但是…"。先承认前项事实，然后指出后项与预期不同的情况。比「けれども」更正式，多用于书面语。',
        examples: [
          { japanese: '春とはいえ、まだ寒い日があります。', reading: 'はるとはいえ、まださむいひがあります。', chinese: '虽说是春天，但还是有些冷的日子。' },
          { japanese: '便利とはいえ、スマホに頼りすぎるのは問題だ。', reading: 'べんりとはいえ、スマホにたよりすぎるのはもんだいだ。', chinese: '虽说方便，但过度依赖手机是个问题。' },
        ],
        quiz: [
          { id: 'n1-p4-q1', question: '「とはいえ」的使用场景？', options: ['口语常用', '正式书面语', '只用于否定', '只用于过去'], correctIndex: 1, explanation: 'とはいえ更正式，多用于书面语和正式场合。' },
        ],
        order: 1,
      },
      {
        id: 'n1-p5',
        level: 'N1',
        title: '～ものを',
        titleJp: '～ものを',
        pattern: '普通体 + ものを',
        explanation: '表示不满、遗憾或反事实的假设，"…就好了""明明…却…"。含有"如果做了某事就好了"的遗憾，或者对现状的不满。',
        examples: [
          { japanese: '早く言えばいいものを、黙っていた。', reading: 'はやくいえばいいものを、だまっていた。', chinese: '早点说就好了，却一直沉默。' },
          { japanese: '連絡してくれればいいものを、一人で悩んでいた。', reading: 'れんらくしてくれればいいものを、ひとりでなやんでいた。', chinese: '跟我联系就好了，却一个人烦恼。' },
        ],
        quiz: [
          { id: 'n1-p5-q1', question: '「ものを」含有什么感情？', options: ['喜悦', '遗憾/不满', '惊讶', '感谢'], correctIndex: 1, explanation: 'ものを含有遗憾或不满的感情，"…就好了"。' },
        ],
        order: 2,
      },
      {
        id: 'n1-p6',
        level: 'N1',
        title: '～と思いきや',
        titleJp: '～と思いきや',
        pattern: '普通体 + と思いきや',
        explanation: '表示意外，"本以为…没想到…"。前项是说话人的预期，后项是与预期完全相反的事实。含有强烈的意外感。',
        examples: [
          { japanese: '合格したと思いきや、落第してしまった。', reading: 'ごうかくしたとおもいきや、らくだいしてしまった。', chinese: '本以为合格了，没想到落榜了。' },
          { japanese: '雨がやんだと思いきや、また降り出した。', reading: 'あめがやんだとおもいきや、またふりだした。', chinese: '本以为雨停了，没想到又下起来了。' },
        ],
        quiz: [
          { id: 'n1-p6-q1', question: '「と思いきや」表示什么？', options: ['确认', '意外/没想到', '原因', '目的'], correctIndex: 1, explanation: 'と思いきや表示"本以为…没想到…"，含有意外感。' },
        ],
        order: 3,
      },
    ],
  },
  {
    id: 'n1-l3',
    level: 'N1',
    title: '立场与观点',
    description: '学习表示立场和观点的语法，包括～からして、～にしてみれば、～を通じて等。',
    order: 3,
    points: [
      {
        id: 'n1-p7',
        level: 'N1',
        title: '～からして',
        titleJp: '～からして',
        pattern: '名词 + からして',
        explanation: '表示判断的出发点，"从…来看""单从…来说"。强调仅从某个方面就能看出整体情况，或者表示"连…都…"。',
        examples: [
          { japanese: 'あの態度からして、反省しているとは思えない。', reading: 'あのたいどからして、はんせいしているとはおもえない。', chinese: '从那个态度来看，不觉得他在反省。' },
          { japanese: 'リーダーからしてやる気がないのだから、どうしようもない。', reading: 'リーダーからしてやるきがないのだから、どうしようもない。', chinese: '连领导都没有干劲，那就没办法了。' },
        ],
        quiz: [
          { id: 'n1-p7-q1', question: '「からして」的两个用法？', options: ['原因和时间', '判断出发点和"连…都"', '条件和结果', '目的和手段'], correctIndex: 1, explanation: 'からして可以表示"从…来看"（判断出发点）和"连…都"（强调）。' },
        ],
        order: 1,
      },
      {
        id: 'n1-p8',
        level: 'N1',
        title: '～にしてみれば',
        titleJp: '～にしてみれば',
        pattern: '名词 + にしてみれば',
        explanation: '表示站在某人的立场上，"从…的角度来看""对…来说"。强调换位思考，从特定人物的视角来看待事物。',
        examples: [
          { japanese: '親にしてみれば、子供のことが心配なのは当たり前だ。', reading: 'おやにしてみれば、こどものことがしんぱいなのはあたりまえだ。', chinese: '从父母的角度来看，担心孩子是理所当然的。' },
          { japanese: '学生にしてみれば、宿題が少ない方がいいに決まっている。', reading: 'がくせいにしてみれば、しゅくだいがすくないほうがいいにきまっている。', chinese: '从学生的角度来看，作业少肯定更好。' },
        ],
        quiz: [
          { id: 'n1-p8-q1', question: '「にしてみれば」强调什么？', options: ['客观事实', '换位思考', '时间变化', '因果关系'], correctIndex: 1, explanation: 'にしてみれば强调站在某人的立场上换位思考。' },
        ],
        order: 2,
      },
    ],
  },
];
