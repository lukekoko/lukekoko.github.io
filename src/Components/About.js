import "../App.css";

export default function About() {
  return (
    <section class="section is-fullheight is-fullheight-with-navbar" id="about">
      <div class="container">
        <div class="section-heading">
          <h1 class="title is-2">About Me</h1>
          <h2 class="subtitle is-4">
            <p>
              Hi, I'm Luke. I am a final year software engineering student with
              recent experience as a Junior Support Engineer and Software
              Engineering Intern. I have effectively juggled my studies whilst
              managing work expectations in pressured and fast paced
              environments. I have a strong interest in software development and
              data analytics. I am looking for opportunities where I can
              continue to learn and develop, where I can build and foster
              meaningful relationships and where I can make a difference.
            </p>
          </h2>
          <a
            class="button is-dark"
            href={process.env.PUBLIC_URL + "Luke_Kokoftopoulos_Resume.pdf"}
            target="_blank"
            rel="noreferrer noopener"
          >
            View Resume
          </a>
          <div class="content is-size-4">
            <br/>
            <strong>Technical Skills</strong>
            <p>
              <strong>Programming: </strong> Python, JavaScript, TypeScript, C,
              C++, C#, Java, MSSQL, MySQL, HTML, CSS
            </p>
            <p>
              <strong>Frameworks: </strong> Angular, React, Node.js, Express.js,
              Flask, Django, Docker, GCP, Firebase, AWS Data Science:
              TensorFlow, Keras, Pandas, Scikit-Learn, NumPy
            </p>
            <p>
              <strong>Tools: </strong> Git, GitHub, Travis CI, Excel, Jira,
              Trello
            </p>
            <p>
              <strong>Systems: </strong> OSIsoft PI System(Real-time data
              management system); PI AF, PI Vison, PI Web API, PI UFL Interface,
              PI Datalink
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
