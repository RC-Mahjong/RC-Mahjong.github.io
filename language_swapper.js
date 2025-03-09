const languageData = {
    "en": {
      "about_us": "About Us",
      "language": "Language",
      "current_language": `<span class="flag-icon flag-icon-us"></span> EN `,
      "pdfs": "PDFs",
      "venue": "Gaming Venue",
      "links": "Links",
      "space": " ",
      "about_us_text": `Welcome to our website.<br>
                        We are a Riichi Mahjong club in Basel and we would like to regularly play mahjong together in order to facilitate offline games (which have their own dynamic and feel to them in comparison to the generally accesible online mahjong) in our region.<br>
                        Moreover, we would like to introduce more new players to mahjong, help them with learning the game and thus expand the mahjong community as well as get people enthusiastic about the depth, complexity, strategy and etiquette of the game,  so we can all appreciate new aspects of it together.</p>
                        <h2>About Mahjong</h2>
                        <p>Mahjong is a tile-based game for four players that originated in China and has since developed into many different variants (the solitaire game on smart phones and computers has only adopted the name and design of the tiles, but has nothing in common with actual mahjong in terms of gameplay). We play the Japanese version, also called Riichi Mahjong by some.</p>
                        <h3>How does the game play?</h3>
                        <p>In a nutshell, the aim of each round is to complete a winning hand with the tiles you have in your hand: To do this, one tile is drawn and one discarded each turn. Under certain circumstances, the tiles discarded by others can also be picked up and used for your own hand.
                        <br />The winner of the current round receives points from the others depending on certain combinations in their hand and whoever has the most points at the end of the game (after several hands have been played) wins.
                        <br />The basic principle is not that complicated, but there are many complex and more in-depth strategies due to the many possible winning combinations, your estimations of how you could statistically win your hand in the fastest and most valuable way, as well as due to the scoring, which, for example, is designed so that it can also make sense to play "defensively", i.e. not to help someone else win because you would lose too many points as a result.<br>
                        It is a very exciting and multifaceted game with a good mix of more complex strategy options and luck, which keeps everything rich in variety.

                        If you are interested or curious, you can also find a tutorial playlist in the "<a onclick="displayContent('links_text')">links</a>" section which will help you learn the detailed rules or you could simply contact us if you want to give it a try and we will teach you everything you need to know.<br>
                        (Mail address: <a href="mailto:riichi.basel@proton.me">riichi.basel@proton.me</a>)`,
      "pdfs_text": `<h3> Main rules </h3>
                    <p><a href="docs/English Ryanzou Chankan Ruleset.pdf" target="_blank">Our Mahjong Ruleset</a></p>
                    <p><a href="docs/English Etiquette.pdf" target="_blank">Etiquette</a></p>
                    
                    <h3> Help and tips for beginners </h3>
                    <p><a href="docs/English Mahjong basic summary and getting started.pdf" target="_blank">Introduction and basic summary</a></p>
      
                    <h3> Optional rules </h3>
                    <p><a href="docs/English Hana Mahjong Ruleset.pdf" target="_blank">Hana Mahjong Ruleset (Optional way to play)</a></p>
                    <p><a href="docs/Englisch Optional and alternative rules.pdf" target="_blank">Compilation of alternative rulesets</a></p>`,
      "venue_text": `Currently, we are having weekly meetups on Saturday afternoon at "Markthalle" in Basel near the SBB train station. The address is Steinentorberg 20, Basel, CH 4051.<br>
                    Furthermore, there are some irregular games in the area of Bad Säckingen sometimes too since we have some sets and a table there but not as many players.<br>
                    Lastly, we can arrange some spontaneous events that differ from the regular schedule as well, if you are interested, just write us a mail at: <a href="mailto:riichi.basel@proton.me">riichi.basel@proton.me</a>`, 
      "links_text": `Our Discord server: <a href="https://discord.gg/QdEepy256F" target="_blank">Discord</a></p>
                    <p>Our mail address: <a href="mailto:riichi.basel@proton.me">riichi.basel@proton.me</a></p>
                    <p>Very good tutorial playlists for learning Japanese mahjong: <a href="https://www.youtube.com/@LightGrunty/playlists" target="_blank">Youtube Playlist</a></p>
                    <p>Mahjong Soul, a website where you can play Japanese mahjong for free: <a href="https://mahjongsoul.game.yo-star.com/" target="_blank">Mahjong Soul</a></p>
                    <p>Extensive list of terminology in case you need to look something up:  <a href="https://riichi.wiki/List_of_terminology_by_alphabetical_order" target="_blank">List of Terminology</a></p>
                    <p>Stats and score sheet for our league games: <a href="https://docs.google.com/spreadsheets/d/1BOtgQBLJIfw0CTJbWap72vy0lLmMK3pAVPYLCh9ybiY/edit?usp=sharing" target="_blank">Link</a></p>`
    },

    "de": {
      "about_us": "Über Uns",
      "language": "Sprache",
      "current_language": `<span class="flag-icon flag-icon-de"></span> DE `,
      "pdfs": "PDFs",
      "venue": "Spielort",
      "links": "Links",
      "space": " ",
      "about_us_text": `Willkommen auf unserer Seite.<br>
                        Wir sind ein Riichi-Mahjongclub in Basel und möchten gerne regelmässig  gemeinsam Mahjong spielen und so offline-Spiele in unserer Gegend ermöglichen, die nochmal eine eigene Dynamik im Vergleich zum allgemein zugänglichen Online-Mahjong haben.<br>
                        Gerne möchten wir auch viele neue Spieler*innen für Mahjong begeistern, ihnen beim Erlernen des Spiels helfen und so die Community erweitern und bei anderen die Freude an der Tiefe, Komplexität, Strategie und Etikette des Spiels wecken, sodass wir alle gemeinsam neue Aspekte davon schätzen lernen können.</p>
                        <h2>Über Mahjong:</h2>
                        <p>Mahjong ist ein Spiel mit Steinen für vier Spieler*innen, stammt ursprünglich aus China und hat sich seitdem zu vielen verschiedenen Varianten entwickelt (Das Solitärspiel auf Handy und Computer hat nur Namen und das Design der Steine übernommen, spieltechnisch jedoch nichts mit dem eigentlichen Mahjong gemeinsam). Wir spielen die japanische Variante, von einigen auch Riichi Mahjong genannt.</p>

                        <h3>Worum geht es beim Spielen?</h3>
                        <p>Ganz grob zusammengefasst geht es in jeder Runde darum, mit den Steinen in der eigenen Hand ein komplettes Spielbild zu vervollständigen: Hierzu wird in jedem Zug ein Stein aufgenommen und einer abgelegt. Unter bestimmten Umständen können auch die von anderen abgelegten Steinen für die eigene Hand aufgenommen werden.
                        <br />Der/die Gewinner*in der aktuellen Runde erhält Punkte von den anderen je nach bestimmten Kombinationen in der Hand und wer am Ende des Spiels nach mehreren gespielten Händen die meisten Punkte hat, gewinnt.
                        <br />Das Grundprinzip ist nicht so kompliziert, doch es bieten sich viele komplexe und tiefere Strategien durch die vielen möglichen Kombinationen, die Einschätzungen, wie man die eigene Hand statistisch am schnellsten und am wertvollsten gewinnen könnte, sowie durch die Art der Punktberechnung, die zum Beispiel so angelegt ist, dass es auch sinnvoll sein kann, "defensiv" zu spielen, um nicht jemand anderem zum Sieg zu verhelfen, da man dadurch zu viele Punkte verlieren würde.<br>

                        Es ist ein sehr spannendes und vielseitiges Spiel mit einer guten Mischung aus komplexeren Strategiemöglichkeiten und Glück, welches alles abwechslungsreich hält.
                        Falls ihr interessiert oder neugierig seid, findet ihr in der "<a onclick="displayContent('links_text')">Links</a>"-Sektion auch eine Tutorial-Playlist, mit der man die detaillierten Regeln lernen kann oder ihr meldet euch einfach bei uns zum Spielen und wir bringen euch alles Wichtige bei.<br>
                        (Mail-Adresse: <a href="mailto:riichi.basel@proton.me">riichi.basel@proton.me</a>)`,
      "pdfs_text": `<h3> Hauptregeln </h3>
                    <p><a href="docs/Deutsch Ryanzou Chankan Ruleset.pdf" target="_blank">Unser Mahjong Ruleset</a></p>
                    <p><a href="docs/Deutsch Etikette.pdf" target="_blank">Etikette</a></p>

                    <h3> Hilfe und Tipps für Anfänger*innen </h3>
                    <p><a href="docs/Deutsch Mahjong-Einführung.pdf" target="_blank">Einführung und Zusammenfassung Grundregeln</a></p>

                    <h3> Optionale Regeln </h3>
                    <p><a href="docs/Deutsch Hana Mahjong Ruleset.pdf" target="_blank">Hana Mahjong Ruleset (Optionale Spielweise)</a></p>
                    <p><a href="docs/Deutsch Optionale und alternative Regeln.pdf" target="_blank">Zusammenstellung alternativer Rulesets</a></p>`,
      "venue_text": `Wir spielen aktuell einmal wöchentlich (Samstag Nachmittag) in der Markthalle in Basel nahe dem Bahnhof SBB. Die Adresse ist Steinentorberg 20, Basel, CH 4051.<br>
                    Zusätzlich gibt es auch ab und zu unregelmässige Treffen im Raum Bad Säckingen, da es dort auch Sets und einen Tisch gibt, jedoch weniger Spieler*innen.<br>
                    Weiterhin können bei Interesse auch andere, abweichende, spontane Termine abgemacht werden, bei Interesse einfach per Mail melden: <a href="mailto:riichi.basel@proton.me">riichi.basel@proton.me</a>`, 
      "links_text": `Unser Discord-Server: <a href="https://discord.gg/QdEepy256F" target="_blank">Discord</a></p>
                    <p>Unsere Mail-Adresse: <a href="mailto:riichi.basel@proton.me">riichi.basel@proton.me</a></p>
                    <p>Sehr gute Tutorial-Playlists, um japanisches Mahjong zu lernen: 
                    <a href="https://www.youtube.com/@LightGrunty/playlists" target="_blank">Youtube Playlist</a></p>
                    <p>Mahjong Soul, eine Website, auf der man gratis japanisches Mahjong spielen kann: <a href="https://mahjongsoul.game.yo-star.com/" target="_blank">Mahjong Soul</a></p>
                    <p>Ausführliche Terminologieliste, falls man etwas nachschlagen muss: <a href="https://riichi.wiki/List_of_terminology_by_alphabetical_order" target="_blank">Terminologieliste</a></p>
                    <p>Dokument für Statistik und Punkte unserer League Games: <a href="https://docs.google.com/spreadsheets/d/1BOtgQBLJIfw0CTJbWap72vy0lLmMK3pAVPYLCh9ybiY/edit?usp=sharing" target="_blank">Link</a></p>`
    }
  };


var currentLanguage = 'en'
var currentContent = 'logo'

function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (languageData[lang] && languageData[lang][key]) {
      element.innerHTML = languageData[lang][key];
    }
  });
  currentLanguage = lang
  if (currentContent == 'logo') {
    document.getElementById('contentDiv').innerHTML = '<img src="images/full_logo.png" alt="" width="100%">'
  }
  else {
    document.getElementById('contentDiv').innerHTML = languageData[currentLanguage][currentContent];
  }

  $('#bs-navbar-collapse').collapse('hide');
}


function displayContent(content) {
  if (content == 'logo') {
    document.getElementById('contentDiv').innerHTML = '<img src="images/full_logo.png" alt="" width="100%">'
  }
  else {
    document.getElementById('contentDiv').innerHTML = languageData[currentLanguage][content];
  }
  currentContent = content

  $('#bs-navbar-collapse').collapse('hide');
}


changeLanguage('en');

