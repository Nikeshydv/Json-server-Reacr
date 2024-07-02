// import Header from "./header";
// import Data from "./data";
// import Footer from "./footer";



// import employee from "./employee";

// const nm="Nikesh";
// const emp="E123";
// const Sal="45784";

// import Student from "./student"

// const Student={
//   "name":"Rahul",
//   "city":"Bhopal",
//   "rollno":1221

// }

// const App=()=>{
//   return(
//     <>
//     <h1> welcome to cybrom</h1>
//     <Student rno={Student.rollno} nm={Student.name} ct={Student.city}   />
//     </>
//   )
// }

// export default App;


// import Employee from "./Employee.jsx";

// const App=()=>{
//   return(
//     <>
//   <Employee name={nm} empn={emp} sal={Sal} />
//     </>
//   )
// }

// export default App;



// const App=()=>{
//   return(
//     <>
//     <h1> welcome to cybrom !!!!</h1>
//     <Header/>
//     <Middle/>
//     <Footer/>
    
//     </>
//   )
// }

// export default App;


// const App=()=>{
//   return(
//     <>
//     <h1> This is form </h1>
//     Name:<input type="text"/>
//     <br/>
//     <br/>
//     Enter city:<input type="text"/>
//     </>
//   )
// }

// export default App;

// const name=["ram","shaym","mohan","sohan"];


// const App=()=>{
//   const ans=name.map((key)=>{
//     return(
//       <>
//       <h1>{key+key}</h1>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>welcome to cybrom bhopal</h1>
//     {ans}
//     </>
//   )
// }

// export default App;

// const age=[24,20,6,8,10,13];
// const myage=age.map((key)=>{
//   return(
//     <>
//     <h1>{key}</h1>
//     </>
//   )
// })
// const App=()=>{
//   return(
//     <>
//     <h1> welcoe to cybrom student age</h1>
//     {myage};
//     </>
//   )
// }

// export default App;




// const city=["bhopal","ujjain","indore","jabalpur","narmadapuram"];
// const mycity=city.map((key)=>{
//   return(
//     <>
//     <option>{key}</option>
//     </>
//   )
// })

// const App=()=>{
//   return(
//     <>
//     <select>{mycity}</select>
//     </>
//   )
// }

// export default App;



// const subject=["php","orcles","java","asp","python"];

// const mysub=subject.map((key)=>{
//   return(
//     <>
//     <li>{key}</li>
//     </>
//   )
// })

// const App=()=>{
// return(
//   <>
//   <ul>{mysub}</ul>
//   </>
// )
// }

// export default App;



// const student=[
//     {
//         "rollno":120,
//         "name":"nikesh",
//         "city":"Bhopal"
//     },
//     {
//         "rollno":121,
//         "name":"Abishek",
//         "city":"indore"
//     },
//     {
//         "rollno":122,
//         "name":"Raj",
//         "city":"hoshangabad"
//     },
//     {
//         "rollno":123,
//         "name":"Ritika",
//         "city":"delhi"
//     }
// ]

// const ans=student.map((key)=>{
//     return(
//         <>
        
//          <tr>
//             <td>{key.rollno}</td>
//             <td>{key.name}</td>
//             <td>{key.city}</td>
//         </tr>
        
            
        

//         </>
//     )
// })

// const App=()=>{
//     return(
//         <>
//         <h1>welcome to cybrom</h1>
//         <table border="2" width="500" bgcolor="pink">
//         <tr bgcolor="blue">
//             <th>Roll no</th>
//             <th>Name</th>
//             <th>city</th>
            
//         </tr>
//         {ans}
//         </table>
//         </>
//     )
// }

// export default App;


// import employee from "./employee"


// const ans =employee.map((key)=>{
//     return(
//         <>
//         <tr>
//             <td>{key.Empno}</td>
//              <td>{key.name}</td>
//             <td>{key.salary}</td>
//              <td>{key.city}</td>

//         </tr>
        
        
//         </>
//     )
// })

// const App=()=>{
//     return(
//         <>
//         <table border="2" width="500" bgcolor="pink" >
//             <tr>
//             <th>Employee number</th>
//             <th>Employee Name</th>
//             <th>Employee salary</th>
//             <th>Employee city</th>
//             </tr>
//             {ans}
//         </table>
        
//         </>
//     )
// }
// export default App;



// const myhead={
//     color:"blue",
//     fontFamily:"verdana"
// }

// const myhead1={
//     color:"red",
//     fontFamily:"arial",
//     textDecoration:"underline",
//     fontSize:"30px"
// }

// const App=()=>{
//     return(
//         <>
//         <h1 style={myhead}>This is the first heading</h1>
//         <h2 style={myhead1}>This is second heading</h2>
//         </>
//     )
// }

// export default App;
// import Cybrom from "./Cybrom";



// const App=()=>{
//     return(
//         <>
//         <h1 className="head1"> this is the heading</h1>
//         <div id="box1">
//             <div id="box2">
//                 <div id="box3">
//                     <div id="box4">CYBROM</div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default App;

/// thisis the boots strap button//

// import Button from 'react-bootstrap/Button';

// const App=()=>{
//     return(
//         <>
//         <h1>this is the button component</h1>
//          <Button variant="primary">Primary</Button>
//          <br/>
//          <Button variant="danger">Primary</Button>
//          <br/>
//          <Button variant="info">Primary</Button>
//          <br/>
//          <Button variant="success">Primary</Button>
//          <br/>
//          <Button variant="warning">Primary</Button>
//          <br/>
//         </>
//     )
// }

// export default App;



//alert//

// import Alert from 'react-bootstrap/Alert';
// import { Container } from 'react-bootstrap';
// const App=()=>{
//     return(
//         <>
//         <Container>
//         <h1> this is the alert box in bootstrap</h1>
//         <Alert  variant="primary" dismissible>
//          This is my alert box
//         </Alert>

//         <Alert  variant="info" dismissible>
//          This is my alert box
//         </Alert>


//         <Alert  variant="danger" dismissible>
//          This is my alert box
//         </Alert>
//         </Container>
//         </>
//     )
// }

// export default App;

// this is the bages in bootstrap

// import Badge from 'react-bootstrap/Badge';
// import { Container } from 'react-bootstrap';

// const App=()=>{
//     return(
//         <>
//         <Container>
//         <h1> this is the example of badges
//          Exapmle of Badges<Badge bg="primary">New</Badge></h1>
//          <h2> this is the example of badges
//          Exapmle of Badges<Badge bg="danger">New</Badge></h2>
//          <h3> this is the example of badges
//          Exapmle of Badges<Badge bg="info">New</Badge></h3>
//          </Container>
//         </>
//     )
// }

// export default App;



// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { Container } from 'react-bootstrap';

// const App=()=>{
//     return(
//         <>
//         <Container>
//         <ButtonGroup>
//             <Button variant='primary'>Left</Button>
//             <Button variant='danger'>Right</Button>
//             <Button variant='info'>middle</Button>
//         </ButtonGroup>
//         </Container>
//         </>
//     )
// }

// export default App;


// this is the example of drop down in bootstrap//


// import { Container, DropdownToggle } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';

// const App=()=>{
//     return(
//         <>
//         <Container>
//             <Dropdown>
//            <Dropdown.Toggle variant='danger' id='dropdown-basic'>
// Click to drop
//            </Dropdown.Toggle>
//            <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//       </Dropdown>
//         </Container>
//         </>
//     )
// }

// export default App;

// this is the nacv bar
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



// const App=()=>{
//     return(
//         <>
//      <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>


//         </>
//     )
// }

// export default App;

// //spinner in the bootstrap
// import Spinner from 'react-bootstrap/Spinner';

// const App=()=>{
//     return(
//         <>
//         <Container>
//         <Spinner animation="grow" />;
    

//         </Container>
//         </>
//     )
// }

// export default App;

//tabel

// import Table from 'react-bootstrap/Table';


// const App=()=>{
//     return(
//         <>
//         <Container>
//         <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td>Larry the Bird</td>
//           <td>@twitter</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//         </Container>
//         </>
//     )
// }

// export default App;



// const App=()=>{
//     return(
//         <>
//         <Container className='text-center border p-5 bg-danger border-5'>
//             <h1> This is cybrom class bhopal</h1>
//         </Container>
//         </>
//     )
// }

// export default App;





// const App=()=>{
//     return(
//         <>
//         <Container className="p-2 my-5 ">
//             <Row>
//              <Col className="border-5 bg-danger p-5 fs-1 text-bg-danger " > HELLO WE ARE DEVLOPER</Col>

//              <Col  className="border-3 bg-success p-5 fs-1 text-info"> HELLO WE ARE DATA ANALYST</Col>
//             </Row>
//         </Container>
//         </>
//     )
// }


// export default App;

// const App=()=>{
//     return(
//         <>
//         <Container className="bg-info p-5 border">
//             <Row>
//                 <Col md={1} className="fs-4 text-black p-5 text-center bg-danger">
//                 This is the first column
//                 </Col>

//                 <Col md={5} className="fs-4 text-black p-5 text-center  bg-danger"> this is second colimn</Col>

//                 <Col md={6} className="fs-4 text-black p-5 text-center  bg-danger">
//                 this is the third column</Col>
//             </Row>
//         </Container>
//         </>
//     )

// }

// export default App;

// import {Container,Row,Col} from "react-bootstrap";

// const App=()=>{
//     return(
//         <>
//         <Container>
//             <Row>
//                 <Col>
//                  This is the col1</Col>
//                 <Col> this is col2
//                 </Col>
//                 <Col> this is col3
//                 </Col>
//             </Row>
//             <Row>
//             <Col>
//             </Col>
//             <Col>
//             </Col>

//             </Row>
//         </Container>
//         </>
//     )
// }





// const App=()=>{
//     return(
//         <>
// <img src={myimg} width="300"/>
// <img src={myimg1} width="300"/>
// <img src={myimg2} width="225"/>
//         </>
//     )
// }


// export default App;



// import { Carousel } from 'bootstrap';
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';





const BasicExample=()=>{
    return (
        <>
      <Navbar expand="lg" className='bg-info p-1   navbar-dark bg-white'>
        <Container >
      

          {/* <Navbar.Brand   href="#home"className='text-black fs-2  ' ></Navbar.Brand> */
         /* <nav><img className=' m-2' src="public\logo.png.png" width="120 "   height="100"></img></nav>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='p-2 bg-black rounded-5 '>
            <Nav className=" m-2 p-1  mx-auto">
              <Nav.Link href="#home" className='text-danger fs-4 fw-bolder px-md-4'>Home</Nav.Link>
              <Nav.Link href="#link" className='text-danger fs-4 fw-bolder px-md-4'>AboutMe</Nav.Link>
              <Nav.Link href="#link" className='text-danger fs-4 fw-bolder px-md-4'>Experience</Nav.Link>
              <Nav.Link href="#link" className='text-danger fs-4 fw-bolder px-md-4'>Project</Nav.Link>
              <Nav.Link href="#link" className='text-danger fs-4 fw-bolder px-md-4'>Help?</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
          <NavDropdown title="Login" id="basic-nav-dropdown" className='text-black fs-5 m-auto'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item  >
                <NavDropdown.Item href="#action/3.3" className='text-black fs-4'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
      </Navbar>


      
    

<Carousel>
  <Carousel.Item>
    <img src="public/image4.jpg" width="100%" height="600" />
    <Carousel.Caption>
      <h3>Nikesh</h3>
      <p>BBA Graduated</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="public/image5.jpg" width="100%" height="600" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img src="public/image6.jpg" width="100%" height="600"/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<br />

<div className='my-4'>
    <Container>
    <h1 className='text-center fw-bolder   rounded-4'>ABOUT ME</h1>
    <p className='text-center fs-4 fw-bolder text-bg-danger rounded-3 my-3 '>I'M Nikesh Yadav</p>
    <p className='text-center fs-3 text-verdana my-4 '>I belong from hoshanagbassd city that is loacated in state madhya pradesh,<br/> I have completed my
                graduation from govt art and commerce college bhopal <br/> in 2020 in the feild of BBA
                (sales/marketing),as far as conceren of my family<br/> background,I have born and bought in farmer
                family,My hobby are to do farming <br/>and playing badmintion and love to explore the world.</p>
                </Container>
</div>










<div className='d-flex p-5 m-2 gap-5 justify-content-center'>
<Card style={{ width: '18rem' }}>
      <Card.Img className='my-4' variant="top" src="https://www.bbvaapimarket.com/wp-content/uploads/2014/09/115a8_html_strong.jpg" />
      <Card.Body>
        <Card.Title className='my-'></Card.Title>
        <Card.Text>
        "Certified in HTML by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        
        </Card.Text>
        <Button variant="primary">HTML Project</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969" />
      <Card.Body>
        <Card.Title className='my-'></Card.Title>
        <Card.Text>
        "Certified in JAVASCRPIT by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        </Card.Text>
        <Button variant="primary">JAVASCRPIT Project</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png" />
      <Card.Body>
        <Card.Title className='my-'></Card.Title>
        <Card.Text className='my-3'>
        "Certified in REACT/BOOTSTRAP by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        </Card.Text>
        <Button variant="primary">REACT Project</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img src="https://developer-blogs.nvidia.com/wp-content/uploads/2020/06/C-standard-parallelism-3x2-blog-format.png" />
      <Card.Body>
        <Card.Title className=''></Card.Title>
        <Card.Text className='my-4'>
        "Certified in HTML by Cybrom pvt limted"
        HTML, or HyperText Markup Language, is the standard markup language used to structure and define the meaning of web content. It's a set of codes also known as tags,
        </Card.Text>
        <Button variant="primary">CPP Project</Button>
      </Card.Body>
    </Card>

    
    </div>

    <div>
        <Container>
            <h3 className='text-center my-5 fw-bolder'>LET GET CONNECTED</h3>
        </Container>
    </div>

    <Container>
    <Form className='border bg-black text-danger fs-3 rounded-2 '>
      <Form.Group as={Row} className="mb-3 my-4 text-center" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='fs-2 fw-bold '>
          Email
        </Form.Label>
        <Col sm="4" className='my-2' >
          <Form.Control  placeholder='Enter your Email'  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className='fw-bold'>
          Company
        </Form.Label>
        <Col sm="4">
          <Form.Control type="password" placeholder="Company Name" />
        </Col>
      </Form.Group>
      <div className="col-12  mx-5 m-auto p-2 ">
    <button class="btn btn-primary" type="submit" data-mdb-ripple-init>Submit form</button>
  </div>
    </Form>
    </Container>
    <br/>

    <Container className='my-5'>
        <Row>
            <Col>
           <h1>
            Contact

           </h1>
           <Col>
           
           <div>
           <a href='https://github.com/Nikeshydv'>GITHUB</a>
           </div>
           </Col>
           
            </Col>
          
            <Col>
            <h1>About</h1>
            </Col>
        </Row>
    </Container>





</>
    );
  }
  



  export default BasicExample;

  import Carousel from 'react-bootstrap/Carousel';*/
  // import ExampleCarouselImage from 'components/ExampleCarouselImage';
  // import img from "./public/image1.png";



// const App=()=>{
//     return(
//         <>
     
//      <br/>

// <Carousel>
//   <Carousel.Item>
//     <img src="public/image1.png" width="100%" height="600" />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img src="public/image2.png" width="100%" height="600" />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img src="public/image3.png" width="100%" height="600"/>
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>
//         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//       </p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>

// <br />

       
//         </>
//     )
// }

// export default App;



// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Nopage from "./Nopage";


// const App=()=>{
//     return(
//         <>
//         <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Layout/>}>
//             <Route path="/home" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//            <Route path="*" element={<Nopage/>}/>
            
            
            
//             </Route>
//         </Routes>
//         </BrowserRouter>
//         </>
//     )
// }

// export default App;


import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";

import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Nopage from "./Nopage";
import About from "../About";
import Compnayservice from "./Pages/Companyservice";
import Productservice from "./Pages/Productservice";
import Sellsservice from "./Pages/Sellsservice";





const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
     <Route path="about" element={<About/>}/>
     
      <Route path="service" element={<Service/>}>
      <Route path="Compnayservice" element={<Compnayservice/>}/>
      <Route path="productservice" element={<Productservice/>}/>
      <Route path="sellservice" element={<Sellsservice/>}/>
      
      </Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;