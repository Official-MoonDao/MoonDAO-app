import { useCallback, useContext } from 'react';
import PrivyWalletContext from "../privy/privy-wallet-context";
import { useWallets } from '@privy-io/react-auth';
import { DateEvent, formatSnapshotProposalMessage, Proposal, SnapshotTypes } from "@nance/nance-sdk";
import { SNAPSHOT_SPACE_NAME } from "./constants";
import { Ethereum } from "@thirdweb-dev/chains";
import { initSDK } from "../thirdweb/thirdweb";

const domain = {
  name: "snapshot",
  version: "0.1.4"
}

const AVERAGE_BLOCK_SECONDS = 12.08;

export const useSignProposal = () => {
  const { selectedWallet } = useContext(PrivyWalletContext);
  const { wallets } = useWallets();

  const signProposalAsync = useCallback(
    async (proposal: Proposal, event: DateEvent) => {
      console.log(event);
      try {
        const provider = await wallets[selectedWallet].getEthersProvider();
        const signer = provider?.getSigner();
        const address = await signer.getAddress();
        const message = formatSnapshotProposalMessage(
          address,
          proposal,
          SNAPSHOT_SPACE_NAME,
          new Date(event.start),
          new Date(event.end)
        );

        // estimate snapshot (blocknumber) here
        const mainnet = initSDK(Ethereum).getProvider();
        const currentBlock = await mainnet.getBlockNumber();
        const snapshot = currentBlock + Math.floor((new Date(event.start).getTime() - Date.now()) / 1000 / AVERAGE_BLOCK_SECONDS);
        message.snapshot = snapshot;
        const types = SnapshotTypes.proposalTypes;
        if (signer) {
          const signature = await signer._signTypedData(domain, types, message);
          return { signature, message, address, domain, types };
        } else {
          throw new Error('Signer not available');
        }
      } catch (error) {
        throw error;
      }
    },
    [selectedWallet, wallets]
  );

  return { signProposalAsync, wallet: wallets[selectedWallet] };
};