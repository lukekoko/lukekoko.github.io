export default function Professional() {
  return (
    <section class="section" id="professional">
      <div class="container">
        <div class="section-heading">
          <h1 class="title is-2">Professional Experience</h1>
        </div>
        <div class="content">
          <div class="columns is-gapless">
            <div class="column is-1">
              <figure class="image is-64x64">
                <img alt="" src={process.env.PUBLIC_URL + "gtsgroup.jpg"} />
              </figure>
            </div>
            <div class="column">
              <p class="is-size-3">GTSGroup</p>
            </div>
          </div>
          <p class="is-size-4">
            <div class="columns">
              <div class="column">Junior Support Engineer</div>
              <div class="column ">February 2020 - Current</div>
            </div>
          </p>
          <ul class="is-size-4">
            <li>
              Performing OSIsoft PI System support for various clients; fixing
              system issues and performing system health checks.
            </li>
            <li>Created various ETL Python scripts for clients</li>
            <li>
              Designed and developed a program in Python to fetch data from PI
              System, then publish data to Google Sheets.
            </li>
            <li>
              Worked in a project team to setup, install and customise PI System
              for clients.
            </li>
          </ul>
          <div class="columns">
            <div class="column is-1">
              <figure class="image is-64x64">
                <img alt="" src={process.env.PUBLIC_URL + "veolia.jpg"} />
              </figure>
            </div>
            <div class="column">
              <p class="is-size-3">Veolia Australia and New Zealand</p>
            </div>
          </div>
          <p class="is-size-4">
            <div class="columns is-gapless">
              <div class="column">Undergraduate Software Engineer</div>
              <div class="column ">January 2019 - January 2020</div>
            </div>
          </p>
          <ul class="is-size-4">
            <li>
              Developed web scrapers in Python to get weather data and data from
              meters such as power meters and flow meters into PI System.
            </li>
            <li>
              Built various Python scripts to pre-process CSV, Excel and JSON
              data forms before ingest into PI System.
            </li>
            <li>
              Implemented an email attachment downloader in Python to download
              files from emails which saved significant effort from the company
              as this was previously performed manually by an engineer on a
              daily basis.
            </li>
            <li>
              Performing systems support for OSIsoft PI System; fixing system
              issues and enhancing functionality.
            </li>
          </ul>
          <p class="is-size-4">
            <div class="columns is-gapless">
              <div class="column">Software Engineering Intern</div>
              <div class="column ">August 2018 - January 2019</div>
            </div>
          </p>
          <ul class="is-size-5">
            <li>
              Designed and Developed web application for internal users to input
              data into PI System using Angular, Node.js and Microsoft SQL
              Server.
            </li>
            <li>
              Performing systems support for OSIsoft PI System; fixing system
              issues and enhancing functionality.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
