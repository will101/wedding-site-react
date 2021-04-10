import React from "react";
import Container from "./Container";
import video from "./assets/images/home/nessgardens089.jpg";

export default function Video() {
    return (
        <Container bgImage={video}>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Wedding Video</h1>
            <div className='pt-6 px-48'>
                <video className='' height={600} width={1000} src={''} controls />
            </div>
        </Container>
    )
}