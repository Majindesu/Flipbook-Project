import './App.css'
import Flipbook from './components/Flipbook'

// const generateImagePaths = (): string[] => {
//   const paths = [];
//   for (let i = 1; i <= 14; i++) {
//     paths.push(`/components/flipbook-pages/${i}.png`);
//   }
//   return paths;
// };


function App() {
  const pages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
  // const pages = generateImagePaths()
  return (
    <>
      <Flipbook pages={ pages } />
    </>
  )
}

export default App
