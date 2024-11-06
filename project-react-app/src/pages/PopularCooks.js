import "../styles/cooks.css";
import Header from "../components/Header";
export default function PopularCooks() {
  return (
    <>
      <Header />;
      <main>
        <div id="main-heading">
          <h2>These are the main contributors to this website:</h2>
        </div>
        <br />
        <div className="cook-container" id="cooks-section"></div>
      </main>
    </>
  );
}
