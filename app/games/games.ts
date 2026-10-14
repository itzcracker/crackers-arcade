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
  { title: '3 Pandas', image: '/images/3-pandas.jpg', link: '/games/3-pandas.html' },
  { title: 'Among Us', image: '/images/among-us.jpg', link: '/games/among-us.html' },
  { title: 'Animal Crossing', image: '/images/animal-crossing.jpg', link: '/games/animal-crossing.html' },
  { title: 'Apes vs Helium', image: '/images/apes-vs-helium.jpg', link: '/games/apes-vs-helium.html' },
  { title: 'Blumgi Racers', image: '/images/blumgi-racers.jpg', link: '/games/blumgi-racers.html' },
  { title: 'Bob the Robber 2', image: '/images/bob-the-robber-2.jpg', link: '/games/bob-the-robber-2.html' },
  { title: 'Bouncy Basketball', image: '/images/bouncy-basketball.jpg', link: '/games/bouncy-basketball.html' },
  { title: "Don't Bite Me Bro!", image: '/images/dont-bite-me-bro.jpg', link: '/games/dont-bite-me-bro.html' },
  { title: 'Mario Kart 64', image: '/images/mario-kart-64.jpg', link: '/games/mario-kart-64.html' },
  { title: 'Mario Odyssey 64', image: '/images/mario-odyssey-64.jpg', link: '/games/mario-odyssey-64.html' },
  { title: 'Mortal Kombat 4', image: '/images/mortal-kombat-4.jpg', link: '/games/mortal-kombat-4.html' },
  { title: "Papa's Cheeseria", image: '/images/papas-cheeseria.jpg', link: '/games/papas-cheeseria.html' },
  { title: "Papa's Freezeria", image: '/images/papas-freezeria.jpg', link: '/games/papas-freezeria.html' },
  { title: "Papa's Hot Doggeria", image: '/images/papas-hot-doggeria.jpg', link: '/games/papas-hot-doggeria.html' },
  { title: "Papa's Pastaria", image: '/images/papas-pastaria.jpg', link: '/games/papas-pastaria.html' },
  { title: "Papa's Scooperia", image: '/images/papas-scooperia.jpg', link: '/games/papas-scooperia.html' },
  { title: 'Raft Wars', image: '/images/raft-wars.jpg', link: '/games/raft-wars.html' },
  { title: 'Raft Wars 2', image: '/images/raft-wars-2.jpg', link: '/games/raft-wars-2.html' },
  { title: 'Skate 3', image: '/images/skate-3.jpg', link: '/games/skate-3.html' },
]

export const sortedHtmlGames = [...htmlGames].sort((a, b) =>
  a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }),
)
