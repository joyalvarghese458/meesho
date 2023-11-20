import React from 'react'
import { Form } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  
  return (
    <div>
         <div className='fixed-top'>
           <Navbar expand="lg" className="bg-white border border-bottom">
        <Container>
          <Link to={'./'} style={{textDecoration:'none',marginTop:'2%',marginRight:'2%'}}><Navbar.Brand href="#home"><h1 style={{color:'rgb(96, 32, 64)'}}>meesho</h1></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Form>
          <Form.Control style={{width:'400px',height:'50px'}}
                type="text"
                
                placeholder="Try Saree,Kurti or Search by Product Code"
                className=" mr-sm-2"
              />
          </Form>
          
            <Nav className="w-100 justify-content-evenly mt-4">
              <p style={{borderRight:'1px solid',paddingRight:'15px'}}><Nav.Link href="#link"><i class="fa-solid fa-mobile"></i>Download App</Nav.Link></p>
              <p style={{borderRight:'1px solid',paddingRight:'15px'}}> <Nav.Link href="#link">Become A Supplier</Nav.Link></p>              
              <p style={{borderRight:'1px solid',paddingRight:'15px'}}><Nav.Link href="#link">News Room</Nav.Link></p>
              <Nav.Link href="#link"><div><div><i class="fa-regular fa-user"></i></div><div>Profile</div></div></Nav.Link>
              <Link style={{textDecoration:'none'}} to={"./cart"}><Nav.Link href="#link"><div><div><i class="fa-solid fa-cart-shopping"></i></div><div>Cart</div></div></Nav.Link>
  
              </Link>              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
  
      <Navbar expand="lg" className="bg-white border border-bottom">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" w-100 justify-content-evenly">
              <Nav.Link href="#link">Women Ethnic</Nav.Link>
              <Nav.Link href="#link">Women Western</Nav.Link>
              <Nav.Link href="#link">Men</Nav.Link>
              <Nav.Link href="#link">Kids</Nav.Link>
              <Nav.Link href="#link">Home & Kitchen</Nav.Link>
              <Nav.Link href="#link">Beauty & Health</Nav.Link>
              <Nav.Link href="#link">Jewellery & Accessories</Nav.Link>
              <Nav.Link href="#link">Bags & Footwear</Nav.Link>
              <Nav.Link href="#link">Electronics</Nav.Link>
              
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
         </div>

  

    </div>
  )
}

export default Header