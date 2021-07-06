import "./developers.css";
import DevCards from "../DevCards/DevCards";
import profile from "../../../images/profile.png";
const Developers = () => {
  return (
    <main className="dev-container">
      <header className="dev-text">DEVELOPERS</header>
      <section className="developers">
        <DevCards image={profile} />
        <DevCards image={profile} />
        <DevCards image={profile} />
        <DevCards image={profile} />
        <DevCards image={profile} />
        <DevCards image={profile} />
        <DevCards image={profile} />
        <DevCards image={profile} />
      </section>
    </main>
  );
};

export default Developers;
