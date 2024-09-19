import About from "./components/About"
import PreviewPDF from "./components/PreviewPDF";
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
      <div className="flex w-full flex-col justify-center items-center">
        <About/>
        <PreviewPDF/>
        <Toaster position="top-center"/>
      </div>
    </>
  )
}

export default App
