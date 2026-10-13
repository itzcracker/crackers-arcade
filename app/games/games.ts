export type HtmlGame = {
  title:  '',
  image:  'images-1.jpeg',
  link:  'games/1v1-lol.html',
}

// Add new browser games here. Keep each logo square for a consistent grid.
export const htmlGames: HtmlGame[] = []

export const sortedHtmlGames = [...htmlGames].sort((a, b) =>
  a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }),
)
