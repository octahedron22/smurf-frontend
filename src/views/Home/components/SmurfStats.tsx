import React from 'react'
import { Card, CardBody, Heading, Text } from '@blzd-dev/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceSmurfBusd } from '../../../state/hooks'

const StyledSmurfStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const SmurfStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const SmurfPrice = usePriceSmurfBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const smurfSupply = getBalanceNumber(circSupply)
  const marketCap = SmurfPrice.times(circSupply)

  let smurfPerBlock = 0
  if (farms && farms[0] && farms[0].smurfPerBlock) {
    smurfPerBlock = new BigNumber(farms[0].smurfPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledSmurfStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'SMURF Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total SMURF Supply')}</Text>
          {smurfSupply && <CardValue fontSize="14px" value={smurfSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total SMURF Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New SMURF/Block')}</Text>
          <Text bold fontSize="14px">
            {smurfPerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledSmurfStats>
  )
}

export default SmurfStats
