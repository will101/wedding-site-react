import React from "react";
import ImageGallery from "react-image-gallery";
import Container from "./Container";

export default function Gallery() {
    const importAll = (r) => {
        return r.keys().map(r);
    }

    const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/)).map(x => {
        return {
            original: x.default,
            thumbnail: x.default
        }
    });

    return (
        <Container bgImage='gallery'>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Image Gallery</h1>
            <div className='pt-6'>
                <ImageGallery showBullets={false} items={images} lazyLoad={true} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
            </div>
        </Container>
    )
}