import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@blzd-dev/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import SmurfHarvestBalance from './SmurfHarvestBalance'
import SmurfWalletBalance from './SmurfWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/2a.png');
  background-size: 256px;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const TokenImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-right: 8px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  const addWatchSmurfToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
              symbol: 'SMURF',
              decimals: '18',
              image:
                'https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/farms/smurf.png',
            },
          },
        })

        if (wasAdded) {
          console.log('Token was added')
        }
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
  }, [])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <TokenImageWrapper>
          <CardImage
            src="https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/2.png"
            alt="smurf logo"
            width={64}
            height={64}
          />
          <Button onClick={addWatchSmurfToken} scale="sm">
            +{' '}
            <img
              style={{ marginLeft: 8 }}
              width={16}
              src="https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/wallet/metamask.png"
              alt="metamask logo"
            />
          </Button>
        </TokenImageWrapper>
        <Block>
          <SmurfHarvestBalance />
          <Label>{TranslateString(544, 'SMURF to Harvest')}</Label>
        </Block>
        <Block>
          <SmurfWalletBalance />
          <Label>{TranslateString(546, 'SMURF in Wallet')}</Label>
        </Block>
        <Actions>
          {account ? (
            <Button id="harvest-all" disabled={balancesWithValue.length <= 0 || pendingTx} onClick={harvestAllFarms}>
              {pendingTx
                ? TranslateString(548, 'Collecting SMURF')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
