import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from '../../components/layout/Head'
import {
  collectionMetadata,
  nft,
} from '../../components/marketplace/assets/seed'
import PurchasePortal from '../../components/zero-g/PurchasePortal'

export default function Ticket2Space() {
  const router = useRouter()
  //stages
  const [state, setState] = useState(0)
  const [time, setTime] = useState<string>()

  useEffect(() => {
    setTime(
      new Date().toLocaleDateString() + ' @ ' + new Date().toLocaleTimeString()
    )
  }, [])

  useEffect(() => {
    if (router && router.query.state === '1') setState(1)
  }, [state, router])

  return (
    <main className="animate-fadeIn">
      <Head title="Ticket to Space" />

      <div className="mt-3 px-5 lg:px-7 xl:px-10 py-12 lg:py-14 page-border-and-color font-RobotoMono w-[336px] sm:w-[400px] lg:mt-10 lg:w-full lg:max-w-[1080px] text-slate-950 dark:text-white">
        <h1 className={`page-title`}>Ticket to Space</h1>
        <h3 className="mt-5 lg:mt-8 font-bold text-center lg:text-left text-lg lg:text-xl xl:text-2xl">
          Take the leap, for the chance to win a trip to space!
        </h3>
        {state === 0 && (
          <div className="">
            <p className="mt-5 text-sm lg:mt-6 opacity-70 max-w-2xl lg:max-w-3xl font-RobotoMono text-center lg:text-left lg:text-base xl:text-lg">
              Purchase this NFT and follow us on our journey to randomly select
              an owner to win a trip to space!
            </p>
          </div>
        )}

        {/*Collection title, image and description*/}
        <div className="mt-6 inner-container-background relative w-full xl:w-2/3">
          {collectionMetadata && (
            <div className="flex flex-col bg-transparent p-4 md:p-5 lg:p-6 xl:p-[30px]">
              <h1 className="font-GoodTimes text-2xl lg:text-3xl xl:text- text-moon-orange dark:text-white">
                {nft.metadata.name}
              </h1>
              {/*Quantity, price, expiration */}
              <div className="mt-4 lg:mt-5 flex flex-col gap-2 lg:gap-4">
                {/* Quantity for ERC1155 */}
                {nft.type === 'ERC1155' && (
                  <div>
                    <p className="opacity-70 lg:text-xl">Quantity left</p>
                    <p className="mt-1 lg:mt-2 font-semibold lg:text-lg">{198}</p>
                  </div>
                )}
                {/* Pricing information */}
                <div>
                  <p className="opacity-70 lg:text-xl">Price</p>
                  <p className='mt-1 lg:mt-2 font-semibold lg:text-lg'>100 MOONEY</p>
                </div>
                {/*Expiration*/}
                <div>
                  <p className="opacity-70 lg:text-xl">Expiration</p>
                  <p className="mt-1 lg:mt-2 font-semibold lg:text-lg">{time}</p>
                </div>
              </div>
              {/*Not definitive, this one is being used on another page*/}
              <div className='mt-4'>
              <PurchasePortal></PurchasePortal>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}