import useMediaQuery from '@/app/hooks/useMediaQuery'
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
		img: '/images/japan.png',
		mobileImg: '/images/japan-mobile.png'
	},
	{
		id: 2,
		country: 'USA',
		img: '/images/usa.png',
		mobileImg: '/images/usa-mobile.png'
	},
	{
		id: 3,
		country: 'SPAIN',
		img: '/images/spain.png',
		mobileImg: '/images/spain-mobile.png'
	}
]

export const Destinations: FC = () => {
	const matches = useMediaQuery('only screen and (max-width: 760px)')
	return (
		<section className={styles.wrapper}>
			<Htag tag='h2'>POPULAR DESTINATIONS</Htag>
			<Swiper
				slidesPerView={matches ? 1 : 2}
				spaceBetween={100}
				centeredSlides={!matches}
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
							src={matches ? d.mobileImg : d.img}
							alt={d.country}
						/>
						<span className={styles.sliderText}>{d.country}</span>
					</SwiperSlide>
				))}
			</Swiper>
			<Button className={styles.findBtn}>
				{matches ? <ArrowRightMobile /> : <ArrowRight />}
				Find More
			</Button>
		</section>
	)
}
