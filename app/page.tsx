"use client";

import { navItems } from "@/data";

import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import RecentProjects from "@/Components/RecentProjects";
import Clients from "@/Components/Clients";
import Link from "next/link";
import Experience from "@/Components/Experience";
import Approach from "@/Components/Approach";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        {/* <Footer />  */}
      </div>
      <div id="#" className=" fixed z-30 bottom-10 right-10">
        <Link href={"#hero"}>
          <button className="button">
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
            <p className="text">Back to Top</p>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
