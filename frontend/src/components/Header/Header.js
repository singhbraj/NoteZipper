import { Form, FormControl, Nav, Navbar, NavDropdown,Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
     <Container>
    <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
        <Form>
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-sm-2 shadow-none"
        />
       
      </Form>
        </Nav>
      <Nav>
        <Nav.Link href="#action1">My Notes</Nav.Link>
        <NavDropdown title="Braj Kishor" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
         
        </NavDropdown>
      </Nav>
   
    </Navbar.Collapse>
    </Container>

</Navbar>
  )
}

export default Header