import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <header style={{height:'50vh'}} className='bg-body-tertiary pt-5'>
        <div className='container-fluid d-flex justify-content-evenly'>
            <div className='row'>
                <div className='col-lg-3'>
                    <h2>Shop Non-Stop on Meesho</h2>
                    <p>Trusted by more than 1 Crore Indians <br />
                       Cash on Delivery | Free Delivery</p>
                       <div>
                       
                       </div>
                </div>
                <div className='col-lg-2'>
                    <h6 className='mb-3'>Careers</h6>
                    <h6 className='mb-3'>Become a supplier</h6>
                    <h6 className='mb-3'>Hall of Fame</h6>
                    <h6 >Sitemap</h6>
                </div>
                <div className='col-lg-2'>
                    <h6 className='mb-3'>Legal and Policies</h6>
                    <h6 className='mb-3'>Meesho Tech Blog</h6>
                    <h6>Notices and Returns</h6>
                </div>
                <div className='col-lg-2'>
                    <h5>Reach out to us</h5>
                    <div className='d-flex justify-content-evenly w-100'>
                        <p style={{color:'#4185fb',fontSize:'25px'}}><i class="fa-brands fa-facebook"></i></p>
                        <p className='ms-3' style={{color:'#f56161',fontSize:'25px'}}><i class="fa-brands fa-instagram"></i></p>
                        <p className='ms-3' style={{color:'red',fontSize:'25px'}}><i class="fa-brands fa-youtube"></i></p>
                        <p className='ms-3' style={{color:'#08067a',fontSize:'25px'}}><i class="fa-brands fa-linkedin"></i></p>
                        <p className='ms-3' style={{color:'#4185fb',fontSize:'25px'}}><i class="fa-brands fa-twitter"></i></p>
                        
                    </div>
                </div>
                <div className='col-lg-3'>
                    <h5>Contact Us</h5>
                    <p>Fashnear Technologies Private <br /> Limited, <br />
    CIN: U74900KA2015PTC082263 <br />
    06-105-B, 06-102, (138 Wu) <br /> Vaishnavi Signature, No. 78/9, <br /> Outer Ring Road, Bellandur, <br /> Varthur Hobli, Bengaluru-560103, <br /> Karnataka, India <br />
    E-mail address: <br /> query@meesho.com <br />
    © 2015-2023 Meesho.com</p>
                </div>
            </div>

        </div>
        </header>
    </div>
  )
}

export default Footer