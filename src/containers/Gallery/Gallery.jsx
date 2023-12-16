import './Gallery.css'
import { useRef } from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import {
    BsInstagram as Instagram,
    BsArrowLeftShort as ArrowLeft,
    BsArrowRightShort as ArrowRight
} from 'react-icons/bs'

const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04
]

export const Gallery = () => {
    const scrollRef = useRef(null)

    const scroll = (dir) => {
        const { current } = scrollRef

        if (dir === 'left') {
            current.scrollLeft -= 300
        } else {
            current.scrollLeft += 300
        }
    }

    return (
        <div className='app__gallery flex__center'>
            <div className='app__gallery-content'>
                <SubHeading title='Instagram' />
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p className='p__opensans' style={{ color: '#aaa', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button type='button' className='custom__button'>View More</button>
            </div>

            <div className='app__gallery-images'>
                <div className='app__gallery-images_container' ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                            <img src={image} alt='gallery img' />
                            <Instagram className='gallery__image-icon' />
                        </div>
                    ))}
                </div>
                <div className='app__gallery-images_arrows'>
                    <ArrowLeft className='gallery__arrow-icon' onClick={() => scroll('left')} />
                    <ArrowRight className='gallery__arrow-icon' onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    )
}