import styled from "styled-components";

import useCheckImagesLoaded from "../hooks/useCheckImagesLoaded";
import useScrollToHeader from "../hooks/useScrollToHeader";

// Images
import baasCompPnpd from "../assets/images/baas_comp.png";
import BaasComp from "../assets/images/BaaS-Comp-No-Pnpd.png";
import three_tier from "../assets/images/three_tier.png";
import tableMigrationSequence from "../assets/images/table-migration-sequence.png";

// Animations

// Videos
import portability from "../assets/videos/portability.mp4";
import extensibility from "../assets/videos/extensibility.mp4";
import ease from "../assets/videos/ease.mp4";

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
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.9rem;
  }

  h5 {
    font-size: 0.8rem;
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
    max-width: 95%;
    height: auto;
    border-radius: var(--graphic-radius);
  }
`;

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

const Image = ({ src, alt }) => {
  return (
    <GraphicWrapper className="graphic-wrapper">
      <img src={src} alt={alt} />
    </GraphicWrapper>
  );
};

const Video = ({ src, alt, style }) => {
  return (
    <GraphicWrapper className="graphic-wrapper">
      <video autoPlay loop muted style={style}>
        <source src={src} type="video/mp4" />
      </video>
    </GraphicWrapper>
  );
};

const Animation = ({ svg, alt }) => {
  return (
    <GraphicWrapper className="graphic-wrapper">
      <object type="image/svg+xml" data={svg} />
    </GraphicWrapper>
  );
};

export default function Content() {
  const { imagesLoaded } = useCheckImagesLoaded();
  useScrollToHeader(imagesLoaded);

  return (
    <ContentsWrapper id="contents-wrapper">
      <>
        <h2>
          <span id="h.kjk2mlakynta">What is Pinniped?</span>
        </h2>
        <p>
          Pinniped is a portable, user-friendly <i>backend as a service</i>{" "}
          tailored for small teams and front-end engineers. It provides
          essential backend capabilities, including database management, API
          server functionality, and user authorization while prioritizing
          Javascript extensibility.
        </p>
        <h2>
          <span id="h.vulifb8ocgrk">Backend-As-A-Service</span>
        </h2>
        <p>
          Before getting into the definition and benefits of a backend as a
          service (BaaS), we’ll look at the typical structure of web
          applications, the challenges associated with building them, and some
          tools that address those challenges.
        </p>
        <h2>
          <span id="h.2jbcyj2czoho">3-Tier Architecture</span>
        </h2>
        <p>
          Web applications are commonly built by separating their functionality
          into three tiers. This separation isolates different responsibilities
          of the application and is often reflected in the physical
          configuration of the hardware as well. Isolating the responsibilities
          of each tier makes each easier to develop and maintain. The three
          tiers are:
        </p>
        <h3>
          <span id="h.p60wvo2lgzpp">The Data Tier</span>
        </h3>
        <p>
          The Data Tier is responsible for data storage, retrieval, and
          management within a web application. It typically encompasses a
          database and caches. The database conventionally lives on its own
          hardware, isolated from the other tiers.
        </p>
        <h3>
          <span id="h.yp62vtvaazpu">The Application Tier</span>
        </h3>
        <p>
          The Application Tier, or Business Logic Tier, processes user requests,
          executes business logic, and manages data exchange between the
          presentation and data tiers. It handles the application's core
          functionality, including most data validation, session management, and
          integration with other services. The application can handle varying
          request volumes by horizontally scaling the application tier across
          physical machines.
        </p>
        <h5>
          <span id="h.lsx16pvcj3zy">REST API</span>
        </h5>
        <p>
          The interface (API) that allows clients to interact with the
          application tier is crucial. These interfaces are commonly built using
          tools like GraphQL or following architectural styles like REST. Since
          we opted for a REST approach, we’ll focus on it here. REST APIs
          represent entities, like database tables, as "resources" with unique
          URLs. Each resource instance (e.g., a row in the table) is accessible
          by appending its identifier to the resource URL endpoint. HTTP request
          methods tell the endpoint what operation to perform on the resource
          specified by the URL.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/Em2X7WpnwFGvzJtY20mrKDRnZ1PkbvX6NqbMFDNqzmEZSmfAzasRntdQiTJYs5vPqAcoQdy7c4F0g8-5F6_Q17l_yvDgClfGXD0orjrK-I4yepeBgDW6m4GE6fqSd5O9N8jHLUWNHoFftohLGKNhF0UI7rM3iAb8"
            alt=""
          />
        </p>
        <h4>
          <span id="h.prhaesqp2ij0">Implementing a REST API</span>
        </h4>
        <p>
          A web server typically implements REST APIs to respond to HTTP
          requests. We'll use Express, a popular web framework for Node.js, to
          illustrate the creation of a REST API and to define some terms that
          will be referenced later.
        </p>
        <h5>
          <span id="h.rjgrn4oid50t">Route Handler Functions</span>
        </h5>
        <p>
          Building a REST API using Express involves creating and registering
          unique route handler functions. These functions define how the server
          responds to specific HTTP requests targeting particular URLs
          (endpoints) within the API. Route handlers typically take two
          arguments:
        </p>
        <ul>
          <li>
            <b>Request</b> —The incoming HTTP request object.
          </li>
          <li>
            <b>Response</b> —The object that’s sent back to the client.
          </li>
        </ul>
        <p>
          Within the route handler, you use the request object to access
          information about the request and the response objects to define the
          content and structure of the response. This allows you to implement
          the logic for CRUD operations (Create, Read, Update, Delete) on your
          resources based on the HTTP method (GET, POST, PUT, DELETE) used in
          the request.
        </p>
        <p>
          Here’s a simple example showing the registration of route handler
          functions at specific URL endpoints.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/z8RcaaET5WBSgRg1QyHgLSBMl-Uz474N7SXkTssnveLxKC_g95zq7aZSfRZk5Ub1nEf4D7tPKEcE0jvisMjbqL5mXiY-vuH9Lg2cKxdAT-Gy0hrUQuEQ_RCOEMHFBNuBbJeMphr2bcvh5S0JUht8PJyFnL-Hkjyv"
            alt=""
          />
        </p>
        <h5>
          <span id="h.15bxho82qg7m">Middleware</span>
        </h5>
        <p>
          Middleware in web frameworks are functions that act as preprocessors
          before a route handler. These functions are well-suited for handling
          shared tasks such as parsing data, logging requests, and user
          authentication. They can be applied globally or to specific routes.
        </p>
        <h5>
          <span id="h.xjpyyt60juhx">
            <a
              href="https://drive.google.com/file/d/1-qXeeTGAh7WquIPFqzT0BaxbmX9Yw0kA/view?usp=drive_link"
              target="_blank"
            >
              Visual - Animation showing the request coming in, passing through
              middleware, interacting with res and req, before arriving at the
              final endpoint.
            </a>
          </span>
        </h5>
        <h3>
          <span id="h.h03wvg9n2q4q">The Presentation Tier</span>
        </h3>
        <p>
          <b>The Presentation Tier is the user-facing layer</b> , comprising the
          web application's user interface and user experience components. It
          displays information to the users and captures their inputs,
          facilitating interactions between the user and the core application.
          The presentation tier usually runs on users’ devices.
        </p>
        <h5>
          <span id="h.qwf9fblkl456">
            <a
              href="https://drive.google.com/file/d/1DkEKyCj9vmcjLQdrXRSkBAyMQoBty_wd/view?usp=drive_link"
              target="_blank"
            >
              Visual - Animation - Show communication flow between tiers
            </a>
          </span>
          <span id="h.qwf9fblkl456">.</span>
        </h5>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/ybSalXDP8Qp4ab3xw0EJYqdwvQGnTP1_ncIQCAz5bUnYculL9eIKDQUvAD9cU4jCTGeqo9VWGBBNkPXElOuWLxrLe0qld5nBpbdibYKTJUsoNtqGON26RmjG3bYqUiVxvZPmdCXoXn7df9x5ALwfB_-huB729rhr"
            alt=""
          />
        </p>
        <h3>
          <span id="h.qaufus87ww">Challenges of Three-Tier Architectures</span>
        </h3>
        <p>
          While building a three-tiered application separates the main concerns
          of a web application, making it easier to reason about and manage, it
          also involves many challenges. We’ll discuss some of them below.
        </p>
        <h4>
          <span id="h.81murxoaqfpi">Data Tier</span>
        </h4>
        <p>
          <b>Developers must decide how and where data is stored.</b> How should
          the data be modeled? Does it best fit a relational model, document
          model, or graph? Will the database run on its own machine or be
          embedded with the rest of the application? Should the database be
          hosted on the cloud or a local server? After choosing a suitable
          database, developers must create data structures that fit the data.
          They also have to configure and maintain their database as their
          requirements change and user base grows.
        </p>
        <p>
          Strategies for handling increased traffic in the data tier include
          upgrading the database's hardware or implementing various techniques
          to lighten the load on the database, such as setting up caches,
          queues, and SQL indexes. Depending on the situation, more significant
          and costly changes to the architecture, such as replicating or
          partitioning the database, could be necessary.
        </p>
        <h4>
          <span id="h.ca36x8fki4sr">Application Tier</span>
        </h4>
        <p>
          Developing a robust application tier presents several hurdles. One
          major challenge is{" "}
          <b>efficiently creating and maintaining a REST API layer</b> ,
          especially for applications with numerous resources. Exposing each
          resource through a well-designed API can be a repetitive task. Beyond
          API development, other challenges include implementing robust security
          measures like authentication and authorization, validating data, and
          effectively integrating business-specific logic.
        </p>
        <h4>
          <span id="h.ny5a416kbkcz">Hosting</span>
        </h4>
        <p>
          Hosting can be a complicated part of running a web application. There
          are technical details of where to host the application, whether
          locally or in the cloud, and security concerns surrounding the
          configuration of the hosting environment and the application, such as
          obtaining and renewing a TLS certificate to secure network traffic. If
          the hardware is located on-site and the demand grows exponentially,
          scaling the physical infrastructure in response can take time and
          effort.
        </p>
        <h3>
          <span id="h.iny0goyw26p5">Tools to Address These Challenges</span>
        </h3>
        <p>
          While every web application is unique,{" "}
          <b>the challenges described above are common</b> , leading to the
          development of tools such as IaaS, PaaS, and BaaS that solve some or
          all of these challenges with varying levels of control and
          abstraction.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/wnxkTNyYjjlCt2nw-9rT4lm4dqgCPBOtE3ac-bVBCsZO5F5Eou_xDcqyHuiKwGBPMIR9Tu4dbooFTsJg6JKauBk5XXWsEsUXp0faZw5K_-1G9OoY8zeSN93t9g3FwZF6nj8iBuzqmvM9bSrqwSoR-CB8Hfh39_4u"
            alt=""
          />
        </p>
        <p>
          <b>Infrastructure as a Service - IaaS</b>
        </p>
        <p>
          IaaS products remove the need to purchase, physically house, power,
          and maintain hardware by offering hardware usage over the internet in
          a pay-as-you-go style. One common IaaS product is a Virtual Private
          Server (VPS), which is a server and operating system.
        </p>
        <p>
          While IaaS tools handle hardware concerns, developers are responsible
          for everything else: managing runtime environments, ensuring
          application dependencies are installed, and configuring reverse
          proxies, firewalls, and load balancers.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/ifZGawn37tbDeEg9J9yx-i3ZwnqsQYFRv_qjcCGD7OBEBz3qlVWsrDblHLnI_4vmPjxjCo4ccZdnQWP7JD8cI2ak_26Qq5bAsA6GftMTafcIJHLkBNBJ_v2uHfSVclorM6xya7fquc49bMK3iQ4wRbyR8fSBFrYw"
            alt=""
          />
        </p>
        <p>
          <b>Platform as a Service - PaaS</b>
        </p>
        <p>
          PaaS products build on what IaaS products offer. In addition to
          providing physical infrastructure, they offer solutions for challenges
          associated with deployment, server configuration, security
          configuration, runtime environment, and maintainability, allowing
          developers to focus almost exclusively on application development. AWS
          Elastic Beanstalk is an example of a PaaS. It deploys applications,
          configures reverse proxies and load balancers, and monitors system
          health.
        </p>
        <p>
          While PaaS can solve many of the challenges of configuring and running
          a web application, it comes with the significant drawback of vendor
          lock-in: moving an application from a PaaS can be challenging.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/q5SXUhRGhMfHmqnINztqGeAV2QeSWyaYA7oaI5svofmk-11ah1t_Bp6XGPIab-opCc0ezsHSbhxPKmHhcFBF2IIGPnGFwjgRyczYI9yqKRP4gMEd8vB0wnJSiHknpb0Rf6O-XrsyEj3v9cs9K_MybhPsIaO9sS95"
            alt=""
          />
        </p>
        <p>
          <b>Backend as a Service - BaaS</b>
        </p>
        <p>
          A{" "}
          <b>
            BaaS abstracts away the process of creating an application’s backend
          </b>{" "}
          and provides an interface for the rest of the application to
          communicate with it. BaaS products create and configure the
          application and data tiers and often automatically scale the
          infrastructure to handle traffic. They abstract communication with the
          database typically by auto-generating a REST API, allowing the user to
          modify the database structure and content. This removes the repetitive
          and tedious task of manually building an API to interact with data.
        </p>
        <p>
          BaaS, in addition to automating parts of a backend that most
          applications share, such as file storage, observability, and real-time
          data subscriptions, often offers a managed cloud hosting service. This
          service streamlines the application development process by hosting the
          project with less required setup.
        </p>
        <p>
          Most BaaS products build on the features offered by PaaS by
          abstracting server configuration and adding a backend to the mix. In
          contrast, others only focus on abstracting the backend and leave the
          developers to choose hosting options. All of these features enable
          developers to focus on their application's business logic and
          functionality.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/RDAlfTxmRL_CN8eaTukfGU8gRwt5fsmQOIMd_JaEvI0TXGRUiSyXLHNmYZ_ALa87ZsUoi8RrkfSKCHIJBMLvP-pj0WAjdCv-aBrPLlMwTlRuOisZpzkRedy9tP-jrz5bzkjNyCyX24f_bfv2-ULJu0EYoAu6lvvR"
            alt=""
          />
        </p>
        <p>
          The more an application follows norms, such as utilizing a REST API to
          interact with entities stored in a database, the more likely a BaaS
          can be helpful. A BaaS generally <b>increases abstraction</b> to{" "}
          <b>increase developers' ease of use</b> . However, if an application’s
          needs are unique, a BaaS product’s abstractions can be limiting.
        </p>
        <p>Some common limitations problems are:</p>
        <ul>
          <li>
            <b>Lack of portability</b> —Most BaaS products are easy to deploy
            and host to a BaaS-specific provider. However, if a developer wants
            to choose their own host, configuring the BaaS can be difficult.
          </li>
          <li>
            <b>Lack of ownership</b> —Many BaaS products are closed-source,
            which raises concerns about long-term access, ongoing maintenance,
            and data privacy. Open-source alternatives can mitigate these risks.
          </li>
          <li>
            <b>Lack of flexibility</b> —If a developer requires functionality a
            BaaS product doesn’t offer, they’re limited to whatever tools the
            BaaS provides to solve the problem. This could lead to compromises
            in the application’s features or make using the BaaS non-viable.
          </li>
        </ul>
        <h4>
          <span id="h.oy1wt4jvoxm2">How BaaS address these problems</span>
        </h4>
        <ul>
          <li>
            <b>Portability</b> —Most BaaS products don’t significantly address
            the issue of portability. Part of the tradeoff made by prioritizing
            ease of use is a lack of support for a broader selection of hosting
            options.
          </li>
          <li>
            <b>Ownership</b> —Some BaaS products are open-source, but due to the
            sizes of BaaS codebases, support and maintenance issues are still
            present.
          </li>
          <li>
            <b>Flexibility</b> — Most BaaS products mitigate flexibility
            problems by allowing users to customize the functionality of the
            backend via <b>serverless functions.</b>
          </li>
        </ul>
        <h5>
          <span id="h.5uubkrsgia7a">Serverless Function Extensibility</span>
        </h5>
        <p>
          Serverless functions, code that executes in cloud environments, are
          automatically managed and provisioned on demand by BaaS providers.
          These functions execute custom logic in response to events, extending
          the auto-generated API's capabilities beyond basic CRUD operations.
          These functions allow developers to adapt the backend to their
          specific needs.
        </p>
        <h5>
          <span id="h.up8by763id6o">Serverless Function Tradeoffs</span>
        </h5>
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
            <b>Latency</b> —Due to cold start delays: when a serverless function
            hasn’t been invoked recently, there’s a delay before execution
            begins. Due to remote communication, serverless functions are not
            run on the same hardware as the backend and require a network hop
            for any interaction with the backend.
          </li>
        </ul>
        <h2>
          <span id="h.aheksd5ia8c1">BaaS Feature Comparison</span>
        </h2>
        <p>
          Each BaaS offers a different feature set. The chart below highlights
          some of today’s more popular BaaS solutions and the features they
          offer.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/aNhpKHjCOqWLYHWQpLLhDk969MKrOEc00t26G5ibWCip_sOGSP77GlZPMC8iE7e_73h4qn_omG5cjlZTiQxjXQ8ieGg92hWmwLbZYOCSx3qAgC-i76XyQy5fnU5azNL_9LvtEjN51mB4qAJ7ec1QtHGOsx8Yqknm"
            alt=""
          />
        </p>
        <ul>
          <li>
            <p>
              <b>Firebase</b> is a powerful BaaS platform from Google that
              offers a wealth of development tools. Unlike some BaaS options,
              Firebase doesn't allow you to choose your hosting provider. This
              can be a drawback if flexibility is a major priority for your
              project. However, if Firebase's features align well with your
              needs, the convenience of its built-in tools might outweigh this
              limitation.
            </p>
          </li>
          <li>
            <p>
              <b>Supabase</b> is a popular open-source option that offers more
              control. Developers can choose their hosting provider, but the
              setup process can be more complex. Like Firebase, Supabase uses
              serverless functions to extend the BaaS.
            </p>
          </li>
          <li>
            <p>
              <b>PocketBase</b> is a lightweight BaaS that prioritizes developer
              flexibility. Unlike Firebase’s managed hosting, Pocketbase runs
              from a single executable, allowing deployment on any Linux server.
              This ease of deployment comes at the cost of a more manual server
              configuration process. ItsTheir extensibility utilizes local
              functions in Golang or a limited Javascript runtime. These
              features cater to developers who value control and customization
              over managed convenience.
            </p>
          </li>
        </ul>
        <h2>
          <span id="h.9h5mmnnqr80y">Pinniped</span>
        </h2>
        <h3>
          <span id="h.nooivelf1ckz">Use Case</span>
        </h3>
        <p>
          Among the BaaS options, we saw an opportunity to build a BaaS that was{" "}
          <b>easy to self-host</b> and <b>customize with JavaScript</b> , a
          language most front-end engineers already know. A BaaS that could
          streamline application development by providing database management
          and API server functionality while prioritizing ease of usefor{" "}
          <b>small teams</b> that value flexibility and don’t need all the
          features offered by larger BaaS.
        </p>
        <p>
          We focused on creating Pinniped for small projects/teams and wanted
          Pinniped to be easy for them to use, which means the strategies we
          used for building Pinniped look different than many BaaS. While most
          BaaS prioritize ease of use by abstracting complexity, we prioritized{" "}
          <b>ease of use</b> by focusing on the problems that developers
          creating small projects with BaaS have:
        </p>
        <h4>
          <span id="h.1usi6uxe79bs">Portability</span>
        </h4>
        <p>
          We wanted Pinniped to be as simple as possible to deploy. Because we
          were targeting small applications, we decided to run Pinniped as a
          single process with a <b>combined application and data tier</b> . This
          departs from the typical three-tier architecturethe norm significantly
          and has significant drawbacks when it comes to scalability, as
          Pinniped cannot scale the server and database separately. We’ll
          continue exploring this decision's ramifications throughout the case
          study. The upside of using a single process is that Pinniped requires
          minimal configuration and allows developers to quickly run a Pinniped
          application in a local development environment or any production
          deployment environment with Node.js.
        </p>
        <h4>
          <span id="h.y8xkrmu7jy23">Extensibility</span>
        </h4>
        <p>
          Pinniped’s business logic and API functionality can be customized with
          locally executed JavaScript, avoiding the increased network latency
          and configuration complexity of serverless functions that extend many
          other BaaS solutions. Pinniped functions run in a Node JS runtime,
          supporting up-to-date JavaScript ES6 features, the Node API, and npm
          packages familiar to most Javascript engineers. This implementation
          also affects Pinniped's scalability, but we’ll defer that discussion
          until later in the case study.
        </p>
        <p>
          <a
            href="https://drive.google.com/file/d/1KajHoYdlBU87mCafuz1vN03pwR_Aur-q/view?usp=sharing"
            target="_blank"
          >
            Visual - Video snippet showing event an event handler being written
            and registered in the index.js file
          </a>
        </p>
        <h4>
          <span id="h.b54w2gxrrbbx">User experience</span>
        </h4>
        <p>
          We wanted Pinniped to be easy to use by making it simple to interact
          with and integrate into any application. Simple workflows allow users
          to create a Pinniped-powered application, deploy it onto a virtual
          private server (VPS), and manage it through an admin dashboard.
        </p>
        <h5>
          <span id="h.ldkgtiqek17b">
            <a
              href="https://drive.google.com/file/d/1Ksj4ryrhpJqIC3BVH8pdSOA0HXbiWUjx/view?usp=sharing"
              target="_blank"
            >
              Visual - Video snippet showing the use of the admin UI
            </a>
          </span>
        </h5>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/pcKJtCI9iEpEZGmy8bzzddOeTnKbE3E1eQ3FLLiyvWuQsrxjsG484LFMbfBxZ8L9jtUcOn7QpUhPSBLAreScMBaPm7A1PStHo4E__VI8H_FsndVjFNzUuVxSnkOWanHkQVrlsot-KlXEeM9gLGpJiArrC9eAp_dT"
            alt=""
          />
        </p>
        <p>
          <b>Pinniped</b> fits into the BaaS landscape as an option for
          developers who want a BaaS to build small applications in Javascript
          quickly. Features such as user file storage or real-time data
          subscriptions are left to the developer to implement through
          Pinniped’s strong extensibility support. Pinniped’s scalability is
          limited, so it’s unsuited for large-scale or enterprise applications
          that expect to see high traffic.
        </p>
        <h2>
          <span id="h.ekry0lqxnum2">Pinniped Design</span>
        </h2>
        <h2>
          <span id="h.7y6x2am16lre">Dynamic Schema</span>
        </h2>
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
        <h3>
          <span id="h.k09fc1rcg4nw">Creating and Updating Tables</span>
        </h3>
        <p>
          Pinniped exposes a special set of endpoints for interacting with table
          schemas. These data definition language (DDL) routes listen for{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>POST</span> and{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>PUT</span> requests to
          create and update table schemas in the database.
        </p>
        <h5>
          <span id="h.6gg296a34m3w">
            Visual - Code Snippet / Static diagram - POST request{" "}
          </span>
          <span id="h.6gg296a34m3w">
            <span style={{ color: "rgb(153, 153, 153)" }}>
              The request body must contain JSON representing the updated schema
              state.
            </span>
          </span>
        </h5>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/vHYE5LENlKnT7neyDRiLCFZAY9cfuJKZH2QwpJ5YddHczR_d1zppdJlGb8u0G2fSshSMGqwFTMiVu1aaVSCfpn75jmRvhUozk49NWfas-A-R6GMTWKDcNoVE9QW8lfejpkuWeC3QBuMnOf5Z4Se749ZuKNfn2bvu"
            alt=""
          />
        </p>
        <h4>
          <span id="h.ys5rvubtk6o6">Admin UI</span>
        </h4>
        <p>
          We created an admin UI to simplify schema operations and act as the
          primary means to modify schema. Instead of writing SQL statements,
          users fill in a form that defines the schema for a table. Our goal was
          to make the UI flexible enough to support users’ differing
          requirements while making it clear what operations are available. To
          track the state of the database and validate the form the UI sends, we
          need a way of monitoring metadata about each table a user creates.
        </p>
        <h5>
          <span id="h.k6uq5n6l4k6y">
            <a
              href="https://drive.google.com/file/d/1aOWzyPWm_plcCiQReuEssPPD67HZNBl4/view?usp=sharing"
              target="_blank"
            >
              Visual - Video - Detailed walkthrough of creating a table,
              different data types, constraints, etc. A more focused walkthrough
              of admin UI showing how a user can define a schema
            </a>
          </span>
        </h5>
        <h4>
          <span id="h.qs41o8tjweeu">Table Metadata</span>
        </h4>
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
        <h5>
          <span id="h.6i3tprfkh4mb">
            Visual - Code Snippet - Show SQL for creating seals table and SQL
            for inserting a row into tablemeta for seals
          </span>
        </h5>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/St7h32YjaqWNrnLehdex_NIXxwRyriEj1ecR53O0IQ2PpVxqbTs8p4xVU0nzh5wDUZw7adhgqb4ut62lHNmabnJl_jyPLq01aSYRMIWoLYYgwCeeOJG-tzduOHr-2E_683JlXH7v17RZG3DPMT1kavzTyeElY2Yg"
            alt=""
          />
        </p>
        <h4>
          <span id="h.u8w0gu4cfkyw">Table Model</span>
        </h4>
        <p>
          One difficulty when building an application that interacts with data
          stored in a database is the impedance mismatch between how data is
          represented in an application—generally an object—and how the data is
          represented and stored in the database—tables and rows. This mismatch
          leads to the need for a translation layer between the application and
          the database.
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
          For Pinniped, we needed a similar translation layer to help solve two
          main problems:
        </p>
        <ol>
          <li>Communicating with the database.</li>
          <li>
            Detecting the difference between two tables and making schema
            changes to an existing table.
          </li>
        </ol>
        <p>
          ORMs typically require developers to define their models statically,
          something we could not do since we don’t know what models our future
          users will create.
        </p>
        <p>
          <b>To work around that, we built a custom translation layer</b>{" "}
          <b>to maximize our flexibility</b> . We utilize Knex, a query builder
          library, and a{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model class
          that serves as an in-application representation of a specific database
          table and its metadata. When Pinniped receives a schema-related
          request, it instantiates an instance of the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> class, which
          we then use to build a schema migration file we pass to Knex to
          execute.
        </p>
        <h5>
          <span id="h.7iu3wob6z6m6">
            Visual - Animation / Sequence Diagram showing the entire flow of
            creating table/migrations / etc{" "}
          </span>
        </h5>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/jdhq1-UiIGBZF_V8ZrMZKgpLQgfKmPiSSbm8xfn5glAhDzU_ZJkVsSdknfbLsX26N5dapqT4Q-g3Iaz4sXGIOAqz4WvV_UtjVb09_V9TN_4xu-WG3wHqJtNcg88TEJx8I_Io1tjrk1BiyY5y21KABhskdyPTID0a"
            alt=""
          />
        </p>
        <p>
          Handling schema changes through <b>migration files</b> is more
          complicated than simply updating tables directly, but it has benefits.
          Migration files create a reversible, repeatable record of how schemas
          are updated. They are self-documenting, easy to roll back, and easy to
          test in a development environment before being used in production.
          These benefits of data integrity make up for the complexities of
          dynamically generating these migration files.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/ThZBpMEnAQo4tBQ5BmU9LrZBfHd7maq9IRXdY9cM7OBHQSjuOjOQlfxQIt5tQuGtVu3h5ovxXvgEunyHhhDCuP5IxbKENcnZq4_FAuOxCaHFFPanx_GWZxoTOR1HXF9yBQCSwmXQ56E_9MUcYWcT6kbLKebWfjOp"
            alt=""
          />
        </p>
        <h2>
          <span id="h.4ijxtcibqs9v">Interacting with Data</span>
        </h2>
        <h5>
          <span id="h.xpkvfuu3xb">
            <a
              href="https://drive.google.com/file/d/1duT_fPzUmU1Rh1qWAEXprw3S6FGXwWPM/view?usp=sharing"
              target="_blank"
            >
              Visual - Video walkthrough of creating a record and updating it -
              possible SDK usage
            </a>
          </span>
        </h5>
        <h4>
          <span id="h.8l65geerrxmx">Pinniped’s Dynamic RESTish API Layer</span>
        </h4>
        <p>
          Creating a REST API to interact with an application’s data can be a
          tedious, repetitive process. BaaS solutions automate this process by
          automatically generating an API layer that reflects the application's
          database schema. The challenge of auto-generating APIs stems from the
          application's schemas being unique to the developer's needs. So, how
          can the API accurately create endpoints referencing the right
          resources? The auto-generated API must be flexible enough to
          accommodate varying unforeseen schemas.
        </p>
        <p>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            <b>
              In contrast to traditional REST APIs that require pre-defined
              routes for each resource, Pinniped utilizes a dynamic approach
            </b>{" "}
          </span>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            . Rather than representing each table as a top-level resource, as in
            a standard backend, Pinniped uses a single resource,
          </span>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>tables</span>
          <span style={{ color: "rgb(14, 16, 26)" }}>
            <i>,</i>
          </span>{" "}
          <span style={{ color: "rgb(14, 16, 26)" }}>
            as the base resource for all create, read, update, and delete (CRUD)
            operations. Every table is an instance of
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
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/8SlONiGxRzcXrOK74asE2hn5iCVd_gieoAPYeqXNaNGaq1KgYA5GU780IZzQg73Om3zyVJwLQOT6WUWNLf2hU3d3Zq9LCjnhHgr3tKDEEuWhPlkvBJO9beAJfSyYHJ589-CnACHdk6NfElOw-R4XpX8zTI2hly88"
            alt=""
          />
        </p>
        <p>
          By taking this approach, Pinniped only needs to register a single set
          of route handler functions to provide a RESTish API layer for an
          application’s dynamic database schema.
        </p>
        <h4>
          <span id="h.hy5wgx6srdj2">
            Communicating with Pinniped’s API layer
          </span>
        </h4>
        <p>
          We developed the Pinniped-SDK npm package to make Pinniped’s API easy
          to interact with. Instead of learning the API signatures, developers
          can use the simple SDK methods to interact with the backend.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/vkh-I4hN0Cl1JzxYc-EJiswTFtz8nwna_Lrp9mqx4K1MCg1vXWRZPzV-X7O0DeMr3NFe-u60MXasgOGKiA7Ve5qTmgN-wwqTh3li7S4NLK_5n6B1tEQ8FPpaB1y17hkssjQ955wkZ5iCzG2N8QnR6dpnlonJDEF-"
            alt=""
          />
        </p>
        <h3>
          <span id="h.k56bdo322zko">
            The Challenges of Building an Auto-Generated API Layer
          </span>
        </h3>
        <p>
          Using a unique handler function for each resource and operation gives
          developers fine-grained control over how each route should behave. For
          example, on a route-by-route basis, developers can set authorization
          and data validation rules to control interaction with the route and
          implement application-specific functionality (extensibility) in
          addition to the standard REST API operations.
        </p>
        <p>
          <b>
            With Pinniped’s dynamic RESTish API layer, each route handler
            function needs to work in a general-purpose way that supports any
            underlying database schema and its unique requirements.
          </b>{" "}
          This requirement complicates the following endpoint-specific concerns:
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
          <span id="h.gk348w8h2ez7">Data Validation</span>
        </h3>
        <p>
          Pinniped enforces endpoint and operation-specific data validation
          using the stored metadata about each table, and middleware functions.
          This process ensures incoming data adheres to the expected structure
          for each table.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/B4f8GkoonGY5o0gBptQSD-UgL4GaLN71nTJVWEkKfSx1F5R2MORaiyeF8RdhZhigKrQ_sU3k5kPc0gtsc4hpz2wwqo8d7uxqNzcBt_UVIUqtnUH8eMApH2l2JkNLL612pZlLBUAirw5pENJVHyC2YZrMRGd9YYiv"
            alt=""
          />
        </p>
        <p>
          The{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>LoadTableContext</span>{" "}
          middleware retrieves the relevant table metadata and uses it to
          construct a dynamic{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model object
          in memory using the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model class,
          as previously described. This model represents the valid data format
          for the targeted table.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/rRXztm_3ZT-wl7bBr7k1MJCpeQ-8Qj8sRejiAXxCMb3Bl4rRP1x0_OYsLpuhF0JGy99y0qn7zkZ3xaTIIkk18OCBCNxPXdIXh2yl3VSDMp7_ASkI-C4QjxpxaVqGgMRnnNslzv-sWEcFWY9p16DciD_AJPIGyTv3"
            alt=""
          />
        </p>
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
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/x_25-wzAMhtl4_Ih4KVAdeLTYnQLQKBg_TDpnVVYKGjaYSJOIci4qn1R1QwVC01GtaRmM8uv9xG3WAUuFxL6FJUh2d6YitCHTiQQAVczgajDKcHCeb6rE-IkDvNf4Kj7S70xE1PZ9CDE-0JbWeRoG6x-chCnj1eD"
            alt=""
          />
        </p>
        <h2>
          <span id="h.zf1dsyjemv2m">Controlling Access To Data</span>
        </h2>
        <h5>
          <span id="h.yse6meowdakh">
            <a
              href="https://drive.google.com/file/d/1_50jdIYx_zRi5QpGe17dr8FEHnkuoRAm/view?usp=sharing"
              target="_blank"
            >
              Visual - Video- Content - Show editing table api rules.
            </a>{" "}
          </span>
        </h5>
        <p>
          For security concerns, developers restrict data access for different
          users in their applications. For example, an e-commerce site would not
          want all users to have access to each customer's payment information.
          Developers give users access to select data by labeling them with
          authorization roles. Then, before allowing access to a user, the
          server verifies their authorization level. Here’s how Pinniped
          achieves access control.
        </p>
        <h4>
          <span id="h.sk42wt13e3ij">Authentication</span>
        </h4>
        <p>
          Since Pinniped’s combined application and data layers are not built to
          scale horizontally, session-based authentication with a local session
          store was the perfect fit for our needs.
        </p>
        <p>
          Pinniped implements session-based authentication through the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Express-Session</span> npm
          package. This package is a middleware that runs before{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>loadTableContext</span>,
          creating a session for each unique client that interacts with the
          backend. When a client makes subsequent requests, their browser
          automatically sends the session ID back to the server within the
          cookie. Then, the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Express-Session</span>{" "}
          middleware retrieves the corresponding session data from the
          persistent session store and makes it available in memory via{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>req.session</span> again.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/wU0iY7k5x0d0BLz2ympq2RP_s_7XTwGP8eS66I64Tf4nEXVzbJsxqj8P_qWHV1TFTWHL7RXgQT_JeI_3xY2cTXx8InS9SIQ4eoTkOFRif1I2gtXBDzYoXGoUkqd9d7ClKGrq7MIC8sHEYA8Pf5iiUnDn0pecsry5"
            alt=""
          />
        </p>
        <p>Green boxes are not vertically aligned</p>
        <h4>
          <span id="h.9lv9hdm4a5">User Roles</span>
        </h4>
        <p>
          Pinniped supports two simple user roles:{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Admin</span> and{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>User</span>. Upon
          successful login, an object containing their username, unique ID, and
          role is added to the user’s session, indicating successful
          authentication. When the user logs out, this object is removed.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/X8pHDWU2kapZwVmTqo-0Fq8c8X2v08iWZy4xA7NxhSEe3UnQ3giMQcAj1Hhi8ky0JKIUi1SEjjdUi8ocJCH7CImNYrAMU0quke0sZD6V2uzTYAjn2qlm4dJhFtyuwP4fj5W8IJBhR1whzS9ESivgUoLX5Dpf8-do"
            alt=""
          />
        </p>
        <p>Green boxes are not vertically aligned</p>
        <h4>
          <span id="h.5fjtwzy6hfkf">API Access Rules</span>
        </h4>
        <p>
          Each table has an API rule associated with the actions that can be
          performed on it. These rules and their corresponding values,{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>public</span>,{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>user</span>,{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>creator</span>, or{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>admin</span>, are stored
          in <span style={{ color: "rgb(24, 128, 56)" }}>tablemeta</span> and
          are available as an instance of the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model on{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>res.locals</span> by{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>LoadTableContext</span>.
          This context is then available to all remaining middleware to utilize.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/mZrg6FiPAPLdE7tiFGsjBmFFaHf52FEV9S8xpPJsXd1VNN8zto1MK3nEpQ-dhakY9PtIH9fGzVW4J2hCfMf2jjOUTK70ZJiW_33xvEQVhskJqHGM-OVI4EIQhu24cS-UMQo9GV5c83wsDqodCjh9lWeV8PYedG1C"
            alt=""
          />
        </p>
        <h4>
          <span id="h.7x9l1a6oyyrw">
            AuthCheck - Table Level Authorization Middleware
          </span>
        </h4>
        <p>
          With the relevant{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>Table</span> model
          instance, accompanying API rules, and the client’s session information
          available in memory thanks to{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>LoadTableContext</span>{" "}
          and <span style={{ color: "rgb(24, 128, 56)" }}>Express-Session</span>
          , Pinniped’s{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>AuthCheck</span>{" "}
          middleware function has all the information it needs to either send an
          error response to the client or pass the request along to its intended
          endpoint.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/wFn7V7zbGb_HcFsgVPHQ_ngHEEXYm8fHo_ihk_dtdNjDe8wVltIcxz4dl1wH9-WbWZ_5ykTjRfQgRyhuhp7mxo22w6uo6Jy9yDvSlLnYEbZ_MJh8lzRD1KIXpCiwIiaaoVhkISeO2h0LNh5a7VK-YTMSvw7S6uWY"
            alt=""
          />
        </p>
        <h4>
          <span id="h.3mi426m8cso1">Row Level Authorization </span>
        </h4>
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
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/RbINTwP2K9SqKdCpHsdvi4iGP4xn0FWfwqeh2N5St1HIkJ95Wqh5gw-HlokZmaJXmC9fUUyQh34ns6soXULWMzecEpSB2YsXxvmf92BkgqWU8abuKpOWtrYIJzyb6gXrNdf312CWPzgl2OAi9LPGPzc1z1rGdjT1"
            alt=""
          />
        </p>
        <h3>
          <span id="h.ij2f6nu5ut9a">Extensibility</span>
        </h3>
        <p>
          Beyond the core CRUD operations provided by auto-generated APIs, most
          BaaS solutions offer mechanisms for developers to define and execute
          custom application logic. Serverless functions are a common approach
          for achieving this functionality, but they come with inherent
          tradeoffs, as discussed previously.
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
            no cold start penalty or additional latency associated with
            communicating with a separate serverless environment.
          </li>
        </ol>
        <h4>
          <span id="h.uvbqmxlxsfnv">Local Extensibility Tradeoffs</span>
        </h4>
        <p>
          However, local extensibility also comes with a <b>key limitation:</b>{" "}
          <b>scalability</b> . Unlike serverless functions, which can scale
          independently in a traditional backend architecture, local functions
          share the resource pool of the Pinniped backend. This limits their
          ability to handle high volumes of concurrent requests compared to
          serverless solutions.
        </p>
        <p>
          Despite this limitation, the tradeoff between ease of use,
          familiarity, and performance aligns with Pinniped's focus on ease of
          use and portability over scalability.
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
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/CJs5G58kPTfEALPgC_w39mATC1klF5LDQWUUci95lR8EscIFKUYKrEMDSOlmUG0z97Q5k60O9cn-KP6vP6pw-q72YjLr0m_uYUnXsMQtODPBwSn6gcuj72_whBT4xJPSA3Eh4D29-xPcZIQnHqszgSYOApPlhm1W"
            alt=""
          />
        </p>
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
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/g_WpLz8f55A-TUwoLPwSBQIrrU0ZQM0474J7gW1MZ_Vhr75AbQ5XJKZdDPG9NDD8eoMaxg9xklPFyvX29Kf5Ot-oQcoEvf6hvsspv65AzbR8rUnRub-NEbjK1PqYmDrtApseM9-lzhLp0NYri7ZuR1NEoHrT5hwK"
            alt=""
          />
        </p>
        <h4>
          <span id="h.2bpsrrxiez8q">Under the Hood</span>
        </h4>
        <p>
          <b>An</b>{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>
            <b>index.js</b>{" "}
          </span>{" "}
          <b>file serves as each Pinniped project’s main entry point</b> and is
          used to configure and run the application. Within this file the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>pinniped</span> npm
          package is imported and used to create an instance of the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>pinniped</span> class,
          known as <span style={{ color: "rgb(24, 128, 56)" }}>app</span>. This{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>app</span> instance is
          used to register custom routes and event listeners before it
          configures and starts an Express web server that will serve the
          application.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/_so700Ofs2bjMMRLnhIxsYshgnS5jl9BIY6t-3eo9ZmHV0Zj8z3KQz4z_t1pknr7HzEmPlNByz2S9S4x9sV11y25caQaXctPHbbdRzLG4eU1X3xKAruI06TBlBE6cXozf8T5GXHQIwD5Pgxx6v49xCGPlPZnVpUM"
            alt=""
          />
        </p>
        <p>
          <b>Most API operations trigger events</b> , including CRUD operations,
          schema changes, and account management actions. These events provide
          access to the Express request and response objects along with any
          relevant data from the route that triggered the event. This allows
          developers to write flexible event handler functions that can
          manipulate data, interact with external services, or perform any other
          actions needed by their unique application.
        </p>
        <p>
          Notably, developers can send custom responses (as shown below) or can
          perform actions unrelated to the response (such as logging, analytics,
          server sent events, etc) and let the route handler that triggered the
          event send its default response.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/LSQCP14wHn8xK4sf96aCdxnJgTwtOWHHRxp1JPlnVR4v90YZPZ1i0sf0_3YTcDV9H1zd5QGhqyUUhKvJBbAnUNzfIs3gR_yTXdSQWW7To9JyrOPUmWHsLux_ZGojpAbsGOhzUM0O2IkhCnImri6GdqEd6nOTUr8_"
            alt=""
          />
        </p>
        <h2>
          <span id="h.otvy7jf4weox">Deployment / Hosting</span>
        </h2>
        <h3>
          <span id="h.ullmek4q5ysu">An Embedded Database</span>
        </h3>
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
          3-tier architecture scaling strategies are impossible. Those
          applications that expect to see such high volumes aren’t the intended
          users of Pinniped, so we decided the tradeoff for portability and
          simplicity was worth it. As a result, Pinniped’s architecture
          resembles two distinct tiers, with the database and application logic
          sharing one.
        </p>
        <h5>
          <span id="h.nx4nc07296aa">
            <a
              href="https://drive.google.com/file/d/102xCIScE6OQfofaiuS-HIxVqAprm6eTT/view?usp=drive_link"
              target="_blank"
            >
              Visual - Animation - Showing Communication between presentation
              tier and Pinniped’s combined application + data tier
            </a>
          </span>
        </h5>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/73r7VVNEiNdCkEViRBkroD5kaDB1uPoW5e5642s3QwirimDeuCx4ZUYWiw_h7JHmbqEYQxK2pIn6biofIKxgJZSENZBBEJ4kplyn3M9OY4xnqkHGdzYOc665lWJlaECTBY_9Ix1oWskw6wmHCWkX_qsmm_iVSQSw"
            alt=""
          />
        </p>
        <h3>
          <span id="h.x7x4h3gnrmy3">Database Selection</span>
        </h3>
        <p>
          Having chosen to embed the database, we had a few primary concerns
          when deciding which database to use: speed, reliability,
          documentation, and library support. One option that aligned well with
          our needs was <b>SQLite,</b> a mature, widely used, speedy SQL
          implementation with plenty of documentation and supporting libraries.
          It met our criteria and was also successfully used as the database for
          PocketBase, which gave us confidence that it would work for our use
          case.
        </p>
        <h3>
          <span id="h.6n4qjvhwyjez">Portability Considerations</span>
        </h3>
        <p>
          After choosing to run our backend as a single process delivered as an
          npm package, we considered a few different ways of packaging and
          distributing the project.
        </p>
        <h4>
          <span id="h.omve7blacj0y">Containerization</span>
        </h4>
        <p>
          We considered Docker because of its portability benefits: wWe could
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
        <h4>
          <span id="h.g8o8w76l4std">Executable File</span>
        </h4>
        <p>
          We also explored compiling Pinniped into an executable file. This
          approach's primary benefit was further reducing the dependencies
          needed to run the application in production. However, building to an
          executable with Node.js is not fully supported, and the technical
          challenges accompanying the process made it untenable.
        </p>
        <h3>
          <span id="h.nzchgyalh4d7">Deployment</span>
        </h3>
        <p>
          We’ve attempted to make deploying Pinniped as straightforward as
          possible while retaining flexibility so users can deploy however they
          want. The default route for deploying Pinniped is to place the project
          on a VPS, install Node.js, set any configurations and custom code, and
          run the application. Application configurations are contained in a{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>.env</span> file which
          allows you to set the port for the server to listen on, the CORS
          whitelist, the session secret, and various configurations related to
          Pinniped’s automated TLS certificate feature.
        </p>
        <p>
          The application serves the Admin UI and API, at the specified domain
          and port.
        </p>
        <p>
          <img
            src="https://lh7-us.googleusercontent.com/ulxsYh2BrjG2zXR3E8U5ttN9qe5QeVaD7ipZ45-3mbsaYy3uE4cJgCTTnsCt4REkE4ZY5LkmBnLnbTYcmuId9IMm8jUAC0InOHpvgEig1Kq4cou8VIOScZlZY8MDCTiNhUBVo_Pxe-j7ep31QQ2gFxDvlutGl9yi"
            alt=""
          />
        </p>
        <h3>
          <span id="h.42dn93vu5fwi">Other Security - HTTPS</span>
        </h3>
        <p>
          Hypertext Transfer Protocol Secure (HTTPS) is the primary
          communication protocol for sending information between a web server
          and a website. It secures the communication between the web server and
          the website by encrypting the data in transit. Its importance comes
          from protecting the data packets from on-path attacks—malicious
          attempts to access the data. Since HTTPS is pivotal to securing
          communication on the the Iinternet, Pinniped automates certifying the
          application to use HTTPS.
        </p>
        <h4>
          <span id="h.54fmsf4tn2jb">TLS Auto Certification</span>
        </h4>
        <p>
          If the VPS IP that Pinniped is running on has a domain name, the
          domain variable in the{" "}
          <span style={{ color: "rgb(24, 128, 56)" }}>.env</span> configuration
          file can be set. Then on start-up, Pinniped will check for a TLS
          certificate. If there is no certificate or it is expired, Pinniped
          will attempt to obtain one from Let’s Encrypt. To do this, we start a
          server to listen on port 80 and initialize the challenge request to
          Let’s Encrypt. When our server satisfies the challenge, Let’s Encrypt
          issues the certificate. We bring down the challenge server and start
          the Pinniped application on port 443 (HTTP) using the new certificates
          while redirecting any port 80 (HTTP) traffic to 443.
        </p>
        <h4>
          <span id="h.blas2swq5t4a">
            <a
              href="https://drive.google.com/file/d/17fEZz6QK3lnejZS4EF8L24b7DI8MT-md/view?usp=sharing"
              target="_blank"
            >
              Visual - Video showing the Auto Cert Console output on startup
            </a>
          </span>
        </h4>
        <p>
          Pinniped performs a daily check of the certificate. If it is within 30
          days of expiring, the challenge server will attempt to renew it. If
          successful, the server restarts with the new certificate.
        </p>
        <h3>
          <span id="h.fvx641ywh83u">CLI AWS Automation</span>
        </h3>
        <p>
          While Pinniped will work in any local or cloud environment with NodeJS
          installed, the Pinniped-CLI provides an easy-to-use deployment
          pipeline to host your local Pinniped application on an AWS EC2
          instance. After installing and configuring Amazon’s AWS CLI tool with
          AWS credentials, the Pinniped-CLI tool walks users through the
          provisioning and deployment process. The Pinniped-CLI also automates
          the process of starting, stopping, and updating your deployed Pinniped
          application via a secure shell (SSH) connection.
        </p>
        <p>
          <a
            href="https://drive.google.com/file/d/1od_7E18sK3Pvlu4PbijnsjXWT_mfegis/view?usp=drive_link"
            target="_blank"
          >
            Visual - Video snippet showing Cli commands running to provision and
            deploy an application.
          </a>
        </p>
        <h2>
          <span id="h.h5emovkl7kr9">Future Work</span>
        </h2>
        <h2>
          <span id="h.gpkutfz3xtqc">CLI Support</span>
        </h2>
        <p>
          Right now, Pinniped’s CLI tool only supports AWS. We’d like to expand
          its functionality to include more major cloud providers.
        </p>
        <h2>
          <span id="h.gdfcsrf0ly5g">Database Replication</span>
        </h2>
        <p>
          While Pinniped has a process for database backups, it would be ideal
          to add an option to integrate with a more robust disaster recovery
          tool such as Litestream which automatically replicates the database to
          offsite storage.
        </p>
        <p>File Storage</p>
        <p>
          File storage is a commonly provided BaaS offering, and there are many
          situations when Pinniped users might want native support for it. It
          would be great to allow for both local storage and integration with
          cloud storage solutions.
        </p>
        <p>Type Flexibility</p>
        <p>
          An oddity of SQLite databases is that they don’t strictly type
          columns. It makes SQLite unique in the SQL world and is useful when
          you don’t know what data types a user may want to store. We’d like to
          implement these flexible types to increase the range of what users can
          do with Pinniped.
        </p>
        <p>
          <span
            style={{
              color: "rgb(68, 71, 70)",
              backgroundColor: "rgb(255, 255, 255)",
            }}
          >
            We knew Pinniped would need a data storage solution and a web server
            to interact with it. We also wanted Pinniped to be portable and easy
            to self-host for front-end developers familiar with JavaScript, so
            we considered various strategies for doing that.
          </span>
        </p>
        <h2>
          <span id="h.ok7cbgm0o39m">Citations</span>
        </h2>
        <p>Work Cited</p>
        <pre>
          <code>
            {"\t"}Kleppmann, Martin. &lt;i&gt;Designing Data-intensive
            Applications: The Big Ideas Behind Reliable, Scalable, and
            Maintainable Systems&lt;/i&gt;. O'Reilly, 2017.{"\n"}
          </code>
        </pre>
        <h2>
          <span id="h.s1lbsbuik680">References</span>
        </h2>
      </>
    </ContentsWrapper>
  );
}
