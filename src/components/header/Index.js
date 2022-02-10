import Users from "./Users";
import RandomDot from "../RandomDot";

function Index() {
  return (
    <section id="header" style={{paddingTop:50}}>
      <Users />
      <RandomDot id={1} count={80} />
    </section>
  );
}
export default Index;
