import About from "./components/About"
import PreviewPDF from "./components/PreviewPDF";
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
      <div className="flex p-5  overflow-hidden w-full flex-col justify-center items-center">
        <About/>
        <PreviewPDF/>
        <Toaster position="top-center"/>
      </div>
    </>
  )
}

export default App
