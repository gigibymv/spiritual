import type { Situation } from "@/types"

/**
 * Base de données curatée de versets bibliques (Louis Segond 1910).
 *
 * Chaque verset est vérifié et accompagné :
 * - d'une explication contextuelle (inspirée de Matthew Henry, David Guzik)
 * - d'une application pratique
 * - de templates de connexion pastorale pour personnaliser la réponse
 *
 * Chaque situation inclut des introductions pastorales empathiques,
 * rédigées dans le ton d'un prêtre bienveillant et sage.
 */
export const situations: Situation[] = [
  // ──────────────────────────────────────────────
  // CATÉGORIE : ÉMOTIONS
  // ──────────────────────────────────────────────
  {
    id: "anxiety",
    categoryId: "emotional",
    name: "Anxiété et inquiétude",
    keywords: [
      "anxiété", "anxieux", "inquiétude", "inquiet", "stress", "stressé",
      "angoisse", "angoissé", "panique", "nerveux", "souci", "soucieux",
      "préoccupé", "préoccupation", "tension", "tendu", "oppressé",
      "peur de l'avenir", "insomnie", "tourmenté",
    ],
    description: "Quand le poids des soucis devient difficile à porter",
    pastoralIntros: [
      "Ce que vous ressentez est profondément humain. L'anxiété est un poids que beaucoup portent en silence. Sachez que Dieu ne vous regarde pas avec reproche — il vous regarde avec compassion. Sa Parole contient des promesses spécifiques pour les cœurs inquiets. Voici ce qu'il vous dit aujourd'hui :",
      "Les soucis peuvent envahir notre esprit au point de nous paralyser. Si c'est ce que vous vivez en ce moment, je veux que vous sachiez quelque chose : Dieu n'est pas distant face à votre anxiété. Il est proche, il écoute, et il a des paroles de paix pour vous :",
      "L'inquiétude est comme une vague qui monte et qui semble vouloir tout emporter. Mais il y a un rocher sur lequel vous pouvez vous tenir. La Parole de Dieu est ce rocher, et voici ce qu'elle vous dit en ce moment :",
    ],
    verses: [
      {
        reference: "Philippiens 4:6-7",
        text: "Ne vous inquiétez de rien ; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.",
        explanation: "L'apôtre Paul écrit ces mots depuis une prison romaine. Son antidote à l'anxiété n'est pas l'indifférence, mais un transfert actif : déposer chaque souci devant Dieu par la prière, en y ajoutant la reconnaissance pour ce qui est déjà accordé. La paix promise n'est pas l'absence de problèmes, mais une garde divine sur notre monde intérieur.",
        application: "Prenez un moment pour nommer précisément ce qui vous inquiète, puis transformez chaque inquiétude en une prière spécifique. Ajoutez-y une chose pour laquelle vous êtes reconnaissant, même petite.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Ce verset est l'antidote divin à l'anxiété : Paul vous invite à échanger vos soucis contre la prière, et Dieu promet en retour une paix qui dépasse tout ce que l'esprit peut concevoir.",
          avenir: "Quand l'avenir vous inquiète, ce verset vous rappelle que la prière est le moyen de confier vos lendemains à Celui qui les connaît déjà.",
          travail: "Le stress du quotidien est exactement ce que Paul avait en tête : chaque pression professionnelle peut être transformée en prière, et chaque prière attire la paix.",
          insomnie: "Si vos nuits sont agitées par les soucis, cette parole peut devenir votre prière du soir : déposez chaque inquiétude et recevez la paix pour dormir.",
        },
      },
      {
        reference: "Matthieu 6:25-27",
        text: "C'est pourquoi je vous dis : Ne vous inquiétez pas pour votre vie de ce que vous mangerez, ni pour votre corps, de quoi vous serez vêtus. La vie n'est-elle pas plus que la nourriture, et le corps plus que le vêtement ? Regardez les oiseaux du ciel : ils ne sèment ni ne moissonnent, et ils n'amassent rien dans des greniers ; et votre Père céleste les nourrit. Ne valez-vous pas beaucoup plus qu'eux ?",
        explanation: "Jésus utilise un argument du plus petit au plus grand : si Dieu nourrit les oiseaux qui ne travaillent pas, combien plus prendra-t-il soin de ses enfants qu'il aime ? L'inquiétude est un gaspillage d'énergie qui ne peut rien ajouter à notre vie.",
        application: "Observez la nature autour de vous — les oiseaux, les fleurs. Laissez cette observation vous rappeler que Celui qui s'occupe de toute la création s'occupe aussi de vous.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Jésus vous pose une question directe : si Dieu prend soin des oiseaux, combien plus prendra-t-il soin de vous ? Votre valeur à ses yeux est inestimable.",
          argent: "Vos soucis financiers sont réels, mais Jésus vous rappelle que votre Père céleste connaît tous vos besoins et qu'il est capable d'y pourvoir.",
          avenir: "L'incertitude de demain pèse lourd, mais Jésus vous invite à regarder comment Dieu pourvoit déjà dans la nature — il fera de même pour vous.",
        },
      },
      {
        reference: "1 Pierre 5:7",
        text: "Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.",
        explanation: "Le verbe « décharger » évoque l'image d'un fardeau lourd qu'on retire de ses épaules pour le poser sur quelqu'un de plus fort. Pierre, qui a lui-même connu l'échec et la restauration, invite à un abandon radical de nos fardeaux, fondé sur la certitude que Dieu se soucie personnellement de nous.",
        application: "Imaginez physiquement que vous déposez le poids de vos soucis aux pieds de Dieu. Nommez-les un par un et laissez-les.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Ce verset vous donne la permission de ne plus porter seul ce qui vous pèse. Dieu vous invite à tout lui donner — parce qu'il prend soin de vous personnellement.",
          stress: "Le stress que vous décrivez est exactement le type de fardeau que Pierre vous invite à décharger. Vous n'avez pas été conçu pour porter cela seul.",
          solitude: "Même dans la solitude, ce verset vous rappelle une vérité fondamentale : quelqu'un prend soin de vous. Vous n'êtes jamais vraiment seul.",
        },
      },
      {
        reference: "Ésaïe 41:10",
        text: "Ne crains rien, car je suis avec toi ; ne promène pas des regards inquiets, car je suis ton Dieu ; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante.",
        explanation: "Dieu donne ici quatre promesses en réponse à la peur : sa présence (« je suis avec toi »), son identité (« je suis ton Dieu »), sa force (« je te fortifie ») et son action (« je viens à ton secours »). C'est un rempart complet contre l'anxiété.",
        application: "Relisez lentement chacune des quatre promesses. Laquelle résonne le plus avec votre situation actuelle ? Méditez-la tout au long de la journée.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Dieu vous adresse quatre promesses personnelles dans ce verset : sa présence, sa protection, sa force et son secours. C'est un rempart complet pour ce que vous traversez.",
          peur: "Face à la peur qui vous habite, Dieu commence par les mots les plus réconfortants possibles : « Ne crains rien, car je suis avec toi. »",
          avenir: "Quand l'avenir semble menaçant, Dieu vous dit : « Je te fortifie, je viens à ton secours. » Il est déjà dans votre demain.",
        },
      },
      {
        reference: "Psaume 55:23",
        text: "Remets ton sort à l'Éternel, et il te soutiendra ; il ne laissera jamais chanceler le juste.",
        explanation: "David écrit ce psaume dans un contexte de trahison et de danger. Malgré tout, il choisit de confier sa vie à Dieu. Le mot hébreu pour « sort » signifie littéralement « ce qui t'a été donné » — les circonstances, le fardeau quotidien.",
        application: "Quelles sont les circonstances que vous n'avez pas choisies mais qui pèsent sur vous ? Confiez-les spécifiquement à Dieu aujourd'hui.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "David a traversé des moments de grande détresse, et c'est dans ces moments qu'il a appris à remettre son sort à Dieu. Vous pouvez faire de même aujourd'hui.",
          trahison: "David écrit ces mots après avoir été trahi par un proche. Il comprend votre douleur et vous montre le chemin : remettre la situation à Dieu.",
        },
      },
    ],
  },
  {
    id: "sadness",
    categoryId: "emotional",
    name: "Tristesse et découragement",
    keywords: [
      "triste", "tristesse", "déprimé", "dépression", "découragement",
      "découragé", "abattu", "démoralisé", "mélancolie", "cafard",
      "désespoir", "désespéré", "pleurer", "larmes", "malheureux",
      "sombre", "vide", "sans espoir", "fatigué de la vie",
    ],
    description: "Quand la joie semble avoir disparu",
    pastoralIntros: [
      "La tristesse que vous portez est légitime. Il n'y a pas de honte à souffrir, et Dieu ne vous demande pas de faire semblant d'aller bien. Il est particulièrement proche de ceux dont le cœur est brisé. Voici ce qu'il murmure à votre âme aujourd'hui :",
      "Je perçois dans vos mots une profonde lassitude de l'âme. Sachez que les plus grands héros de la foi — David, Élie, Jérémie — ont connu ces mêmes ténèbres. Vous n'êtes ni faible ni abandonné. Écoutez ce que Dieu dit à ceux qui pleurent :",
      "Quand tout semble sombre et que la joie paraît hors d'atteinte, c'est exactement dans ces moments que la Parole de Dieu brille le plus fort. Elle est une lampe dans l'obscurité que vous traversez :",
    ],
    verses: [
      {
        reference: "Psaume 34:19",
        text: "L'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit dans l'abattement.",
        explanation: "David révèle une vérité paradoxale : la proximité de Dieu est plus grande dans nos moments de brisement. Le cœur brisé n'est pas un obstacle à la présence de Dieu, c'est un aimant qui l'attire.",
        application: "Dans votre tristesse, sachez que vous n'êtes pas seul. Dieu est particulièrement proche de vous en ce moment, même si vous ne le ressentez pas.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Ce verset révèle quelque chose de contre-intuitif : votre cœur brisé n'éloigne pas Dieu — il l'attire. Il est plus près de vous maintenant que jamais.",
          depression: "Dans la dépression, on se sent souvent coupé de tout. Mais Dieu promet qu'il est spécialement proche de ceux qui sont dans l'abattement — y compris vous, en ce moment.",
          desespoir: "Quand le désespoir vous envahit, ce psaume vous rappelle que Dieu ne vous a pas abandonné. Au contraire, il est tout près, prêt à sauver.",
        },
      },
      {
        reference: "Psaume 42:6",
        text: "Pourquoi t'abats-tu, mon âme, et gémis-tu au-dedans de moi ? Espère en Dieu, car je le louerai encore ; il est mon salut et mon Dieu.",
        explanation: "Le psalmiste se parle à lui-même — il interroge sa propre âme. C'est un modèle puissant : au lieu de simplement écouter nos émotions, nous pouvons les questionner et leur rappeler la vérité.",
        application: "Parlez à votre âme aujourd'hui. Rappelez-vous les moments où Dieu a été fidèle dans le passé, et déclarez que vous le louerez encore.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Le psalmiste fait exactement ce que vous faites en ce moment : il exprime sa douleur. Mais il ajoute un mot décisif — « encore ». La joie reviendra.",
          decouragement: "Le découragement vous dit que c'est fini. Mais le psalmiste lui répond : « Je le louerai encore. » Ce « encore » est votre espérance.",
        },
      },
      {
        reference: "Romains 8:28",
        text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
        explanation: "Paul ne dit pas que toutes choses sont bonnes, mais qu'elles concourent — travaillent ensemble — pour un bien que nous ne voyons pas encore.",
        application: "Même si vous ne comprenez pas votre situation actuelle, faites confiance que Dieu est en train de tisser quelque chose de beau à partir de vos épreuves.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Ce verset ne minimise pas votre souffrance. Il promet que Dieu est capable de tirer du bien même des moments les plus sombres de votre vie.",
          echec: "Ce que vous vivez comme un échec, Dieu peut le transformer en tremplin. Il fait concourir toutes choses — même les revers — pour votre bien.",
        },
      },
      {
        reference: "Apocalypse 21:4",
        text: "Il essuiera toute larme de leurs yeux, et la mort ne sera plus, et il n'y aura plus ni deuil, ni cri, ni douleur, car les premières choses ont disparu.",
        explanation: "Cette promesse finale de l'Écriture nous assure que la tristesse n'aura pas le dernier mot. Dieu lui-même, dans un geste d'une tendresse infinie, essuiera personnellement chaque larme.",
        application: "Votre douleur actuelle n'est pas éternelle. Gardez cette promesse comme un ancrage d'espérance : un jour, toute larme sera essuyée.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Vos larmes actuelles ne sont pas le dernier chapitre. Dieu promet un jour où il essuiera lui-même chacune de vos larmes. La douleur est temporaire.",
          deuil: "Dans votre deuil, cette promesse est un baume : un jour, la mort elle-même sera vaincue, et toute larme sera essuyée par la main de Dieu.",
        },
      },
    ],
  },
  {
    id: "fear",
    categoryId: "emotional",
    name: "Peur et crainte",
    keywords: [
      "peur", "crainte", "terrifié", "effrayé", "frayeur", "terreur",
      "paralysé", "paniqué", "menace", "menacé",
      "danger", "insécurité", "vulnérable",
    ],
    description: "Quand la peur paralyse et empêche d'avancer",
    pastoralIntros: [
      "La peur est une émotion que Dieu comprend. Jésus lui-même a demandé à ses disciples de ne pas avoir peur plus de 80 fois dans les Évangiles — preuve qu'il sait que nous en avons besoin. Il ne vous reproche pas votre peur ; il veut vous en libérer :",
      "Ce que vous ressentez n'est pas un signe de faiblesse. Les plus grands serviteurs de Dieu — Moïse, Josué, Élie, David — ont tous connu la peur. Et à chacun, Dieu a dit la même chose. Écoutez ce qu'il vous dit aussi :",
    ],
    verses: [
      {
        reference: "2 Timothée 1:7",
        text: "Car ce n'est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force, d'amour et de sagesse.",
        explanation: "Paul rappelle à son jeune disciple Timothée que la peur ne vient pas de Dieu. L'Esprit que Dieu donne produit trois choses : la force pour agir, l'amour qui chasse la peur, et la sagesse pour discerner.",
        application: "Quand la peur vous saisit, rappelez-vous ces trois dons : la force, l'amour et la sagesse. Ils sont déjà en vous par l'Esprit de Dieu.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "La peur que vous ressentez ne vient pas de Dieu. Il vous a donné un esprit de force, d'amour et de sagesse — trois armes contre ce qui vous effraie.",
          avenir: "Face à un avenir incertain, Dieu ne vous laisse pas démuni : il vous donne la force pour avancer, l'amour pour ne pas vous replier, et la sagesse pour discerner.",
          decision: "Si la peur de vous tromper vous paralyse, rappelez-vous que Dieu vous a donné un esprit de sagesse, pas de timidité. Vous pouvez avancer avec confiance.",
        },
      },
      {
        reference: "Psaume 23:4",
        text: "Quand je marche dans la vallée de l'ombre de la mort, je ne crains aucun mal, car tu es avec moi : ta houlette et ton bâton me rassurent.",
        explanation: "David, ancien berger, sait que les vallées sombres sont des passages obligés, pas des destinations finales. Le berger ne promet pas d'éviter la vallée, mais d'y accompagner ses brebis.",
        application: "Vous traversez peut-être une vallée sombre, mais vous ne vous y installerez pas. Le Berger est avec vous, et il vous conduira de l'autre côté.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Vous traversez peut-être une vallée sombre en ce moment. David vous rappelle que le Berger ne vous laisse jamais seul dans le passage — et que c'est un passage, pas une destination.",
          mort: "Face à l'ombre de la mort, David ne nie pas la réalité — il affirme une présence plus grande. Le Berger est avec vous, même dans la vallée la plus sombre.",
          maladie: "La maladie peut ressembler à une vallée sombre, mais le Berger marche à vos côtés. Sa houlette guide, son bâton protège.",
        },
      },
      {
        reference: "Josué 1:9",
        text: "Ne t'ai-je pas donné cet ordre : Fortifie-toi et prends courage ? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.",
        explanation: "Josué fait face à une tâche impossible : succéder à Moïse et conquérir une terre promise. Dieu ne dit pas « n'aie pas peur parce que ce sera facile », mais « n'aie pas peur parce que je suis avec toi ».",
        application: "Quelle tâche vous semble insurmontable aujourd'hui ? Dieu vous dit la même chose qu'à Josué : « Je suis avec toi dans tout ce que tu entreprendras. »",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Dieu donne à Josué — et à vous — un ordre surprenant : « Fortifie-toi ! » Ce n'est pas une suggestion, c'est un commandement accompagné d'une promesse : « Je suis avec toi. »",
          travail: "Devant un défi professionnel qui vous effraie, Dieu vous dit ce qu'il a dit à Josué : « Je suis avec toi dans tout ce que tu entreprendras. »",
        },
      },
      {
        reference: "Psaume 27:1",
        text: "L'Éternel est ma lumière et mon salut : de qui aurais-je crainte ? L'Éternel est le soutien de ma vie : de qui aurais-je peur ?",
        explanation: "David pose des questions rhétoriques dont la réponse est évidente : personne. Si Dieu est lumière, salut et soutien, alors aucune menace ne peut prévaloir.",
        application: "Nommez ce qui vous fait peur, puis posez-vous la question de David : « Si Dieu est pour moi, de qui aurais-je peur ? »",
        relevanceScore: 8,
        connectionTemplates: {
          default: "David vous invite à poser la question qui change tout : si Dieu est votre lumière dans l'obscurité, votre salut dans le danger et votre soutien dans la faiblesse — de qui auriez-vous peur ?",
        },
      },
    ],
  },
  {
    id: "anger",
    categoryId: "emotional",
    name: "Colère et frustration",
    keywords: [
      "colère", "en colère", "furieux", "frustré", "frustration",
      "irrité", "agacé", "énervement", "énervé", "rage", "révolte",
      "injustice", "injuste", "indigné", "amer", "amertume", "rancœur",
    ],
    description: "Quand la colère monte et devient difficile à maîtriser",
    pastoralIntros: [
      "La colère que vous ressentez n'est pas nécessairement mauvaise — même Jésus s'est mis en colère devant l'injustice au temple. Mais la colère non maîtrisée peut devenir destructrice. La Parole de Dieu offre une sagesse remarquable pour transformer cette énergie :",
      "Je comprends votre frustration. Quand quelque chose d'injuste ou de blessant se produit, la colère est une réaction naturelle. La question n'est pas « devrais-je ressentir cela ? » mais « que vais-je en faire ? » Voici ce que Dieu vous conseille :",
    ],
    verses: [
      {
        reference: "Jacques 1:19-20",
        text: "Sachez-le, mes frères bien-aimés. Ainsi, que tout homme soit prompt à écouter, lent à parler, lent à se mettre en colère ; car la colère de l'homme n'accomplit pas la justice de Dieu.",
        explanation: "Jacques propose un ordre de priorité révolutionnaire : écouter d'abord, parler ensuite, se mettre en colère en dernier. La colère humaine, même justifiée, ne produit jamais la justice que Dieu désire.",
        application: "Avant de réagir sous le coup de la colère, pratiquez la règle de Jacques : écoutez d'abord, attendez avant de parler, et questionnez votre colère.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Jacques vous propose un antidote pratique à la colère : ralentir. Écouter d'abord, parler ensuite, et laisser la colère arriver en dernier — si elle est encore nécessaire.",
          injustice: "Face à l'injustice, votre colère est compréhensible. Mais Jacques vous rappelle que la colère humaine, même légitime, ne produit pas la justice que Dieu désire. Il y a un meilleur chemin.",
        },
      },
      {
        reference: "Éphésiens 4:26-27",
        text: "Si vous vous mettez en colère, ne péchez point ; que le soleil ne se couche pas sur votre colère, et ne donnez pas accès au diable.",
        explanation: "Paul reconnaît que la colère est légitime — il ne dit pas « ne vous mettez jamais en colère ». Mais il pose deux garde-fous : ne laissez pas la colère vous conduire au péché, et réglez-la rapidement.",
        application: "Y a-t-il une colère que vous portez depuis trop longtemps ? Le soleil s'est couché dessus depuis des jours, des semaines ? C'est le moment de la traiter.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Paul ne vous interdit pas la colère — il vous donne un délai. Ne laissez pas le soleil se coucher sur ce que vous ressentez. La colère qui dure devient toxique.",
          amertume: "L'amertume que vous décrivez est souvent une colère ancienne sur laquelle le soleil s'est couché trop de fois. Il est temps de la libérer.",
          rancœur: "La rancœur est une colère qui a pris racine. Paul vous invite à l'arracher avant qu'elle ne s'installe davantage.",
        },
      },
      {
        reference: "Proverbes 15:1",
        text: "Une réponse douce calme la fureur, mais une parole dure excite la colère.",
        explanation: "Ce proverbe de Salomon est d'une sagesse pratique remarquable. Dans un conflit, la douceur désarme. Une réponse calme peut désamorcer une situation explosive.",
        application: "La prochaine fois que quelqu'un vous provoque, essayez la réponse douce. Pas la faiblesse, mais la maîtrise de soi qui choisit de ne pas escalader le conflit.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Ce proverbe vous donne une arme inattendue contre la colère : la douceur. Ce n'est pas de la faiblesse — c'est la force de celui qui refuse de laisser la colère dicter ses mots.",
        },
      },
    ],
  },
  {
    id: "jealousy",
    categoryId: "emotional",
    name: "Jalousie et envie",
    keywords: [
      "jalousie", "jaloux", "jalouse", "envie", "envieux", "envieuse",
      "comparaison", "comparer", "convoitise", "convoiter",
      "rivalité", "rival", "ressentiment",
    ],
    description: "Quand la jalousie ou l'envie empoisonne le cœur",
    pastoralIntros: [
      "La jalousie est un sentiment que nous préférons souvent cacher, car il nous fait honte. Mais sachez que Dieu ne vous juge pas pour ce que vous ressentez — il veut vous libérer de ce poison intérieur. Sa Parole a des réponses précieuses pour vous :",
      "L'envie peut ronger le cœur silencieusement. Si vous luttez avec ces sentiments, c'est le signe d'une honnêteté courageuse. Dieu voit votre cœur et veut y déposer la paix à la place de cette tourmente :",
      "Se comparer aux autres est un piège dans lequel nous tombons tous. Dieu ne vous compare jamais à personne d'autre — pour lui, vous êtes unique et précieux. Voici ce qu'il veut vous rappeler aujourd'hui :",
    ],
    verses: [
      {
        reference: "Proverbes 14:30",
        text: "Un cœur calme est la vie du corps, mais l'envie est la carie des os.",
        explanation: "Salomon utilise une métaphore médicale puissante : l'envie est comparée à une maladie qui ronge de l'intérieur, jusqu'aux os. À l'inverse, un cœur apaisé — libéré de la comparaison — est source de vie et de santé. Ce proverbe nous rappelle que la jalousie nous fait plus de mal qu'à celui que nous envions.",
        application: "Identifiez ce que vous enviez chez l'autre. Puis demandez-vous : est-ce que Dieu me destine au même chemin ? Remerciez-le pour ce qu'il vous a donné de unique.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "La jalousie ronge de l'intérieur, comme une maladie des os. Ce proverbe vous invite à chercher la paix du cœur plutôt que ce que les autres possèdent.",
          "comparaison|comparer": "La comparaison vous fait du mal. Salomon le savait : l'envie détruit, mais un cœur en paix donne la vie.",
          "ressentiment": "Votre ressentiment est compréhensible, mais l'envie l'amplifie. Ce verset vous rappelle que la paix intérieure est le vrai trésor.",
        },
      },
      {
        reference: "Jacques 3:14-16",
        text: "Mais si vous avez dans votre cœur un zèle amer et un esprit de dispute, ne vous glorifiez pas et ne mentez pas contre la vérité. Cette sagesse n'est point celle qui vient d'en haut ; elle est terrestre, charnelle, diabolique. Car là où il y a un zèle amer et un esprit de dispute, il y a du désordre et toutes sortes de mauvaises actions.",
        explanation: "Jacques distingue deux types de sagesse : celle qui vient de Dieu apporte paix et douceur, tandis que l'envie amère produit du désordre. Le « zèle amer » décrit cette jalousie qui consume et pousse à la rivalité. Jacques ne condamne pas la personne, mais l'invite à reconnaître la source de ces sentiments pour s'en libérer.",
        application: "Examinez honnêtement si votre jalousie influence vos paroles ou vos actions envers la personne que vous enviez. Demandez à Dieu la sagesse d'en haut, qui est « pure, puis pacifique » (v.17).",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Jacques met des mots sur ce que vous ressentez : un « zèle amer ». Il ne vous condamne pas — il vous montre le chemin vers une sagesse qui apporte la paix au lieu du désordre.",
          "rivalité|rival": "La rivalité que vous décrivez est exactement ce que Jacques appelle « un esprit de dispute ». Il vous montre une autre voie : la sagesse d'en haut.",
        },
      },
      {
        reference: "Galates 5:26",
        text: "Ne cherchons pas une vaine gloire, en nous provoquant les uns les autres, en nous portant envie les uns aux autres.",
        explanation: "Paul place l'envie dans le contexte de la vie communautaire. Il montre que la jalousie crée un cercle vicieux : elle provoque les autres et nourrit la rivalité. L'antidote, selon le contexte (v.22-25), est de « marcher selon l'Esprit », qui produit amour, joie, paix — l'opposé exact de l'envie.",
        application: "Au lieu de vous concentrer sur ce que l'autre a et que vous n'avez pas, demandez à Dieu de remplir votre cœur des fruits de l'Esprit : amour, joie, paix.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Paul vous rappelle que l'envie est un piège qui nous isole. Mais les fruits de l'Esprit — amour, joie, paix — sont l'antidote que Dieu vous offre.",
          "comparaison|comparer": "Se comparer est naturel, mais Paul vous invite à sortir de ce cycle en marchant selon l'Esprit, qui produit la joie intérieure.",
        },
      },
      {
        reference: "1 Corinthiens 13:4",
        text: "La charité est patiente, elle est pleine de bonté ; la charité n'est point envieuse ; la charité ne se vante point, elle ne s'enfle point d'orgueil.",
        explanation: "Dans ce célèbre passage sur l'amour, Paul donne une définition surprenante : l'amour véritable ne connaît pas l'envie. Cela signifie que lorsque nous aimons véritablement quelqu'un, nous nous réjouissons de son bonheur au lieu de le jalouser. L'amour de Dieu en nous transforme notre regard sur les autres.",
        application: "Essayez cet exercice : priez sincèrement pour la bénédiction de la personne que vous enviez. Cela peut sembler impossible, mais c'est le chemin de la libération.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "L'amour véritable est l'antidote de la jalousie. Ce verset vous invite à demander à Dieu de transformer votre regard — et de vous réjouir pour les autres plutôt que de les envier.",
          "couple|relation": "Dans les relations, la jalousie détruit ce que l'amour construit. Paul vous montre à quoi ressemble un amour libre de l'envie.",
        },
      },
    ],
  },
  {
    id: "loneliness",
    categoryId: "emotional",
    name: "Solitude et isolement",
    keywords: [
      "seul", "solitude", "isolé", "isolement", "abandonné", "abandon",
      "rejeté", "rejet", "exclu", "exclusion", "incompris", "personne",
      "sans amis",
    ],
    description: "Quand on se sent seul et coupé des autres",
    pastoralIntros: [
      "La solitude est une douleur silencieuse qui peut être plus lourde que n'importe quelle épreuve visible. Si vous vous sentez seul en ce moment, je veux que vous entendiez ceci : Dieu vous voit, il connaît votre nom, et il ne vous a pas oublié. Voici ses paroles pour vous :",
      "Se sentir isolé dans un monde connecté est l'un des paradoxes les plus douloureux de notre époque. Mais il y a Quelqu'un qui ne vous quittera jamais, qui ne vous oubliera jamais. Écoutez sa promesse :",
    ],
    verses: [
      {
        reference: "Deutéronome 31:6",
        text: "Fortifiez-vous et ayez du courage ! Ne craignez point et ne soyez point effrayés devant eux ; car l'Éternel, ton Dieu, marchera lui-même avec toi, il ne te délaissera point, il ne t'abandonnera point.",
        explanation: "La double négation « ne te délaissera point, ne t'abandonnera point » est une promesse absolue. Même quand les humains nous abandonnent, Dieu reste.",
        application: "Même si vous vous sentez abandonné par les gens, Dieu fait une promesse qu'aucun humain ne peut faire : il ne vous quittera jamais.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "La double promesse de ce verset est absolue : « il ne te délaissera point, il ne t'abandonnera point. » Quand les humains partent, Dieu reste.",
          abandon: "Vous vous sentez abandonné, et cette douleur est réelle. Mais Dieu fait ici une promesse qu'aucun humain ne peut tenir : il ne vous abandonnera jamais. Jamais.",
          rejet: "Le rejet des hommes ne change rien à l'engagement de Dieu envers vous. Sa promesse est claire et sans condition : il marchera avec vous.",
        },
      },
      {
        reference: "Psaume 68:7",
        text: "Dieu donne une famille à ceux qui sont seuls, il délivre les captifs et les rend heureux.",
        explanation: "Ce verset révèle le cœur de Dieu pour ceux qui sont isolés : il veut les placer dans une communauté. La solitude n'est pas la destination finale que Dieu a prévue pour vous.",
        application: "Cherchez une communauté de foi — une église, un groupe de prière. Dieu utilise souvent les autres pour répondre à notre solitude.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Dieu ne vous a pas destiné à la solitude. Ce verset promet qu'il donne une famille à ceux qui sont seuls. Il prépare des liens pour vous.",
          exclusion: "Vous vous sentez exclu, mais Dieu prépare un lieu d'appartenance pour vous. Il donne une famille à ceux qui n'en ont pas.",
        },
      },
      {
        reference: "Matthieu 28:20",
        text: "Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde.",
        explanation: "Ce sont les dernières paroles de Jésus. « Tous les jours » signifie sans exception : les bons jours, les mauvais jours, les jours de solitude.",
        application: "Chaque matin, rappelez-vous cette promesse : Jésus est avec vous aujourd'hui. Pas hier, pas demain, mais aujourd'hui, maintenant.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Les dernières paroles de Jésus sur terre sont une promesse de présence permanente. « Tous les jours » — y compris celui-ci, y compris maintenant.",
        },
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CATÉGORIE : RELATIONS
  // ──────────────────────────────────────────────
  {
    id: "conflict",
    categoryId: "relational",
    name: "Conflits relationnels",
    keywords: [
      "conflit", "dispute", "querelle", "désaccord", "tension",
      "relation difficile", "problème relationnel", "mésentente",
      "brouille", "fâché", "rupture", "séparation",
      "confrontation", "relation toxique",
    ],
    description: "Quand les relations deviennent source de souffrance",
    pastoralIntros: [
      "Les relations brisées sont parmi les plus grandes sources de souffrance. Quand quelqu'un que nous aimons devient une source de douleur, le cœur est déchiré entre l'amour et la blessure. Dieu connaît cette douleur, et sa Parole offre un chemin de sagesse :",
      "Les conflits sont inévitables entre êtres humains imparfaits. Ce qui compte, ce n'est pas d'éviter tout conflit, mais de savoir comment le traverser avec grâce. Voici la sagesse de Dieu pour votre situation :",
    ],
    verses: [
      {
        reference: "Romains 12:18",
        text: "S'il est possible, autant que cela dépend de vous, soyez en paix avec tous les hommes.",
        explanation: "Paul est réaliste : la paix n'est pas toujours possible, et vous ne pouvez pas contrôler les autres. Mais vous avez la responsabilité de faire votre part.",
        application: "Demandez-vous : ai-je fait tout ce qui dépend de moi pour être en paix avec cette personne ? Si oui, déposez le reste entre les mains de Dieu.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Paul vous libère d'une pression impossible : vous n'êtes pas responsable de la réaction de l'autre. Votre responsabilité est de faire votre part pour la paix — le reste appartient à Dieu.",
          famille: "Les conflits familiaux sont les plus douloureux. Paul vous rappelle que vous ne pouvez faire que votre part — et que c'est suffisant aux yeux de Dieu.",
          couple: "Dans les tensions de couple, ce verset vous invite à vous concentrer sur ce qui dépend de vous, sans porter le poids de ce qui dépend de l'autre.",
        },
      },
      {
        reference: "Éphésiens 4:32",
        text: "Soyez bons les uns envers les autres, compatissants, vous pardonnant réciproquement, comme Dieu vous a pardonné en Christ.",
        explanation: "Le modèle du pardon chrétien n'est pas un effort surhumain, mais une réponse à un pardon déjà reçu. Parce que Dieu m'a pardonné, je peux pardonner.",
        application: "Pensez à l'immensité du pardon que Dieu vous a accordé. Laissez cette gratitude devenir le moteur de votre capacité à pardonner.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Paul vous donne le secret du pardon : il ne vient pas de votre force, mais de la gratitude pour le pardon que vous avez vous-même reçu de Dieu.",
          pardon: "Vous cherchez la force de pardonner. Ce verset vous la donne : pardonnez comme Dieu vous a pardonné. Non pas par votre propre force, mais par sa grâce.",
        },
      },
      {
        reference: "Matthieu 18:15",
        text: "Si ton frère a péché, va et reprends-le entre toi et lui seul. S'il t'écoute, tu as gagné ton frère.",
        explanation: "Jésus donne un protocole clair : parler directement à la personne concernée, en privé. Le but n'est pas de gagner un argument, mais de « gagner » la relation.",
        application: "Avez-vous un conflit non résolu ? Au lieu d'en parler à tout le monde sauf à la personne concernée, allez la voir directement, avec humilité.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Jésus vous donne un chemin concret pour résoudre ce conflit : parler directement, en privé, avec le but non pas de vaincre mais de restaurer la relation.",
        },
      },
    ],
  },
  {
    id: "forgiveness",
    categoryId: "relational",
    name: "Pardon et réconciliation",
    keywords: [
      "pardon", "pardonner", "rancune", "rancœur", "réconciliation",
      "blessure", "blessé", "trahison", "trahi", "offense", "offensé",
      "vengeance", "ressentiment", "lâcher prise", "guérison intérieure",
    ],
    description: "Quand il faut trouver la force de pardonner",
    pastoralIntros: [
      "Le pardon est peut-être la chose la plus difficile que Dieu nous demande. Ce n'est pas un sentiment — c'est une décision, souvent douloureuse, de libérer l'autre de sa dette envers nous. Mais ce faisant, c'est nous-même que nous libérons. Voici ce que Dieu dit sur le pardon :",
      "Si quelqu'un vous a profondément blessé, il est normal de lutter avec le pardon. Dieu ne vous demande pas de nier votre douleur ni de faire comme si rien ne s'était passé. Il vous invite à un chemin de libération, pas de minimisation. Écoutez sa sagesse :",
    ],
    verses: [
      {
        reference: "Colossiens 3:13",
        text: "Supportez-vous les uns les autres, et, si l'un a sujet de se plaindre de l'autre, pardonnez-vous réciproquement. De même que Christ vous a pardonné, pardonnez-vous aussi.",
        explanation: "Paul reconnaît que vivre ensemble implique des frictions. Le pardon n'est pas ponctuel mais un mode de vie. Et le modèle est le Christ, qui a pardonné le pire.",
        application: "Le pardon n'est pas un sentiment, c'est une décision. Vous pouvez choisir de pardonner aujourd'hui, même si les émotions suivront plus tard.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Le pardon que Dieu vous demande n'est pas sans modèle : c'est le même pardon que Christ vous a accordé. Vous n'êtes pas seul dans cet acte — sa grâce vous y accompagne.",
          trahison: "La trahison que vous avez subie est réelle. Mais le refus de pardonner vous maintient prisonnier de celui qui vous a blessé. Le pardon est votre clé de libération.",
          amertume: "L'amertume que vous portez est compréhensible, mais elle vous consume plus que la personne qui vous a offensé. Paul vous montre le chemin de la liberté : pardonner comme Christ a pardonné.",
        },
      },
      {
        reference: "Matthieu 6:14-15",
        text: "Si vous pardonnez aux hommes leurs offenses, votre Père céleste vous pardonnera aussi ; mais si vous ne pardonnez pas aux hommes, votre Père ne vous pardonnera pas non plus vos offenses.",
        explanation: "Jésus lie notre capacité à recevoir le pardon de Dieu à notre disposition à pardonner. Un cœur fermé au pardon ne peut pas recevoir le pardon.",
        application: "Y a-t-il quelqu'un que vous refusez de pardonner ? Commencez par une prière honnête : « Dieu, aide-moi à vouloir pardonner. »",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Jésus révèle un lien profond : notre capacité à recevoir le pardon de Dieu est liée à notre volonté de pardonner aux autres. Pardonner ouvre la porte dans les deux sens.",
          culpabilite: "Vous portez peut-être à la fois la blessure d'une offense et le poids de votre propre culpabilité. Ce verset vous montre que pardonner et être pardonné sont intimement liés.",
        },
      },
      {
        reference: "Luc 6:37",
        text: "Ne jugez point, et vous ne serez point jugés ; ne condamnez point, et vous ne serez point condamnés ; absolvez, et vous serez absous.",
        explanation: "Jésus établit un principe de réciprocité : absoudre — libérer quelqu'un de sa dette — nous libère nous aussi.",
        application: "Le pardon vous libère autant que la personne pardonnée. En refusant de pardonner, c'est vous qui restez enchaîné.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Jésus vous révèle un secret : le pardon libère celui qui pardonne autant que celui qui est pardonné. En refusant de pardonner, c'est vous qui restez prisonnier.",
        },
      },
    ],
  },
  {
    id: "marriage",
    categoryId: "relational",
    name: "Difficultés dans le couple",
    keywords: [
      "mariage", "couple", "mari", "femme", "époux", "épouse",
      "conjoint", "conjugal", "divorce", "infidélité",
      "communication", "relation amoureuse", "crise conjugale",
    ],
    description: "Quand le couple traverse des turbulences",
    pastoralIntros: [
      "Le couple est l'une des relations les plus belles et les plus exigeantes que Dieu ait créées. Quand cette relation souffre, toute la vie en est affectée. Dieu n'est pas indifférent à ce que vous traversez — il a beaucoup à dire sur l'amour conjugal :",
      "Les difficultés dans le couple sont parmi les épreuves les plus intimes. Elles touchent au cœur de notre besoin d'être aimé et compris. La Parole de Dieu offre une sagesse profonde pour les moments où l'amour est mis à l'épreuve :",
    ],
    verses: [
      {
        reference: "1 Corinthiens 13:4-7",
        text: "L'amour est patient, il est plein de bonté ; l'amour n'est point envieux ; l'amour ne se vante point, il ne s'enfle point d'orgueil, il ne fait rien de malhonnête, il ne cherche point son intérêt, il ne s'irrite point, il ne soupçonne point le mal, il ne se réjouit point de l'injustice, mais il se réjouit de la vérité ; il excuse tout, il croit tout, il espère tout, il supporte tout.",
        explanation: "Paul définit l'amour non comme un sentiment mais comme une série d'actions concrètes. Chaque attribut est un verbe, un choix quotidien.",
        application: "Relisez cette liste en pensant à votre conjoint. Quel attribut vous manque le plus en ce moment ? Concentrez-vous sur celui-là cette semaine.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Ce passage redéfinit l'amour non comme ce que vous ressentez, mais comme ce que vous choisissez de faire. Chaque verbe est un acte de volonté qui peut transformer votre relation.",
          divorce: "Avant de prendre une décision définitive, relisez cette définition de l'amour. Ce n'est pas un sentiment qui s'éteint — c'est un choix qui se renouvelle chaque jour.",
          communication: "La communication dans le couple commence par cet amour qui « ne cherche point son intérêt » et qui « ne s'irrite point ». C'est le terreau d'un dialogue vrai.",
        },
      },
      {
        reference: "Éphésiens 5:25",
        text: "Maris, aimez vos femmes, comme Christ a aimé l'Église, et s'est livré lui-même pour elle.",
        explanation: "Le modèle d'amour conjugal que Paul propose est radical : un amour sacrificiel, qui donne au lieu de prendre.",
        application: "L'amour vrai se mesure à ce qu'il donne, pas à ce qu'il reçoit. Que pouvez-vous donner à votre conjoint aujourd'hui, sans rien attendre en retour ?",
        relevanceScore: 9,
        connectionTemplates: {
          default: "L'amour que Dieu attend dans le couple n'est pas transactionnel — c'est un amour qui donne, comme Christ a donné. C'est contre-culturel, mais c'est transformateur.",
        },
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CATÉGORIE : VIE SPIRITUELLE
  // ──────────────────────────────────────────────
  {
    id: "doubt",
    categoryId: "spiritual",
    name: "Doute et questionnement de foi",
    keywords: [
      "doute", "douter", "questionner", "foi", "croire", "incrédulité",
      "sceptique", "pourquoi dieu", "dieu existe", "silence de dieu",
      "où est dieu", "éloigné de dieu", "perdu la foi", "crise de foi",
    ],
    description: "Quand la foi vacille et les questions se multiplient",
    pastoralIntros: [
      "Le doute n'est pas l'opposé de la foi — c'est souvent le signe d'une foi qui grandit et qui cherche à comprendre. Les plus grands théologiens ont traversé des déserts spirituels. Dieu n'est pas offensé par vos questions ; il vous invite à les poser :",
      "Si vous sentez Dieu lointain ou silencieux, sachez que vous n'êtes pas le premier à vivre cela. David, Job, Élie, et même Mère Teresa ont connu des périodes de doute profond. Votre honnêteté est un acte de courage, pas de faiblesse :",
    ],
    verses: [
      {
        reference: "Marc 9:24",
        text: "Aussitôt le père de l'enfant s'écria : Je crois ! viens au secours de mon incrédulité !",
        explanation: "Cette prière d'un père désespéré est l'une des plus honnêtes de la Bible. Il reconnaît que la foi et le doute coexistent en lui.",
        application: "Vous n'avez pas besoin d'une foi parfaite pour vous approcher de Dieu. Venez avec votre doute et dites honnêtement : « Je crois, aide-moi dans mes doutes. »",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Ce père exprime exactement ce que vous vivez peut-être : la foi et le doute qui coexistent. Sa prière est un modèle d'honnêteté que Dieu honore.",
          "crise de foi": "Votre crise de foi n'est pas un échec — c'est une invitation à une relation plus profonde avec Dieu. Ce père a crié dans son doute, et Jésus a répondu.",
        },
      },
      {
        reference: "Jacques 1:5",
        text: "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée.",
        explanation: "Jacques promet que Dieu ne reproche pas nos questions. Il donne la sagesse généreusement, sans condition.",
        application: "Posez vos questions à Dieu sans honte. Il n'est pas offensé par vos doutes. Demandez-lui la sagesse et attendez-vous à la recevoir.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Dieu ne vous reproche pas vos questions. Au contraire, il promet de donner la sagesse « simplement » — généreusement, sans jugement — à quiconque la demande.",
          confusion: "Dans votre confusion, Dieu ne vous regarde pas avec impatience. Il vous offre sa sagesse librement, sans reproche, si vous la lui demandez.",
        },
      },
      {
        reference: "Hébreux 11:1",
        text: "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas.",
        explanation: "La foi n'est pas l'absence de doute, c'est la confiance malgré le doute. Les héros de la foi ont tous agi sans voir le résultat final.",
        application: "La foi, c'est faire un pas dans la direction de Dieu même quand vous ne voyez pas tout le chemin. Quel petit pas pouvez-vous faire aujourd'hui ?",
        relevanceScore: 8,
        connectionTemplates: {
          default: "La foi que décrit ce verset n'est pas une certitude intellectuelle — c'est une confiance qui avance même dans le brouillard. Un pas à la fois suffit.",
        },
      },
    ],
  },
  {
    id: "temptation",
    categoryId: "spiritual",
    name: "Tentation et lutte contre le péché",
    keywords: [
      "tentation", "tenté", "péché", "pécher", "addiction", "dépendance",
      "lutte", "combat spirituel", "chute", "rechute", "faiblesse",
      "résister", "convoitise", "impureté",
    ],
    description: "Quand la tentation semble plus forte que la volonté",
    pastoralIntros: [
      "La lutte que vous décrivez montre que votre conscience est vivante — quelqu'un qui ne lutte pas ne sent pas le combat. Votre combat est le signe que l'Esprit de Dieu est à l'œuvre en vous. Vous n'êtes pas condamné ; vous êtes en transformation. Voici ce que Dieu dit aux combattants :",
      "Il n'y a pas de honte à admettre que vous luttez. Jésus lui-même a été tenté dans le désert. La tentation n'est pas un péché — c'est ce qu'on en fait qui compte. Et Dieu a promis de toujours fournir une issue. Écoutez sa promesse :",
    ],
    verses: [
      {
        reference: "1 Corinthiens 10:13",
        text: "Aucune tentation ne vous est survenue qui n'ait été humaine, et Dieu, qui est fidèle, ne permettra pas que vous soyez tentés au-delà de vos forces ; mais avec la tentation il préparera aussi le moyen d'en sortir, afin que vous puissiez la supporter.",
        explanation: "Trois vérités : votre tentation n'est pas unique ; Dieu met une limite ; Dieu prépare toujours une issue.",
        application: "La prochaine fois que la tentation semble insurmontable, cherchez « le moyen d'en sortir » que Dieu a préparé.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Ce verset vous promet trois choses : vous n'êtes pas seul dans cette lutte, elle ne dépassera pas vos forces, et Dieu a déjà préparé une porte de sortie. La victoire est possible.",
          addiction: "L'addiction peut sembler invincible, mais Dieu promet que la tentation ne dépassera jamais vos forces et qu'il fournit toujours un moyen d'en sortir. Cherchez cette porte de sortie.",
          rechute: "Une rechute n'est pas une condamnation définitive. Dieu renouvelle sa promesse à chaque combat : il prépare un nouveau moyen d'en sortir, à chaque fois.",
        },
      },
      {
        reference: "Jacques 4:7",
        text: "Soumettez-vous donc à Dieu ; résistez au diable, et il fuira loin de vous.",
        explanation: "L'ordre est important : d'abord se soumettre à Dieu, puis résister. On ne peut pas résister efficacement sans s'être d'abord soumis.",
        application: "Commencez par la soumission à Dieu avant de résister à la tentation. Priez d'abord, puis résistez avec la force que Dieu vous donne.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Jacques vous révèle l'ordre de la victoire : d'abord se tourner vers Dieu (se soumettre), puis résister. Et la promesse est claire — le tentateur fuira.",
        },
      },
      {
        reference: "Psaume 119:11",
        text: "Je serre ta parole dans mon cœur, afin de ne pas pécher contre toi.",
        explanation: "Le psalmiste révèle une arme puissante contre la tentation : la Parole de Dieu mémorisée. Jésus a utilisé cette stratégie lors de ses tentations au désert.",
        application: "Mémorisez un verset lié à votre lutte spécifique. Quand la tentation survient, récitez-le à voix haute.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Le psalmiste vous donne une stratégie concrète : remplir votre cœur de la Parole de Dieu. Ce qui remplit le cœur finit par gouverner les actions.",
        },
      },
    ],
  },
  {
    id: "purpose",
    categoryId: "spiritual",
    name: "Recherche de sens et d'identité",
    keywords: [
      "sens", "but", "identité", "qui suis-je", "pourquoi",
      "mission", "vocation", "appel", "destinée", "direction",
      "perdu", "égaré", "confusion", "sens de la vie",
      "raison de vivre", "inutile", "insignifiant",
    ],
    description: "Quand on cherche sa place et le sens de sa vie",
    pastoralIntros: [
      "La recherche de sens est l'un des questionnements les plus nobles de l'être humain. Si vous vous demandez pourquoi vous êtes là, c'est que votre âme aspire à quelque chose de plus grand que ce que le monde visible peut offrir. Dieu a une réponse pour vous :",
      "Se sentir perdu ou sans direction est déstabilisant, mais c'est souvent le prélude à une découverte profonde. Dieu ne vous a pas créé par accident, et votre vie a un dessein qu'il désire vous révéler :",
    ],
    verses: [
      {
        reference: "Jérémie 29:11",
        text: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
        explanation: "Dieu prononce ces mots à un peuple en exil, déraciné et désorienté. Même dans leur situation de déplacement, Dieu avait un plan.",
        application: "Même si vous ne voyez pas le plan, il existe. Dieu ne vous a pas oublié. Il a des projets de paix pour votre avenir.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Dieu vous dit ici quelque chose de personnel : « Je connais les projets que j'ai formés sur vous. » Pas sur l'humanité en général — sur vous, spécifiquement. Des projets de paix et d'espérance.",
          avenir: "L'avenir qui vous inquiète, Dieu le connaît déjà. Et il vous dit que ses projets pour vous sont des projets de paix, pas de malheur.",
          echec: "Ce que vous percevez comme un échec n'annule pas les projets de Dieu pour vous. Il avait des plans pour Israël même en exil — il en a pour vous aussi.",
        },
      },
      {
        reference: "Éphésiens 2:10",
        text: "Car nous sommes son ouvrage, ayant été créés en Jésus-Christ pour de bonnes œuvres, que Dieu a préparées d'avance, afin que nous les pratiquions.",
        explanation: "Le mot grec pour « ouvrage » est poiema, d'où vient « poème ». Vous êtes le poème de Dieu, son œuvre d'art. Et il a préparé des choses spécifiques pour vous.",
        application: "Vous n'êtes pas un accident. Vous êtes l'œuvre d'art de Dieu, créé avec un but précis.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Vous êtes le poème de Dieu — son œuvre d'art. Et il a préparé d'avance des « bonnes œuvres » spécifiquement pour vous. Votre vie a un but que lui seul connaît pleinement.",
          "inutile|insignifiant": "Vous vous sentez peut-être inutile ou insignifiant. Mais Dieu dit que vous êtes son œuvre d'art, créé pour des bonnes œuvres qu'il a préparées spécialement pour vous.",
        },
      },
      {
        reference: "Psaume 139:13-14",
        text: "C'est toi qui as formé mes reins, qui m'as tissé dans le sein de ma mère. Je te loue de ce que je suis une créature si merveilleuse. Tes œuvres sont admirables, et mon âme le reconnaît bien.",
        explanation: "David contemple la création intime de Dieu : chaque être humain est « tissé » — un travail artisanal, pas une production en série.",
        application: "Vous n'êtes pas un accident. Vous avez été intentionnellement conçu par Dieu. Votre existence est une preuve de son amour.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "David vous rappelle que vous avez été « tissé » par Dieu — un acte artisanal, personnel, intentionnel. Vous êtes une créature merveilleuse, unique par design divin.",
        },
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CATÉGORIE : VIE PRATIQUE
  // ──────────────────────────────────────────────
  {
    id: "finances",
    categoryId: "practical",
    name: "Difficultés financières",
    keywords: [
      "argent", "finances", "financier", "dette", "dettes", "pauvreté",
      "pauvre", "fauché", "manque", "besoin", "chômage", "chômeur",
      "factures", "loyer", "budget", "payer", "économies", "salaire",
      "endettement",
    ],
    description: "Quand les finances deviennent une source de stress",
    pastoralIntros: [
      "Le stress financier touche à notre sentiment de sécurité le plus fondamental. Quand les factures s'accumulent et que les ressources manquent, l'anxiété peut devenir écrasante. Mais Dieu n'est pas indifférent à vos besoins matériels — il promet d'y pourvoir :",
      "Les difficultés financières affectent chaque aspect de la vie : le sommeil, les relations, la confiance en l'avenir. Si c'est ce que vous traversez, sachez que le Dieu de la Bible se présente comme un pourvoyeur fidèle. Voici ses promesses :",
    ],
    verses: [
      {
        reference: "Philippiens 4:19",
        text: "Et mon Dieu pourvoira à tous vos besoins selon sa richesse, avec gloire, en Jésus-Christ.",
        explanation: "La mesure de la provision de Dieu n'est pas notre mérite, mais « sa richesse » — qui est illimitée. Dieu promet de pourvoir aux besoins, pas nécessairement aux envies.",
        application: "Distinguez vos besoins réels de vos désirs. Pour vos vrais besoins, faites confiance à la promesse de Dieu.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "La promesse de Dieu est mesurée « selon sa richesse » — pas selon votre situation actuelle. Ses ressources sont illimitées, et il s'engage à pourvoir à vos besoins.",
          dette: "Vos dettes sont peut-être réelles et pesantes, mais la richesse de Dieu est infiniment plus grande. Il promet de pourvoir à vos besoins — faites-lui confiance pour le chemin.",
          chomage: "Le chômage peut vous faire sentir sans ressource, mais votre pourvoyeur ultime n'est pas un employeur — c'est Dieu, qui pourvoit selon sa richesse infinie.",
        },
      },
      {
        reference: "Matthieu 6:31-33",
        text: "Ne vous inquiétez donc point, et ne dites pas : Que mangerons-nous ? que boirons-nous ? de quoi serons-nous vêtus ? Car toutes ces choses, ce sont les païens qui les recherchent. Votre Père céleste sait que vous en avez besoin. Cherchez premièrement le royaume et la justice de Dieu ; et toutes ces choses vous seront données par-dessus.",
        explanation: "Jésus ne dit pas que les besoins matériels sont sans importance — il dit que Dieu les connaît déjà. La priorité est de chercher Dieu en premier.",
        application: "Dans votre stress financier, veillez à ne pas perdre de vue ce qui compte le plus. Cherchez Dieu en premier, et faites-lui confiance pour le reste.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Jésus ne vous dit pas de ne pas avoir de besoins — il dit que votre Père céleste les connaît déjà. Cherchez-le en premier, et il s'occupera du reste.",
          avenir: "L'incertitude financière de demain est entre les mains de votre Père céleste. Il sait ce dont vous avez besoin avant que vous ne le demandiez.",
        },
      },
      {
        reference: "Proverbes 3:9-10",
        text: "Honore l'Éternel avec tes biens, et avec les prémices de tout ton revenu : alors tes greniers seront remplis d'abondance, et tes cuves regorgeront de moût.",
        explanation: "Salomon enseigne un principe contre-intuitif : la générosité envers Dieu conduit à l'abondance, pas au manque.",
        application: "Même dans la difficulté, pratiquez la générosité. Donner quand on manque est un acte de foi puissant.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Salomon vous enseigne un principe paradoxal : c'est en honorant Dieu avec vos biens — même quand ils sont limités — que l'abondance vient. La générosité est un acte de foi.",
        },
      },
    ],
  },
  {
    id: "decisions",
    categoryId: "practical",
    name: "Prise de décision importante",
    keywords: [
      "décision", "choix", "hésitation", "hésiter", "dilemme",
      "direction", "orientation", "quoi faire", "comment choisir",
      "volonté de dieu", "discernement", "guidance", "guide",
      "chemin", "carrefour", "incertain", "incertitude",
    ],
    description: "Quand une décision importante doit être prise",
    pastoralIntros: [
      "Se trouver à un carrefour de la vie est à la fois intimidant et plein de potentiel. Dieu ne vous laisse pas deviner dans le noir — il promet de vous guider si vous le cherchez. Voici ce qu'il dit à ceux qui cherchent la direction :",
      "L'indécision peut paralyser, surtout quand l'enjeu est important. Mais sachez que Dieu ne joue pas à cache-cache avec sa volonté. Il désire vous guider encore plus que vous ne désirez être guidé :",
    ],
    verses: [
      {
        reference: "Proverbes 3:5-6",
        text: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse ; reconnais-le dans toutes tes voies, et il aplanira tes sentiers.",
        explanation: "Ce proverbe ne dit pas de ne pas réfléchir, mais de ne pas se fier uniquement à sa propre compréhension. « Reconnaître Dieu dans toutes tes voies » signifie l'inclure dans chaque décision.",
        application: "Avant de prendre votre décision, avez-vous « reconnu Dieu dans cette voie » ? Priez, cherchez conseil dans sa Parole, consultez des personnes sages.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Ce verset vous donne la clé de toute bonne décision : ne vous appuyez pas seulement sur votre propre compréhension. Incluez Dieu dans le processus, et il aplanira le chemin.",
          confusion: "Dans votre confusion, ce proverbe est comme un phare : reconnaissez Dieu dans cette décision, et il rendra le chemin clair.",
          avenir: "Face aux choix qui façonneront votre avenir, Dieu vous promet ceci : confiez-vous en lui de tout votre cœur, et il aplanira le chemin devant vous.",
        },
      },
      {
        reference: "Jacques 1:5",
        text: "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée.",
        explanation: "La sagesse pour prendre des décisions est disponible pour tous. Dieu la donne généreusement, sans jugement.",
        application: "Demandez à Dieu la sagesse pour votre décision. Il promet de vous la donner.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Vous manquez de sagesse pour cette décision ? Dieu vous invite à la lui demander directement. Il promet de la donner généreusement et sans reproche.",
          decision: "Face à ce choix, vous n'êtes pas livré à vous-même. Dieu offre sa sagesse librement à quiconque la demande — et il ne reprochera pas votre hésitation.",
        },
      },
      {
        reference: "Psaume 32:8",
        text: "Je t'instruirai et te montrerai la voie que tu dois suivre ; je te conseillerai, j'aurai le regard sur toi.",
        explanation: "Dieu promet trois choses : l'instruction, la direction et le conseil. Et il ajoute « j'aurai le regard sur toi » — une surveillance bienveillante.",
        application: "Dieu ne vous laissera pas vous tromper de chemin si vous le cherchez sincèrement.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Dieu vous fait ici trois promesses personnelles : « Je t'instruirai, je te montrerai le chemin, je te conseillerai. » Vous n'êtes pas seul face à cette décision.",
        },
      },
    ],
  },
  {
    id: "health",
    categoryId: "practical",
    name: "Problèmes de santé",
    keywords: [
      "santé", "maladie", "malade", "souffrance", "douleur",
      "guérison", "médecin", "hôpital", "opération", "chirurgie",
      "diagnostic", "cancer", "maladie chronique", "handicap",
      "fatigue", "épuisement", "burnout",
    ],
    description: "Quand la santé devient un sujet de préoccupation",
    pastoralIntros: [
      "La maladie nous confronte à notre fragilité et peut ébranler notre confiance. Si votre corps souffre, sachez que Dieu ne regarde pas votre épreuve de loin. Il est le Dieu qui guérit, qui console et qui donne la force de traverser. Voici ses paroles pour vous :",
      "Quand la santé vacille, tout le reste semble perdre son importance. Dieu comprend cette réalité. Il n'est pas indifférent à votre souffrance physique — il est appelé « l'Éternel qui te guérit ». Écoutez ce qu'il vous dit :",
    ],
    verses: [
      {
        reference: "Jérémie 17:14",
        text: "Guéris-moi, Éternel, et je serai guéri ; sauve-moi, et je serai sauvé ; car tu es ma gloire.",
        explanation: "Jérémie prie avec une simplicité désarmante. La guérison de Dieu est certaine et complète.",
        application: "Priez cette prière simple et directe. La médecine est un don de Dieu, mais la guérison vient ultimement de lui.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "La prière de Jérémie est d'une simplicité puissante : « Guéris-moi, et je serai guéri. » Il n'y a pas de doute dans sa déclaration. Faites-la vôtre.",
          maladie: "Face à la maladie, cette prière est un ancrage : se tourner vers Celui qui est la source de toute guérison. La médecine est son instrument, mais la guérison est son œuvre.",
        },
      },
      {
        reference: "Psaume 103:2-3",
        text: "Mon âme, bénis l'Éternel, et n'oublie aucun de ses bienfaits ! C'est lui qui pardonne toutes tes iniquités, qui guérit toutes tes maladies.",
        explanation: "David rappelle à son âme les bienfaits de Dieu, dont la guérison. Le mot « toutes » est significatif.",
        application: "Rappelez-vous les fois où Dieu a déjà pourvu pour votre santé. Remerciez-le et faites-lui confiance pour maintenant.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "David vous invite à vous souvenir : Dieu guérit « toutes » les maladies. La mémoire de sa fidélité passée nourrit la confiance pour le présent.",
        },
      },
      {
        reference: "2 Corinthiens 12:9",
        text: "Et il m'a dit : Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse. Je me glorifierai donc bien plus volontiers de mes faiblesses, afin que la puissance de Christ repose sur moi.",
        explanation: "Paul avait une souffrance que Dieu n'a pas retirée. Mais il a reçu quelque chose de plus profond : la grâce suffisante et la puissance dans la faiblesse.",
        application: "Si la guérison ne vient pas comme vous l'espérez, cherchez la grâce suffisante de Dieu. Il peut transformer votre faiblesse en démonstration de sa puissance.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Parfois Dieu guérit, parfois il donne la grâce de traverser. Paul a découvert que la grâce de Dieu est suffisante — même quand la souffrance persiste, sa puissance se manifeste dans notre faiblesse.",
          "maladie chronique": "La maladie chronique peut sembler un combat sans fin. Paul a vécu quelque chose de similaire, et Dieu lui a dit : « Ma grâce te suffit. » Cette grâce est aussi pour vous.",
        },
      },
    ],
  },
  {
    id: "work",
    categoryId: "practical",
    name: "Difficultés au travail",
    keywords: [
      "travail", "emploi", "patron", "collègue", "bureau",
      "carrière", "professionnel", "métier", "entreprise",
      "licenciement", "licencié", "viré", "surcharge", "stress au travail",
      "harcèlement", "motivation", "épuisement professionnel",
    ],
    description: "Quand le travail devient une source de souffrance",
    pastoralIntros: [
      "Le travail occupe une grande partie de notre vie, et quand il devient source de souffrance, l'impact est considérable. Que vous fassiez face à un environnement toxique, à une perte d'emploi ou à l'épuisement, Dieu a une parole pour transformer votre perspective :",
      "Les pressions professionnelles peuvent sembler écrasantes. Dieu comprend la valeur du travail — il en est l'auteur. Mais il ne veut pas que le travail vous détruise. Voici sa sagesse pour votre situation :",
    ],
    verses: [
      {
        reference: "Colossiens 3:23-24",
        text: "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes, sachant que vous recevrez du Seigneur l'héritage pour récompense. Servez Christ, le Seigneur.",
        explanation: "Paul transforme la perspective sur le travail : notre vrai patron est le Seigneur. Cela change tout.",
        application: "Changez de perspective : vous ne travaillez pas pour votre patron mais pour le Seigneur.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Paul transforme votre relation au travail : votre vrai patron est le Seigneur. Un travail ingrat devient un service rendu à Dieu. Un patron difficile ne peut pas enlever la vraie récompense.",
          "stress au travail": "Le stress professionnel peut écraser quand on travaille pour l'approbation des hommes. Paul vous libère : travaillez pour le Seigneur, et la pression humaine perd son emprise.",
          licenciement: "Un licenciement remet en question notre valeur. Mais Paul vous rappelle que votre vrai employeur est le Seigneur — et il ne vous a jamais licencié.",
        },
      },
      {
        reference: "Psaume 90:17",
        text: "Que la grâce de l'Éternel, notre Dieu, soit sur nous ! Affermis l'ouvrage de nos mains, oui, affermis l'ouvrage de nos mains !",
        explanation: "Moïse prie pour que le travail humain ait un sens durable. La répétition exprime un désir profond.",
        application: "Priez pour votre travail : demandez à Dieu de l'affermir, de lui donner du sens et de la valeur.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Cette prière de Moïse est simple mais puissante : demander à Dieu de donner du sens et de la durabilité au travail de vos mains. Faites-en votre prière quotidienne.",
        },
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CATÉGORIE : MOMENTS DIFFICILES
  // ──────────────────────────────────────────────
  {
    id: "grief",
    categoryId: "crisis",
    name: "Deuil et perte",
    keywords: [
      "deuil", "mort", "décès", "perdu quelqu'un", "perte",
      "décédé", "mourir", "défunt", "funérailles", "enterrement",
      "disparu", "manque", "absent", "chagrin",
    ],
    description: "Quand on fait face à la perte d'un être cher",
    pastoralIntros: [
      "La perte d'un être cher laisse un vide que rien ne semble pouvoir combler. Votre douleur est légitime, et il n'y a pas de honte à pleurer. Dieu lui-même connaît les larmes — Jésus a pleuré devant la tombe de son ami. Dans ce moment de chagrin, voici ce que sa Parole vous murmure :",
      "Le deuil est un chemin que personne ne devrait traverser seul. Si votre cœur est brisé par la perte, sachez que Dieu est spécialement proche de ceux qui pleurent. Il ne vous demande pas d'être fort — il vous demande de le laisser vous porter :",
    ],
    verses: [
      {
        reference: "Psaume 147:3",
        text: "Il guérit ceux qui ont le cœur brisé, et il panse leurs blessures.",
        explanation: "Dieu est présenté comme un médecin de l'âme. Le verbe « panser » évoque un soin médical attentif — nettoyer la plaie, appliquer un baume, bander avec douceur.",
        application: "Permettez-vous de pleurer et de souffrir. Dieu ne vous demande pas d'être fort — il vous demande de le laisser panser vos blessures.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Dieu se présente ici comme le médecin de votre cœur brisé. Il ne guérit pas à distance — il panse, avec la tendresse d'un soignant qui prend le temps de s'occuper de chaque blessure.",
          mort: "La mort d'un proche laisse des blessures profondes. Ce verset promet que Dieu lui-même vient panser votre cœur — pas avec des platitudes, mais avec une guérison réelle.",
          deuil: "Dans votre deuil, Dieu n'attend pas que vous soyez fort. Il vient à vous comme un médecin vient à un blessé — pour panser, guérir, restaurer.",
        },
      },
      {
        reference: "Jean 11:35",
        text: "Jésus pleura.",
        explanation: "Le verset le plus court de la Bible est aussi l'un des plus profonds. Jésus pleure devant la tombe de Lazare, alors même qu'il sait qu'il va le ressusciter.",
        application: "Vos larmes ne sont pas un signe de faiblesse. Jésus lui-même a pleuré. Il comprend votre douleur parce qu'il l'a ressentie.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Le verset le plus court de la Bible est aussi le plus tendre : « Jésus pleura. » Il n'a pas sermonné, il n'a pas expliqué — il a pleuré. Il pleure avec vous.",
          mort: "Devant la mort de son ami, Jésus n'a pas récité de théologie. Il a pleuré. Vos larmes ne sont pas de la faiblesse — elles vous rendent semblable à Jésus.",
        },
      },
      {
        reference: "1 Thessaloniciens 4:13-14",
        text: "Nous ne voulons pas, frères, que vous soyez dans l'ignorance au sujet de ceux qui dorment, afin que vous ne vous affligiez pas comme les autres qui n'ont point d'espérance. Car si nous croyons que Jésus est mort et qu'il est ressuscité, croyons aussi que Dieu ramènera par Jésus et avec lui ceux qui sont morts.",
        explanation: "Paul ne dit pas de ne pas s'affliger — il dit de ne pas s'affliger sans espérance. Le chrétien pleure, mais avec la certitude de la résurrection.",
        application: "Votre chagrin est légitime, mais il est mêlé d'espérance. Si votre être cher était en Christ, ce n'est pas un adieu, c'est un au revoir.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Paul ne vous interdit pas les larmes — il leur donne un horizon. Vous pleurez, mais pas sans espérance. La séparation est temporaire pour ceux qui sont en Christ.",
          deuil: "Dans votre deuil, Paul vous offre une espérance qui transforme tout : ceux qui meurent en Christ ne sont pas perdus — ils vous précèdent. Vous les reverrez.",
        },
      },
      {
        reference: "2 Corinthiens 1:3-4",
        text: "Béni soit Dieu, le Père de notre Seigneur Jésus-Christ, le Père des miséricordes et le Dieu de toute consolation, qui nous console dans toutes nos afflictions, afin que, par la consolation dont nous sommes l'objet de la part de Dieu, nous puissions consoler ceux qui se trouvent dans quelque affliction !",
        explanation: "Paul révèle un cycle de consolation : Dieu nous console pour que nous puissions consoler les autres. Votre douleur deviendra une source de compassion.",
        application: "Recevez la consolation de Dieu dans votre deuil. Un jour, votre expérience vous permettra de consoler quelqu'un d'autre.",
        relevanceScore: 8,
        connectionTemplates: {
          default: "Dieu est appelé ici « le Père des miséricordes et le Dieu de toute consolation ». Toute consolation — c'est sa spécialité. Et un jour, votre propre traversée deviendra une source de réconfort pour d'autres.",
        },
      },
    ],
  },
  {
    id: "trials",
    categoryId: "crisis",
    name: "Épreuves et souffrances",
    keywords: [
      "épreuve", "souffrance", "difficulté", "adversité", "obstacle",
      "problème", "crise", "catastrophe", "galère", "dur", "difficile",
      "traverser", "supporter", "endurer", "persévérer",
      "pourquoi moi",
    ],
    description: "Quand les épreuves s'accumulent et semblent insurmontables",
    pastoralIntros: [
      "Les épreuves que vous traversez sont réelles, et je ne les minimiserai pas. Mais je veux vous dire quelque chose que l'Écriture affirme avec force : aucune épreuve n'est vaine aux yeux de Dieu. Il est capable de tirer du bien de ce qui semble n'avoir aucun sens. Voici ce qu'il vous dit :",
      "Quand les difficultés s'accumulent, on peut avoir l'impression que Dieu nous a oubliés. Mais c'est exactement le contraire : les Écritures montrent que Dieu est particulièrement actif dans les moments d'épreuve. Il forge, il purifie, il prépare. Écoutez sa parole :",
    ],
    verses: [
      {
        reference: "Jacques 1:2-4",
        text: "Mes frères, regardez comme un sujet de joie complète les diverses épreuves auxquelles vous pouvez être exposés, sachant que l'épreuve de votre foi produit la patience. Mais il faut que la patience accomplisse parfaitement son œuvre, afin que vous soyez parfaits et accomplis, sans faillir en rien.",
        explanation: "Jacques ne dit pas de nier la souffrance, mais de changer de perspective. L'épreuve a un objectif : produire la patience, qui produit la maturité.",
        application: "Demandez-vous : que cette épreuve peut-elle produire en moi ? Quelle qualité de caractère est en train d'être forgée ?",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Jacques vous propose un changement de regard radical : l'épreuve n'est pas une punition, c'est une forge. Elle produit en vous la patience, puis la maturité. Votre caractère est en train d'être affiné.",
          "pourquoi moi": "Vous vous demandez « pourquoi moi ? ». Jacques offre une réponse surprenante : l'épreuve produit la patience, puis la maturité. Dieu est en train de faire de vous quelqu'un de complet.",
        },
      },
      {
        reference: "Romains 5:3-5",
        text: "Bien plus, nous nous glorifions même des afflictions, sachant que l'affliction produit la persévérance, la persévérance la victoire dans l'épreuve, et cette victoire l'espérance. Or, l'espérance ne trompe point, parce que l'amour de Dieu est répandu dans nos cœurs par le Saint-Esprit qui nous a été donné.",
        explanation: "Paul décrit une chaîne vertueuse : affliction → persévérance → victoire → espérance. L'espérance finale ne déçoit jamais.",
        application: "Vous êtes peut-être au début de la chaîne, mais Dieu travaille vers la fin. Chaque jour de persévérance vous rapproche de la victoire.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Paul trace un chemin à travers la souffrance : affliction, persévérance, victoire, espérance. Vous êtes peut-être au début du chemin, mais l'espérance vous attend à la fin — et elle ne déçoit jamais.",
        },
      },
      {
        reference: "Ésaïe 43:2",
        text: "Si tu traverses les eaux, je serai avec toi ; et les fleuves, ils ne te submergeront point ; si tu marches dans le feu, tu ne te brûleras pas, et la flamme ne t'embrasera point.",
        explanation: "Dieu ne promet pas d'empêcher les eaux et le feu — il promet d'être avec nous au milieu. L'épreuve est réelle, mais elle n'aura pas le dernier mot.",
        application: "Vous traversez peut-être les eaux ou le feu. Mais vous traversez — ce n'est pas votre destination finale.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Dieu ne promet pas de vous épargner les eaux et le feu. Il promet quelque chose de plus puissant : d'être avec vous au milieu. Et il promet que vous traverserez — pas que vous resterez bloqué.",
        },
      },
    ],
  },
  {
    id: "injustice",
    categoryId: "crisis",
    name: "Face à l'injustice",
    keywords: [
      "injustice", "injuste", "discrimination", "inégalité",
      "oppression", "opprimé", "victime", "maltraité", "abus",
      "persécution", "persécuté", "accusé faussement", "calomnie",
      "faux témoignage", "justice",
    ],
    description: "Quand on subit une injustice et qu'on cherche la justice de Dieu",
    pastoralIntros: [
      "L'injustice révolte — et c'est normal. Dieu lui-même déteste l'injustice. Si vous êtes victime d'un tort que personne ne semble voir ou reconnaître, sachez que Dieu voit tout. Il est un juge parfait, et il promet de défendre la cause des opprimés :",
      "Subir l'injustice est l'une des épreuves les plus amères, surtout quand les coupables semblent prospérer. Mais la Parole de Dieu affirme avec force que la justice finira toujours par triompher. Voici sa promesse :",
    ],
    verses: [
      {
        reference: "Psaume 37:5-6",
        text: "Recommande ton sort à l'Éternel, mets en lui ta confiance, et il agira. Il fera paraître ta justice comme la lumière, et ton droit comme le soleil à son midi.",
        explanation: "David promet que Dieu défendra la cause du juste. La justice sera aussi évidente que le soleil en plein midi.",
        application: "Résistez à l'envie de vous faire justice vous-même. Confiez votre cause à Dieu et faites-lui confiance pour rétablir la vérité.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "David vous promet que Dieu fera paraître votre justice « comme le soleil à son midi » — impossible à cacher, impossible à nier. Confiez-lui votre cause et attendez qu'il agisse.",
          calomnie: "Face à la calomnie, ce verset est une ancre : Dieu fera briller votre vérité comme le soleil en plein jour. Les mensonges ne tiendront pas devant sa lumière.",
          injustice: "L'injustice que vous subissez ne passera pas inaperçue. Dieu promet d'agir et de faire éclater votre droit comme la lumière du soleil.",
        },
      },
      {
        reference: "Romains 12:19",
        text: "Ne vous vengez point vous-mêmes, bien-aimés, mais laissez agir la colère ; car il est écrit : À moi la vengeance, à moi la rétribution, dit le Seigneur.",
        explanation: "Paul nous libère du fardeau de la vengeance en le remettant entre les mains de Dieu. Ce n'est pas une invitation à l'indifférence, mais à la confiance.",
        application: "La vengeance est un fardeau trop lourd pour des épaules humaines. Déposez-le. Dieu est un juge parfait.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Paul vous libère d'un poids que vous n'étiez pas fait pour porter : la vengeance. Dieu dit « à moi la vengeance ». Il vous demande de lui faire confiance pour rendre justice.",
        },
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CATÉGORIE : LOUANGE ET GRATITUDE
  // ──────────────────────────────────────────────
  {
    id: "thankfulness",
    categoryId: "gratitude",
    name: "Gratitude et reconnaissance",
    keywords: [
      "gratitude", "reconnaissance", "merci", "remercier", "reconnaissant",
      "béni", "bénédiction", "grâce", "bienfait", "favorable",
      "exaucé", "miracle", "bonne nouvelle", "joie", "heureux",
      "content", "satisfait", "comblé",
    ],
    description: "Quand le cœur déborde de reconnaissance",
    pastoralIntros: [
      "Quel beau moment que celui où le cœur déborde de reconnaissance ! La gratitude est comme un parfum qui embaume tout ce qu'elle touche. Dieu se réjouit quand ses enfants reconnaissent ses bienfaits. Voici des paroles pour nourrir votre louange :",
      "La reconnaissance est l'une des attitudes les plus transformatrices de l'âme. Elle change notre regard sur la vie et approfondit notre relation avec Dieu. Nourrissez ce beau mouvement de votre cœur avec ces paroles :",
    ],
    verses: [
      {
        reference: "1 Thessaloniciens 5:18",
        text: "Rendez grâces en toutes choses, car c'est à votre égard la volonté de Dieu en Jésus-Christ.",
        explanation: "Paul dit « en toutes choses », pas « pour toutes choses ». On ne remercie pas pour la souffrance, mais on peut remercier dans la souffrance.",
        application: "Commencez chaque journée par trois choses pour lesquelles vous êtes reconnaissant. La gratitude change notre regard sur la vie.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Paul vous révèle la volonté de Dieu en un mot : la gratitude. En toutes choses — pas seulement les bonnes — il y a matière à rendre grâces.",
          joie: "Votre joie est un terreau parfait pour la gratitude. Prenez le temps de nommer les bienfaits de Dieu et de lui rendre gloire.",
        },
      },
      {
        reference: "Psaume 103:1-2",
        text: "Mon âme, bénis l'Éternel ! Que tout ce qui est en moi bénisse son saint nom ! Mon âme, bénis l'Éternel, et n'oublie aucun de ses bienfaits !",
        explanation: "David commande à sa propre âme de bénir Dieu — c'est un acte de volonté. « N'oublie aucun de ses bienfaits » est un rappel que la mémoire est l'alliée de la gratitude.",
        application: "Faites l'inventaire des bienfaits de Dieu dans votre vie. Écrivez-les. La mémoire est le carburant de la gratitude.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "David vous donne une pratique puissante : commander à votre âme de se souvenir. La gratitude est un choix, et le souvenir est son carburant. N'oubliez aucun des bienfaits de Dieu.",
        },
      },
      {
        reference: "Psaume 100:4-5",
        text: "Entrez dans ses portes avec des louanges, dans ses parvis avec des cantiques ! Célébrez-le, bénissez son nom ! Car l'Éternel est bon ; sa bonté dure toujours, et sa fidélité de génération en génération.",
        explanation: "Le psalmiste nous montre comment approcher Dieu : avec la louange comme passeport et la reconnaissance comme langage.",
        application: "Prenez un moment pour louer Dieu, non pas pour ce qu'il fait, mais pour qui il est : bon, fidèle, éternel dans son amour.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Le psalmiste vous invite à entrer dans la présence de Dieu avec ce que vous avez de plus beau : la louange et la gratitude. C'est le langage qui ouvre les portes du ciel.",
        },
      },
    ],
  },
  {
    id: "hope",
    categoryId: "gratitude",
    name: "Espérance et renouveau",
    keywords: [
      "espérance", "espoir", "renouveau", "nouveau départ", "recommencer",
      "avenir", "futur", "promesse", "attente", "patience",
      "persévérance", "lumière", "aube", "renaissance", "restauration",
    ],
    description: "Quand on a besoin de retrouver l'espérance",
    pastoralIntros: [
      "L'espérance est cette lumière qui brille même dans la nuit la plus sombre. Si vous cherchez un nouveau souffle, un nouveau départ, sachez que le Dieu de la Bible est un Dieu de renouveau. Il fait toutes choses nouvelles. Voici ses promesses pour vous :",
      "Vous cherchez l'espérance, et c'est déjà le signe que votre cœur n'a pas renoncé. L'espérance biblique n'est pas un vœu pieux — c'est une certitude ancrée dans le caractère de Dieu. Laissez ces paroles raviver votre flamme :",
    ],
    verses: [
      {
        reference: "Ésaïe 40:31",
        text: "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles ; ils courent, et ne se lassent point ; ils marchent, et ne se fatiguent point.",
        explanation: "L'aigle utilise les courants ascendants pour voler sans effort. Ceux qui se confient en Dieu reçoivent une force surnaturelle. Notez la progression descendante : voler, courir, marcher — parfois la plus grande force est de simplement continuer à marcher.",
        application: "Vous n'avez peut-être plus la force de « voler ». Peut-être que « courir » est trop. Mais si vous pouvez encore « marcher », Dieu promet que vous ne vous fatiguerez pas.",
        relevanceScore: 10,
        connectionTemplates: {
          default: "Ce verset promet un renouvellement surnaturel de vos forces. Et notez la progression : voler, courir, marcher. Parfois, la plus grande victoire est simplement de continuer à marcher — et Dieu promet que vous en aurez la force.",
          epuisement: "Vous êtes épuisé, et Dieu le sait. Ce verset promet un renouvellement de force à ceux qui se confient en lui. Pas par votre effort, mais par sa puissance.",
          desespoir: "Quand l'espoir semble perdu, Dieu promet un renouvellement. Comme l'aigle qui prend son envol sur les courants ascendants, vous pouvez vous élever à nouveau — porté par sa force.",
        },
      },
      {
        reference: "Lamentations 3:22-23",
        text: "Les bontés de l'Éternel ne sont pas épuisées, ses compassions ne sont pas à leur terme ; elles se renouvellent chaque matin. Oh ! que ta fidélité est grande !",
        explanation: "Jérémie écrit ces mots au milieu du livre le plus triste de la Bible. C'est au cœur de la plus grande obscurité qu'il voit la lumière : les bontés de Dieu se renouvellent chaque matin.",
        application: "Quel que soit le jour que vous avez eu hier, ce matin est un nouveau début. Les compassions de Dieu sont fraîches, neuves, renouvelées.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Au cœur du livre le plus triste de la Bible, Jérémie fait la plus belle découverte : les bontés de Dieu se renouvellent chaque matin. Chaque jour est un nouveau départ avec Dieu.",
          echec: "Après un échec, ce verset est une bouffée d'air frais : les bontés de Dieu ne sont pas épuisées par vos erreurs. Elles se renouvellent chaque matin. Demain est un nouveau jour.",
        },
      },
      {
        reference: "Jérémie 29:11",
        text: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
        explanation: "Ce verset, écrit à des exilés qui avaient tout perdu, est une promesse que Dieu n'a pas abandonné ses plans.",
        application: "Votre situation actuelle n'est pas la fin de votre histoire. Dieu a encore des projets pour vous.",
        relevanceScore: 9,
        connectionTemplates: {
          default: "Dieu parle ici à des gens qui avaient tout perdu — et il leur dit qu'il a encore des projets pour eux. Des projets de paix, d'avenir et d'espérance. Cette promesse est aussi pour vous.",
          avenir: "L'avenir vous semble incertain, mais Dieu vous dit qu'il a formé des projets sur vous — des projets de paix et d'espérance, pas de malheur.",
        },
      },
    ],
  },
]
