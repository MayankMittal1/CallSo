import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { BsClockHistory, BsPeople } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Container, Row, Col } from 'reactstrap';

export const Navbar = () => {
  return (
    <Container
      fluid
      style={{
        position: 'fixed',
        bottom: '0',
        height: '8vh',
        background: 'rgba(255,255,255,0.05)',
        color: 'white',
        width: '100vw',
      }}
    >
      <Row className="d-flex align-items-center justify-content-around w-100 h-100">
        <Col className="d-flex justify-content-center">
          <Link to="/" style={{ color: 'white' }}>
            <IconContext.Provider value={{ size: '30px' }}>
              <div>
                <FiPhoneCall />
              </div>
            </IconContext.Provider>
          </Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <Link to="/" style={{ color: 'white' }}>
            <IconContext.Provider value={{ size: '30px' }}>
              <div>
                <BsClockHistory />
              </div>
            </IconContext.Provider>
          </Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <Link to="/" style={{ color: 'white' }}>
            <IconContext.Provider value={{ size: '30px' }}>
              <div>
                <BsPeople />
              </div>
            </IconContext.Provider>
          </Link>
        </Col>
        <Col className="d-flex justify-content-center">
          <Link to="/account" style={{ color: 'white' }}>
            <IconContext.Provider value={{ size: '30px' }}>
              <div>
                <MdOutlineAccountCircle />
              </div>
            </IconContext.Provider>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
