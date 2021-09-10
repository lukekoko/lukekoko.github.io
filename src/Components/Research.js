export default function Research() {
  return (
    <section class="section" id="research">
      <div class="container">
        <div class="section-heading">
          <h1 class="title is-2">Research</h1>
          <h2 class="subtitle is-4">
            <p>
              {" "}
              <strong>Project: </strong> Software Security Analysis using Deep
              Learning
            </p>
            <p>
              {" "}
              <strong>Supervisor: </strong> Yulei Sui
            </p>
          </h2>
        </div>
        <div class="container">
          <p class="is-size-5">
            The project aim is to develop new techniques to detect and repair
            software security vulnerabilities for large and real-world software
            projects by leveraging deep learning and natural language
            processing.
          </p>
          <br />
          <p class="is-size-5">
            The project will be utilising SVF. Which is a source code analysis
            tool that performs static analysis on C and C++ source code. Static
            code analysis is examining source code before the program is run to
            detect any vulnerabilities. Static code analysis is a quick way to
            find bugs at an early stage of software development. Static analysis
            has shown great success in detecting traditional vulnerabilities
            such as memory leaks and buffer overflows. But is ineffective when
            dealing with non-traditional vulnerabilities such as business logic
            errors, program behavioural problems and insufficient control flow
            management which are often caused by bad programming practices.
            These vulnerabilities do not have a clear specification to be
            detected and will often require customised rules to be made. Which
            is limited by the bug detection experience of the rule maker.
          </p>
          <br />
          <p class="is-size-5">
            <a
              href="https://github.com/SVF-tools/SVF"
              target="_blank"
              rel="noreferrer noopener"
            >
              Link to SVF project
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
