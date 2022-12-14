import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';


import sliderImg01 from "../../images/slide1.jpg";
import sliderImg02 from "../../images/slide2.jpg";
import sliderImg03 from "../../images/slide3.jpg";
import sliderImg04 from "../../images/slide4.jpg";
import sliderImg05 from "../../images/slide5.jpg";

function Home() {
	
	return (
		<>
			<Swiper
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				effect="fade"
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				
				autoplay={{
					"delay": 5000,
					"disableOnInteraction": false
				}}
				navigation
				pagination={{
          clickable: true,
				}}
			>
				<SwiperSlide><img src={sliderImg01} alt="画像"/></SwiperSlide>
				<SwiperSlide><img src={sliderImg02} alt="画像"/></SwiperSlide>
				<SwiperSlide><img src={sliderImg03} alt="画像"/></SwiperSlide>
				<SwiperSlide><img src={sliderImg04} alt="画像"/></SwiperSlide>
				<SwiperSlide><img src={sliderImg05} alt="画像"/></SwiperSlide>
			</Swiper>

			<div className="page-container">
				<h1 className="mt-6 page__title">React v18</h1>
				<h2 className="mt-6 text-center">初めてのReact</h2>

				<Container className="mt-6">
					<Row>
						<Col md={6}>
							<Card style={{ margin: '2rem 0 0 0', width: '100%' }}>
								<Card.Img variant="top" src={sliderImg01} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card style={{ margin: '2rem 0 0 0', width: '100%' }}>
								<Card.Img variant="top" src={sliderImg02} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card style={{ margin: '2rem 0 0 0', width: '100%' }}>
								<Card.Img variant="top" src={sliderImg03} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col md={6}>
							<Card style={{ margin: '2rem 0 0 0', width: '100%' }}>
								<Card.Img variant="top" src={sliderImg04} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>

				<Container className="mt-6">
					<Row>
						<Col md={4}>
							<img
								className="d-block w-100"
								src={sliderImg01}
								alt="First slide"
							/>
						</Col>
						<Col md={4}>
							<img
								className="d-block w-100"
								src={sliderImg02}
								alt="First slide"
							/>
						</Col>
						<Col md={4}>
							<img
								className="d-block w-100"
								src={sliderImg03}
								alt="First slide"
							/>
						</Col>
					</Row>
				</Container>

				<Container className="mt-6">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={sliderImg01}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={sliderImg02}
								alt="Second slide"
							/>
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={sliderImg03}
								alt="Third slide"
							/>
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>

				<Container className="mt-6">
					<Row className="mt-6">
						<Col md={4}>
							<img
								className="d-block w-100"
								src={sliderImg03}
								alt="Third slide"
							/>
						</Col>
						<Col md={8}>
							<Card style={{ width: '100%' }}>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Row className="mt-6">
						<Col md={4}>
							<img
								className="d-block w-100"
								src={sliderImg02}
								alt="Third slide"
							/>
						</Col>
						<Col md={8}>
							<Card style={{ width: '100%' }}>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Row className="mt-6">
						<Col md={4}>
							<img
								className="d-block w-100"
								src={sliderImg01}
								alt="Third slide"
							/>
						</Col>
						<Col md={8}>
							<Card style={{ width: '100%' }}>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>

			</div>

		</>
	);
}

export default Home;