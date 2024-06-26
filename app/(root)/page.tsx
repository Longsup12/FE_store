import Collections from "@/components/Collections";


import Copyright from "@/components/Copyright";
import Mainbanner from "@/components/Mainbanner";

export default function Home() {
  return (
    <>
      <Mainbanner />
      <Collections />
      <Copyright />
    </>
  );
}

export const dynamic = "force-dynamic";

