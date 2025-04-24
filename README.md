# API Readme

De readme document voor de API opdracht.

## dag week 1 dag 2(Technisch gezien mijn eerset dag)

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
  "12": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-shamos_icon2.png",
  "13": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-girros_icon.png",
  "14": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-hornetaur_icon2.png",
  "15": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-gastodon_icon.png",
  "16": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-barnos_icon2.png",
  "17": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_jagras_icon.png",
  "18": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kulu-ya-ku_icon.png",
  "19": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-pukei-pukei_icon.png",
  "20": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/MHW-Barroth_Icon.png",
  "21": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-jyuratodus_icon.png",
  "22": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-tobi-kadachi_icon.png",
  "23": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-anjanath_icon.png",
  "24": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-azure_rathalos_icon.png",
  "25": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-bazelgeuse_icon.png",
  "26": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-behemoth_icon.png",
  "27": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-deviljho_icon.png",
  "28": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-diablos_icon.png",
  "29": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-black_diablos_icon.png",
  "30": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-dodogama_icon.png",
  "31": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_girros_icon2.png",
  "32": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kirin_icon.png",
  "33": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kulve_taroth_icon.png",
  "34": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kushala_daora_icon.png",
  "35": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-lavasioth_icon.png",
  "36": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-legiana_icon.png",
  "37": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-lunastra_icon2.png",
  "38": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-nergigante_icon.png",
  "39": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-odogaron_icon.png",
  "40": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-paolumu_icon.png",
  "41": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-radobaan_icon.png",
  "42": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathalos_icon.png",
  "43": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathian_icon.png",
  "44": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-pink_rathian_icon2.png",
  "45": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-teostra_icon.png",
  "48": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-tzitzi-ya-ku_icon2.png",
  "49": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-uragaan_icon.png",
  "50": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-vaal_hazak_icon.png",
  "51": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-xeno'jiiva_icon.png",
  "52": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-zorah_magdaros_icon.png",
  "53": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-leshen_icon.png",
  "54": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/ancient_leshen_icon.png",
  "55": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhwi-safi'jiiva_icon.png",
  "56": "https://i.pinimg.com/originals/bc/88/5a/bc885ab73ad470142986bcee926ed65e.png",
  "57": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-rajang_icon.png",
  "58": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhwi-viper_tobi-kadachi_icon.png",
  "59": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-namielle_icon.png",
  "60": "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-zinogre_icon.png"
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

Dankzij dit had ik de uiteindijk de resultaat dat hoopte. met alle foto's op de goede monster.

<video src="Readme/IndexRecording.mp4" width="auto" height="400" controls autoplay loop></video>

---

## week 2 dag 1

Op ging verder werken aan de detail page. Zorgen dat ik de basis informatie er op heb. en een animatie toevoegen aan de fote. de werk op een interval.

Heb uiteindelijk gelukt met .Animate