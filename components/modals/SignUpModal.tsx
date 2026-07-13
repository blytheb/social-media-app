"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";

export default function SignUpModal() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleOpen = () => {
		setIsOpen(true);
	};
	return (
		<>
			<button
				className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm font-bold bg-white rounded-full"
				onClick={handleOpen}>
				Sign Up
			</button>

			<Modal
				open={isOpen}
				onClose={handleClose}
				className="flex justify-center items-center">
				<div className="w-[200px] h-[400px] bg-white"></div>
			</Modal>
		</>
	);
}
