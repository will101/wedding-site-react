import React from "react";
import Container from "./Container";
//import videoBg from "./assets/images/bgImages/nessgardens089-min.jpg";

export default function Video() {
    return (
        <Container bgImage='video'>
            <h1 className="text-black text-5xl pt-2 mb-6 font-fatface">Wedding Video</h1>
            <div className='pt-6 '>
                {/* <video className='mx-auto' height={600} width={1000} src={''} controls /> */}
                <img alt='' className='mx-auto' src='https://via.placeholder.com/800x400/FFFFFF.png?text=Video+coming+soon' />
            </div>
        </Container>
    )
}