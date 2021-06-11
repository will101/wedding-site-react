import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import { useForm } from "react-hook-form";
import { useToasts } from 'react-toast-notifications';
import Container from "./Container";
import image from "./assets/images/bgImages/upload.jpg";
import moment from "moment";
import imageCompression from 'browser-image-compression';

export default function Upload() {
    const [errorMessage, setErrorMessage] = useState();
    const [showError, toggleErrorVisibility] = useState(false);
    const { handleSubmit, register, reset } = useForm();
    const { addToast } = useToasts();

    //Dont need to worry about pricing, from firebase website:
    /*
    Our Spark plan is a great place to develop your app for free. You get all the free Firebase features (Analytics, the Notifications composer, Crashlytics, and so on)
    and generous amounts of our paid infrastructure features. However, if you exceed your Spark plan resources in a calendar month, your app will be shut off for the remainder
    of that month. In addition, Google Cloud features are not available when using the Spark plan. 
    */
    const onSubmit = (values) => {
        //clear errors on submission
        toggleErrorVisibility(false);
        setErrorMessage("");

        //check number of images is 10
        if (values?.file.length > 10) {
            addToast("You can only upload 10 images at a time", {
                appearance: 'warning',
                autoDismiss: 'true'
            });
            return;
        }

        //check file is an image, and the user entered the correct date
        const validDate = moment(values?.date).isSame('June 12,2021');
        const validFileTypes = ['image/jpeg', 'image/png'];
        const fileListAsArray = [...values?.file]; //convert filelist to proper normal js array
        const filesAreValid = fileListAsArray && fileListAsArray.length > 0 && fileListAsArray.filter(x => validFileTypes.includes(x.type))?.length === values?.file?.length;
        if (filesAreValid === false) {
            toggleErrorVisibility(true);
            setErrorMessage("Invalid file type. File must be a png or jpeg");
            addToast("Invalid file type. File must be a png or jpeg", {
                appearance: 'error',
                autoDismiss: 'true',
            });
            return;
        }

        if (values && values?.file?.length > 0 && validDate === true && filesAreValid === true)
            try {
                for (let i = 0; i < values?.file.length; i++) {
                    let ref = firebase.storage().ref("/UploadedImages/" + values?.file[i].name);
                    const options = {
                        maxSizeMB: 1,
                        maxWidthOrHeight: 1920,
                        useWebWorker: true
                    }
                    try {
                        //compress the image here to try help loading of images on gallery
                        imageCompression(values.file[i], options).then(response => {
                            ref.put(response); //the api call that uploads the img to firebase
                        });
                    }
                    catch (err) {
                        console.error(err);
                        addToast("Error compressing and uploading images", {
                            appearance: 'error',
                            autoDismiss: 'true',
                        });
                        return;
                    }
                }
                addToast(`Success: ${values?.file?.length} ${values?.file?.length > 1 ? 'images' : 'image'} uploaded`, {
                    appearance: 'success',
                    autoDismiss: 'true'
                });
                reset();
            }
            catch (e) {
                console.error(e)
                addToast("Error uploading images", {
                    appearance: 'error',
                    autoDismiss: 'true',
                });
            }
        else {
            toggleErrorVisibility(true);
        }
    }
    return (
        <Container bgImage={image}>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Upload Your Images</h1>
            <div className="bg-white md-100 lg:w-2/3 p-4 mx-auto rounded-md">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="mr-6 font-bold">Upload up to 10 images: </label>
                            <input className="" type="file" name="file" {...register("file")} multiple={true} />
                        </div>
                        <div>
                            <label className="mr-6 font-bold">Enter the date of the wedding</label>
                            <input type="date" name="date" {...register("date")} />
                            {showError ? (
                                <div className="text-red-600"> {errorMessage ?? 'Wrong date entered or no files are attached'}</div>
                            ) : <></>}
                        </div>
                        <div className="pt-2">
                            <button className="p-2 font-roboto bg-blue-600 text-white rounded-lg" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
}