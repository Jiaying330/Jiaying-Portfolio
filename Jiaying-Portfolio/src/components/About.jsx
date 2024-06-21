import React from "react";
import "./About.scss";

export default function About() {
  return (
    <>
      <section className="about section-container" id="about">
        <h2 className="section-title">About</h2>
        <div className="about__content-container">
          <p className="about__content">
            Welcome to my corner of the internet! I'm Jiaying, a technology
            enthusiast with a passion for creativity and problem-solving.
            Originally a video game hobbyist, my interests evolved into game
            development and programming. This path led me to the dynamic world
            of web development, where I'm focused on creating interactive and
            user-friendly experiences. <br />
            <br />
            I've also ventured into machine learning, exploring its applications
            from natural language processing to computer vision, to enhance how
            we interact with technology. Outside of coding, I enjoy
            weightlifting and reading philosophy and psychology, pushing both my
            physical and mental boundaries.
            <br />
            <br />
            Join me as I share insights and projects on technology, creativity,
            and more. I'm excited to collaborate on impactful projects and
            explore new challenges. Let's connect and take this journey
            together!
            {/* <br />
            <br />
            When I'm not busy coding or designing, you can find me hitting the
            gym and indulging in my passion for weightlifting, challenging
            myself physically and mentally. I also enjoy diving into thought-
            provoking books about philosophy and psychology, immersing myself in
            different perspectives and ideas. I believe in lifelong learning and
            continually seek out new challenges to expand my horizons, both in
            my professional and personal pursuits.
            <br />
            <br />
            Join me on this journey as I share insights, projects, and musings
            on technology, creativity, and everything in between. I am eager to
            put my unique blend of skills and expertise in practice, where I can
            contribute to impactful projects and collaborate with like-minded
            individuals. Let's connect and embark on this adventure together! */}
          </p>
          <img src="/profile.png" alt="profile photo" className="about__img" />
        </div>
      </section>
    </>
  );
}
