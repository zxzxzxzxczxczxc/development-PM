import { useEffect, useState } from 'react'
import { fetchEmojis, type Emoji } from '../api/emojiApi'

function EmojiFinder() {
  const [emojis, setEmojis] = useState<Emoji[]>([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadEmojis = async () => {
      setLoading(true)
      setError('')

      try {
        const data = await fetchEmojis(query)
        setEmojis(data)
      } catch {
        setError('Не удалось загрузить эмодзи')
        setEmojis([])
      } finally {
        setLoading(false)
      }
    }

    loadEmojis()
  }, [query])

   
  return (
    <div className="emoji-finder">
      <input
        className="search"
        type="text"
        placeholder="Placeholder"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <main className="main">
        {loading && <p className="status">Загрузка...</p>}

        {error && <p className="status">{error}</p>}

        {!loading && !error && emojis.length === 0 && (
          <p className="status">Эмодзи не найдены</p>
        )}

        {!loading && !error && emojis.length > 0 && (
          <div className="emoji-grid">
            {emojis.map((item) => (
              <div className="emoji-card" key={`${item.title}-${item.emoji}`}>
                <div className="emoji">{item.emoji}</div>

                <h2>{item.title}</h2>

                <p>{item.keywords}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default EmojiFinder