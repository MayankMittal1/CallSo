import * as React from 'react';
import { useMemo } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');
import { Container } from 'reactstrap';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  SolanaMobileWalletAdapter,
  createDefaultAddressSelector,
  createDefaultAuthorizationResultCache,
} from '@solana-mobile/wallet-adapter-mobile';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './screens/Navbar';
import { Proposals } from './screens/Proposals';
import { Home } from './screens/Home';
import { Account } from './screens/Account';
import { initiateSocket } from './helpers/socket';
export const App = () => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        addressSelector: createDefaultAddressSelector(),
        appIdentity: { name: 'My app', uri: 'https://myapp.io', icon: 'relative/path/to/icon.png' },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
        cluster: 'devnet',
      }),
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Container
            style={{ height: '100vh', width: '100vw', padding: '0', margin: '0', background: '#0e1111' }}
            fluid
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Navbar />
          </Container>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
