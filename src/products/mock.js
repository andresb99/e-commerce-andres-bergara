//import -products-imges
import acValhalla from './product-img/ac-valhalla.jpg'
import gow4 from './product-img/gow-4.jpg'
import cyberPunk from './product-img/cyber-punk.jpg'
import untilDawn from './product-img/until-dawn.jpg'
import dbd from './product-img/dbd.jpg'
import ds3 from './product-img/dark-souls-3.jpg'
import phasmophobia from './product-img/Phasmophobia.png'
import detroit from './product-img/dbh.jpg'
import teclado from './product-img/teclado.jpg'
import mouse from './product-img/mouse.png'
import monitor from './product-img/monitor-gamer.png'
import gabinete from './product-img/gabinete.jpg'

const products = [
    {   id: 0, 
        pictureUrl: acValhalla,
        title: "Assassins Creed Valhalla",
        description: "In Assassin's Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world set against the brutal backdrop of England's Dark Ages. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place among the gods in Valhalla.",
        price: 150, 
        stock: 0, 
        category: "videogames",
        related: [5,6,7] 
    },

    {   id: 1,
        pictureUrl: gow4, 
        title: "God Of War 4", 
        description: "Many years have passed since Kratos, Spartan warrior and former Greek God of War, took his vengeance against the Greek Gods, and he now lives with his young son Atreus in ancient Norway in the realm of Midgard.",
        price: 120, 
        stock: 1,
        category: "videogames",
        related: [2,3,6] 
    },

    {   id: 2, 
        pictureUrl: cyberPunk, 
        title: "Cyber Punk 2077",
        description: "Cyberpunk 2077 is both an action game and a role-playing game, but not at the same time. You can spend hours investigating, traveling, building relationships, infiltrating, hacking, and discovering Night City and follow that with action scenes that rival Hollywood blockbusters.",
        price: 150,
        stock: 10, 
        category: "videogames",
        related: [1,5,7] 
    },

    {   id: 3,
        pictureUrl: untilDawn, 
        title: "Until Dawn", 
        description: "Until Dawn is an interactive drama in which players primarily assume control of eight young adults who have to survive on Blackwood Mountain until they are rescued at dawn. The gameplay is mainly a combination of cutscenes and third-person exploration.",
        price: 50, 
        stock: 4, 
        category: "videogames",
        related: [1,2,7] 
    },

    {   id: 4, 
        pictureUrl: dbd, 
        title: "Dead By DeadLight", 
        description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.", 
        price: 20, 
        stock: 5, 
        category: "videogames",
        related: [2,3,7]
    },

    {   id: 5,
        pictureUrl: ds3, 
        title: "Dark Souls 3", 
        description: "Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again.",
        price: 50, 
        stock: 0, 
        category: "videogames",
        related: [3,6,7] 
    },

    {   id: 6,
        pictureUrl: phasmophobia, 
        title: "Phasmophobia", 
        description: "Phasmophobia, or the fear of ghosts, can be complicated to diagnose. Many people experience a certain thrill of anxiety when telling ghost stories or watching movies that feature ghosts and other supernatural entities. Most are able to control this fear and some even enjoy the feeling that it creates.",
        price: 50, 
        stock: 7, 
        category: "videogames",
        related: [3,4,5]
    },
        
    {   id: 7,
        pictureUrl: detroit, 
        title: "DETROIT: Become Human", 
        description: "Detroit: Become Human is an adventure game played from a third-person view, which is subject to a set and controllable perspective. There are multiple playable characters who can die as the story continues without them; as a result, there is no game over message following a character's death.",
        price: 50, 
        stock: 8, 
        category: "videogames",
        related: [1,2,5]
    },

    {   id: 8,
        pictureUrl: teclado, 
        title: "ROG Strix Flare II", 
        description: "ROG Strix Flare II Animate gaming mechanical keyboard with AniMe Matrix™ LED display, 8000 Hz polling rate, ROG NX mechanical switches or Cherry MX switches, swappable switches, metal media controls,and a wrist rest with light diffuser",
        price: 150, 
        stock: 10, 
        category: "peripherals",
        related: [9,10,11]
    },

    {   id: 9,
        pictureUrl: mouse, 
        title: "RAZER VIPER", 
        description: "As a lightweight ambidextrous line up geared for maximum pace and performance, take a look at what differs between each Viper, so that you can find the right one that’s more your speed.",
        price: 100, 
        stock: 7, 
        category: "peripherals",
        related: [8,10,11]
    },

    {   id: 10,
        pictureUrl: monitor, 
        title: "Asus ROG Strix XG49VQ", 
        description: "ROG Strix XG49VQ is a super ultra-wide 49-inch gaming monitor with a smooth 144Hz refresh rate that offers the ultimate immersive gaming experience. It features FreeSync™ Premium Pro and High Dynamic Range (HDR) technology with DCI-P3 90% professional color gamut coverage and DisplayHDR™ 400 certification.",
        price: 1000, 
        stock: 1, 
        category: "peripherals",
        related: [8,9,11]
    },

    {   id: 11,
        pictureUrl: gabinete, 
        title: "RED DRAGON TAILGATE GC702", 
        description: "Designed for PC lovers who want a stylish chassis. Beautifully constructed with three tempered glass panels allow you to show off your inner hardware. Two front RGB light bars further highlight the Tailgate's unique design.  ",
        price: 100, 
        stock: 0, 
        category: "peripherals",
        related: [8,9,10]
    }
    
]

export const getMock = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})