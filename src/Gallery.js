import React from "react";
import ImageGallery from "react-image-gallery";
import Container from "./Container";
import gallery from "./assets/images/home/nessgardens053c.jpg";

export default function Gallery() {
    const importAll = (r) => {
        return r.keys().map(r);
    }

    const images = importAll(require.context('./assets/images/engagement', false, /\.(png|jpe?g|svg)$/)).map(x => {
        return {
            original: x.default,
            thumbnail: x.default
        }
    });

    return (
        <Container bgImage={gallery} bgClasses='bg-left'>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Image Gallery</h1>
            <div className='pt-6'>
                <ImageGallery showBullets={false} items={images} lazyLoad={true} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
            </div>
        </Container>
    )
}