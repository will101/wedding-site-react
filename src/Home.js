import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

//each push will deploy it here: https://vercel.com/will101/wedding-site-react
//TODO: Images aren't displaying properly on Vercel
export default function Home() {
    console.log("home");
    return (
        <Container>
            <div className='pt-2 font-roboto font-semibold'>
                <h1 className="text-black text-xl font-fatface pb-2">Will & Emily - Our Story</h1>
                <p className='pb-4'>We first met when we were in university, on Valentines day 2015, when Emily made her first visit to Aberystwyth and Finn introduced
                us thinking we would be a perfect match!</p>
                <p className='pb-4'>We were on holiday in Amsterdam in June 2019, when Will proposed, down on one knee, on the Magere Brug. We were excited to make wedding plans and organized our big family
                     wedding for August 2020.</p>
                <p className=' pb-4'>The start of 2020 was nothing like any of us could have imagined and our hopes of having the dream wedding we had planned were dashed. We have waited so long for the pandemic
                to end and for life to return to normal, but we are still living with enormous uncertainty. So, we decided to live with the current restrictions and look forward to a smaller
                      celebration on Saturday 12th June.</p>
                <p className='pb-4'>Whilst we will miss so many family and friends not being with us on the day, we hope you enjoy the <Link className='hover:underline' to='video'>video</Link>
                    {' '}and  <Link className='hover:underline' to='gallery'>photos</Link> and hope we will be able to see you all again soon.</p>
                <p>Love from Will and Emily x</p>
            </div>
        </Container>
    );
}

