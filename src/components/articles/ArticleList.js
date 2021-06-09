import styled from 'styled-components'
import { Article } from '../articles/Article'

export const ArticleList = ({ loading, news }) => {
  return (
    <div>
      {loading ? (
        <h1 style={{ fontSize: '100px', color: 'red' }}>LOADING</h1>
      ) : (
        <div>
          <h3>Articles</h3>

          {news.map((i) => {
            return (
              <Articles key={i.title}>
                <Article
                  title={i.title}
                  abstract={i.abstract}
                  byline={i.byline}
                  updated_date={i.updated_date}
                />
              </Articles>
            )
          })}
        </div>
      )}
    </div>
  )
}

const Articles = styled.ul`
  list-style-type: none;
  padding: 10px 10px 0 10px;
`
