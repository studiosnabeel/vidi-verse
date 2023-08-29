import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  const type = "random";
  return (
    <div className='mx-4 font-roboto'>
      <Navbar />
      <div className='flex'>
        <div className='flex-[1] hidden xs:block'>
          <SideMenu />
        </div>
        <div className='flex-[7]'>
          <Hero type={type} />
        </div>
      </div>
    </div>
  );
}
