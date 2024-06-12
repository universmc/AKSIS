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
    
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Aksis-🤖_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();