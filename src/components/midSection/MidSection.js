import styled from 'styled-components'

export const MidSection = () => {
  return (
    <Container>
      <div className='col-6'>
        <h2>Story 1</h2>
        <p>
          small info about story here. should be at leaset two sentences small
          info about story here. should be at leaset two sentences small info
          about story here. should be at leaset two sentences small info about
        </p>
        <p>this is going to be a hyperlink</p>
        <div className='thumbnail'>
          <svg>
            <title>Thumbnail</title>
          </svg>
          <img src='imageheree' />
          <h1>Thumbnail</h1>
        </div>
      </div>

      <div className='col-6'>
        <h2>Story 2</h2>
        <p>
          small info about story here. should be at leaset two sentences small
          info about story here. should be at leaset two sentences small info
          about story here. should be at leaset two sentences small info about
        </p>
        <p>this is going to be a hyperlink</p>

        <div>
          <div className='thumbnail'>
            <svg></svg>
            <img src='imageheree' />
            <h1>Thumbnail</h1>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  .col-6 {
    width: 50%;
    margin: 20px;
  }

  .thumbnail {
    display: flex;
    flex-wrap: wrap;
  }
`
