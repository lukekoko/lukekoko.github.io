export default function Academic() {
  return (
    <section class="section" id="academic">
      <div class="container">
        <div class="section-heading">
          <h1 class="title is-2">Academic Experience</h1>
          <h2 class="subtitle is-4">
            <p>
              <strong>Course: </strong> Bachelor of Engineering (Honours)
              Diploma in Professional Engineering Practice (Software
              Engineering)
            </p>
            <p>
              <strong>Sub-Major: </strong> Data Analytics
            </p>
            <p>
              <strong>University: </strong> University of Technology Sydney
            </p>
            <p>
              <strong>WAM: </strong> 80.35
            </p>
            <br />
            <p>
              <a
                class="button is-dark"
                href={process.env.PUBLIC_URL + "Academic_Transcript.pdf"}
                target="_blank"
                rel="noreferrer noopener"
              >
                View Academic Transcript
              </a>
            </p>
          </h2>
        </div>
      </div>
    </section>
  );
}
