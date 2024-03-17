"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({ goal }) {
    return (
        <CardContainer className="inter-var text-center">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {goal.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {goal.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={goal.link}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    By {goal.date}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Remaining Goal : ₹{goal.price}
                </CardItem>
                <div className="flex justify-between items-center mt-2">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={`https://www.google.com/search?q=${goal.title}`}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal w-full outline outline-gray-400 dark:text-white text-center"
                    >
                        Search now →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
