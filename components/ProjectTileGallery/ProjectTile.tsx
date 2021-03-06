import Link from "next/link";
import { ProjectsElementsInterface, ProjectTileModel } from "../../Model";
import Image from "next/image";
import * as React from "react";

export default function ProjectTile(props: {
  tile: any[];
  isButtonVisible: boolean;
  isCtaBellow: boolean;
  ctaText: string;
  offset: number;
}) {
  function isButtonVisible(): JSX.Element | null {
    if (props.isButtonVisible) {
      return (
        <button className="flex mx-auto  text-white bg-yellow-600 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-500 rounded transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 cursor-pointer hover:text-yellow-500">
          {props.ctaText}
        </button>
      );
    }
  }
  function isCtaBellow(): JSX.Element | null {
    if (props.isCtaBellow) {
      return (
        <button className="flex mx-auto  text-white bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 cursor-pointer hover:text-yellow-500">
          {props.ctaText}
        </button>
      );
    }
  }

  function replaceImg(e: any, item: any) {
    e.currentTarget.src = item.imgTwo;
  }

  function createTiles(): JSX.Element {
    return (
      <>
        {props.tile.slice(0, props.offset).map((item) => (
            <Link href={`${item.link}`} key={item.link}>
              <div className="sm:w-6/12  mb-10 px-4 transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-110 cursor-pointer hover:text-yellow-500">
                <div className=" h-auto overflow-hidden ">
                  <Image
                    alt="content"
                    className="object-cover  object-center h-full w-full cursor-pointer"
                    src={item.img}
                    width={250}
                    height={250} loading={"eager"}/>
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-300 mt-6 mb-3 ">
                  {item.title}
                </h2>
                {/* <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
                {isButtonVisible()}
                {/* ROUTE HERE */}
              </div>
            </Link>
        ))}
      </>
    );
  }

  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container px-5  mx-auto ">
          <div className="flex flex-wrap  -mb-10 text-center justify-center lg:w-2/4 mx-auto ">
            {props.tile === undefined ? null : createTiles()}
          </div>
          {isCtaBellow()}
        </div>
      </section>
    </>
  );
}
