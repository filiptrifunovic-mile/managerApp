import main from "../assets/images/main.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            manage <span>job</span> tracking{" "}
          </h1>
          <p>
            To be a high-quality partner in your job search by putting our large
            network and long experience in Human Resources at your disposal. We
            assess your skills and only suggest positions that match your
            profile and your expectations. Finally, we follow up on your
            integration with your new employer during the trial period.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="manager" className="img main-img" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    marging-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 692px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
