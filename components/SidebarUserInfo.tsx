"use client";

import { auth } from "@/firebase";
import { signOutUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SidebarUserInfo() {
	const dispatch: AppDispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user);

	async function handleSignOut() {
		await signOut(auth);
		dispatch(signOutUser());
	}
	return (
		<div
			className="absolute bottom-3 flex items-center space-x-2 xl:p-3 xl:pe-6 rounded-full hover:bg-gray-500 hover:bg-opacity-10 transition cursor-pointer"
			onClick={() => handleSignOut()}>
			<Image
				src={"/assets/profile-pic.png"}
				alt="Profile Picture"
				width={36}
				height={36}
				className="w-9 h-9"
			/>

			<div className="hidden xl:flex flex-col text-sm ">
				<span className="font-bold ">{user.name}</span>
				<span className="text-gray-500">@{user.username}</span>
			</div>
		</div>
	);
}
