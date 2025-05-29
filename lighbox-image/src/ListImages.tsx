// Mostramos todas las imágenes que hay
import dataImages from './data/images.json'
import { ItemImage } from './ItemImage';
const routeImages = '/assets/images/';


export const ListImages = () => {
    return (
        <section className='list-images'>
            {
                dataImages.map ( imgItem => (
                    <ItemImage 
                    key={imgItem.id}  
                    nameImage={routeImages + imgItem.image}
                    descriptionImage={imgItem.description} />
                ))
            }
        </section>
    )
}
