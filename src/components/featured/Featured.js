import { useState, useEffect } from 'react'
import { randomArticle } from '../../utils/api'
import styled from 'styled-components'

export const FeaturedNews = () => {
  const [featured, setFeatured] = useState([])
  const [loading, setIsloading] = useState(true)
  const [refresh, setRefresh] = useState(1)

  useEffect(() => {
    randomArticle().then((data) => setFeatured(data))
    setIsloading(false)
  }, [refresh])

  const refreshing = () => {
    setRefresh(refresh + 1)
    console.log('you clicked')
  }
  const image = featured.media?.[0]?.['media-metadata'][2].url
  return (
    <Featured>
      <div>
        <div className='button-stuff'>
          <button onClick={refreshing}>
            <span>Refresh</span>
          </button>
        </div>

        {loading ? (
          <h1>Loading </h1>
        ) : (
          <div className='flex'>
            <div>
              <h3>{featured.title}</h3>
              <h4> {featured.abstract}</h4>
            </div>
            {image ? <Image src={image} /> : <p>No Image</p>}
          </div>
        )}
      </div>
    </Featured>
  )
}

// 8Sd54bvJRBuVo0sAqLHAGtkriyfkDGSb

const Featured = styled.div`
  padding: 1rem;
  background-color: #212529;

  .flex {
    display: flex;
  }

  .button-stuff {
    margin-left: 20px;
  }

  button {
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 25px;
    padding: 10px;
    width: 130px;
    cursor: pointer;
    margin: 3px;
  }

  h3 {
    margin-left: 15px;
    color: #ffff;
    font-size: 3rem;
    max-width: 800px;
  }
  h4 {
    color: #ffff;
    max-width: 800px;
    font-size: 1.25rem;
    margin-left: 15px;
  }

  p {
    color: #ffff;
    margin-left: 15px;
  }
`
const Image = styled.img`
  border-radius: 10%;
  width: 40%;

  @media (max-width: 1055px) {
    border: 1px solid red;
    width: 33%;
    height: 33%;
    border-radius: 30px 60px 90px 15px;
  }
`
