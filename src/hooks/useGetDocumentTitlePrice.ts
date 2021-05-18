import { useEffect } from 'react'
import { usePriceSmurfBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const smurfPriceUsd = usePriceSmurfBusd()

  const smurfPriceUsdString = smurfPriceUsd.eq(0)
    ? ''
    : ` - $${smurfPriceUsd.toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    document.title = `SMURF.MONEY${smurfPriceUsdString}`
  }, [smurfPriceUsdString])
}
export default useGetDocumentTitlePrice
