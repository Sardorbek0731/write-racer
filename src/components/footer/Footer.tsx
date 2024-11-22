import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <footer className="flex alignCenter justifyBetween">
      <div className="flex alignCenter">
        <h1>2024 © @WriteRacer.</h1>
        <h1>Barcha huquqlar himoyalangan</h1>
      </div>
      <h1>
        Created by{" "}
        <a href="https://t.me/Sardorbek0731" target="_blank">
          Sardorbek Olimov
        </a>
      </h1>
    </footer>
  );
}

export default Footer;
