import React, { useState } from 'react'

import { greetings } from '../portfolio'
import Headroom from 'react-headroom'
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap'

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('')
  const onExiting = () => setCollapseClasses('collapsing-out')

  const onExited = () => setCollapseClasses('')

  return (
    <>
      <header className='header-global'>
        <Navbar className='navbar-main navbar-transparent navbar-light' expand='lg' id='navbar-main'>
          <Headroom>
            <Container>
              <NavbarBrand href='/' className='mr-lg-5'>
                <h2 className='text-white' id='nav-title'>
                  {greetings.name}
                </h2>
              </NavbarBrand>
              <button className='navbar-toggler' aria-label='navbar_toggle' id='navbar_global'>
                <span className='navbar-toggler-icon' />
              </button>
              <UncontrolledCollapse toggler='#navbar_global' navbar className={collapseClasses} onExiting={onExiting} onExited={onExited}>
                <div className='navbar-collapse-header'>
                  <Row>
                    <Col className='collapse-brand' xs='6'>
                      <h3 className='text-black' id='nav-title'>
                        {greetings.name}
                      </h3>
                    </Col>
                    <Col className='collapse-close' xs='6'>
                      <button className='navbar-toggler' id='navbar_global'>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
              </UncontrolledCollapse>
            </Container>
          </Headroom>
        </Navbar>
      </header>
    </>
  )
}

export default Navigation
