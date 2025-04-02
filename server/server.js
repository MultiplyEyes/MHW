import 'dotenv/config';
import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { Liquid } from 'liquidjs';
import sirv from 'sirv';

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


const baseURL = "https://mhw-db.com/monsters/";

const engine = new Liquid({
  extname: '.liquid',
});

const app = new App();

app
  .use(logger())
  .use('/', sirv('dist'))
  .listen(3000, () => console.log('Server available on http://localhost:3000'));

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

app.get('/monster/:id/', async (req, res) => {
  const id = req.params.id;
  const endpoint = baseURL + id;
  const response = await fetch(endpoint);
  const specMonster = await response.json();
  
  const image = fotos[id]
  
  return res.send(renderTemplate('server/views/detail.liquid', { title: `Detail page for ${id}`, monster: specMonster, image: image}));
});

const renderTemplate = (template, data) => {
  const templateData = {
    NODE_ENV: process.env.NODE_ENV || 'production',
    ...data
  };

  return engine.renderFileSync(template, templateData);
};

