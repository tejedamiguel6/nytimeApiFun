import axios from 'axios'

export const getStories = async (topic) => {
  const result = await axios
    .get(
      `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=8Sd54bvJRBuVo0sAqLHAGtkriyfkDGSb`
    )
    .then(({ data }) => {
      console.log(data.results, 'im called first')
      return data.results
    })
  return result
}

export const randomArticle = async () => {
  const result = await getFeaturedArticle().then((data) => {
    const randoArticle = data[Math.floor(Math.random() * data.length)]
    console.log('random article', randoArticle)
    return randoArticle
  })
  return result
}

const getFeaturedArticle = async () => {
  const result = await axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/shared/1.json?api-key=8Sd54bvJRBuVo0sAqLHAGtkriyfkDGSb`
    )
    .then(({ data }) => {
      // console.log(data.results, 'YOOOOOO DATA')
      return data.results
    })
  return result
}
