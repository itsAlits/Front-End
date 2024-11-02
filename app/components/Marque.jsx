"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Marque() {
  const dataKiri = [{}];

  const dataKanan = [{}];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-y-0 z-40 left-0 w-[30%] bg-gradient-to-r from-[#151515] via-[#151515a1] to-transparent"></div>
      <div className="absolute inset-y-0 z-40 right-0 w-[30%] bg-gradient-to-l from-[#151515] via-[#151515a1] to-transparent"></div>

      <div className="relative z-10">
        <div>
          <Marquee>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
          </Marquee>
        </div>
        <div className="mt-4">
          <Marquee direction={"right"}>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
            <div className="border ms-4 h-44 rounded border-[#303030] bg-[#202020] w-96 px-4 flex items-center text-center py-2">
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque voluptas dolore labore placeat ipsam. Odio neque
              </p>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
