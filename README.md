# MoonDAO App 🌕🌕

[![](/ui/public/Original_Black.png)](https://app.moondao.com)

The MoonDAO App at https://app.moondao.com is where people can connect their Ethereum wallet and interact with the MoonDAO smart contracts.

> [![app](/ui/public/screenshot.png)](https://app.moondao.com)

## File Structure

The code in this repository is structured into two main parts:

```
.
├── contracts # The smart contracts
└── ui        # The user interface (UI) for interacting with the smart contracts
```

## Run the UI locally

See [ui/README.md](ui/README.md)

## Testing against the Goerli Ethereum testnet

Add Goerli testnet variables to your local development environment:
```
cp .env.goerli .env.local
```

Start the development server:
```
yarn dev
```

Once you go to http://localhost:42069, you will see the message "uses Goerli as its preferred network":

> <img width="966" alt="Screen Shot 2022-05-21 at 11 10 06 AM" src="https://user-images.githubusercontent.com/95955389/169633157-50b239e4-9b4f-484d-a62e-8c3b6627dc29.png">

Solve this by switching to the _Goerli Test Network_ in MetaMask:

> <img width="328" alt="Screen Shot 2022-05-21 at 11 03 28 AM" src="https://user-images.githubusercontent.com/95955389/169633167-3570d17b-e7a9-4726-a377-e4a4ce455f5e.png">


## Run the smart contracts locally

Follow the instructions at [`contracts/README.md#local-setup`](https://github.com/nation3/app/blob/main/contracts/README.md#local-setup).

Update the `NEXT_PUBLIC_CHAIN` variable in `.env.local` to match your local Ethereum [node](https://github.com/nation3/app/blob/main/contracts/README.md#running-a-node).

Start the development server:
```
yarn dev
```
