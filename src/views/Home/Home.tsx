import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@blzd-dev/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
import SmurfStats from './components/SmurfStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
// import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/3.png');
  background-size: 250px;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/3.png'),
      url('https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/3b.png');
    background-size: 260px;
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="primary">
          {TranslateString(576, 'SMURF.MONEY')}
        </Heading>
        <Text>{TranslateString(578, 'The best Place on Binance Smart Chain to earn Smurfs! 🧙')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <SmurfStats />
        </Cards>
      </div>
      <TotalValueLockedCard />
      {/* <TwitterCard/> */}
    </Page>
  )
}

export default Home
