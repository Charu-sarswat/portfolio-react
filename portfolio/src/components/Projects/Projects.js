
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Quiz-app"
              description="To play the Quiz fully responsive, using react include the leaderboard and better UI-Ux used game app to check the knowledge with game ."
              ghLink="https://github.com/Charu-sarswat/Quiz"
              demoLink="https://app.netlify.com/sites/savitaworld/overview"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Company-Website"
              description="As a assignment given for a client fully functional website using html,css,js with user Authentication. to show the products.and phpas backend."
              ghLink="https://github.com/Charu-sarswat/php"
              demoLink="websign.infinityfreeapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Calander-app"
              description="React calander event app to create new tasks ,delete the tasks after completing the tasks to tick user authentication and used full functionality"
              ghLink="https://github.com/Charu-sarswat/Online-virtual-platform"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Omegal-like-website"
              description="React calander event app to create new tasks ,delete the tasks after completing the tasks to tick user authentication and used full functionality"
              ghLink="https://github.com/Charu-sarswat/calander"
              demoLink="https://drive.google.com/file/d/1ppV0zbi452hyZbgmRUR7XKa4pV53jnEd/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description=".website similar to omegal. include User authentication and include chat and video call feature on the basis of maching hobbies used mongo,react,vector database."
              ghLink="https://github.com/Charu-sarswat/Online-virtual-platform"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink=/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
