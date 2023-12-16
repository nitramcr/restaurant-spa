import './Intro.css'
import { useRef, useState } from 'react'
import { meal } from '../../constants'
import { BsFillPlayFill as PlayBtn, BsPauseFill as PauseBtn } from 'react-icons/bs'

export const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false)
    const vidRef = useRef()

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if (playVideo) {
            vidRef.current.pause()
        } else {
            vidRef.current.play()
        }
    }
    return (
        <div className='app__video'>
            <video
                src={meal}
                ref={vidRef}
                type='video/mp4'
                loop
                controls={false}
                muted
            />
            <div className='app__video-overlay flex__center'>
                <div
                    className='app__video-overlay_circle flex__center'
                    onClick={handleVideo}
                >
                    {playVideo
                        ? <PauseBtn color='#fff' fontSize={40} />
                        : <PlayBtn color='#fff' fontSize={40} />
                    }
                </div>
            </div>
        </div>
    )
}