import About from "./(template)/about/page";
import Review from "./(template)/review/page";
import Service from "./(template)/service/page";
import Support from "./(template)/support/page";
import Button from "./components/button/page";

export default function Home() {
  return (
    <main>
      <>
        <section id="hero-section">
          <div className="hero-section bg-[#ECF9FF] w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center py-32 md:px-32">
            <div className="w-full h-full md:order-2 md:mt-20">
              <img src="/images/hero-img.svg" alt="hero images" height={500} width={500} className="w-full h-full object-fill" />
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col md:items-start gap-8 md:mt-20">
              <div className="relative w-full">
                <h1 className="text-[42px] md:text-[50px] font-bold text-center md:text-start md:w-3/4">Perfect place for your business promotion</h1>
                <img src="/images/acc-heading.svg" alt="play button" className="absolute top-0 left-[30%] w-10 md:left-[17%]" />
              </div>
              <p className="text-center w-3/4 md:text-start">Businesses generally promote their brand, products, and services by identifying audience.</p>
              <div className="flex items-center justify-center md:justify-start gap-6">
                <Button variant="primary" className="w-fit h-[60px]">Get Started</Button>
                <button className="w-fit h-16 font-semibold p-6 border-2 border-basic rounded-full bg-basic drop-shadow-lg">
                  <img src="/images/play.svg" alt="play button" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="service">
          <Service />
        </section>
        <section id="review">
          <Review />
        </section>
        <section id="support">
          <Support />
        </section>
      </>
    </main>
  )
}
