import { useMediaQuery } from '@react-hook/media-query'
import { FC } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Button } from '../../ui/Button/Button'
import { Htag } from '../../ui/Htag/Htag'
import ArrowRightMobile from './arrow-right-mobile.svg'
import ArrowRight from './arrow-right.svg'
import styles from './Destinations.module.scss'

const destinations = [
	{
		id: 1,
		country: 'JAPAN',
		img: './images/japan.png',
		mobileImg: './images/japan-mobile.png'
	},
	{
		id: 2,
		country: 'USA',
		img: './images/usa.png',
		mobileImg: './images/usa-mobile.png'
	},
	{
		id: 3,
		country: 'SPAIN',
		img: './images/spain.png',
		mobileImg: './images/spain-mobile.png'
	}
]

export const Destinations: FC = () => {
	const matches = useMediaQuery('only screen and (min-width: 760px)')
	console.log(matches)
	return (
		<section className={styles.wrapper}>
			<Htag tag='h2'>POPULAR DESTINATIONS</Htag>
			<Swiper
				slidesPerView={matches ? 2 : 1}
				spaceBetween={100}
				centeredSlides={matches}
				autoplay={{ delay: 3000 }}
				initialSlide={1}
				className={styles.swiper}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				wrapperTag='ul'
			>
				{destinations.map((d) => (
					<SwiperSlide tag='li' className={styles.swiperSlide} key={d.id}>
						<img
							className={styles.sliderImg}
							src={matches ? d.img : d.mobileImg}
							alt={d.country}
						/>
						<span className={styles.sliderText}>{d.country}</span>
					</SwiperSlide>
				))}
			</Swiper>
			<Button className={styles.findBtn}>
				{matches ? <ArrowRight /> : <ArrowRightMobile />}
				Find More
			</Button>
		</section>
	)
}
