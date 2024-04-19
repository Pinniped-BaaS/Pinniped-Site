import RestHttpDiagram from "./1. rest-http-diagram.svg";
import staticRoutesCodeSnippet from "./2. static-routes-code-snippet.png";
import middlewareAnimation from "./3. middleware-animation.svg";
import threeTierArchitectureAnimation from "./4. three-tier-architecture-animation.svg";
import CaNoTool from "./5. C-A-NoTool.svg";
import CaIaaS from "./6. C-A-IaaS.svg";
import CaPaaS from "./7. C-A-PaaS.svg";
import CaBaaS from "./8. C-A-BaaS.svg";
import BaasCompNoPnpd from "./9. BaaS-Comp-No-Pnpd.png";
import portability from "./10. portability.mp4";
import extensibility from "./11. extensibility-new.mp4";
import userExperience from "./12. user-experience.mp4";
import baasCompWithPnpd from "./13. BaaS-Comp-With-Pnpd.png";
import CreateTableRequestSequence from "./14. Create-Table-Request-Sequence.svg";
import schemaVid from "./15. schema-vid.mp4";
import sql from "./16. sql.svg";
import tableMigrationSequence from "./17. table-migration-sequence.svg";
import migrationFile from "./18. migration-file.png";
import dataVid from "./19. data-vid.mp4";
import dynamicRoutes from "./20. dynamic-routes.png";
import sdkUsage from "./21. sdk-usage.png";
import createTableRequestSequence from "./22. Create-Table-Request-Sequence.svg";
import loadTableContextSequence from "./23. loadTableContext-sequence.svg";
import validationSequence from "./24. validation-sequence.svg";
import apiRules from "./25. api-rules.mp4";
import expressSessionSequence from "./26. express-session-sequence.svg";
import loginSessionSequence from "./27. login-session-sequence.svg";
import apiRulesRequest from "./28. api-rules-request.png";
import authCheckSequence from "./29. auth-check-sequence.svg";
import rowAuth from "./30. row-auth.png";
import customRoute from "./31. custom-route.png";
import eventExtensibility from "./32. event-extensibility.png";
import extensibilitySetupSequence from "./33. extensibility-setup-sequence.svg";
import extensibilityReqResSequence from "./34. extensibility-req-res-sequence.svg";
import pinnipedArchitectureAnimation from "./35. Pinniped-Architecture-Animation.svg";
import startupLog from "./36. Startup-Log.png";
import ssl from "./37. ssl.mp4";
import updatePinniped from "./38. update-pinniped.mp4";
import { camelCase } from "lodash";

const files = [
  { file: RestHttpDiagram, alt: "Rest Http Diagram", extension: "svg" },
  {
    file: staticRoutesCodeSnippet,
    alt: "Static Routes Code Snippet",
    extension: "png",
  },
  { file: middlewareAnimation, alt: "Middleware Animation", extension: "svg" },
  {
    file: threeTierArchitectureAnimation,
    alt: "Three Tier Architecture Animation",
    extension: "svg",
  },
  { file: CaNoTool, alt: "C-A-NoTool", extension: "svg" },
  { file: CaIaaS, alt: "C-A-IaaS", extension: "svg" },
  { file: CaPaaS, alt: "C-A-PaaS", extension: "svg" },
  { file: CaBaaS, alt: "C-A-BaaS", extension: "svg" },
  { file: BaasCompNoPnpd, alt: "BaaS Comp No Pnpd", extension: "png" },
  { file: portability, alt: "Portability", extension: "mp4" },
  { file: extensibility, alt: "Extensibility", extension: "mp4" },
  { file: userExperience, alt: "Use Experience", extension: "mp4" },
  { file: baasCompWithPnpd, alt: "BaaS Comp With Pnpd", extension: "png" },
  {
    file: CreateTableRequestSequence,
    alt: "Create Table Request Sequence",
    extension: "svg",
  },
  { file: schemaVid, alt: "Schema Vid", extension: "mp4" },
  { file: sql, alt: "SQL", extension: "svg" },
  {
    file: tableMigrationSequence,
    alt: "Table Migration Sequence",
    extension: "svg",
  },
  { file: migrationFile, alt: "Migration File", extension: "png" },
  { file: dataVid, alt: "Data Vid", extension: "mp4" },
  { file: dynamicRoutes, alt: "Dynamic Routes", extension: "png" },
  { file: sdkUsage, alt: "SDK Usage", extension: "png" },
  {
    file: createTableRequestSequence,
    alt: "Create Table Request Sequence",
    extension: "svg",
  },
  {
    file: loadTableContextSequence,
    alt: "Load Table Context Sequence",
    extension: "svg",
  },
  { file: validationSequence, alt: "Validation Sequence", extension: "svg" },
  { file: apiRules, alt: "API Rules", extension: "mp4" },
  {
    file: expressSessionSequence,
    alt: "Express Session Sequence",
    extension: "svg",
  },
  {
    file: loginSessionSequence,
    alt: "Login Session Sequence",
    extension: "svg",
  },
  { file: apiRulesRequest, alt: "API Rules Request", extension: "png" },
  { file: authCheckSequence, alt: "Auth Check Sequence", extension: "svg" },
  { file: rowAuth, alt: "Row Auth", extension: "png" },
  { file: customRoute, alt: "Custom Route", extension: "png" },
  { file: eventExtensibility, alt: "Event Extensibility", extension: "png" },
  {
    file: extensibilitySetupSequence,
    alt: "Extensibility Setup Sequence",
    extension: "svg",
  },
  {
    file: extensibilityReqResSequence,
    alt: "Extensibility Req Res Sequence",
    extension: "svg",
  },
  {
    file: pinnipedArchitectureAnimation,
    alt: "Pinniped Architecture Animation",
    extension: "svg",
  },
  { file: startupLog, alt: "Startup Log", extension: "png" },
  { file: ssl, alt: "SSL", extension: "mp4" },
  { file: updatePinniped, alt: "Update Pinniped", extension: "mp4" },
];

const graphics = files.reduce((acc, { file, alt, extension }) => {
  const id = camelCase(alt);
  acc[id] = { file, alt, extension };

  return acc;
}, {});

export default graphics;
