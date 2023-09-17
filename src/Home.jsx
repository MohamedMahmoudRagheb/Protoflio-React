import React from 'react'
import NavBar from './NavBar'
import { Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './App.css'
import SectionProjects from './SectionProjects'
import EmailSection from './EmailSection'
const Home = () => {
  return (
    <div className='body'>
      <NavBar/>
      <section className='One'>
        <Container>
          <Row>
            <Col md={7} sm={12}>
              <div className='info wow slideInLeft' data-wow-duration="1.5s" data-wow-delay="0.1s">
                <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
                <h2>Turn your website into a customer-acquisition engine</h2>
                <h4>We build marketing websites that help you sell on autopilot</h4>
                <button>Let's talk</button>
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div className='Photo wow slideInRight' data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="#" className='Waves'/>
                  <img src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="#" className='labtop'/>
                  <div className='Gimg'>
                      <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="#"/>
                  </div>
                  <div className='Fimg'>
                      <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="#"/>
                  </div>
                  <div className='Wimg'>
                      <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="#"/>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='two'>
        <Container>
          <Row>
            <Col md={6} className='photo2  wow slideInLeft' data-wow-duration="1.5s" data-wow-delay="0.1s">
            <img src="images/623506fac432155edb494f48_Topology-2 (1).svg" alt="#" className='Wave2' />
            <img src="images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="#" className='explain' />
            </Col>
            <Col md={6} className='info2  wow slideInRight' data-wow-duration="1.5s" data-wow-delay="0.1s">
            <button>the dream</button>
            <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
            </Col>
          </Row>
        </Container>
      </section>
    <section className='There' id='lstest'>
      <div className='Title'>
          <h1>Latest builds</h1>
          <Link to="/Project">View Projects</Link>
      </div>
          <SectionProjects/>
    </section>
    <section className='four' id='process'>
          <h1>How it's done.</h1>
          <Container>
            <Row className='contain'>
              <Col className='bg_Wave'>
              <img src="images/623506fac432155edb494f48_Topology-2 (1).svg" alt="#" />
              </Col>
              <Col md={6} sm={12} className='column1'>
                    <div className='Jobs1'>
                      <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="#" />
                      <div className='info3'>
                        <h4>UX/UI Design</h4>
                        <p>Where concepts turn into a strategic user-experience.</p>
                      </div>
                    </div>
                    <div className='Jobs1'>
                    <img src="images/6296648937731de4e98d9a5a_zapier-seeklogo.com 2.svg" alt="#" />
                    <div className='info3'>
                        <h4>Webflow Development</h4>
                        <p>Where design turns into code.</p>
                      </div>
                    </div>
              </Col>
              <Col md={6} sm={12} className='column2'>
                    <div className='Jobs2'>
                    <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="#" />
                    <div className='info3'>
                        <h4>System Automation</h4>
                        <p>Where busywork gets delegated.</p>
                      </div>
                    </div>
                    <div className='Jobs2'>
                    <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="#" />
                    <div className='info3'>
                        <h4>SEO</h4>
                        <p>Where customers come flooding in.</p>
                      </div>
                    </div>
              </Col>
            </Row>
          </Container>
    </section>

    <section className='five' id="services">
      <h1>Why Webflow.</h1>
        <Container>
          <Row className='wow fadeInUp'>
            <Col md={4} sm={12} >
              <div className='REASONS'>
              <h4>REASON 1</h4>
              <h2>Next-Level Storytelling</h2>
              <img src="images/62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="#" />
              </div>
            </Col>
            <Col md={4} sm={12}>
            <div className='REASONS'>
            <h4>REASON 2</h4>
              <h2>Unbelievable Performance</h2>
              <img src="images/62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg" alt="#" />
              </div>
            </Col>
            <Col md={4} sm={12}>
            <div className='REASONS'>
            <h4>REASON 3</h4>
              <h2>Developer_Free Tweaks</h2>
              <img src="images/62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1.svg" alt="#" />
              </div>
            </Col>
          </Row>
        </Container>
    </section>
    <EmailSection/>
    </div>
  )
}

export default Home
