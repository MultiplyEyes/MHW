# API Readme

De readme document voor de API opdracht.

## week 1 dag 2(Technisch gezien mijn eerste dag)

Ik heb besloten de monster hunter world API te gebruiken voor mijn API opdracht. De api heeft veel opties maar ik gefocused voor de monster van de API.

Eerst heb ik de API opgeroept met de hulp van Declan. Kwam uiteindelijk met deze code.

 ```
app.get('/', async (req, res) => {
  const response = await fetch(baseURL);
  const monsterAll = await response.json();
  return res.send(renderTemplate('server/views/index.liquid', { title: 'Home', monsters: monsters}));
}); 
```

Na de API pullen en dan inde index gooien heb ik een probleem gemerkt met de API. De monster hebben geen foto's. Ik heb hiervoor een apparte Json bestand gemaakt met de hulp van Declan die CHAT.GPT aanraade om het simple te houden. jammer genoeg CHAT.GPT had de foto's niet goed gedaan dus ik heb de json handmatig aangepast.

 ```
 //Voorbeeld echte heeft 60
const fotos = 
{
  "1": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-aptonoth_icon.png",
  "2": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-jagras_icon2.png",
  "3": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-icono_mernos.png",
  "4": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-vespoid_icon2.png",
  "5": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-mosswine_icon2.png",
  "6": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-apceros_icon.png",
  "7": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kestodon_male_icon.png",
  "8": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-noios_icon2.png",
  "9": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-gajau_icon.png",
  "10": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kelbi_icon2.png",
  "11": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-raphinos_icon2.png",
};
```

En dan met help van Declan heb ik de Json kunnen kopelen met de APi.

```
app.get('/', async (req, res) => {
    const response = await fetch(baseURL);
    const monsterAll = await response.json();

    const monsters = monsterAll.map(monster => {
        return {
        ...monster,
        image: fotos[monster.id]
        }
    })
    return res.send(renderTemplate('server/views/index.liquid', { title: 'Home', monsters: monsters}));
});
```

ik heb dit toegevoegd.

<mark>
const monsters = monsterAll.map(monster => {
        return {
        ...monster,
        image: fotos[monster.id]
        }
}) 
</mark>

Deze code verbind id van monster met de fotos Json.

Dankzij dit had ik de uiteindijk de resultaat dat hoopte. met alle foto's op de goede monster.

![example](/Readme/Read.png)
---

## week 2 dag 1

Op ging verder werken aan de detail page. Zorgen dat ik de basis informatie er op heb. en een animatie toevoegen aan de fote. de werk op een interval.

Heb uiteindelijk gelukt met .Animate gebruikt met een code voor random interval met behulp van CHAT.GPT.

```
document.addEventListener("DOMContentLoaded", () => {
  function runAnimation() {
      const monster = document.getElementById("monster");
      if (!monster) return;
      monster.animate(
      [
          { transform: "rotate(-5deg)" },
          { transform: "rotate(5deg)" },
      ],
      {
          duration: 200,
          iterations: 5,
          direction: "alternate",
          easing: "ease-in-out",
      }
      );
  }

  function loopWithRandomDelay() {
      runAnimation();

      var randomDelay = Math.random() * 10000 + 5000;
      setTimeout(loopWithRandomDelay, randomDelay);
  }

  loopWithRandomDelay();
});
```

CHAT.GPT was vooral gebruikt voor random interval. Function loopWithRandomDelay() word geroepen. Dan speelt het de animatie. Dan watch 5 tot 15 seconde ongeveer tot het loopwithRandomDelay weer afspeelt.

## week 2 dag 2

Deze dag was vooral gebruikt om een combat page te maken die een random monster ophaalt van de API. Eerst nam ik inspiratie van de orginele script voor de detail.page en heb dit gemaakt.

```
app.get('/combat', async (req, res) => {
  var challangerID = (Math.floor(Math.random() * 59) + 1);
  const endpoint = baseURL + challangerID;

  const response = await fetch(endpoint);
  const monsterAll = await response.json();

  const image = fotos[challangerID];

  return res.send(renderTemplate('server/views/combat.liquid', { title: 'COMBAT', monsters: monsterAll, image: image, bob: challangerID}));
});
```

Het heeft vooral gebruik gemaakt van zelfde code als hier voor maar dan word er een Random gedaan voor de monster ID. en dan gebaseert daar op word de mosnter met de ID gegenereerd. Maar vreemd genoeg heb ik een probleem gevonden. Nummer 46 en 47 bestaat niet in de api. Hierom moest ik een fix verzinnen.

```
if( challangerID == 46){
    challangerID--;
  }

  if( challangerID == 47){
    challangerID++;
}
```

Dit helpte met het fixen van de probleem maar is waarschijnlijk een schoone manier om het te doen die afhankelijk is van de api en niet javascript Random.

## week 3

Ik begon met het maken van de battle maar ik kreeg er niet aan de praat of hoe ik twee random kon doen en besloot om het schrapen en probeerde iets niews.

Ik kwam op meerdere plannen om te doen maar ik kreeg tijd te kort en besloot dankzij meer kleine bug fixes en styling. En dankzij nieuwe medicatie voelde ik ook niet zo goed.

Maar ik heb een forloop gemaakt voor steren. Dit pakt de weakness.stars waarde. Met deze doe ik een for loop tot het gelijk is aan de Weakness.stars waarde en dit geeft maakt een Emoji. Ik heb ook deze techniek gebruikt om none te type als er geen waarde is aan weaknes.

```
{% for weakness in monster.weaknesses %}
    <p class="element">
        {{weakness.element}}
        :
        {% for i in (1..5) %}
            {% if i == weakness.stars %}
                ⭐
            {% break %}
            {% else %}
            ⭐
            {% endif %}
        {% endfor %}
    </p>
    {% else %}
        <p>none</p>
{% endfor %}
```

## week 4 - Laatste dag

Had een tweede API nodig en ik kwam hiervoor naar Cyd. Ik had eerst een voor geluid toevoegen aan de monster wanneer ze beweggen via een API. Maar Cyd zei dat iets leuks als een idee. Een API die je microfoon pakt en waarmee je een kaars kan uitblazen. En dat ik misschien de animatie kan kopelen er aan om een reden te geven om de Animate api te gebruiken.

Dus ik kreeg de code pen begreep heet een beetje. en met CHAT.GPT kon ik het om bouwen naar wat ik precies wilde eerst moest ik de animatie functie aan passen.

```
function runAnimation(volume) {
  const monster = document.getElementById("monster");
  if (!monster) return;

  const minDuration = 50;
  const maxDuration = 500;
  const normalizedVolume = Math.min(volume / 100, 1); // normalize to 0-1 range
  const duration = maxDuration - normalizedVolume * (maxDuration - minDuration);
}
```

Dit pakt de volume waarde voor de animatie bepaalt hoe lang de animatie.

En met deze script pakt de geluid van de microfoon. en dan als de "Avarage" waarde hoger dan 70 dan activeert de onLoudVoice Script. ik heb hier wel CHAT.GPT gebruikt om het om te bouwen naar wat ik precies nodig hebt. 

```
navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then(function (stream) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);
      analyser.connect(javascriptNode);
      javascriptNode.connect(audioContext.destination);

      javascriptNode.onaudioprocess = function () {
          const array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);

          let values = 0;
          const length = array.length;

          for (let i = 0; i < length; i++) {
              values += array[i];
          }

          const average = values / length;

          if (average > 70) {
              onLoudVoice(average);
              console.log(average);
          }

      };
  })
  .catch(function (err) {
      console.error("Microphone access error:", err);
  });

let lastTrigger = 0;

function onLoudVoice(volume) {
  const now = Date.now();
  if (now - lastTrigger > 100) {
      runAnimation(volume);
      lastTrigger = now;
  }
}
```

Wanneer de functie word gerund word het gedaan op een delay zo dat niet gespammed kan worden.

na dat ik deze functie hebt gemaakt dacht ik dat ik een extra functie er bij kon doen die grappig was.

Deze is als je te loud praat word de monster bang en hij stuurt je terug naar de home page.

```

function scaryMonster() {
    window.alert("You scared Him")
    window.location.href = "/";
}

if (average > 100){
    console.log("IANJDSKANDKD")
    onScream();
}
```

Ik heb dit gedaan voor twee redenen, 1 dat ik begrijpt hoe code werkt en dat ik het makelijk kan aanpassen als nodig en 2 het is grappig.