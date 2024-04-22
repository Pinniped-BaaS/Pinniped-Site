import styled from "styled-components";

import RestHttpDiagram from "../assets/case-study/1. rest-http-diagram.svg";
import staticRoutesCodeSnippet from "../assets/case-study/2. static-routes-code-snippet.png";
import middlewareAnimation from "../assets/case-study/3. middleware-animation.svg";
import threeTierArchitectureAnimation from "../assets/case-study/4. three-tier-architecture-animation.svg";
import CaNoTool from "../assets/case-study/5. C-A-NoTool.svg";
import CaIaaS from "../assets/case-study/6. C-A-IaaS.svg";
import CaPaaS from "../assets/case-study/7. C-A-PaaS.svg";
import CaBaaS from "../assets/case-study/8. C-A-BaaS.svg";
import BaasCompNoPnpd from "../assets/case-study/9. BaaS-Comp-No-Pnpd.png";
import portability from "../assets/case-study/10. portability.mp4";
import extensibility from "../assets/case-study/11. extensibility-new.mp4";
import userExperience from "../assets/case-study/12. user-experience.mp4";
import baasCompWithPnpd from "../assets/case-study/13. BaaS-Comp-With-Pnpd.png";
import CreateTableRequestSequence from "../assets/case-study/14. Create-Table-Request-Sequence.svg";
import schemaVid from "../assets/case-study/15. schema-vid.mp4";
import sql from "../assets/case-study/16. sql.svg";
import tableMigrationSequence from "../assets/case-study/17. table-migration-sequence.svg";
import migrationFile from "../assets/case-study/18. migration-file.png";
import dataVid from "../assets/case-study/19. data-vid.mp4";
import dynamicRoutes from "../assets/case-study/20. dynamic-routes.png";
import sdkUsage from "../assets/case-study/21. sdk-usage.png";
import createTableRequestSequence from "../assets/case-study/22. Create-Table-Request-Sequence.svg";
import loadTableContextSequence from "../assets/case-study/23. loadTableContext-sequence.svg";
import validationSequence from "../assets/case-study/24. validation-sequence.svg";
import apiRules from "../assets/case-study/25. api-rules.mp4";
import expressSessionSequence from "../assets/case-study/26. express-session-sequence.svg";
import loginSessionSequence from "../assets/case-study/27. login-session-sequence.svg";
import apiRulesRequest from "../assets/case-study/28. api-rules-request.png";
import authCheckSequence from "../assets/case-study/29. auth-check-sequence.svg";
import rowAuth from "../assets/case-study/30. row-auth.png";
import customRoute from "../assets/case-study/31. custom-route.png";
import eventExtensibility from "../assets/case-study/32. event-extensibility.png";
import extensibilitySetupSequence from "../assets/case-study/33. extensibility-setup-sequence.svg";
import extensibilityReqResSequence from "../assets/case-study/34. extensibility-req-res-sequence.svg";
import pinnipedArchitectureAnimation from "../assets/case-study/35. Pinniped-Architecture-Animation.svg";
import startupLog from "../assets/case-study/36. Startup-Log.png";
import ssl from "../assets/case-study/37. ssl.mp4";
import updatePinniped from "../assets/case-study/38. update-pinniped.mp4";

// const SideBySide = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: start;
//   gap: 20px;

//   .graphic-wrapper {
//     flex: 2;
//   }

//   p {
//     flex: 1;
//     text-align: justify;
//   }

//   @media (max-width: 1000px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

const ContentsWrapper = styled.section`
  grid-area: contents;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
  gap: 20px;
  padding: 10px 30px;
  border-left: 1px solid var(--faint-gray);
  line-height: 1.7;
  overflow: hidden;

  @media (max-width: 800px) {
    padding: 3px;
    border-left: none;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  h6 {
    font-size: 1rem;
  }

  & p {
    max-width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: max-content;
    white-space: wrap;
  }
`;

const GraphicWrapper = styled.div`
  --graphic-radius: 5px;
  display: flex;
  justify-content: stretch;
  border-radius: var(--graphic-radius);

  & img,
  video,
  object {
    min-width: 75%;
    max-width: 95%;
    height: auto;
    border-radius: var(--graphic-radius);
  }
`;

const Image = ({ src, alt }) => {
  return (
    <GraphicWrapper className="graphic-wrapper">
      <img src={src} alt={alt} />
    </GraphicWrapper>
  );
};

const Video = ({ src, alt }) => {
  return (
    <GraphicWrapper className="graphic-wrapper">
      <video muted controls alt={alt}>
        <source src={src} type="video/mp4" />
      </video>
    </GraphicWrapper>
  );
};

const Animation = ({ svg, alt }) => {
  return (
    <GraphicWrapper className="graphic-wrapper">
      <object type="image/svg+xml" data={svg} alt={alt} />
    </GraphicWrapper>
  );
};

const Graphic = ({ file, alt, extension }) => {
  switch (extension) {
    case "svg":
      return <Animation svg={file} alt={alt} />;
    case "mp4":
      return <Video src={file} alt={alt} />;
    default:
      return <Image src={file} alt={alt} />;
  }
};

export default function Content() {
  return (
    <ContentsWrapper id="contents-wrapper">
      <>
        <h2>
          <span id="h.kjk2mlakynta">Introduction</span>
        </h2>
        <p>
          Pinniped is a portable, open-source{" "}
          <b>
            <i>Backend as a Service</i>
          </b>{" "}
          designed for small, fast-moving teams and front-end engineers.
          Pinniped streamlines backend development by providing an intuitive CLI
          tool and admin dashboard for creating, customizing, and deploying
          flexible backend applications.
        </p>
        <h2>
          <span id="h.vulifb8ocgrk">Problem Domain</span>
        </h2>
        <p>
          Before discussing the definition and benefits of a backend as a
          service (BaaS), we’ll examine the typical structure of web
          applications, the challenges associated with building them, and some
          tools that address those challenges.
        </p>
        <h3>
          <span id="h.2jbcyj2czoho">Three-Tier Architecture</span>
        </h3>
        <p>
          Web applications are commonly built by separating their functionality
          into three tiers. This separation isolates different responsibilities
          of the application and is often reflected in the physical
          configuration of the hardware as well. Isolating the responsibilities
          of each tier makes each easier to develop, maintain, and scale. The
          three tiers are:
        </p>
        <h4>
          <span id="h.p60wvo2lgzpp">The Data Tier</span>
        </h4>
        <p>
          The Data Tier is responsible for{" "}
          <b>data storage, retrieval, and management</b> within a web
          application. It typically encompasses a database and caches. The
          database conventionally lives on its own hardware, isolated from the
          other tiers.
        </p>
        <h4>
          <span id="h.yp62vtvaazpu">The Application Tier</span>
        </h4>
        <p>
          The Application Tier, or Business Logic Tier,{" "}
          <b>
            processes user requests, executes business logic, and manages data
            exchange between the presentation and data tiers.
          </b>{" "}
          It handles the application's core functionality, including data
          validation, authorization, and integration with other services. The
          application tier is often stateless, allowing it to handle varying
          request volumes by horizontally scaling across multiple physical or
          virtual machines.
        </p>
        <h5>
          <span id="h.lsx16pvcj3zy">REST API</span>
        </h5>
        <p>
          The interface (API) that allows clients to interact with the
          application tier is crucial. These interfaces are commonly built using
          tools like GraphQL or following architectural styles like REST, which
          we’ll focus on here. REST APIs represent entities, like database
          tables, as "resources" with unique URLs. Each resource instance (e.g.,
          a row in the table) is accessible by appending its identifier to the
          resource URL.
        </p>
        <h6>
          <span id="h.prhaesqp2ij0">Implementing a REST API</span>
        </h6>
        <p>
          A web server receives, processes, and responds to HTTP requests, often
          implementing a REST API to structure these communications. We'll use
          Express, a popular web framework for Node.js, to illustrate the
          creation of a REST API and define some terms that will be referenced
          later.
        </p>
        <h6>
          <span id="h.rjgrn4oid50t">Route Handler Functions</span>
        </h6>
        <p>
          Building a REST API using Express involves creating and registering
          unique route handler functions. These functions define how the server
          responds to specific HTTP requests targeting particular URLs
          (endpoints) within the API. Route handlers in Express always receive
          two key arguments:
        </p>
        <ul>
          <li>
            <b>Request</b> —An object that represents the incoming HTTP request.
          </li>
          <li>
            <b>Response</b> —An object used to send a response back to the
            client.
          </li>
        </ul>
        <p>
          Within the route handler, you use the request object to access
          information about the request and the response object to define the
          content and structure of the response. This allows you to implement
          the logic for CRUD operations (Create, Read, Update, Delete) on your
          resources based on the HTTP method (POST, GET, PUT, DELETE) used in
          the request.
        </p>
        <Graphic
          file={RestHttpDiagram}
          extension="svg"
          alt="Rest HTTP Diagram"
        />
        <p>
          Here’s a simple example showing the registration of route handler
          functions at specific URL endpoints. Note how each route requires its
          own function to handle the unique logic of the route.
        </p>
        <Graphic
          file={staticRoutesCodeSnippet}
          extension="png"
          alt="Rest HTTP Diagram"
        />
        <h6>
          <span id="h.15bxho82qg7m">Middleware</span>
        </h6>
        <p>
          Middleware in web frameworks are functions that act as preprocessors
          before a route handler. These functions are well-suited for handling
          shared tasks such as parsing data, logging requests, and user
          authentication. They can be applied globally or to specific routes.
        </p>
        <Graphic
          file={middlewareAnimation}
          extension="svg"
          alt="Rest HTTP Diagram"
        />
        <h4>
          <span id="h.h03wvg9n2q4q">The Presentation Tier</span>
        </h4>
        <p>
          Returning to the final tier of the three-tier architecture, the
          Presentation Tier{" "}
          <b>
            is the user-facing layer comprising the web application's user
            interface
          </b>{" "}
          and user experience components. It displays information to the users
          and captures their inputs, facilitating interactions between the user
          and the application tier. The presentation tier usually runs on users’
          devices.
        </p>
        <Graphic
          file={threeTierArchitectureAnimation}
          extension="svg"
          alt="Rest HTTP Diagram"
        />
        <h4>
          <span id="h.qaufus87ww">Three-Tier Architecture Challenges</span>
        </h4>
        <p>
          While three-tier architecture offers a clear separation of concerns
          and many associated benefits, it also introduces challenges. We’ll
          explore some of these challenges below.
        </p>
        <h5>
          <span id="h.81murxoaqfpi">Data Tier</span>
        </h5>
        <p>
          <b>Developers must decide how and where data is stored.</b> How should
          the data be modeled? Does it best fit a relational, document, or graph
          model? Will the database run on its own machine or be embedded with
          the rest of the application? After choosing a suitable database,
          developers must create data structures that fit the data. They also
          have to configure and maintain their database as their requirements
          and user base change over time.
        </p>
        <p>
          Strategies for handling increased traffic in the data tier include
          upgrading the database's hardware or implementing various techniques
          to lighten the load on the database, such as setting up caches,
          queues, and SQL indexes. Depending on the situation, more significant
          and costly changes to the architecture, like replicating or
          partitioning the database, could be necessary.
        </p>
        <h5>
          <span id="h.ca36x8fki4sr">Application Tier</span>
        </h5>
        <p>
          Developing a robust application tier presents several hurdles. One
          major challenge is{" "}
          <b>efficiently creating and maintaining an API layer</b>, especially
          for applications with numerous resources. Exposing each resource
          through a well-designed API can be a repetitive task. Beyond API
          development, other challenges include implementing strong security
          measures for authentication and authorization, validating data, and
          effectively integrating business-specific logic.
        </p>
        <h5>
          <span id="h.ny5a416kbkcz">Hosting</span>
        </h5>
        <p>
          Hosting can be a complicated part of running a web application. The
          decision on where to host the application, whether locally or in the
          cloud, involves numerous technical details. Additionally, there are
          security concerns that must be addressed, such as obtaining and
          renewing a TLS certificate to secure network traffic. If the hardware
          is located on-site, scaling the physical infrastructure to meet
          increasing demand can require significant time and effort.
        </p>
        <h4>
          <span id="h.iny0goyw26p5">Tools to Address These Challenges</span>
        </h4>
        <p>
          While every web application is unique,{" "}
          <b>the challenges described above are common</b>, leading to the
          development of tools such as IaaS, PaaS, and BaaS that solve some or
          all of these challenges with varying levels of control and
          abstraction. If a developer wants the most control, they would address
          each of these challenges themselves.
        </p>
        <Graphic file={CaNoTool} extension="svg" alt="No tool" />
        <h5>
          <span id="h.49xtimwg6pzp">Infrastructure as a Service - IaaS</span>
        </h5>
        <p>
          IaaS products remove the need to purchase, physically house, power,
          and maintain hardware by offering hardware usage over the internet in
          a pay-as-you-go model. One common IaaS product is a Virtual Private
          Server (VPS), which is a server and operating system for developers to
          remotely host their applications.
        </p>
        <p>
          While IaaS tools handle hardware concerns, developers are responsible
          for everything else: managing runtime environments, installing
          application dependencies, and configuring reverse proxies, firewalls,
          and load balancers.
        </p>
        <Graphic file={CaIaaS} extension="svg" />
        <h5>
          <span id="h.7e489zbi3aib">Platform as a Service - PaaS</span>
        </h5>
        <p>
          PaaS products build on what IaaS products offer. In addition to
          providing physical infrastructure, they offer solutions for challenges
          associated with deployment, server configuration, security
          configuration, and maintainability. These solutions allow developers
          to focus almost exclusively on application development.
        </p>
        <p>
          While PaaS products can solve many of the challenges of configuring
          and running a web application, they come with the significant drawback
          of vendor lock-in. Moving an application away from a PaaS product can
          be challenging.
        </p>
        <Graphic file={CaPaaS} extension="svg" />
        <h5>
          <span id="h.s3kx2ba84bop">Backend as a Service - BaaS</span>
        </h5>
        <p>
          <b>
            BaaS solutions abstract away much of the process of creating an
            application’s backend
          </b>{" "}
          by configuring the application and data tiers and auto-generating an
          API to facilitate communication with the presentation tier. They
          commonly offer managed cloud hosting services that streamline the
          hosting process and can automatically scale backend infrastructure to
          handle varying traffic levels. BaaS solutions generally provide a
          suite of additional features as well, such as file storage,
          observability, and real-time data subscriptions.
        </p>
        <p>
          Most BaaS products build on the features offered by PaaS by
          abstracting server configuration and the application and data tiers.
          These features enable developers to focus on their application's
          business logic and functionality.
        </p>
        <Graphic file={CaBaaS} extension="svg" />
        <p>
          The more an application follows norms, such as utilizing a REST API to
          interact with entities stored in a database, the more likely a BaaS
          can be helpful. A BaaS generally <b>increases abstraction</b> to{" "}
          <b>increase developers' ease of use</b>. However, if an application’s
          needs are unique, a BaaS product’s abstractions can be limiting.
        </p>
        <h6>
          <span id="h.bdcmcxpj2i9k">Common BaaS Limitations</span>
        </h6>
        <ul>
          <li>
            <b>Lack of portability</b> —Most BaaS products are easy to deploy
            and host to a BaaS-specific provider. However, if a developer wants
            to choose their own host, configuring the BaaS can be difficult.
          </li>
          <li>
            <b>Lack of transparency</b> —Many BaaS products are closed-source,
            which raises concerns about long-term access, ongoing maintenance,
            and data privacy.
          </li>
          <li>
            <b>Lack of flexibility</b> —If a developer requires functionality a
            BaaS product doesn’t offer, they’re limited to whatever tools the
            BaaS provides to solve the problem. This could lead to application
            limitations or even make using the BaaS non-viable.
          </li>
        </ul>
        <h6>
          <span id="h.oy1wt4jvoxm2">
            How BaaS Solutions Address These Limitations
          </span>
        </h6>
        <ul>
          <li>
            <b>Portability</b> —Most BaaS products don’t directly address the
            issue of portability. Part of the tradeoff made by prioritizing ease
            of use is a lack of support for a broader selection of hosting
            options.
          </li>
          <li>
            <b>Transparency</b> —Some BaaS products are open-source, allowing
            users to vet the codebase. However, due to the size of most BaaS
            codebases, support and maintenance issues are still present.
          </li>
          <li>
            <b>Flexibility</b> — Most BaaS products mitigate flexibility
            problems by allowing users to customize the functionality of the
            backend via <b>serverless functions.</b>
          </li>
        </ul>
        <h6>
          <span id="h.5uubkrsgia7a">Serverless Function Extensibility</span>
        </h6>
        <p>
          Serverless functions, code that executes in cloud environments, are
          automatically managed and provisioned on demand by BaaS providers.
          These functions execute custom logic in response to events, extending
          the auto-generated API's capabilities beyond basic CRUD operations.
          These functions allow developers to adapt the backend to their
          specific needs.
        </p>
        <h6>
          <span id="h.up8by763id6o">Serverless Function Tradeoffs</span>
        </h6>
        <p>
          While serverless functions offer significant benefits, they also
          introduce the following challenges.
        </p>
        <ul>
          <li>
            <b>Code Environment and Dependencies</b> —Serverless platforms are
            not consistent in their support for a language’s packages or
            modules. They often require extra configuration—if they are
            compatible at all.
          </li>
          <li>
            <b>Latency</b> —Serverless functions can suffer from cold start
            delays, a noticeable delay in execution due to the BaaS allocating
            resources for the function. These delays only occur after a period
            of inactivity. Also, since serverless functions do not run on the
            same hardware as the database, they require a network hop to
            retrieve any additional data from the main backend.
          </li>
        </ul>
        <h3>
          <span id="h.aheksd5ia8c1">BaaS Feature Comparison</span>
        </h3>
        <p>
          Each BaaS offers a different feature set. The chart below highlights
          some of today’s more popular BaaS solutions and the features they
          offer.
        </p>
        <Graphic file={BaasCompNoPnpd} extension="png" />
        <ul>
          <li>
            <p>
              <b>Firebase</b> is a powerful BaaS platform from Google that
              offers a wealth of development tools. As a closed-source product,
              Firebase doesn't allow you to self-host your application. This can
              be a drawback if data ownership and transparency are major
              priorities for your project. However, if Firebase's features align
              well with your needs, the convenience of its built-in tools might
              outweigh this limitation.
            </p>
          </li>
          <li>
            <p>
              <b>Supabase</b> is a popular open-source option that offers more
              control. Developers can use Supabase’s managed hosting services or
              self-host with their preferred hosting provider, however, the
              self-hosting setup process can be quite complex. Like Firebase,
              Supabase uses serverless functions to extend the BaaS.
            </p>
          </li>
          <li>
            <p>
              <b>PocketBase</b> is a lightweight BaaS that prioritizes developer
              flexibility. Unlike Firebase’s managed hosting, Pocketbase runs
              from a single executable, allowing deployment on any Linux server.
              This ease of deployment comes at the cost of a more manual server
              configuration process. Its extensibility utilizes local functions
              in Golang or a limited Javascript runtime. These features cater to
              developers who value control and customization over managed
              convenience.
            </p>
          </li>
        </ul>
        <h3>
          <span id="h.9h6mmnnqr80y">Pinniped</span>
        </h3>
        <h4>
          <span id="h.nooivelf1ckz">Use Case</span>
        </h4>
        <p>
          Among the BaaS options, we saw an opportunity to build a BaaS that was{" "}
          <b>easy to self-host</b> and <b>customize with JavaScript</b>, a
          language familiar to most front-end engineers. One that could
          streamline application development by providing database management
          and API server functionality, while prioritizing ease of use. A
          solution intended for <b>small teams</b> that value flexibility and
          don’t need all the features offered by a larger BaaS. This is
          reflected in the design choices we made for Pinniped:
        </p>
        <h5>
          <span id="h.1usi6uxe79bs">Portability</span>
        </h5>
        <p>
          We wanted Pinniped to be as simple as possible to deploy. Because we
          were targeting small applications, we decided to run Pinniped as a
          single process with a <b>combined application and data tier</b>. This
          departs from the typical three-tier architecture and has significant
          drawbacks when it comes to scalability, as Pinniped cannot scale the
          server and database separately. We’ll continue exploring this
          decision's ramifications throughout the case study. The upsides of
          using a single process are reduced latency and minimal configuration.
          This allows developers to quickly run a Pinniped application in a
          local development environment or any production environment with
          Node.js.
        </p>
        <Graphic file={portability} extension="mp4" />
        <h5>
          <span id="h.brftibpbfh8x">Extensibility</span>
        </h5>
        <p>
          Pinniped’s business logic and API functionality can be customized with
          locally executed JavaScript, avoiding the increased network latency
          and configuration complexity of serverless functions. Pinniped’s
          extensibility functions run in a Node JS runtime, supporting
          up-to-date JavaScript ES6 features, the Node API, and npm packages
          familiar to most Javascript engineers. This implementation also
          affects Pinniped's scalability, but we’ll defer that discussion until
          later in the case study.
        </p>
        <Graphic file={extensibility} extension="mp4" />
        <h5>
          <span id="h.b54w2gxrrbbx">User Experience</span>
        </h5>
        <p>
          We wanted Pinniped to be easy to use, so we made it simple to interact
          with and integrate into any application. Simple workflows allow users
          to create a Pinniped application, deploy it onto a virtual private
          server (VPS), and manage it through an admin dashboard.
        </p>
        <Graphic file={userExperience} extension="mp4" />
        <p>
          <b>Pinniped</b> fits into the BaaS landscape as an option for
          developers who want a BaaS to build small applications in Javascript
          quickly. Features such as user file storage or real-time data
          subscriptions are left to the developer to implement through
          Pinniped’s strong extensibility support. Pinniped’s scalability is
          limited, so it’s unsuited for large-scale or enterprise applications
          that expect to see high traffic.
        </p>
        <Graphic file={baasCompWithPnpd} extension="png" />
        <h2>
          <span id="h.ekry0lqxnum2">Pinniped Design</span>
        </h2>
        <h3>
          <span id="h.7y6x2am16lre">Dynamic Schema</span>
        </h3>
        <p>
          In this section, we’ll explain how a BaaS has to be structured
          differently from a standard web application and how those differences
          drove Pinniped’s design.
        </p>
        <p>
          If we were building just one web application, our backend would be
          designed exclusively for that web application. But because we don’t
          know how each user of Pinniped will build their backend, we need a
          general-purpose way of representing the entities they will need in
          their databases. Users also need user-friendly tools that create and
          edit database schemas.
        </p>
        <h4>
          <span id="h.k09fc1rcg4nw">Creating and Updating Tables</span>
        </h4>
        <p>
          Pinniped exposes a special set of endpoints for interacting with table
          schemas. These routes listen for requests to create, update, and
          delete table schemas in the database.
        </p>
        <Graphic
          file={CreateTableRequestSequence}
          extension="svg"
          alt="Rest HTTP Diagram"
        />
        <h5>
          <span id="h.ys5rvubtk6o6">Admin UI</span>
        </h5>
        <p>
          We created an admin UI to simplify interacting with these routes and
          to act as the primary means to modify schema. Instead of writing SQL
          statements, users fill in a form that defines the schema for a table.
          Our goal was to make the UI flexible enough to support users’
          differing requirements. To make the application work with a dynamic
          group of database tables, we needed a way to store metadata about each
          table a user creates.
        </p>
        <Graphic file={schemaVid} extension="mp4" />
        <h5>
          <span id="h.qs41o8tjweeu">Table Metadata</span>
        </h5>
        <p>
          We keep essential metadata in a table called{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>tablemeta</span>. Each row
          within this table contains a particular table’s name, a unique{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>tableId</span>, and API
          access rules. Additionally, the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>tablemeta</span> row
          includes details about a table’s columns, such as column names, data
          types, data validation constraints, and relationships. Whenever we
          create, update, or drop a table within Pinniped, the corresponding row
          in <span style={{ color: "rgb(24, 128, 56)" }}>tablemeta</span> is
          adjusted to reflect that change.
        </p>
        <Graphic file={sql} extension="svg" />
        <h5>
          <span id="h.u8w0gu4cfkyw">Table Model</span>
        </h5>
        <p>
          Developing an application that interacts with a database can introduce
          challenges. One of these challenges is the impedance mismatch that
          occurs when data is represented as objects in the application but is
          stored as tables and rows in the database. This mismatch leads to the
          need for a translation layer between the application and the database
          to manage data flow effectively.
        </p>
        <p>
          Many applications use a tool called an ORM (Object Relational
          Mapping), which serves as that translation layer. ORMs have different
          translation methods, but they usually use a table model that ingests
          raw table data and makes it usable by the application as an object.
          These table models also have methods for interacting with the
          database.
        </p>
        <p>
          For Pinniped, we needed a similar translation layer to manage the
          database schema and interact with the metadata stored about each
          table. Because ORMs aren’t designed for the dynamic needs of a BaaS,{" "}
          <b>we opted to build a custom translation layer</b>. This choice
          removed the extra layer of abstraction that an ORM would add, which
          gave us more flexibility.
        </p>
        <p>
          We utilize Knex, a query builder library, and a{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model class
          that serves as an in-application representation of a specific database
          table and its metadata. When Pinniped receives a schema-related
          request, it instantiates an instance of the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> class, which
          we then use to build a schema migration file we pass to Knex to
          execute.
        </p>
        <Graphic
          file={tableMigrationSequence}
          extension="svg"
          alt="Rest HTTP Diagram"
        />
        <p>
          Handling schema changes through <b>migration files</b> is more
          complicated than simply updating tables directly, but it has benefits.
          Migration files create a reversible, repeatable record of how schemas
          are updated. They are self-documenting, easy to roll back, and easy to
          test in a development environment before being used in production.
          These benefits of data integrity make up for the complexities of
          dynamically generating these migration files.
        </p>
        <Graphic file={migrationFile} extension="svg" />
        <h3>
          <span id="h.4ijxtcibqs9v">Interacting with Data</span>
        </h3>
        <Graphic file={dataVid} extension="mp4" />
        <h5>
          <span id="h.8l65geerrxmx">Pinniped’s Dynamic RESTish API Layer</span>
        </h5>
        <p>
          Creating a REST API to interact with an application’s data can be a
          tedious, repetitive process. BaaS solutions automate this process by
          generating an API layer that reflects the application's database
          schema. The challenge of auto-generating an API stems from the
          application's schema being unique to the developer's needs. So, how
          can the API accurately create endpoints referencing the right
          resources when we don’t know what those resources will be beforehand?
        </p>
        <p>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            <b>
              In contrast to traditional REST APIs that require pre-defined
              routes for each resource, Pinniped utilizes a dynamic approach.
            </b>{" "}
          </span>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            Rather than representing each table as a top-level resource, as in a
            standard backend, Pinniped uses a single resource,
          </span>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>tables</span>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            <i>,</i>
          </span>{" "}
          <span style={{ color: "rgb(14, 16, 26)" }}>
            as the base resource for all CRUD operations. Every table is an
            instance of
          </span>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>tables</span>{" "}
          <span style={{ color: "rgb(14, 16, 26)" }}>with</span>{" "}
          <span style={{ color: "rgb(14, 16, 26)" }}>
            an associated ID and name. One level deeper, each table has a
            sub-resource known as
          </span>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>rows</span>
          <span style={{ color: "rgb(14, 16, 26)" }}>. Similar to</span>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>tables</span>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            , a single row is an instance of
          </span>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>rows</span>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            . Pinniped mounts routes with dynamic table names, using URL
            parameters instead of static routes based on the resource.
          </span>
        </p>
        <Graphic file={dynamicRoutes} extension="png" />
        <p>
          By taking this approach, Pinniped only needs to register a single set
          of route handler functions to provide a RESTish API layer for an
          application’s dynamic database schema.
        </p>
        <h5>
          <span id="h.hy5wgx6srdj2">
            Communicating with Pinniped’s API layer
          </span>
        </h5>
        <p>
          We developed the Pinniped-SDK npm package to make Pinniped’s API easy
          to interact with. Instead of learning the API signatures when building
          their presentation tier, developers can use the simple Javascript SDK
          methods to interact with the backend.
        </p>
        <Graphic file={sdkUsage} extension="png" />
        <h4>
          <span id="h.k56bdo322zko">
            The Challenges of Building an Auto-Generated API Layer
          </span>
        </h4>
        <p>
          <b>
            In a typical backend, using a unique handler function for each
            resource and operation gives developers fine-grained control over
            how each route should behave.
          </b>{" "}
          For example, developers can define authorization and data validation
          rules on a route-by-route basis to control interactions with each
          route. A unique handler function also allows them to implement
          application-specific functionality (extensibility) in addition to the
          standard REST API operations.
        </p>
        <p>
          <b>
            With Pinniped’s dynamic RESTish API layer, each route handler
            function needs to work in a general-purpose way that supports any
            underlying database schema and its unique requirements.
          </b>{" "}
          This complicates the following endpoint-specific concerns:
        </p>
        <ol>
          <li>
            <b>Data Validation</b>
          </li>
          <li>
            <b>Access Control</b>
          </li>
          <li>
            <b>Extensibility</b>
          </li>
        </ol>
        <h3>
          <span id="h.gk348w8h2ez7">Validating Data</span>
        </h3>
        <p>
          Pinniped enforces endpoint and operation-specific data validation
          using the stored metadata about each table and middleware functions.
          This process ensures incoming data adheres to the expected structure
          for each table.
        </p>
        <Graphic file={createTableRequestSequence} extension="svg" />
        <p>
          The{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>LoadTableContext</span>{" "}
          middleware retrieves the relevant table metadata and uses it to
          construct a dynamic{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> object in
          memory using the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model class,
          as previously described. This model represents the valid data format
          for the targeted table.
        </p>
        <Graphic file={loadTableContextSequence} extension="svg" />
        <p>
          A separate data validation middleware function intercepts the request
          before it reaches the final route handler. This middleware compares
          the request’s body (containing a row's new or updated data) against
          the corresponding{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model
          generated earlier. If validation rules are violated (e.g., exceeding
          the maximum length for a field or missing a required value), the
          middleware sends a{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>400 Bad Request</span>{" "}
          response back to the client. This error response includes a clear
          message detailing the constraint violation, allowing the user to
          rectify the issue and resubmit the request.
        </p>
        <Graphic file={validationSequence} extension="svg" />
        <h3>
          <span id="h.zf1dsyjemv2m">Controlling API Access</span>
        </h3>
        <Graphic file={apiRules} extension="mp4" />
        <p>
          For security concerns, developers restrict data access for different
          users in their applications. For example, an e-commerce site wouldn’t
          want all users to have access to each customer's payment information.
          Developers give users access to select data by labeling them with
          authorization roles. Then, before allowing access to a user, the
          server verifies their authorization level. Here’s how Pinniped
          achieves access control with a dynamic set of database tables.
        </p>
        <h5>
          <span id="h.sk42wt13e3ij">Authentication</span>
        </h5>
        <p>
          Since Pinniped’s combined application and data layers are not built to
          scale horizontally, session-based authentication with a local session
          store was the perfect fit for our needs.
        </p>
        <p>
          Pinniped implements session-based authentication through the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Express-Session</span> npm
          package. This package provides a middleware that creates a session and
          cookie for each unique client that interacts with the backend. When a
          client makes subsequent requests to the backend, their browser
          automatically sends this cookie in the request headers. The session ID
          stored inside the cookie allows{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Express-Session</span> to
          retrieve the client’s info from the persistent session store and make
          it available in memory via the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>req.session</span> object.
        </p>
        <Graphic file={expressSessionSequence} extension="svg" />
        <h5>
          <span id="h.9lv9hdm4a5">User Roles</span>
        </h5>
        <p>
          Pinniped supports two simple user roles:{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Admin</span> and{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>User</span>. Upon
          successful login, a user’s ID, username, and role are added to their
          session data as a{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>user</span> object on{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>req.session</span>,
          indicating successful authentication. When the user logs out, this
          object is removed.
        </p>
        <Graphic file={loginSessionSequence} extension="svg" />
        <h5>
          <span id="h.5fjtwzy6hfkf">API Access Rules</span>
        </h5>
        <p>
          Each table has an API rule associated with the actions that can be
          performed on it. These rules and their corresponding values,{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>public</span>,{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>user</span>,{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>creator</span>, or{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>admin</span>, are stored
          in <span style={{ color: "rgb(24, 128, 56)" }}>tablemeta</span> and
          are made available by{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>LoadTableContext</span>,
          as an instance of the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model on{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>res.locals</span>. This
          context is then available for all remaining middleware to utilize.
        </p>
        <Graphic file={apiRulesRequest} extension="png" />
        <h5>
          <span id="h.7x9l1a6oyyrw">
            AuthCheck - Table Level Authorization Middleware
          </span>
        </h5>
        <p>
          With the relevant{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model
          instance, accompanying API rules, and the client’s session information
          available in memory, Pinniped’s{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>AuthCheck</span>{" "}
          middleware function has all the information it needs. It then either
          sends an error response to the client or passes the request along to
          its intended endpoint.
        </p>
        <Graphic file={authCheckSequence} extension="svg" />
        <h5>
          <span id="h.3mi426m8cso1">Row Level Authorization </span>
        </h5>
        <p>
          A final authorization check occurs once the request reaches the
          endpoint route handler function. If the request’s API rule value is{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>creator</span>, the row(s)
          the client intends to interact with are retrieved and compared to the
          current session user’s ID. If the current session user’s ID does not
          match the value of the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>creator</span> column on
          the requested row(s), a{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>403 Forbidden</span>{" "}
          response will be sent to the client, preventing them from performing
          their intended action.
        </p>
        <Graphic file={rowAuth} extension="png" />
        <h3>
          <span id="h.ij2f6nu5ut9a">Implementing Extensibility</span>
        </h3>
        <p>
          Beyond the core CRUD operations provided by auto-generated APIs, most
          BaaS products address the lack of unique route handlers by offering
          mechanisms for developers to define and execute custom application
          logic. Serverless functions are a common approach for achieving this
          functionality, but they come with inherent tradeoffs.
        </p>
        <p>
          We chose an alternative approach with Pinniped to minimize these
          common BaaS extensibility pain points for our target developers.
        </p>
        <h4>
          <span id="h.dfmivk1lyj78">
            A Serverless Function Alternative: Local Extensibility Framework
          </span>
        </h4>
        <p>
          Pinniped's local extensibility framework allows developers to register
          custom event handlers directly within their backend project. This
          approach offers several advantages:
        </p>
        <ol>
          <li>
            <b>Native Dependencies:</b> Custom functions have direct access to
            npm packages installed within the Pinniped project, eliminating the
            need to manage dependencies within a serverless provider's
            ecosystem.
          </li>
          <li>
            <b>Familiar Development Environment:</b> Developers can leverage
            their existing Node.js and Express development experience when
            writing custom logic.
          </li>
          <li>
            <b>Reduced Latency:</b> Since the functions execute locally, there's
            no cold start delay or additional latency associated with
            communicating with a separate serverless environment.
          </li>
        </ol>
        <h4>
          <span id="h.uvbqmxlxsfnv">Local Extensibility Tradeoffs</span>
        </h4>
        <p>
          However, local extensibility also comes with a <b>key limitation:</b>{" "}
          <b>scalability</b>. Unlike serverless functions, which can scale
          independently in a traditional backend architecture, local functions
          share the resource pool of the Pinniped backend. This limits their
          ability to handle high volumes of concurrent requests compared to
          serverless solutions.
        </p>
        <p>
          Despite this limitation, Pinniped’s focus on ease of use and
          portability justified this tradeoff.
        </p>
        <h4>
          <span id="h.na3jyjpje7b5">
            Pinniped’s Local Extensibility Framework
          </span>
        </h4>
        <p>
          Pinniped’s local extensibility framework allows developers to register{" "}
          <b>Custom Routes</b> and <b>Event Handler Functions.</b>
        </p>
        <ol>
          <li>
            <b>Custom Routes:</b> Pinniped allows developers to register custom
            routes in a way that mimics the familiar Node.js / Express API
            creation experience.
          </li>
        </ol>
        <Graphic file={customRoute} extension="png" />
        <ol>
          <li>
            <b>Event Handler Functions:</b> Pinniped leverages Node.js's
            built-in{" "}
            <span style={{ color: "rgb(24, 128, 56)" }}>EventEmitter</span>{" "}
            class to create a custom event system. Developers can register event
            handler functions that execute when their corresponding event is
            triggered.
          </li>
        </ol>
        <Graphic file={eventExtensibility} extension="png" />
        <h5>
          <span id="h.2bpsrrxiez8q">Under the Hood</span>
        </h5>
        <p>
          <b>An</b>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>
            <b>index.js</b>{" "}
          </span>{" "}
          <b>file serves as each Pinniped project’s main entry point</b> and is
          used to configure and run the application. Within this file, the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>pinniped</span> npm
          package is imported and used to create an instance of the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>pinniped</span> class,
          known as <span style={{ color: "rgb(24, 128, 56)" }}>app</span>. This{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>app</span> instance is
          used to register custom routes and event listeners before it
          configures and starts an Express web server that will serve the
          application.
        </p>
        <Graphic file={extensibilitySetupSequence} extension="svg" />
        <p>
          <b>Most API operations trigger events</b>, including CRUD operations,
          schema changes, and account management actions. These events provide
          access to the Express request and response objects along with any
          relevant data from the route that triggered the event. This allows
          developers to write flexible event handler functions that can
          manipulate data, interact with external services, or perform any other
          actions needed by their unique application.
        </p>
        <p>
          Notably, developers can send custom responses (as shown below) or
          perform actions unrelated to the response, (such as logging,
          analytics, server-sent events, etc) and let the route handler that
          triggered the event send its default response.
        </p>
        <Graphic file={extensibilityReqResSequence} extension="svg" />
        <h3>
          <span id="h.otvy7jf4weox">Hosting and Deployment</span>
        </h3>
        <h4>
          <span id="h.ullmek4q5ysu">An Embedded Database</span>
        </h4>
        <p>
          In the traditional three-tier architecture, the database lives on its
          own machine, and the application communicates with it over a network.
          This kind of architecture has many benefits; however, we wanted to
          keep the entire Pinniped backend as simple as possible and deliver it
          as a <b>single npm package.</b> This goal ruled out running the
          application and database on separate machines and led us to consider
          using an embedded database.
        </p>
        <p>
          An{" "}
          <b>
            embedded database operates on the same machine as the application
            server,
          </b>{" "}
          which requires less configuration from the user. Embedding also
          removes network latency and instability between the database and the
          application. Removing the need for network protocols also allows for
          more straightforward communication between the application and the
          database. These speed increases enable them to handle more read/write
          operations than an equivalent networked database. An embedded database
          fit our goals to keep Pinniped portable and easy to use, but it wasn’t
          without drawbacks.
        </p>
        <p>
          Embedding the database means that the application can not scale
          separately from the database, and multiple application servers can’t
          use the same database. If a traffic bottleneck is reached, traditional
          three-tier architecture scaling strategies are impossible. Those
          applications that expect to see such high volumes aren’t the intended
          users of Pinniped, so we decided the tradeoff for portability and
          simplicity was worth it. As a result, Pinniped’s architecture
          resembles two distinct tiers, with the database and application logic
          sharing one.
        </p>
        <Graphic file={pinnipedArchitectureAnimation} extension="svg" />
        <h4>
          <span id="h.x7x4h4gnrmy3">Database Selection</span>
        </h4>
        <p>
          Having chosen to embed the database, we had a few primary concerns
          when deciding which database to use: speed, reliability,
          documentation, and library support. One option that aligned well with
          our needs was <b>SQLite,</b> a mature, widely used, speedy SQL
          database with plenty of documentation and supporting libraries. It met
          our criteria and was also successfully used as the database for
          PocketBase, which gave us confidence that it would work for our use
          case.
        </p>
        <h4>
          <span id="h.6n4qjvhwyjez">Portability Considerations</span>
        </h4>
        <p>
          After choosing to run our backend as a single process delivered as an
          npm package, we considered a few different ways of packaging and
          distributing the project.
        </p>
        <h5>
          <span id="h.omve7blacj0y">Containerization</span>
        </h5>
        <p>
          We considered Docker because of its portability benefits: we could
          include all our configurations and dependencies in the Docker image
          and run Pinniped on any platform that supports Docker. However,
          because of our single-process architecture, many of Docker's
          strengths, like orchestrating multiple nodes and scaling them
          independently, wouldn’t benefit us.
        </p>
        <p>
          For us, the drawback of requiring users to manage Docker as an
          additional dependency was significant. The simplicity of an npm-only
          approach made it particularly accessible to Pinniped’s target
          audience: front-end developers who likely already use it and know how
          to configure it in production environments.
        </p>
        <h5>
          <span id="h.g8o8w76l4std">Executable File</span>
        </h5>
        <p>
          We also explored compiling Pinniped into an executable file. This
          approach's primary benefit was further reducing the dependencies
          needed to run the application in production. However, building to an
          executable with Node.js is not fully supported, and the technical
          challenges accompanying the process made it untenable.
        </p>
        <h4>
          <span id="h.nzchgyalh5d7">Deployment</span>
        </h4>
        <p>
          We’ve attempted to make deploying Pinniped as straightforward as
          possible while retaining flexibility so users can deploy however they
          want. The default route for deploying Pinniped is to develop the
          backend locally, set schema and add any customization code, set any
          configurations, place the project on a VPS, install Node.js, and run
          the application. Application configurations are contained in a{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>.env</span> file which
          allows you to specify the domain for your application, the port for
          the server to listen on, the CORS whitelist, the session secret, and
          various configurations related to Pinniped’s automated TLS certificate
          feature.
        </p>
        <p>
          The application serves the Admin UI and API, at the specified domain
          and port.
        </p>
        <Graphic file={startupLog} extension="png" />
        <h4>
          <span id="h.42dn93vu5fwi">HTTPS</span>
        </h4>
        <p>
          Hypertext Transfer Protocol Secure (HTTPS) is the primary
          communication protocol for sending information between a web server
          and a client. It secures the communication between the web server and
          the client by encrypting the data in transit. Its importance comes
          from protecting the data packets from on-path attacks—malicious
          attempts to access the data. Since HTTPS is pivotal to securing
          communication on the internet, Pinniped automates certifying the
          application to use HTTPS.
        </p>
        <h5>
          <span id="h.54fmsf4tn2jb">TLS Auto Certification</span>
        </h5>
        <p>
          If the VPS IP that Pinniped is running on has a domain name pointing
          to it, the domain variable in the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>.env</span> configuration
          file can be set. Then on start-up, Pinniped will check for a TLS
          certificate. If there is no certificate or it is expired, Pinniped
          will attempt to obtain one from Let’s Encrypt. To do this, we start a
          server to listen on port 80 and initialize the challenge request to
          Let’s Encrypt. When our server satisfies the challenge, Let’s Encrypt
          issues the certificate. We bring down the challenge server and start
          the Pinniped application on port 443 (HTTPS) using the new
          certificates while redirecting any port 80 (HTTP) traffic to 443.
        </p>
        <Graphic file={ssl} extension="mp4" />
        <p>
          Pinniped performs a daily check of the certificate. If it is within 30
          days of expiring, the challenge server will attempt to renew it. If
          successful, the server restarts with the new certificate.
        </p>
        <h4>
          <span id="h.fvx641ywh83u">CLI Deployment</span>
        </h4>
        <p>
          While Pinniped will work in any local or cloud environment with NodeJS
          installed, the Pinniped-CLI provides an easy-to-use deployment
          pipeline to host a local Pinniped application on an AWS EC2 instance.
          After installing and configuring Amazon’s AWS CLI tool with AWS
          credentials, the Pinniped-CLI tool walks users through the
          provisioning and deployment process. The Pinniped-CLI also automates
          the process of starting, stopping, and updating a deployed Pinniped
          application via a secure shell (SSH) connection.
        </p>
        <Graphic file={updatePinniped} extension="mp4" />
        <h2>
          <span id="h.h6emovkl7kr9">Future Work</span>
        </h2>
        <h3>
          <span id="h.gpkutfz3xtqc">CLI Support</span>
        </h3>
        <p>
          Right now, Pinniped’s CLI tool only supports AWS. We’d like to expand
          its functionality to include more major cloud providers.
        </p>
        <h3>
          <span id="h.gdfcsrf0ly5g">Database Replication</span>
        </h3>
        <p>
          While Pinniped has a process for database backups, it would be ideal
          to add an option to integrate with a more robust disaster recovery
          tool such as Litestream which automatically replicates the database to
          offsite storage.
        </p>
        <h3>
          <p>File Storage</p>
        </h3>
        <p>
          File storage is a commonly provided BaaS offering, and there are many
          situations when Pinniped users might want native support for it. It
          would be great to allow for both local storage and integration with
          cloud storage solutions.
        </p>
        <h3>
          <p>Type Flexibility</p>
        </h3>
        <p>
          An oddity of SQLite databases is that they don’t strictly type
          columns. It makes SQLite unique in the SQL world and is useful when
          you don’t know what data types a user may want to store. We’d like to
          implement these flexible types to increase the range of what users can
          do with Pinniped.
        </p>
      </>
    </ContentsWrapper>
  );
}
