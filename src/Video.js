import React from "react";
import Container from "./Container";
import videoBg from "./assets/images/home/nessgardens089.jpg";

export default function Video() {
    return (
        <Container bgImage={videoBg}>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Wedding Video</h1>
            <div className='pt-6 '>
                <video className='mx-auto' height={600} width={1000} src={''} controls />
            </div>
        </Container>
    )
}