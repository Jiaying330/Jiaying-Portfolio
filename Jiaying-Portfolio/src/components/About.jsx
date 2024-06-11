import React from "react";
import "./About.scss";

export default function About() {
  return (
    <>
      <section className="about section-container" id="about">
        <h2 className="section-title">About</h2>
        <div className="about__content-container">
          <p className="about__content">
            Welcome to my corner of the internet! I'm Jiaying, a passionate
            individual with a love for technology, creativity, and
            problem-solving. As an avid enthusiast of video games, I've spent
            countless hours exploring virtual worlds and honing my skills in
            game development and programming. What started as a casual hobby
            quickly evolved into a deep-seated passion, driving me to learn the
            ins and outs of game design and programming languages. <br />
            <br />
            However, my journey took an unexpected turn when I discovered the
            dynamic world of web development. Captivated by the endless
            possibilities and the ability to create interactive and
            user-friendly experiences on the web, I decided to pivot my focus
            and dive headfirst into this exciting field. Since then, I've been
            on a mission to master the art of web development and leverage my
            skills to craft immersive online experiences.
            <br />
            <br />
            Additionally, I've delved deeply into the fascinating realm of
            machine learning, immersing myself in its intricate algorithms,
            diverse applications, and limitless potential to revolutionize the
            way we interact with technology. From natural language processing to
            computer vision, I've explored the vast landscape of machine
            learning, constantly seeking out new challenges and opportunities to
            push the boundaries of innovation.
            <br />
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
            individuals. Let's connect and embark on this adventure together!
          </p>
          <img src="/profile.png" alt="profile photo" className="about__img" />
        </div>
      </section>
    </>
  );
}
