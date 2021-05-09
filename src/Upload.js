import React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import { useForm } from "react-hook-form";
import { useToasts } from 'react-toast-notifications';
import Container from "./Container";

//TODO: Add some validation to the website - get them to enter date of wedding
// Dont use yup validation here as it breaks the form
export default function Upload() {
    const { handleSubmit, register } = useForm();
    const { addToast } = useToasts();

    const onSubmit = (values) => {
        if (values?.file.length > 5) {
            addToast("You can only upload 5 images at a time", {
                appearance: 'warning',
                autoDismiss: 'true'
            });
            return;
        }

        try {
            for (let i = 0; i < values?.file.length; i++) {
                let ref = firebase.storage().ref("/UploadedImages/" + values?.file[i].name);
                ref.put(values.file[i]);
            }
            addToast(`Success: ${values?.file?.length} ${values?.file?.length > 1 ? 'images' : 'image'} uploaded`, {
                appearance: 'success',
                autoDismiss: 'true',
            });
        }
        catch (e) {
            console.error(e)
            addToast("Error uploading images", {
                appearance: 'error',
                autoDismiss: 'true',
            });
        }
    }

    return (
        <Container bgImage='upload'>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Upload Your Images</h1>
            <div className="bg-white w-1/2 p-4 mx-auto rounded-md">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} sc>
                        <label className="mr-6">Upload up to 5 images: </label>
                        <input className="" type="file" name="file" {...register("file")} multiple={true} />
                        <div className="pt-2">
                            <button className="p-2 font-roboto bg-blue-600 text-white rounded-lg" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
}