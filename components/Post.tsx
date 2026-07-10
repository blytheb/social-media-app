import Image from "next/image";
import React from "react";

export default function Post() {
	return (
		<div>
			<PostHeader />
		</div>
	);
}

export function PostHeader() {
	return (
		<div className="flex p-3 space-x-5">
			<Image
				src={"/assets/profile-pic.png"}
				alt="Profile Picture"
				width={44}
				height={44}
				className="w-11 h-11"
			/>

			<div className="text-[15px] flex flex-col space-y-1.5">
				<div className="flex space-x-1.5 text-[#707E89]">
					<span className="font-bold text-[#0F1419]">Guest</span>
					<span>@guest000234</span>
					<span>.</span>
					<span>a day ago</span>
				</div>
				<span>asdfasdfasdfasdf</span>
			</div>
		</div>
	);
}
