import styled from 'styled-components'

export const Navbar = ({ onUpdateTopic, selected }) => {
  const topics = ['Technology', 'Fashion', 'World', 'Science']

  return (
    <Nav>
      {topics.map((topic) => (
        <ul key={topic}>
          <li key={topic}>
            <button
              style={topic === selected ? { color: 'red' } : null}
              onClick={() => onUpdateTopic(topic)}
            >
              {topic}
            </button>
          </li>
        </ul>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  padding-top: 6px;
  display: flex;
  flex-wrap: row;
  justify-content: space-evenly;
  ul {
    margin-top: 1px;
  }

  li {
    font-size: 20px;
    padding: 5px;
    margin: 0 auto;
    list-style: none;
  }

  button {
    border: none;
    background-color: inherit;
    cursor: pointer;
    font-size: 1rem;
  }
`
