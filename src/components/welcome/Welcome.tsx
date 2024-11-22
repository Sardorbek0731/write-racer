// CSS
import "./Welcome.css";

// React Router DOM
import { NavLink } from "react-router-dom";

function Welcome(): JSX.Element {
  return (
    <section className="welcome">
      <div className="container welcomeTitle wp-100 flex column alignCenter">
        <h1>
          Biz bilan yozish tezligingizni oshiring va o'zingizni namoyish qiling
        </h1>
        <p>
          Kompyuter bilan muloqotni yaxshilashni istasangiz biz bilan bo'ling.
        </p>

        <div className="welcomeBtns flex alignCenter">
          <NavLink
            className="welcome_signUp_btn flex alignCenter"
            to="/register"
          >
            Kirish
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </NavLink>
          <NavLink className="race_try_btn" to="/register">
            Boshlash
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
