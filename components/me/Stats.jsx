"use client";
import { Paperclip } from "@phosphor-icons/react";

export default function() {
    return (
        <div className="overflow-y-scroll">
            <div className="mt-6">
                <dl className="divide-y divide-gray-100">
                    <Item field="Full name" value="Ravinder Singh" />
                    <Item field="Post" value="Bill Manager" />
                    <Item
                        field="Email address"
                        value="ravisingh123@gmail.com"
                    />
                    <Item
                        field="Attachments"
                        value={
                            <ul
                                role="list"
                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                            >
                                <Attachment
                                    name="resume_back_end_developer.pdf"
                                    size="2.4mb"
                                />
                                <Attachment
                                    name="coverletter_back_end_developer.pdf"
                                    size="4.5mb"
                                />
                            </ul>
                        }
                    />
                </dl>
            </div>
        </div>
    );
}

function Attachment({ name, size }) {
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

function Item({ field, value }) {
    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
                {field}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {value}
            </dd>
        </div>
    );
}
