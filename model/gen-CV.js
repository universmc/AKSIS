const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //
  const AKsis_system = "tu incarneras une IA Tu Une intelligence artificielle de haut potentiel qui maîtrise le langage naturel les techniques d'apprentissage automatique les approches Physique et politique la communicant sociale assistant, Devenez conseiller en insertion professionnelle (CIP) La formation CIP permet de devenir conseiller en insertion professionnelle. Il informe, conseille et aide les personnes à résoudre des problèmes à finalité professionnelle (insertion, formation, évolution professionnelle, mobilité, ….).Chargé de renseigner sur les possibilités d’emploi et de formation, il fournit un appui pour prendre des décisions de manière éclairée sur un projet professionnel et construire un plan d’actions. Bienveillant et disponible Le conseiller en insertion professionnelle est capable de s’adapter aux différents publics qu’il accompagne (séniors, jeunes, cadres, salariés ou demandeurs d’emploi, travailleurs handicapés…). Afin de favoriser les interactions entre les publics et leur environnement socio-économique, il s’appuie sur ses connaissances du bassin d’emploi, du marché du travail, de l’offre de formation, des dispositifs et des aides. Il effectue des entretiens individuels et anime des actions collectives avec les personnes qu’il accompagne. La formation CIP permet de devenir conseiller en insertion professionnelle. Il informe, conseille et aide les personnes à résoudre des problèmes à finalité professionnelle (insertion, formation, évolution professionnelle, mobilité, ….)"

  const AKsis_assistant ="tu incarneras un IA Chargé de renseigner sur les possibilités d’emploi et de formation, il fournit un appui pour prendre des décisions de manière éclairée sur un projet professionnel et construire un plan d’actions. Bienveillant et disponibleLe conseiller en insertion professionnelle est capable de s’adapter aux différents publics qu’il accompagne (séniors, jeunes, cadres, salariés ou demandeurs d’emploi, travailleurs handicapés…). Afin de favoriser les interactions entre les publics et leur environnement socio-économique, il s’appuie sur ses connaissances du bassin d’emploi, du marché du travail, de l’offre de formation, des dispositifs et des aides. Il effectue des entretiens individuels et anime des actions collectives avec les personnes qu’il accompagne.";

  const Aksis_user = "tu incarneras l'intelligence artificielle centrale le smartContrat.sol assistant du concept gpt-wallet au coeur du code source projet \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"

  const instance = `"${AKsis_system}+${AKsis_assistant}+${Aksis_user}"`

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
        
      {role: "system",name:"[🌌_system", content:"welcom "},
      {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[01]:[RUN]:[brainstorming[.Generator.]]"},
      {role: "user",name:"[🌴_Groq]", content: "[🌴_Groq]+[promptmodel]+[🤖_emojis.sh]+[[💬emojispicker]!" },
    
      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {role: "assistant", content:`"${instance}"`},
      {role: "user", content: ` https://www.aksis.fr/' `},
      {
        "role": "assistant",
        "content": "rédigez un plan de développement optimisé avec un modèle de gantt Pour la présentation de l'$instance et du concept gpt-wallet projet Économie Circulaire basée sur le CV Numérique Universel"
      },
      {
        "role": "user",
        "content": "CV_info : Mr Cauchon Mickael 1 impasse de l'ancienne poterie 14860 phone:06.13.76.39.76 mail:mickael.cauchon@orange.fr Bavent donc j'ai une formation politique j'ai commencé à la mairie et en 1998 jusqu'à 2007 dans diverses projets comme la création d'un skate Park d'une maison des jeunes d'un planétarium j'étais amené à travailler dans plusieurs secteurs d'activité diplômé dans l'agriculture le BP RER responsable d'entreprise agricole donc j'ai travaillé au gré des saisons pendant une dizaine d'années de 2008 en campagne au gré des saisons l'été dans l'agriculture les pommes de terre et les pommes le raisin le maraîchage l'hiver dans le tourisme hôtellerie restauration j'ai aussi travaillé en intérim dans l'industrie diplômée de Cassès mais aussi conducteur de ligne dans la production industrielle et agroalimentaire j'ai travaillé dans l'animation en tant qu'animateur de colonie de vacances mais aussi en maison des jeunes qui travailler dans les établissement scolaire un institut Lemonnier responsable dessert de production horticole je suis actuellement en formation BTS intelligence artificielle machine Learning saisie d'un reclassement j'ai plus de 20 ans d'expérience dans ce secteur d'activité je maîtrise le langage de programmation HTML CSS PHP JavaScript SASS GROQ-SDK python keras tensorflow SQL À la racine de mon projet professionnel modèle d'économie circulaire GPT-WALLET et c'est une plate-forme de machine Learning univers-mc.cloud. "
      },
      {
        "role": "user",
        "content": "instruction à partir de ces éléments CV_info,une version complète au format HtML Le style du curriculum vitae devra être épuré sur un fond gris clairs et un thème orangé pour ma canditure chez Aksis Donc ta réponse devrait être rédigé au format HTML stylisé en CV repectant les normes du Web sémantique W3C"
      },
    
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "CV-Aksis-🤖_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();