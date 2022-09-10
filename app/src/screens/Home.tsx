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

export const Home = () => {
  const { publicKey, wallet, signTransaction, signAllTransactions } = useWallet();
  const [to, setTo] = useState('');
  const [socket, setSocket] = useState<any>(undefined);
  const [call, setCall] = useState(false);
  const [inCall, setInCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [accept, setAccept] = useState(false);
  useEffect(() => {
    if (publicKey) {
      initiateSocket(publicKey.toBase58());
      listenToCall((data: any) => {
        setInCall(true);
        setCaller(data.from);
      });
      listenAcceptCall((data: any) => {
        setAccept(true);
        joinCall(2, 2, data.from.slice(0, 10));
      });
    }
  }, [publicKey]);
  return (
    <Container style={{ height: '92vh' }} className="d-flex align-items-center">
      <Modal
        isOpen={call}
        toggle={() => {
          setCall(!call);
        }}
      >
        <ModalBody>
          <Row>
            <Col>Calling {to}</Col>
          </Row>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={inCall}
        toggle={() => {
          setInCall(!inCall);
        }}
      >
        <ModalBody>
          <Row>
            <Col>Call Recieved from {caller}</Col>
          </Row>
          <Row>
            <Col>
              <Button
                onClick={() => {
                  startBasicCall(1, 1, publicKey?.toBase58().slice(0, 10), caller, publicKey?.toBase58() as string);
                }}
              >
                Accept
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Row>
        <Col className="col-11">
          <Input
            type="text"
            placeholder="Wallet"
            onChange={(e) => {
              setTo(e.target.value);
            }}
          ></Input>
        </Col>
        <Col className="col-1">
          <Button
            onClick={() => {
              setCall(true);
              handleOfferCall(to, publicKey?.toBase58() as string);
            }}
          >
            Call
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
