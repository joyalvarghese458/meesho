import React from 'react'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch'
import Badge from 'react-bootstrap/Badge';

function Home() {
    const data = useFetch('https://fakestoreapi.com/products')
    console.log(data);
  return (
    <div>
        <div className='container w-100 text-align-center align-items-center d-flex justify-content-center'>
            <img src={img1} style={{width:'80%',marginTop:"17%"}} alt="" />
        </div>
        <div  className='container w-100 text-align-center align-items-center d-flex justify-content-center mt-5'>
            <h1>Top Categories to choose from</h1>
        </div>
        <div className='container w-100 text-align-center align-items-center d-flex justify-content-center mt-5'>
            <img src={img2} style={{width:'80%',}} alt="" />
        </div>
        <div className='container w-100 text-align-center align-items-center d-flex justify-content-center mt-5'>
            <img src={img3} style={{width:'80%',}} alt="" />
        </div>
        <div className='container w-100 text-align-center align-items-center d-flex justify-content-center mt-5'>
            <img src={img4} style={{width:'80%',}} alt="" />
        </div>

        <div className='container'>
            <Row>
                <Col lg={2}>
                    <p className=' fs-4 mt-5'>products for you</p>
                    <select className='border' name="" id="" style={{width:'250px',height:'40px'}}>
                        <option value="">New Arrivals</option>
                        <option value="">Relavance</option>
                        <option value="">Price(High to Low)</option>
                        <option value="">Price(Low to High)</option>
                        <option value="">Ratings</option>
                        <option value="">Discount</option>
                    </select>

                    <div className='border mt-3 p-2' style={{width:'250px'}}>
                         <h5>Filters</h5>
                         <p>1000+ Products</p>
                         <hr />
                         <form>
                           <select className='border' name="" id="" style={{width:'230px',height:'40px'}}>
                          <option value="">Catogory</option>
                          <option value="">Relavance</option>
                          <option value="">Price(High to Low)</option>
                          <option value="">Price(Low to High)</option>
                          <option value="">Ratings</option>
                          <option value="">Discount</option>
                      </select>
                         </form>
                         <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Genter</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Fabric</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Oxfords</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Dail Shape</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Colour</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Smart Coins</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Price</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Meesho Mall</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Occation</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Combo of</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Kurtha Fabric</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Discount</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Rating</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Size</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Combo</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Reversable</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Used For</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Body Material</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Material</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Bottom Length</option>
                               </select>
                             </form>
                             <hr />
                         <form action=""> 
                               <select className='border' style={{width:'230px',height:'40px'}} name="cars" id="cars">
                               <option value="">Print Or Pattern</option>
                               </select>
                             </form>
                             <hr />

                    </div>
                </Col>
                <Col lg={10}>

                <Row className=' ms-5 me-5' style={{marginTop:'100px'}}>
            {data?.length>0?
            data.map((item)=>( <Col className='mb-5'>
            <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,10)}...</Card.Title>
        <Card.Text>
         <h5>₹ {item.price}</h5>
         <h6>
        <Badge bg="secondary">Free Delivery</Badge>
      </h6>
      <h5>
       <Badge bg="success">{item.rating.rate}  <i class="fa-solid fa-star"></i></Badge>
      </h5>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            
            ))
               :
            <p>nothing to display</p>
            }
        </Row>

        <Row className='ms-5 me-5'>
            {data?.length>0?
            data.map((item)=>( <Col className='mb-5'>
            <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,10)}...</Card.Title>
        <Card.Text>
        <h5>₹ {item.price}</h5>
         <h6>
        <Badge bg="secondary">Free Delivery</Badge>
      </h6>
      <h5>
       <Badge bg="success">{item.rating.rate}  <i class="fa-solid fa-star"></i></Badge>
      </h5>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            
            ))
               :
            <p>nothing to display</p>
            }
        </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Home