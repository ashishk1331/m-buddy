"use client";
import { Paperclip } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

export default function({ data }) {
	let stats = [],
		index = 0;
	for (let item in data) {
		stats.push(
			<Item key={index} index={index} field={item} value={data[item]} />,
		);
		index += 1;
	}

	return (
		<div className="overflow-y-scroll mb-8">
			<div className="mt-6">
				<dl className="divide-y divide-gray-100">{stats}</dl>
			</div>
		</div>
	);
}

function Attachment({ name, size, index }) {
	return (
		<li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
			<div className="flex w-0 flex-1 items-center">
				<Paperclip
					className="h-5 w-5 flex-shrink-0 text-gray-400"
					aria-hidden="true"
				/>
				<div className="ml-4 flex min-w-0 flex-1 gap-2">
					<span className="truncate font-medium">{name}</span>
					<span className="flex-shrink-0 text-gray-400">{size}</span>
				</div>
			</div>
			<div className="ml-4 flex-shrink-0">
				<a
					href="#"
					className="font-medium text-indigo-600 hover:text-indigo-500"
				>
					Download
				</a>
			</div>
		</li>
	);
}

function Item({ field, value, index }) {
	return (
		<div
			className={twMerge(
				"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4",
				index % 2 && "bg-neutral-100",
			)}
		>
			<dt className="text-sm font-medium leading-6 text-gray-900">
				{field !== "UHID" ? captilize(field) : field}
			</dt>
			<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
				{value}
			</dd>
		</div>
	);
}

function captilize(string){
	let words = [];
	let temp = "";
	for(let char of string.split("")){
		if(char.match(/[A-Z]/gm)){
			if(temp.length > 0){
				words.push(temp[0].toUpperCase() + temp.substring(1));
			}
			temp = char;
		} else {
			temp += char;
		}
	}
	if(temp.length > 0){
		words.push(temp[0].toUpperCase() + temp.substring(1));
	}
	return words.join(" ")
}