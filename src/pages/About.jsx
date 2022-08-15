import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      class="hero min-h-screen w-full"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/67/99/88/6799886e301c323bc202fbdb72376531.jpg)",
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md bg-white bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg p-5">
          <h1 class="mb-5 text-5xl font-bold">AniFlix Movie DB</h1>
          <h2 class="mb-5 text-2xl font-bold">
            Get Access To Thousands Of Movies' Data!
          </h2>
          <p class="mb-5">
            AniFlix Movie DB &copy; gives you access to data about movies on any
            streaming platform, released at anytime, anywhere and anyhow! This
            is a project developed by Anirudh to leverage the power of MOVIE
            DB's RESTful API found on Rapid API. To start viewing movie data,
            click the button below and have fun!
          </p>
          <button class="btn btn-primary">
            <Link to="/">Get Flix Data!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
