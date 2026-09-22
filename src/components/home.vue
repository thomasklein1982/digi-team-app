<template>
  <Screen :title="'DigiTeam-App v.'+$root.version">
    <div class="background">
      <p>Liebe DigiTeamer,</p>
      <p>in dieser App findet ihr verschiedene Materialien und Informationen.</p>
      <p>Danke, dass ihr dabei seid und für eure jüngeren Mitschüler*innen da seid!</p>

      <p>Ihr erreicht uns Lehrkräfte über Itslearning oder per Mail an <a class='extlink' href="mailto:digiteam@marienschule-limburg.de">digiteam@marienschule-limburg.de</a>.</p>
      
      <h2><img src="/img/teamstunden.svg" style="height: 1em"/> Teamstunden</h2>
      <p>Hier findet ihr verschiedene vorbereitete Stunden für eure Teamstunden. Diese macht ihr einmal im Monat in einer SV-Stunde mit eurer Klasse. Weiteres Material findet ihr auch in unserem <a class="extlink" href='https://marienschule-limburg.itslearning.com/Course/Course.aspx?CourseId=3099' target="_blank">Itslearning-Kurs</a>.</p>
      <h2><img src="/img/activities.svg" style="height: 1em"/> Activities</h2>
      <p>Hier findet ihr eine Reihe von Spielen und anderen Aktivitäten, die ihr in eure Teamstunden einbauen könnt, um sie aufzulockern.</p>
    </div>
  </Screen>
</template>

<script>
import Screen from './screen.vue';


export default{
  components: {
    Screen
  }
}
</script>