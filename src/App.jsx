import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Tech from "./components/Tech";
// import { Link } from "react-router-dom";

function App() {




  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>


        <div className="container mx-auto px-8">

          <NavBar />
          <Hero />
          <About />
          <Tech />
          <Project />
          <Contact />


          {/* Download section */}

          <div className="border-b border-neutral-900 pb-4 justify-center items-center">
            <button className="bg-slate-900 p-3 rounded-xl mt-3">
              <a href="cv.pdf" download="resume.pdf">DOWNLOAD RESUME</a>
            </button>
          </div>

          {/* Download section end */}

        </div>
      </div>

    </>
  )
}

export default App
