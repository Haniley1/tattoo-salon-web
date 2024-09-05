'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import styles from './styles.module.scss'
import Image from "next/image"
import 'swiper/css'
import HeaderPhoto1 from '@/app/_assets/img/header-photo-1.png'
import HeaderPhoto2 from '@/app/_assets/img/header-photo-2.jpg'

export const Header = () => {
  return (
    <div className={styles.root}>
      <Swiper className={styles.swiper}>
        <SwiperSlide>
          <Image className={styles.photo} src={HeaderPhoto1} alt="header-photo-1"  />
        </SwiperSlide>
        <SwiperSlide>
          <Image className={styles.photo} src={HeaderPhoto2} alt="header-photo-2"  />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
