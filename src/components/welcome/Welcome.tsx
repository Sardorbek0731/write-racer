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

        <div className="welcomeBtns">
          <NavLink className="welcome_signUp_btn" to="/register">
            Kirish
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
