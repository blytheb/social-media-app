import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
	return (
		<div className="text-[#0F1419] min-h-screen max-w-[1400px] border-2  border-black mx-auto">
			<Sidebar />
			{/* <PostFeed/>
  <Widgets /> */}
		</div>
	);
}
