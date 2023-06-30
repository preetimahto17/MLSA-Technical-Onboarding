/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a data scientist with a strong background in computer applications. Currently pursuing my Master of Computer Application at Pondicherry University, I have completed my Bachelor of Computer Application from Guru Gobind Singh Indraprastha University. With a passion for data-driven insights, I am constantly upgrading my skills and expertise to develop innovative solutions to complex business problems. My experience includes working on several projects that involve machine learning, data visualization, data analysis, and data science methodology. In my most recent project, I developed a machine learning model using simple linear regression to predict carbon dioxide (Co2) emissions based on vehicle engine size. I also worked on a voice-controlled robotic car project using an Arduino microcontroller and an HC-05 Bluetooth module. In addition to my academic and project experience, I have completed various certifications in data science, including Machine Learning with Python, Data Visualization with Python, Data Analysis with Python, Databases and SQL for Data Science with Python, Python for Data Science, AI & Development, Python Project for Data Science, Tools for Data Science, and Data Science Methodology, from IBM Data Science Professional Certificate on Coursera. As a data scientist, I have expertise in tools such as Jupyter Notebook, VScode, and Apache Spark. My technical skills include machine learning, regression, classification, clustering, data mining, data cleaning and preprocessing, and data visualization. I am proficient in languages such as Java, C++, Python, and SQL. I am always looking to expand my knowledge and skills, collaborate with like-minded professionals, and contribute to the data science community. Please feel free to connect with me on LinkedIn or email me at preetimahto6@gmail.com if you want to discuss any opportunities.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Numpy",
  "Pandas",
  "Scikit-Learn",
  "Data Wrangling",
  "Data Cleaning",
  "Data Visualisation",
  "Data Manipulation",
  "Data Modeling ",
  "Model Evaluation"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Data Science skills and experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
