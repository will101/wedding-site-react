import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import Container from "./Container";
import gif from "./assets/gifs/loading.gif";
import image from "./assets/images/bgImages/nessgardens053c-min.jpg";
import { useToasts } from 'react-toast-notifications';
import "firebase/storage";
import firebase from "firebase/app";

//TODO: 
// - Make success message on user upload more obvious
// - Investigate chrome issue/uploading on mobile issue?
// - Make all pages look bearable on mobiles
export default function Gallery() {
    const [images, setImages] = useState([]);
    const [showLoadingGif, setLoadingGifVisibility] = useState(false);
    const { addToast } = useToasts();

    useEffect(() => {
        async function getImages() {
            try {
                const ref = firebase.storage().ref("/PreweddingImages");
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
        <>
            <Container bgImage={image} bgClasses='bg-left'>
                <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Image Gallery</h1>
                <h2 className="text-black text-md pt-2 mb-6 font-roboto">Images from the photographers will be uploaded here after the wedding. Below are some from our pre-wedding shoot.</h2>
                <div className='pt-6'>
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
                </div>
            </Container>
        </>
    )
}