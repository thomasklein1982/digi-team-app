export default{
  id: "ki-und-ich",
  name: "KI und ich",
  vorbereitung: `Verbindet ein Tablet mit dem AirServer.`,
  beschreibung: `KI ist in unserem Leben angekommen. Was heißt das für mich? Worauf muss ich achten? Welche Gefahren gibt es?`,
  ablauf: [
    {
      name: "Was ist KI?",
      beschreibung: `Ihr arbeitet zusammen heraus, was KI eigentlich ist.`,
      ablauf: [
        "Ihr sagt: <span class='zitat'>Heute geht es um das Thema \"KI\". Weiß denn jemand von euch, was das ist? Habt ihr damit schon irgendwelche Erfahrungen gemacht?</span>",
        "Die Schüler*innen geben verschiedene Antworten und berichten von ihren Erfahrungen. Fragt nach, wenn etwas unklar ist.",
        "Schaut gemeinsam das Video <a class='extlink' href='https://youtu.be/sDt5bTQBJis?si=d7-jztlcTBmbXf_i' target='_blank'>Was ist eigentlich KI?</a> (2 min)",
        "Klärt gemeinsam alle Fragen zum Video.",
      ]
    },
    {
      name: "Wahr oder falsch?",
      beschreibung: "Die Schüler*innen sollen entscheiden, ob Aussagen über KI richtig oder falsch sind.",
      ablauf: [
        "Sagt: <span class='zitat'>Wir lesen euch gleich einige Sätze vor und ihr müsst entscheiden, ob sie wahr oder falsch sind. Dazu stellt ihr euch im Raum auf: Vorne bei der Tafel ist 'WAHR', hinten im Raum ist 'FALSCH'.</span><div>Sprecht nach jedem Satz mit den Schüler*innen darüber.</div>",
        "<span class='zitat'>KI steht für 'kreative Inselbewohner'.</span><div>(NEIN. Dieser Satz dient dazu, dass alle verstanden haben, was sie tun sollen!)</div>",
        "<span class='zitat'>KI-Antworten sind immer richtig.</span><div>(NEIN. Ungefähr 30% aller KI-Antworten enthalten Halluzinationen, also erfundene Sachverhalte. (<a class='extlink' href='https://www.klicksafe.de/fileadmin/cms/video/SID2026/KI-n_Plan_ki_and_me_klicksafe.mp4' target='_blank'>Video: KI hat keinen Plan</a> )(<a class='extlink' href='https://www.iese.fraunhofer.de/blog/halluzinationen-generative-ki-llm/' target='_blank'>Infos zu Halluzinationen</a>) (<a class='extlink' href='https://ttim.phbern.ch/2026/halluzinations-vergleich-welches-gen-ki-tool-erfindet-die-meisten-informationen/' target='_blank'>Quelle</a>)</div>",
        "<span class='zitat'>Das Training von Chat GPT 5 hat mehr als 100 Millionen Euro gekostet.</span><div>(JA. Viele schätzen aber, das es noch viel teurer gewesen ist. <a class='extlink' href='https://www.christos.studio/ki-kosten/' target='_blank'>Infos dazu</a>)</div>",
        "<span class='zitat'>Es gibt Menschen, die 'ihre KI' geheiratet haben.</span><div>(JA. <a class='extlink' href='https://www.youtube.com/shorts/5uZczlhGIrg' target='_blank'>Video zur Hochzeit von Yurina Noguchi</a>)</div>",
      ]
    },
    {
      name: "Der ELIZA-Effekt",
      beschreibung: "Ist ChatGPT mein bester Freund?",
      ablauf: [
        "Zeigt den Anfang das Videos <a class='extlink' href='https://www.klicksafe.de/fileadmin/cms/video/SID2026/Erkl%C3%A4rvideo_Eliza_Effekt_klicksafe.mp4' target='_blank'>Der ELIZA-Effekt</a>.",
        "Klärt Fragen zum Video.",
        "Fragt: <span class='zitat'>Könnt ihr euch vorstellen, warum Menschen gerne KI als Freund haben?</span>",
        `Diskutiert das mit der Klasse. Anregungen:
        <ul>
          <li>KI bestärkt mich immer.</li>
          <li>KI macht mir Komplimente.</li>
          <li>KI hört mir immer zu.</li>
          <lI>KI hat immer Zeit für mich.</li>
          <lI>KI macht nie Stress.</li>
        </ul>`,
        `Hier noch einige Videos zur Anregung:
        <ul>
          <li><a class="extlink" href='https://www.klicksafe.de/fileadmin/cms/video/SID2026/KI-ne_Liebe_ki_and_me_klicksafe.mp4' target='_blank'>Die KI-Freundin</a> (1min) (</li>
          <li><a class="extlink" href='https://www.klicksafe.de/fileadmin/cms/video/SID2026/KI-n_Erbe_ki_and_me_klicksafe.mp4' target='_blank'>KI als Lieblings-Enkel</a> (1 min)</li>
        </ul>`
      ]
    },
    {
      name: "Wie kann ich mit KI besser lernen?",
      beschreibung: "Ihr stellt zusammen mit der Klasse Regeln für die Benutzung von KI auf.",
      ablauf: [
        "Fragt nach: <span class='zitat'>Wer hat schon mal KI bei den Hausaufgaben genutzt?</span>",
        "Sprecht darüber: Wie war das? Hat es was gebracht?",
        `Schaut euch das Video <a class="extlink" href='https://schule.zdf.de/video/kuenstliche-intelligenz-schule-hausaufgaben-einfach-erklaert-100' target='_blank'>KI bei den Hausaufgaben an</a>.`,
        `Diskutiert: Wann hilft KI beim Lernen, wann schadet sie?`,
        "Wenn noch Zeit ist: Schreibt die wichtigsten Regeln auf ein Plakat."
      ]
    }
  ]
}