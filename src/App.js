import { getStories } from './utils/api'
import { useState, useEffect } from 'react'
import '../src/styles/App.css'
import styled from 'styled-components'
import { Navbar } from './components/navigation/Navbar'
import { FeaturedNews } from './components/featured/Featured'
import { ArticleList } from './components/articles/ArticleList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [topic, setTopic] = useState([])
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    getStories('home').then((data) => setTopic(data))
    setIsLoading(false)
  }, [])

  const updateTopic = (topic) => {
    getStories(topic).then((data) => setTopic(data))
    setIsLoading(false)
  }

  return (
    <Router>
      <div className='App'>
        <Title>News API</Title>
        <Switch>
          <Route path='/'></Route>
        </Switch>
        <Navbar selected={topic} onUpdateTopic={updateTopic} />
        <FeaturedNews />
        <ArticleList news={topic} loading={loading} />
      </div>
    </Router>
  )
}

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-top: 10px;
`

export default App
