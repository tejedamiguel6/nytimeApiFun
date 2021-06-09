import styled from 'styled-components'

export const Article = ({ title, abstract, byline, updated_date }) => {
  return (
    <Articles>
      <h2>{title}</h2>

      <p>{abstract}</p>
      <mark>By: {byline}</mark>
      <p>Updated on: {updated_date}</p>
    </Articles>
  )
}

const Articles = styled.li`
  h2 {
    text-decoration: underline;
  }
  p:last-child {
    margin-top: 5px;
  }
`
