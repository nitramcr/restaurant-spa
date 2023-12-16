import './SubHeading.css'
import images from '../../constants/images.js'
import { PropTypes } from 'prop-types'

export const SubHeading = ({ title }) => (
    <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>{title}</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' />
    </div>
)

SubHeading.propTypes = {
    title: PropTypes.string.isRequired
}