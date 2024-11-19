import "./Welcome.css";

function Welcome(): JSX.Element {
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcomeTitle wp-100 flex alignCenter column">
          <h1>
            Biz bilan yozish tezligingizni oshiring va o'zingizni namoyish
            qiling
          </h1>
          <p>Kompyuteringiz bilan muloqotni yaxshilashni istasangiz biz bilan birga bo'ling.</p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
