import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../../public/vercel.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const slide_img = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

export default function Home() {
  return (
    <>
      <Splide options={{rewind: true, gap: '1rem'}}>
        {slide_img.map((img, i) => {
            return (
              <SplideSlide className="w-full overflow-hidden relative" style={{ height: '30vh' }} key={i}>
                <img src={img} alt={img} title={img} layout='fill' width={`100%`} height={`100%`} quality={100 || 75} />
                <p className='title'>{img}</p> 
              </SplideSlide>
            );
        })}
        
      </Splide>
    </>
  )
}