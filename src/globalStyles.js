import { createGlobalStyle } from "styled-components";
import robotoRegular from "./fonts/Roboto/Roboto-Regular.ttf";
import robotoBold from "./fonts/Roboto/Roboto-Bold.ttf";
const GlobalStyle = createGlobalStyle`
:root {
  /* Used for texts (+ footer background) */
  --color-granite: #252629;
  /* Used for backgrounds (+ footer text color) */
  --color-foam: #ffffff;
  /* Used for buttons, icons, etc. */
  --color-nemo: #ff4a11;
  /* active color for buttons, icons, etc. */
  --color-nemo-mid: #ff5c29;
  /* hover color for buttons, icons, etc. */
  --color-nemo-dark: #e5430f;
  /* Used for borders and some backgrounds */
  --color-water-10: #e4e8f0;
}

@font-face {
  font-family: "Roboto";
  src: local("robotoRegular"),
  url(${robotoRegular});
}

@font-face {
  font-family: "Roboto";
  font-weight: bold;
  src: local("robotoBold"),
  url(${robotoBold});
}
body {
  margin: auto;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-foam);
  color: var(--color-granite);
  width: 30rem;
  font-family: "Roboto";
  border: 1px solid var(--color-water-10);
  padding: 0.3rem;
}

@media only screen and (max-width: 600px) {
  body {
    width: 90%;
    padding: 0.5rem;
  }
}
`;

export default GlobalStyle;
