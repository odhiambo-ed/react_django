import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [publishedYear, setPublishedYear] = useState('')

  const getBooks = async() => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/')
      const data = await response.json()
      setBooks(data)
       
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  const createBook = async() => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, published_year: publishedYear }),
      })
      const data = await response.json()
      setBooks([...books, data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Enter book name .." onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Enter year published .." onChange={(e) => setPublishedYear(e.target.value)} />
        <button onClick={createBook}>Add book</button>
      </div>
      <div>
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
