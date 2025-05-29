import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    background: 'transparent',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
}

const slideImages = [
    {
        url: './images/City1.jpg',
        caption: 'Image 1'
    },
    {
        url: './images/City2.jpg',
        caption: 'Image 2'
    },
    {
        url: './images/City3.jpg',
        caption: 'Image 3'
    },
    {
        url: './images/City4.jpg',
        caption: 'Image 4'
    },
]

export const Slideimages = () => {
    return (
        <div>
            <Fade>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
