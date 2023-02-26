import Client from 'shopify-buy'

const client: any = Client.buildClient({
  domain: 'lifeship.myshopify.com',
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  apiVersion: '2023-01',
})

export async function getProductByHandle(handle: string) {
  return parseShopifyResponse(await client.product.fetchByHandle(handle))
}

export async function buyDNAKit(
  quantity: number,
  walletAddress: string = '0x0000'
) {
  const checkout = await client.checkout.create()
  const product = await getProductByHandle('dna-to-moon')
  await client.checkout.updateAttributes(checkout.id, {
    customAttributes: [{ key: 'WalletAddress', value: walletAddress }],
  })
  await client.checkout.addLineItems(checkout.id, [
    {
      variantId: product.variants[0].id,
      quantity: quantity,
    },
  ])
  await client.checkout.addDiscount(checkout.id, 'MOONDAO')
  const newCheckout = await client.checkout.fetch(checkout.id)
  return newCheckout.webUrl
}

export const parseShopifyResponse = (response: any) =>
  JSON.parse(JSON.stringify(response))