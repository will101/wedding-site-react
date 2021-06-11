import React, { useEffect, useState } from "react";
import Container from "./Container";
import firebase from "firebase/app";
import "firebase/storage";
import ImageGallery from "react-image-gallery";
import { useToasts } from 'react-toast-notifications';
import image from "./assets/images/bgImages/upload.jpg";
import gif from "./assets/gifs/loading.gif";

export default function UserGallery() {
    const [images, setImages] = useState([]);
    const [showLoadingGif, setLoadingGifVisibility] = useState(false);
    const { addToast } = useToasts();
    useEffect(() => {
        async function getImages() {
            try {
                const ref = firebase.storage().ref("/UploadedImages");
                const images = await ref.listAll();
                const promises = images.items.map((x) => {
                    return x.getDownloadURL();
                });
                Promise.all(promises).then(response => {
                    setImages(response.map(image => {
                        return {
                            original: image,
                            thumbnail: image
                        }
                    }));
                });
                setLoadingGifVisibility(false);
            }
            catch (err) {
                setLoadingGifVisibility(false);
                console.error(err);
                addToast('Error fetching user uploaded images', {
                    appearance: 'error',
                    autoDismiss: 'true',
                });
            }
        }
        getImages();
        setLoadingGifVisibility(true);
        //addToast doesn't need to be tracked
        //eslint-disable-next-line
    }, []);

    return (
        <Container bgImage={image}>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">User uploaded images</h1>
            {showLoadingGif ? (
                <div className='bg-gray-200 font-roboto-condensed font-semibold text-2xl mx-auto w-60'>
                    <div className="mx-auto"><img alt="" className='w-auto h-24' src={gif} />
                        <span className="p-8">Loading Images...</span></div>
                </div>
            ) : <></>}

            {images && images.length > 0 ? (
                <ImageGallery showBullets={false} items={images} lazyLoad={false} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
            ) : (
                <p>No images found</p>
            )}
        </Container>
    )
}