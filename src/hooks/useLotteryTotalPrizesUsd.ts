import { usePriceSmurfBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCake = getBalanceNumber(totalRewards)
  const cakePriceBusd = usePriceSmurfBusd()

  return totalCake * cakePriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
