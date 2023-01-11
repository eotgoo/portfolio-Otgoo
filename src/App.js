import "./App.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <SocialIcon url="https://github.com/eotgoo" bgColor="white" />
        </motion.div>
        <h1 style={{ color: "red" }}>
          <Typewriter words={["hello", "Pinecone"]} loop={false} />
        </h1>
      </header>
    </div>
  );
}

export default App;
