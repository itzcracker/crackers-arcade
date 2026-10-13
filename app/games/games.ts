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
]

export const sortedHtmlGames = [...htmlGames].sort((a, b) =>
  a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }),
)
