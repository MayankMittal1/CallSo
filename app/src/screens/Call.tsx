import React, { useEffect, useState } from 'react';
import { Container, Input, Row, Col, Button, Modal, ModalBody, Card, CardBody } from 'reactstrap';
import { io } from 'socket.io-client';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  initiateSocket,
  listenToCall,
  handleOfferCall,
  startBasicCall,
  listenAcceptCall,
  joinCall,
} from '../helpers/socket';

const Call = ({ caller, onAccept, onReject }: { caller: string; onAccept: Function; onReject: Function }) => {
  const { publicKey, wallet, signTransaction, signAllTransactions } = useWallet();
  const [to, setTo] = useState('');
  const [socket, setSocket] = useState<any>(undefined);
  const [call, setCall] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [accept, setAccept] = useState(false);
  const [seflaccept, setselfAccept] = useState(false);
  useEffect(() => {
    if (publicKey) {
      initiateSocket(publicKey.toBase58());
      listenAcceptCall((data: any) => {
        setAccept(true);
        joinCall(2, 2, data.from.slice(0, 10));
      });
    }
  }, [publicKey]);
  return (
    <Container style={{ height: '92vh' }}>
      <Row>
        <Col style={{ paddingLeft: '40px', paddingTop: '90px' }} className="col-11">
          <h1 style={{ color: 'white' }}>{caller.slice(0, 5) + '...' + caller.slice(30)}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-12" style={{ paddingLeft: '40px' }}>
          <h6 style={{ color: '#23FF2C' }}>00:00</h6>
        </Col>
      </Row>
      <Row style={{ marginTop: '50vh' }}>
        <Col>
          <Button
            style={{ width: '80%', background: '#DA2C4C', borderColor: '#DA2C4C' }}
            onClick={() => {
              onReject();
            }}
          >
            HangUp
          </Button>
        </Col>
        {!seflaccept && (
          <Col>
            <Button
              style={{ width: '80%', background: 'green', borderColor: 'green' }}
              onClick={() => {
                setselfAccept(true);
                onAccept();
              }}
            >
              Accept
            </Button>
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default Call;
