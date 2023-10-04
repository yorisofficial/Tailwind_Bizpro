import About from "./(template)/about/page";
import Review from "./(template)/review/page";
import Service from "./(template)/service/page";
import Support from "./(template)/support/page";

export default function Home() {
  return (
    <main>
      <>
        <section id="hero-section">
          <div className="hero-section bg-[#ECF9FF] w-full h-screen flex items-center justify-center">
            <h1>home page</h1>
          </div>
        </section>
        <section>
          <About />
        </section>
        <section>
          <Service />
        </section>
        <section>
          <Review />
        </section>
        <section>
          <Support />
        </section>
      </>
    </main>
  )
}
