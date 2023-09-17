import React ,{useState,useEffect} from 'react';
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import {Container} from 'react-bootstrap';
import axios from 'axios';
import './secproject.css';

const SectionProjects = () => {
  const [Project,setProject] = useState([]);
  
  useEffect(() => {
    axios.get("Data.json")
      .then((res) => 
        setProject(res.data.Projects)
      )
    }, [])
  return (
    <Container fluid>
            <Swiper
        slidesPerView='auto'
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {
          Project.slice(1,6).map((Projects) =>(
                <SwiperSlide key={Projects.id}>
                  <img src={Projects.photo} alt="/#"/>
                </SwiperSlide>
          ))
        }

      </Swiper>
    </Container>
  )
}

export default SectionProjects
