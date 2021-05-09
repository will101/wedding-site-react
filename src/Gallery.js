import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Container from "./Container";
import gif from "./assets/gifs/loading.gif";
import image from "./assets/images/bgImages/nessgardens053c-min.jpg";

const importAll = (r) => {
    return r.keys().map(r);
}

function getImages() {
    const importedImages = importAll(require.context('./assets/images/engagement', false, /\.(png|jpe?g|svg)$/));
    const images = importedImages.map(x => {
        return {
            original: x.default,
            thumbnail: x.default
        }
    });
    return images;
}

export default function Gallery() {
    const [showLoadingGif, setLoadingGif] = useState(true);
    const images = getImages();

    if (images && images.length > 0 && showLoadingGif === true) {
        setLoadingGif(false);
    }

    return (
        <>
            <Container bgImage={image} bgClasses='bg-left'>
                <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Image Gallery</h1>
                <div className='pt-6'>
                    {showLoadingGif ? (
                        <div className='bg-white font-roboto-condensed font-semibold text-2xl mx-auto w-60'>
                            <div className="mx-auto"><img alt="" className='w-auto h-24' src={gif} />
                                <span className="p-8">Loading Images...</span></div>
                        </div>
                    ) : (
                        <ImageGallery showBullets={false} items={images} lazyLoad={false} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
                    )}
                </div>
            </Container>
        </>
    )
}