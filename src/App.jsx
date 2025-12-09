import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Dock, Navbar, Welcome } from "#components";
import { Safari, Terminal } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
    </main>
  );
};

export default App;
