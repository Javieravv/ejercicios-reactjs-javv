// Mostramos la imagen 

import { FC, useState } from "react";

interface Props {
    nameImage: string;
    descriptionImage?: string;
}

export const ItemImage: FC<Props> = ({ nameImage, descriptionImage = '' }) => {
    const [ctrlviewImage, setCtrlviewImage] = useState(false)
    return (
        <>
            <div
                className="image-container"
                onClick={() => setCtrlviewImage(!ctrlviewImage)}
            >
                <img src={nameImage} alt={nameImage} />
                <div className="description">
                    <h3>{descriptionImage}</h3>
                </div>
            </div>

            {/* mostramos la imagen en la pantalla */}
            {
                ctrlviewImage && (
                    <div
                        className={`lightbox-image`}
                    >
                        <div className="lightbox-image__img ">
                            <img src={nameImage} alt={nameImage} />
                            <div
                                className="bottonclose"
                                onClick={() => setCtrlviewImage(!ctrlviewImage)}
                            >X</div>
                            <h3>{descriptionImage}</h3>
                        </div>
                    </div>
                )
            }
        </>

    )
}
