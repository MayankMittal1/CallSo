import { Container } from 'reactstrap';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { Component } from 'react';

export const Account = () => {
  return (
    <Container style={{ height: '92vh' }} className="d-flex align-items-center justify-content-center">
      <WalletMultiButton />
      <br />
      <WalletDisconnectButton />
    </Container>
  );
};
