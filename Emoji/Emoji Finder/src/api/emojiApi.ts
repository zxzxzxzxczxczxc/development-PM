import axios from 'axios'

export interface Emoji {
  title: string
  emoji: string
  keywords: string
}

const API_URL = 'http://localhost:3000/api/emojis'

export const fetchEmojis = async (query: string = ''): Promise<Emoji[]> => {
  const response = await axios.get<Emoji[]>(API_URL, {
    params: {
      q: query,
    },
  })

  return response.data
}