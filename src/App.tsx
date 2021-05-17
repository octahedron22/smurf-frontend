import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@blzd-dev/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPriceList, useFetchPublicData } from 'state/hooks'
import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import Pools from './views/Pools'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('connectorId')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()
  useFetchPriceList()
  useGetDocumentTitlePrice()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/caves">
              <Farms tokenMode />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route>                   
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
      <NftGlobalNotification />
    </Router>
  )
}

export default React.memo(App)
