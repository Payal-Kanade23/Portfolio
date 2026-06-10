import Education from './Education'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Navbar from './Navbar'

function App() {
 

  return (
    <>
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-black">
      {/* Fixed Header */}
      <Navbar />

      {/* Scroll Container */}
      <main className="flex-1 overflow-y-scroll w-full">
        {/* Home Section with Hero, About, Skills */}
        <section id="home" className="w-full">
          <Home />
        </section>

        {/* Education Section */}
        <section id="education" className="w-full">
          <Education />
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    
    <footer className="h-[50px] bg-black flex flex-col justify-center items-center text-gray-500 text-sm border-t border-gray-800"> 
      <p>© 2026 Created By Payal Kanade.</p>
    </footer>
    </div>

          </>
  )
}

export default App
