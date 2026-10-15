export type HtmlGame = {
  title: string
  image: string
  link: string
}

// Add new browser games here. Keep each logo square for a consistent grid.
export const htmlGames: HtmlGame[] = [
  {
    title: '1v1.lol',
    image: '/images/images-1.jpeg',
    link: '/games/1v1-lol.html',
  },
  { title: '3 Pandas', image: '/images/images-2.png', link: '/games/3-pandas.html' },
  { title: 'Among Us', image: '/images/images-3.png', link: '/games/among-us.html' },
  { title: 'Animal Crossing', image: '/images/images-4.png', link: '/games/animal-crossing.html' },
  { title: 'Apes vs Helium', image: '/images/images-5.png', link: '/games/apes-vs-helium.html' },
  { title: 'Blumgi Racers', image: '/images/images-6.png', link: '/games/blumgi-racers.html' },
  { title: 'Bob the Robber 2', image: '/images/images-7.png', link: '/games/bob-the-robber-2.html' },
  { title: 'Bouncy Basketball', image: '/images/images-8.png', link: '/games/bouncy-basketball.html' },
  { title: "Don't Bite Me Bro!", image: '/images/images-9.png', link: '/games/dont-bite-me-bro.html' },
  { title: 'Mario Kart 64', image: '/images/images-10.png', link: '/games/mario-kart-64.html' },
  { title: 'Mario Odyssey 64', image: '/images/images-11.png', link: '/games/mario-odyssey-64.html' },
  { title: 'Mortal Kombat 4', image: '/images/images-12.png', link: '/games/mortal-kombat-4.html' },
  { title: "Papa's Cheeseria", image: '/images/images-13.png', link: '/games/papas-cheeseria.html' },
  { title: "Papa's Freezeria", image: '/images/images-14.png', link: '/games/papas-freezeria.html' },
  { title: "Papa's Hot Doggeria", image: '/images/images-15.png', link: '/games/papas-hot-doggeria.html' },
  { title: "Papa's Pastaria", image: '/images/images-16.png', link: '/games/papas-pastaria.html' },
  { title: "Papa's Scooperia", image: '/images/images-17.png', link: '/games/papas-scooperia.html' },
  { title: 'Raft Wars', image: '/images/images-18.png', link: '/games/raft-wars.html' },
  { title: 'Raft Wars 2', image: '/images/images-19.png', link: '/games/raft-wars-2.html' },
  { title: 'Skate 3', image: '/images/images-20.png', link: '/games/skate-3.html' },
  { title: '10 Minutes Till Dawn', image: '/placeholder-logo.svg', link: '/games/10-minutes-till-dawn.html' },
  { title: '12 MiniBattles', image: '/placeholder-logo.svg', link: '/games/12-minibattles.html' },
  { title: '2048', image: '/placeholder-logo.svg', link: '/games/2048.html' },
  { title: 'Bacon May Die', image: '/placeholder-logo.svg', link: '/games/bacon-may-die.html' },
  { title: "Baldi's Basics", image: '/placeholder-logo.svg', link: '/games/baldis-basics.html' },
  { title: 'Cactus McCoy', image: '/placeholder-logo.svg', link: '/games/cactus-mccoy.html' },
  { title: 'Careatscar 2 Deluxe', image: '/placeholder-logo.svg', link: '/games/careatscar-2-deluxe.html' },
  { title: "Don't Escape", image: '/placeholder-logo.svg', link: '/games/dont-escape.html' },
  { title: "Don't Escape 2", image: '/placeholder-logo.svg', link: '/games/dont-escape-2.html' },
  { title: 'Duck Life', image: '/placeholder-logo.svg', link: '/games/duck-life.html' },
  { title: 'Duck Life 2', image: '/placeholder-logo.svg', link: '/games/duck-life-2.html' },
  { title: 'Duck Life 3', image: '/placeholder-logo.svg', link: '/games/duck-life-3.html' },
  { title: 'Duck Life 4', image: '/placeholder-logo.svg', link: '/games/duck-life-4.html' },
  { title: 'Escape Road', image: '/placeholder-logo.svg', link: '/games/escape-road.html' },
  { title: 'Only Up', image: '/placeholder-logo.svg', link: '/games/only-up.html' },
  { title: 'Ocarina of Time', image: '/placeholder-logo.svg', link: '/games/ocarina-of-time.html' },
  { title: "Papa's Burgeria", image: '/placeholder-logo.svg', link: '/games/papas-burgeria.html' },
  { title: "Papa's Sushiria", image: '/placeholder-logo.svg', link: '/games/papas-sushiria.html' },
  { title: 'Paper.io 3D', image: '/placeholder-logo.svg', link: '/games/paper-io-3d.html' },
  { title: 'PvZ2 Gardendless', image: '/placeholder-logo.svg', link: '/games/pvz2-gardenless.html' },
]

export const sortedHtmlGames = [...htmlGames].sort((a, b) =>
  a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }),
)
