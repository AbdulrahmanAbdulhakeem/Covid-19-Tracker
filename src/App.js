import CountryDropDown from './component/CountryDropDown'
import {motion} from 'framer-motion'

function App() {
  return (
    <motion.div
    animate = {{opacity:1}}
    initial = {{opacity:0}}
    exit = {{opacity:0}}
    transition = {{duration:1.5}}
    >
    <div className="App">
      <CountryDropDown />
    </div>
    </motion.div>
  );
}

export default App;
