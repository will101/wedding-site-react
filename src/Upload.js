import React from "react";
import { useForm } from "react-hook-form";
import Container from "./Container";

export default function Upload() {
    const { handleSubmit, register } = useForm();


    const onSubmit = (values) => {
        console.log(values);
        //Upload to firebase
        //https://firebase.google.com/docs/storage/web/upload-files
    }

    //TODO: 
    // - Add validation to stop users uploading more than 10 pics
    // - https://www.newline.co/@satansdeer/handling-file-fields-using-react-hook-form--93ebef46
    // -  Use firebase to store the images
    // - If firebase works well for that, use it for storing comments too
    return (
        <Container bgImage='upload'>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Upload Your Images</h1>
            <div className="bg-white w-1/2 p-4 mx-auto rounded-md">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="mr-6">Upload up to 5 images: </label>
                        <input className="" type="file" name="file" {...register("file")} required multiple={true} />
                        <div className="pt-2">
                            <button className="p-2 font-roboto bg-blue-600 text-white rounded-lg" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
}