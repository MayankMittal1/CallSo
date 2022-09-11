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
  leaveCall,
  handleLeaveCall,
  listenLeaveCall,
} from '../helpers/socket';
import Call from './Call';
import OutCall from './OutCall';

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
        console.log('recieved');
        setInCall(true);
        setCaller(data.from);
      });
      listenLeaveCall((data: any) => {
        setAccept(false);
        setCaller('');
        setInCall(false);
        setCall(false);
        setTo('');
        leaveCall();
      });
    }
  }, [publicKey]);
  return (
    <>
      {inCall ? (
        <Call
          caller={caller}
          onAccept={() => {
            startBasicCall(1, 1, publicKey?.toBase58().slice(0, 10), caller, publicKey?.toBase58() as string);
          }}
          onReject={() => {
            setCall(false);
            leaveCall();
            setAccept(false);
            setCaller('');
            setInCall(false);
            setCall(false);
            setTo('');
            handleLeaveCall(caller, publicKey?.toBase58() as string);
          }}
        />
      ) : call ? (
        <OutCall
          to={to}
          onReject={() => {
            setCall(false);
            leaveCall();
            setAccept(false);
            setCaller('');
            setInCall(false);
            setCall(false);
            setTo('');
            handleLeaveCall(to, publicKey?.toBase58() as string);
          }}
        />
      ) : (
        <Container style={{ height: '92vh' }} className="d-flex align-items-center">
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
      )}
    </>
  );
};
