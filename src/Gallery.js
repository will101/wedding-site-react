import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Container from "./Container";
import gif from "./assets/gifs/loading.gif";

const importAll = (r) => {
    return r.keys().map(r);
}

function getImages() {
    const importedImages = importAll(require.context('./assets/images/engagement', false, /\.(png|jpe?g|svg)$/));
    const images = importedImages.map((x, i) => {
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

    if (images && showLoadingGif === true) {
        setLoadingGif(false);
    }

    return (
        <>
            <Container bgImage='gallery' bgClasses='bg-left'>
                <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Image Gallery</h1>
                <div className='pt-6'>
                    {showLoadingGif ? (
                        <div className='font-roboto-condensed font-semibold text-2xl mx-auto w-60'>
                            <div><img alt="" className='w-auto h-24' src={gif} />
                                <span>Loading Images...</span></div>
                        </div>
                    ) : (
                        <ImageGallery showBullets={false} items={images} lazyLoad={false} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
                    )}
                </div>
            </Container>
        </>
    )
}