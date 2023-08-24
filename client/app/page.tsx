import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <div className='mx-4 font-roboto'>
      <Navbar />
      <div className='flex'>
        <div className='flex-[1] hidden xs:block'>
          <SideMenu />
        </div>
        <div className='p-4 w-[100%] flex flex-wrap flex-[7] justify-center gap-4 bg-yellow-50'>
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
          <Card isSideBar={false} />
        </div>
      </div>
    </div>
  );
}
