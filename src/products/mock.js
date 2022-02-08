//import -products-imges
import acValhalla from './product-img/ac-valhalla.jpg'
import gow4 from './product-img/gow-4.jpg'
import cyberPunk from './product-img/cyber-punk.jpg'
import untilDawn from './product-img/until-dawn.jpg'
import dbd from './product-img/dbd.jpg'
import ds3 from './product-img/dark-souls-3.jpg'
import phasmophobia from './product-img/Phasmophobia.png'
import detroit from './product-img/dbh.jpg'


const products = [
    {   id: 0, 
        pictureUrl: acValhalla,
        title: "Assassins Creed Valhalla",
        description: "In Assassin's Creed Valhalla, become Eivor, a legendary Viking raider on a quest for glory. Explore a dynamic and beautiful open world.",
        price: 150, 
        stock: 0, 
        category: "VideoGames",
        related: [5,6,7] 
    },

    {   id: 1,
        pictureUrl: gow4, 
        title: "God Of War 4", 
        description: "Many years have passed since Kratos, Spartan warrior and former Greek God of War, took his vengeance against the Greek Gods, and he now lives with his young son Atreus in ancient Norway in the realm of Midgard.",
        price: 120, 
        stock: 1,
        category: "VideoGames",
        related: [2,3,6] 
    },

    {   id: 2, 
        pictureUrl: cyberPunk, 
        title: "Cyber Punk 2077",
        description: "Cyberpunk 2077 is both an action game and a role-playing game, but not at the same time. You can spend hours investigating, traveling, building relationships, infiltrating, hacking, and discovering Night City and follow that with action scenes that rival Hollywood blockbusters.",
        price: 150,
        stock: 10, 
        category: "VideoGames",
        related: [1,5,7] 
    },

    {   id: 3,
        pictureUrl: untilDawn, 
        title: "Until Dawn", 
        description: "Until Dawn is an interactive drama in which players primarily assume control of eight young adults who have to survive on Blackwood Mountain until they are rescued at dawn. The gameplay is mainly a combination of cutscenes and third-person exploration.",
        price: 50, 
        stock: 4, 
        category: "VideoGames",
        related: [1,2,7] 
    },

    {   id: 4, 
        pictureUrl: dbd, 
        title: "Dead By DeadLight", 
        description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.", 
        price: 20, 
        stock: 5, 
        category: "VideoGames",
        related: [2,3,7]
    },

    {   id: 5,
        pictureUrl: ds3, 
        title: "Dark Souls 3", 
        description: "Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again.",
        price: 50, 
        stock: 0, 
        category: "VideoGames",
        related: [3,6,7] 
    },

    {   id: 6,
        pictureUrl: phasmophobia, 
        title: "Phasmophobia", 
        description: "Phasmophobia, or the fear of ghosts, can be complicated to diagnose. Many people experience a certain thrill of anxiety when telling ghost stories or watching movies that feature ghosts and other supernatural entities. Most are able to control this fear and some even enjoy the feeling that it creates.",
        price: 50, 
        stock: 7, 
        category: "VideoGames",
        related: [3,4,5]
    },
        
    {   id: 7,
        pictureUrl: detroit, 
        title: "DETROIT: Become Human", 
        description: "Detroit: Become Human is an adventure game played from a third-person view, which is subject to a set and controllable perspective. There are multiple playable characters who can die as the story continues without them; as a result, there is no game over message following a character's death.",
        price: 50, 
        stock: 8, 
        category: "VideoGames",
        related: [1,2,5]
    },
    
]

export const getMock = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})