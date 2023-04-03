import React from "react";
import './Home.css'
import { NavBar } from "../nav/NavBar";

export const Home = () => {
    return (<>
        <article className='homeArticle'>
            <section id='home' className='homeSection'>
                <h1 className='homeTitle'>Welcome to Surface Interval!</h1>
                <h2>{`Plan // Dive // Log // Repeat 🔁`}</h2>
                <p className='homeP'>A surface interval is the time spent between dives for the purpose of reducing residual nitrogen, logging the previous dive and planning for the next one.</p>
                <p className='homeP'>Surface Interval tracks your dives, gear and certifications, allowing you to access them from anywhere.
                </p>
            </section>
        </article>
    </>)
}