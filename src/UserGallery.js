import React, { useEffect, useState } from "react";
import Container from "./Container";
import firebase from "firebase/app";
import "firebase/storage";
import ImageGallery from "react-image-gallery";

export default function UserGallery() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function getImages() {
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
        }
        getImages();
    }, []);

    return (
        <Container bgImage="upload">
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Images users have uploaded</h1>
            {images && images.length > 0 ? (
                <ImageGallery showBullets={false} items={images} lazyLoad={false} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
            ) : (
                <p>No images found</p>
            )}
        </Container>
    )
}