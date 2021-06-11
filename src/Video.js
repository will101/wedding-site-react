import React from "react";
import Container from "./Container";
import image from "./assets/images/bgImages/nessgardens053c-min.jpg";

export default function Video() {
    return (
        <Container bgImage={image}>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Wedding Video</h1>
            <div className='pt-6 '>
                {/* <video className='mx-auto' height={600} width={1000} src={''} controls /> */}
                <div className="bg-white md-100 lg:w-2/3 p-4 mx-auto rounded-md font-roboto">
                    <h1>Video coming soon...</h1>
                </div>
            </div>
        </Container>
    )
}