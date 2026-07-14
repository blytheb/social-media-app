import React from "react";
import {
	HomeIcon,
	HashtagIcon,
	BellIcon,
	InboxIcon,
	BookmarkIcon,
	UserIcon,
	EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Sidebar() {
	return (
		<nav className="hidden h-screen sm:flex flex-col sticky top-0 p-3 xl:ml-20 xl:mr-10 ">
			<div className="relative h-full flex flex-col items-center">
				<div className="py-3">
					<Image
						src={"/assets/busybee-logo.png"}
						alt="busybee-logo"
						width={48}
						height={48}
					/>
				</div>
				<ul>
					<SidebarLink Icon={HomeIcon} text="Home" />
					<SidebarLink Icon={HashtagIcon} text="Explore" />
					<SidebarLink Icon={BellIcon} text="Notifications" />
					<SidebarLink Icon={InboxIcon} text="Messages" />
					<SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
					<SidebarLink Icon={UserIcon} text="Profile" />
					<SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
					<button
						className=" hidden xl:block bg-[#F4aF01] w-[200px] h-[52px] 
                    rounded-full text-white font-medium cursor-pointer shadow-md mt-2">
						Bumble
					</button>
				</ul>
				<div className="absolute bottom-3 flex items-center space-x-2 xl:p-3 xl:pe-6 rounded-full hover:bg-gray-500 hover:bg-opacity-10 transition cursor-pointer">
					<Image
						src={"/assets/profile-pic.png"}
						alt="Profile Picture"
						width={36}
						height={36}
						className="w-9 h-9"
					/>

					<div className="hidden xl:flex flex-col text-sm ">
						<span className="font-bold ">sd</span>
						<span className="text-gray-500">sd</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

interface SidebarLinkProps {
	text: string;
	Icon: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
			title?: string;
			titleId?: string;
		} & React.RefAttributes<SVGSVGElement>
	>;
}

function SidebarLink({ text, Icon }: SidebarLinkProps) {
	return (
		<li className="flex items-center text-xl mb-2 space-x-3 p-2.5">
			<Icon className="h-7" />
			<span className="hidden xl:block">{text}</span>
		</li>
	);
}
