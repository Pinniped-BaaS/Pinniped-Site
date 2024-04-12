import styled from "styled-components";

import useCheckImagesLoaded from "../hooks/useCheckImagesLoaded";
import useScrollToHeader from "../hooks/useScrollToHeader";

// Images
import baasCompPnpd from "../assets/images/baas_comp.png";
import BaasComp from "../assets/images/BaaS-Comp-No-Pnpd.png";
import three_tier from "../assets/images/three_tier.png";

// Animations
import testAnimation from "../assets/animations/Test_Animation.svg";

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
`;

const Paragraph = styled.p`
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: max-content;
  white-space: wrap;
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

const H2 = styled.h2`
  font-size: 2rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
`;

const H4 = styled.h4`
  font-size: 1rem;
`;

const H5 = styled.h5`
  font-size: 0.9rem;
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;

  .graphic-wrapper {
    flex: 2;
  }

  p {
    flex: 1;
    text-align: justify;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

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
      <H2 id="what-is-pinniped">What is Pinniped?</H2>
      <Paragraph>
        Pinniped is an open-source backend as a service. It provides essential
        backend capabilities, including database management API server
        functionality, and user authorization. Pinniped provides portability by
        scaling down the traditional client/server database and embedding a
        lightning-fast SQLite database alongside the server. Pinniped is
        designed to be user-friendly and makes extensibility a snap for
        engineers needing custom functions and routes. Code to extend Pinniped
        is written in familiar Javascript, use any NPM packages to build on top
        of what is already provided! Tailored for small teams, front-end
        engineers, and early-stage startups, Pinniped streamlines application
        development by getting any application up and running fast.
      </Paragraph>

      <H2 id="backend-as-a-service">Backend-As-A-Service</H2>
      <Paragraph>
        Before we get into what a backend as a service (BaaS) is and how it can
        help web developers, it would be helpful to go over how web applications
        are typically structured. We’ll also cover some of the challenges
        associated with building a web application and what tools exist to
        address those challenges.
      </Paragraph>

      <H2>3-Tier Architecture</H2>
      <Paragraph>
        A common way of building web applications has developed over time that
        separates the functionality of the application into three tiers. This
        separation gives developers an easy way to think about the parts of an
        application discretely and is often reflected in the physical
        configuration of the hardware as well. The three tiers are:
      </Paragraph>

      <H3>The Data Tier</H3>
      <Paragraph>
        The Data Tier is the foundational layer responsible for data storage,
        retrieval, and management within a web application. It encompasses the
        database and data storage solutions that house the application's data,
        ensuring data integrity, security, and efficient access to data.
      </Paragraph>

      <H3>The Application Tier</H3>
      <Paragraph>
        The Application Tier, or Business Logic Tier, serves as the intermediary
        that processes user requests, executes business logic, and manages data
        exchange between the presentation and data tiers. It handles the
        application's core functionality, including data validation, session
        management, and integration with other services.
      </Paragraph>

      <H3>The Presentation Tier</H3>
      <Paragraph>
        The Presentation Tier is the user-facing layer, comprising the web
        application's user interface and user experience components. It displays
        information to the users and captures their inputs, facilitating any
        interactions between the user and the core application.
      </Paragraph>
      <Image src={three_tier} alt="Three Tier Architecture" />

      <H3>Challenges of Building a Web Application</H3>
      <Paragraph>
        There are many challenges associated with building a web application,
        we’ll go over some of them below, particularly as they pertain to the
        challenges a BaaS is built to address.
      </Paragraph>

      <H4>Data Tier</H4>
      <Paragraph>
        To store the data used by your application you must decide how and where
        the data is stored. There are broad choices to make - NoSQL or SQL,
        client/server or embedded databases, cloud or local - as well as more
        specific decisions, such as creating data structures that fit the
        information that needs to be stored. . Whatever you choose, there will
        be some amount of configuration specific to that product. The database
        also needs to be maintained over time, there will have to be adaptations
        made to account for changing application functionality or increases in
        traffic.
      </Paragraph>
      <Paragraph>
        Strategies for dealing with increases in traffic could include upgrading
        the hardware the database runs on, or implementing various techniques to
        lighten the load on the database such as setting up caches and queues.
        Depending on the situation, larger and more costly changes to the
        architecture could be necessary, such as replicating or partitioning the
        database. Database management is an ongoing process, where tradeoffs
        require careful consideration. As complexity grows so does the
        difficulty of maintaining the system and the cost to operate it.
      </Paragraph>

      <H4>Application Tier</H4>
      <Paragraph>
        The application layer is where the logic of your application lives, what
        that logic is depends on the nature of your web application. At the very
        least, there needs to be a way to handle incoming HTTP requests to
        interact with the database and serve files and webpages.
      </Paragraph>

      <H4>Hosting</H4>

      <Paragraph>
        Hosting can be a complicated part of getting a web application running,
        there are technical details of where to host the application, whether
        locally or in the cloud, as well as security concerns surrounding the
        configuration of the hosting environment and the application. If the
        hardware is located on-site and the application experiences large
        growth, planning and implementing the scaling of physical architecture
        is not a simple endeavor.
      </Paragraph>

      <H3>Tools that address these challenges</H3>
      <Paragraph>
        The challenges encountered while building a web application can be
        addressed each time a new application is built. However, many tools have
        been built to handle parts of the process. A brief overview of common
        tools and their AWS implementations will place our project, a BaaS, in a
        broader landscape.
      </Paragraph>

      <H2>BaaS Challenges</H2>
      <Paragraph>
        The multitude of backend-related challenges produces multiple BaaS, each
        designed for its unique use case. All BaaS create convenience in some
        form, often at the expense of control. Where they offer control versus
        convenience are the differentiations between backends.
      </Paragraph>
      <Paragraph>
        For example, some backends allow users to self-host. The user must
        configure the backend on a server on their own. On the other hand, some
        backends will configure the backend for the user, but they'll have to
        use their servers for hosting. Users who want to avoid provider
        dependency prefer self-hosting. Also, self-hosting removes security
        vulnerability concerns since other users might be running their
        applications on the same server.
      </Paragraph>

      <Paragraph>
        BaaS migration is a last-ditch effort becausecause of the impossible
        difficulty it poses for the user. In situations where the backend is too
        limiting, one would consider switching. Now, BaaS offers extensibility
        in some form of cloud computing: a stateless block of code written by
        the user. Problems with Tthis approach, however, runsrun the risk of
        security vulnerabilities, vendor lock-in, and performance costs.
      </Paragraph>
      <Paragraph>
        There are additional considerations for selecting the correct BaaS: the
        database, observability, price, infrastructure, deployment, and more.
        Where Pinniped fits relative to other BaaS can be understood by its use
        case.
      </Paragraph>

      <Image src={BaasComp} />

      <H2>Pinniped</H2>
      <Animation svg={testAnimation} alt="Test Animation" />

      <H3>Use Case</H3>
      <Paragraph>
        Pinniped provides essential backend capabilities, including database
        management and API server functionality, designed to streamline
        application development. Tailored for smaller teams, front-end
        engineers, and early-stage startups, Pinniped emphasizes portability,
        extensibility, and user-friendliness in delivering a versatile backend
        solution for small-scale applications.
      </Paragraph>
      <H3>Goals</H3>
      <Paragraph>
        For more context, here's how Pinniped accomplishes and defines its
        goals.
      </Paragraph>
      <H4>Portability</H4>
      <SideBySide>
        <Paragraph>
          Pinniped defines portability as how easy it is to move the application
          to any environment and run as intended. Pinniped achieves this by
          being easy to deploy and run on any environment where Node is
          installed. Pinniped makes the migration of development changes pushed
          to a production environment simple.
        </Paragraph>
        <Video src={portability} alt="Portability Video" />
      </SideBySide>
      <H4>Extensibility</H4>
      <SideBySide>
        <Paragraph>
          Extensibility, in Pinniped’s terms, is how much backend functionality
          can be built before resorting to a backend that better suits the
          user’s requirements. Pinniped's functionality is extendable within the
          backend's source code with JavaScript. As a result, Pinniped supports
          up-to-date JavaScript ES6 features and Node APIs. Although serverless
          functions are the industry standard, serverless functions have innate
          issues of increased network latency and configuration complexities.
          These issues undermine Pinniped’s goals, which influenced Pinniped to
          focus on supporting JavaScript natively.
        </Paragraph>
        <Video src={extensibility} alt="Extensibility Video" />
      </SideBySide>
      <H4>Ease of Use</H4>
      <SideBySide>
        <Paragraph>
          As straightforward as it sounds, Pinniped’s goal of user-friendliness
          is based on how simple and easy it is to interact with and integrate
          Pinniped into an application. Users of Pinniped have access to
          simplified pipelines that can create a Pinniped-powered application,
          deploy that application onto a virtual private server (VPS), and
          manage that application through an admin dashboard.
        </Paragraph>
        <Video
          src={ease}
          alt="Ease of Use Video"
          style={{ border: "1px solid black" }}
        />
      </SideBySide>
      <Image src={baasCompPnpd} alt="BaaS Comparison with Pinniped" />

      <H2>Pinniped Architecture</H2>
      <Paragraph>
        From the user's perspective, Pinniped should be easy to install and
        integrate with their application. The architecture of Pinniped was
        simplified to achieve these objectives. Pinniped runs on a single Node
        process.
      </Paragraph>

      <H3>Strategies of Consolidation</H3>

      <H4>Docker Image</H4>

      <Paragraph>
        An initial approach involved creating a base image to install Pinniped
        and execute the application. However, this method requires the user to
        mount a volume for database persistence. While Docker offers versatility
        and allows horizontal scalability, integrating Pinniped via Docker
        imposes a steeper learning curve on users, detracting from the overall
        user experience. Moreover, the benefits of horizontal scalability are
        marginal because Pinniped's architecture prevents horizontal scaling.
      </Paragraph>
      <H4>npm Package</H4>
      <Paragraph>
        The idea to develop Pinniped as an npm package stemmed from the
        widespread familiarity among JavaScript developers with Node.js, the
        most mature JavaScript runtime. Consequently, the intended audience for
        Pinniped would possess the requisite knowledge to use npm, the default
        package manager for Node.js. While both Docker and npm promote
        portability, npm's simplicity makes it particularly accessible for
        Pinniped's target audience: front-end developers. Moreover, given the
        prevalence of npm packages in JavaScript applications, integrating
        Pinniped as another package would be straightforward. Nevertheless, this
        method has its drawbacks. npm packages potentially present security
        risks, and packages can struggle with version control, leading to
        conflicts that disrupt functionality. Moreover, an over-reliance on many
        packages can induce significant performance overhead costs.
      </Paragraph>
    </ContentsWrapper>
  );
}
