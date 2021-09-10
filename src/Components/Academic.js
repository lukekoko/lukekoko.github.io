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
            <a
              class="button is-dark"
              href={process.env.PUBLIC_URL + "Academic_Transcript.pdf"}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Academic Transcript
            </a>
          </h2>
        </div>
        <br />
        <div class="content">
          <h1>
            <strong>University Projects</strong>
          </h1>
          <h2>
            Movie Recommendation{" "}
            <a
              href="https://github.com/lukekoko/Movie-Recommendation"
              target="_blank"
              rel="noreferrer noopener"
              class="has-text-dark"
            >
              <span class="icon is-large">
                <i class="fab fa-lg fa-github"></i>
              </span>
            </a>
          </h2>

          <p class="is-size-4">
            Simple website that utilises a recommendation system based on the
            content-based filtering method. The system has been trained on the
            MovieLens 100k dataset. The website shows the most popular movies
            from the dataset and will provide a range of similar movie
            selections for each movie.
          </p>
          <h2>
            Prediction of COVID19 in lung x-rays using Deep learning{" "}
            <a
              href="https://github.com/lukekoko/42028-Deep-Learning-and-Convolutional-Neural-Network-Assignment-3"
              target="_blank"
              rel="noreferrer noopener"
              class="has-text-dark"
            >
              <span class="icon is-large">
                <i class="fab fa-lg fa-github"></i>
              </span>
            </a>
          </h2>
          <p class="is-size-4">
            A website that can detect if a lung x-ray is affected with COVID-19.
            By uploading a lung x-ray scan to the website, the image will be
            analysed and a prediction will be presented within seconds.
          </p>

          <h2>
            Health services web app{" "}
            <a
              href="https://github.com/3B-Team4/2021-SES3B-Team4"
              target="_blank"
              rel="noreferrer noopener"
              class="has-text-dark"
            >
              <span class="icon is-large">
                <i class="fab fa-lg fa-github"></i>
              </span>
            </a>
          </h2>
          <p class="is-size-4">
            A web app that provides health services to patients. The main
            feature is a chat bot that will ask questions on patient symptoms
            and predict if they have COVID. It also provides locations of nearby
            COVID testing clinics, ability to book appointments and live chat with doctors.
          </p>
          <h2>
            Microsoft Teams clone{" "}
            <a
              href="https://github.com/lukekoko/2020AUT-Software-Engineering-Studio-2B"
              target="_blank"
              rel="noreferrer noopener"
              class="has-text-dark"
            >
              <span class="icon is-large">
                <i class="fab fa-lg fa-github"></i>
              </span>
            </a>
          </h2>
          <p class="is-size-4">
            A web app that aims to provide teams with team chat, task assignment, calendar events and hours logging.
          </p>
        </div>
      </div>
    </section>
  );
}
