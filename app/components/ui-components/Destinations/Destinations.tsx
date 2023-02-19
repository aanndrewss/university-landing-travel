import { FC } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Button } from '../../ui/Button/Button'
import { Htag } from '../../ui/Htag/Htag'
import ArrowRight from './arrow-right.svg'
import styles from './Destinations.module.scss'

const destinations = [
	{
		id: 1,
		country: 'JAPAN',
		img: './images/japan.png'
	},
	{
		id: 2,
		country: 'USA',
		img: './images/usa.png'
	},
	{
		id: 3,
		country: 'SPAIN',
		img: './images/spain.png'
	}
]

export const Destinations: FC = () => {
	return (
		<section className={styles.wrapper}>
			<Htag tag='h2'>POPULAR DESTINATIONS</Htag>
			<Swiper
				slidesPerView={2}
				spaceBetween={200}
				centeredSlides={true}
				autoplay={{ delay: 3000 }}
				initialSlide={1}
				className={styles.swiper}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				wrapperTag='ul'
			>
				{destinations.map((d) => (
					<SwiperSlide tag='li' className={styles.swiperSlide} key={d.id}>
						<img className={styles.sliderImg} src={d.img} alt={d.country} />
						<span className={styles.sliderText}>{d.country}</span>
					</SwiperSlide>
				))}
			</Swiper>
			<Button className={styles.findBtn}>
				<ArrowRight />
				Find More
			</Button>
		</section>
	)
}
