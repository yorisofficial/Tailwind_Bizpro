import Image from "next/image";
import About from "./(template)/about/page";
import Review from "./(template)/review/page";
import Service from "./(template)/service/page";
import Support from "./(template)/support/page";
import Button from "./components/button/page";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const styleAcc = 'absolute -top-2 left-2'
  const iconSocial = 'p-2 border-2 border-basic w-fit rounded-full text-basic hover:text-[#00E5CC] hover:border-[#00E5CC]'
  return (
    <main>
      <>
        <section id="hero-section">
          <div className="hero-section bg-theme w-full h-full grid grid-cols-1 xl:grid-cols-2 items-center justify-center px-[5%] py-32 md:px-32">
            <div className="w-full h-full xl:order-2 md:mt-20 py-10 md:py-0">
              <Image src="./images/hero-img.png" alt="hero images" height={500} width={500} className="w-full h-full object-contain" />
            </div>
            <div className="w-full h-full flex justify-center items-center flex-col xl:items-start gap-8 md:mt-20">
              <h1 className="text-5xl md:text-6xl font-bold text-center xl:text-start xl:w-full">Perf<span className="relative">ec<img src="./images/acc-heading.svg" alt="play button" className="absolute -top-1 left-1" /></span>t place for your business promotion</h1>
              <p className="text-center w-3/4 xl:text-start">Businesses generally promote their brand, products, and services by identifying audience.</p>
              <div className="flex items-center justify-center md:justify-start gap-6">
                <Button variant="primary" className="w-fit h-[60px]">Get Started</Button>
                <button className="w-fit h-16 font-semibold p-6 border-2 border-basic rounded-full bg-basic drop-shadow-lg">
                  <img src="./images/play.svg" alt="play button" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center justify-center w-full h-full py-32 px-[5%] xl:p-32">
            <div className="header-content w-full flex flex-col items-center justify-center gap-3">
              <h1 className="text-5xl md:text-6xl font-bold">How it w<span className="relative">or<img src="./images/acc-heading.svg" alt="play button" className={`${styleAcc}`} /></span>ks</h1>
              <p className="w-3/5 xl:w-1/4 text-center font-semibold text-basip">Businesses generally promote their brand, products, and services by identifying audience.</p>
            </div>
            <div className="card-group grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-[70px]">
              <div className="rounded-xl p-8 bg-basic hover:drop-shadow-xl transform duration-700 border-2 border-[#f4f4f4]">
                <div className="header-card mb-10">
                  <div className="p-4 bg-theme rounded-xl w-fit">
                    <Image src="./icons-work/box-item-1.svg" alt="box item 1" width={80} height={80} className="w-16 h-16" />
                  </div>
                </div>
                <div className="body-card">
                  <h4 className="text-2xl font-bold text-primary">Choose packages</h4>
                  <p className="text-base font-semibold text-basip">Businesses generally promote their brand, products, and services by identifying audience or users.</p>
                </div>
              </div>
              <div className="rounded-xl p-8 bg-basic hover:drop-shadow-xl transform duration-700 border-2 border-[#f4f4f4]">
                <div className="header-card mb-10">
                  <div className="p-4 bg-theme rounded-xl w-fit">
                    <Image src="./icons-work/box-item-2.svg" alt="box item 2" width={80} height={80} className="w-16 h-16" />
                  </div>
                </div>
                <div className="body-card">
                  <h4 className="text-2xl font-bold text-primary">Schedule appointment</h4>
                  <p className="text-base font-semibold text-basip">When you have important information to pass onto your people, text messaging can be a great way to do it.</p>
                </div>
              </div>
              <div className="rounded-xl p-8 bg-basic hover:drop-shadow-xl transform duration-700 border-2 border-[#f4f4f4]">
                <div className="header-card mb-10">
                  <div className="p-4 bg-theme rounded-xl w-fit">
                    <Image src="./icons-work/box-item-3.svg" alt="box item 3" width={80} height={80} className="w-16 h-16" />
                  </div>
                </div>
                <div className="body-card">
                  <h4 className="text-2xl font-bold text-primary">Grow together</h4>
                  <p className="text-base font-semibold text-basip">Texting can sometimes come across as an impersonal way to communicate, it can be highly beneficial.</p>
                </div>
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
        <section id="global">
          <Review />
        </section>
        <section id="support">
          <Support />
        </section>
      </>
      <div className="w-full h-fit bg-primary text-basic px-[5%] py-32 xl:px-32 grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-3 justify-between items-start">
        <div className="flex justify-center items-start flex-col w-[350px] gap-5">
          <Image src="./images/Bizpro-dark.svg" alt="logo-dark" height={100} width={100} />
          <p className="w-3/4">This is a big one and i consider it one of the most important things for a business.</p>
          <div className="icon-grup w-fit flex gap-2">
            <div className={`facebook ${iconSocial}`}>
              <a href="http://" target="_blank" rel="">
                <IconBrandFacebook size={24} />
              </a>
            </div>
            <div className={`instagram ${iconSocial}`}>
              <a href="http://" target="_blank" rel="">
                <IconBrandInstagram size={24} />
              </a>
            </div>
            <div className={`twitter ${iconSocial}`}>
              <a href="http://" target="_blank" rel="">
                <IconBrandTwitter size={24} />
              </a>
            </div>
            <div className={`linkedin ${iconSocial}`}>
              <a href="http://" target="_blank" rel="">
                <IconBrandLinkedin size={24} />
              </a>
            </div>
          </div >
        </div >
        <div className="flex flex-col gap-5">
          <div className="header">
            <h1 className="text-3xl text-basic font-bold">Company</h1>
          </div>
          <a href="/" className="text-basip font-light">About</a>
          <a href="/" className="text-basip font-light">Contact</a>
          <a href="/" className="text-basip font-light">Careers</a>
          <a href="/" className="text-basip font-light">Press</a>
        </div>
        <div className="flex flex-col gap-5">
          <div className="header">
            <h1 className="text-3xl text-basic font-bold">Information</h1>
          </div>
          <a href="#" target="_blank" rel="" className="text-basip font-light">Privacy Policy</a>
          <a href="#" target="_blank" rel="" className="text-basip font-light">Terms & Condition</a>
          <a href="#" target="_blank" rel="" className="text-basip font-light">FAQ</a>
        </div>
      </div >
      <div className="w-full h-fit flex justify-between bg-black text-basic px-[5%] py-5 xl:px-32">
        <p className="text-base">Copyright © 2021 <Image src="./images/Bizpro-dark.svg" alt="logo-dark" height={50} width={50} /></p>
        <p className="text-base">All Rights Reserved</p>
      </div>
    </main >
  )
}
