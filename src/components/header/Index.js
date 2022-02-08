import Navigation from "./Navigation";
import Users from "./Users";
import RandomDot from "../RandomDot";

function Index() {
  return (
    <section className="header">
      <Navigation />
      <Users />
      <RandomDot id={1} count={80} />
    </section>
  );
}
export default Index;
