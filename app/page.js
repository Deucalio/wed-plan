import Image from "next/image";

export default function Home() {
  return (
    <>
      <main class="relative h-[85vh] text-white sm:h-[100vh]">
        <h1 class="absolute left-0 z-50 m-4 flex cursor-default items-center gap-2 text-xl text-slate-300">
          FB
          <div class="flex h-1 w-1 rounded-full bg-orange-600"></div>
          IN
        </h1>

        <h1 class="absolute left-1/2 top-0 z-50 my-2 -translate-x-1/2 cursor-pointer border-b-2 border-slate-300 text-3xl font-bold text-white transition-all duration-700 hover:border-opacity-50 hover:text-slate-200">
          dreamy
        </h1>

        <h1 class="absolute right-0 z-50 m-3 mr-6 flex cursor-pointer items-center gap-2 border-b border-transparent text-2xl text-slate-100 transition-all hover:border-slate-300 hover:text-slate-300">
          portfolio
        </h1>

        <img
          class="h-full w-full"
          src="
  https://images.unsplash.com/photo-1509214686682-59f244a5f38a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div class="absolute top-1/3 z-50 translate-x-10 text-3xl sm:left-40 sm:translate-x-0 md:top-1/3 lg:left-[15%] lg:text-5xl">
          <p>Wedding planning</p>
          <p class="">Assistant</p>
          <p>
            <span class="absolute w-full text-sm leading-3 tracking-normal lg:left-56 lg:top-[3.8rem]">
              {" "}
              Your one stop-shop agency to{" "}
            </span>
            <span class="absolute top-20 text-sm lg:left-[14.1rem] lg:top-[4.5rem]">
              {" "}
              create your dream plan{" "}
            </span>
          </p>
        </div>

        <div class="absolute inset-0 bg-black opacity-40"></div>
      </main>
      <section class="bg-black px-8 py-32 pb-2 text-white sm:px-32">
        <h1 class="px-8 text-4xl">Our Services</h1>

        <ul class="my-8 grid grid-cols-1 gap-12 py-2 lg:grid-cols-3">
          <li class="flex flex-col gap-2 rounded-md border-slate-700 p-2">
            <p class="text-slate-100">Wedding Planning</p>
            <p class="text-sm leading-5 tracking-tight text-gray-400">
              Let us handle the details. Our comprehensive wedding planning got
              it all covered. So don't be worried about any of it.
            </p>
            <h1 class="text-md w-fit cursor-pointer border-b border-slate-200 text-slate-100 transition-all duration-500 hover:border-slate-400 hover:text-slate-400">
              Learn More
            </h1>
          </li>
          <li class="flex flex-col gap-2 rounded-md border-slate-700 p-2">
            <p class="text-slate-100">Catering</p>
            <p class="text-sm leading-5 tracking-tight text-gray-400">
              We offer a diverse range of culinary options, including
              appetizers, entrees, desserts, and beverages, and impeccable
              taste.
            </p>
            <h1 class="text-md w-fit cursor-pointer border-b border-slate-200 text-slate-100 transition-all duration-500 hover:border-slate-400 hover:text-slate-400">
              Learn More
            </h1>
          </li>

          <li class="flex flex-col gap-2 rounded-md border-slate-700 p-2">
            <p class="text-slate-100">Photography Services</p>
            <p class="text-sm leading-5 tracking-tight text-gray-400">
              visual storytelling and image capture solutions tailored to meet
              the diverse needs of clients across various industries and
              occasions.
            </p>
            <h1 class="text-md w-fit cursor-pointer border-b border-slate-200 text-slate-100 transition-all duration-500 hover:border-slate-400 hover:text-slate-400">
              Learn More
            </h1>
          </li>
        </ul>
      </section>

      <section class="bg-black px-8 py-24 pb-2 text-white sm:px-32">
        <h1 class="px-8 text-4xl">Our Team</h1>

        <ul class="grid grid-cols-1 place-items-center gap-16 py-8 sm:grid-cols-2 md:grid-cols-3 md:place-items-baseline lg:grid-cols-4 lg:gap-2 lg:px-16">
          <li class="relative flex flex-col gap-4">
            <img
              class="h-40 w-40 rounded-lg"
              src="https://img.freepik.com/free-photo/woman-holding-some-wildflowers-nature_23-2148192750.jpg?t=st=1711126974~exp=1711130574~hmac=a50b764230c3fe47e6c416c0fad0a55d361de8aa4bf3a3218229a9dabb180043&w=360"
              alt=""
            />
            <div class="absolute inset-0 bg-black/20"></div>

            <p class="">Shiv Roy</p>
          </li>

          <li class="relative flex flex-col gap-4">
            <img
              class="h-40 w-40 rounded-lg"
              src="https://img.freepik.com/free-photo/young-man-traveler-green-forest-checking-his-mobile-phone_181624-53069.jpg?t=st=1711127126~exp=1711130726~hmac=7b11fe69f91c977a4cf904d9d91d61230863489ab350fdeda609fb886194fc58&w=360
"
              alt=""
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <p class="">Jack Ryan</p>
          </li>

          <li class="relative flex flex-col gap-4">
            <img
              class="h-40 w-40 rounded-lg"
              src="    https://img.freepik.com/free-photo/young-male-traveler-enjoying-rural-surroundings_23-2149125537.jpg?t=st=1711127427~exp=1711131027~hmac=492c3df40b34c1804e3ad44f5eb32c94f51b001beca83e8e1348290acd0a205f&w=360
"
              alt=""
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <p class="">Alexander Skylar</p>
          </li>

          <li class="relative flex flex-col gap-4">
            <img
              class="h-40 w-40 rounded-lg"
              src="        https://img.freepik.com/free-photo/woman-jeans-looking-camera_23-2147817498.jpg?t=st=1711127488~exp=1711131088~hmac=7213f5c94872aca6e1dafac271e725c157a54f2c405cc6c854452206dc7471a4&w=740
"
              alt=""
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <p class="">Mary Jane</p>
          </li>
        </ul>
      </section>

      <section class="bg-black py-40">
        <div class="relative mx-auto flex w-2/3 items-center justify-center">
          <div class="flex flex-col gap-4 lg:-ml-4 xl:flex-row">
            <img
              class="h-60 rounded-xl opacity-80 xl:h-52 transition-all duration-500 hover:scale-105 cursor-pointer"
              src="https://img.freepik.com/free-photo/violet-light-set-table-with-flowers_8353-10610.jpg?t=st=1711129429~exp=1711133029~hmac=761a607475fac861280a133c97e6dd0363b4b9ce4236fdc400d7e13e7aec6dde&w=900"
              alt=""
            />
            <img
              class="h-60 rounded-xl opacity-80 xl:h-52 transition-all duration-500 hover:scale-105 cursor-pointer"
              src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?t=st=1711128279~exp=1711131879~hmac=f8b08f8fe6f78327ab6f93fa241a5661432d4748fd24f86a7bd583a61ef7fff1&w=900"
              alt=""
            />

            <img
              class="h-60 rounded-xl opacity-80 xl:h-52 transition-all duration-500 hover:scale-105 cursor-pointer"
              src="
           https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?t=st=1711129731~exp=1711133331~hmac=6450f10c4f73e0f7685a1fce4ab21ec26b92cb0a7469c9858ca44fdc9f220a43&w=900
           "
              alt=""
            />
          </div>

          <div class="absolute -bottom-36 text-gray-300 lg:w-[34rem]">
            <h1 class="text-2xl leading-7 tracking-tight">
              Your <span class="font-bold">dream wedding</span> begins here. We
              understand that your wedding day is one of the most important
              moments of your life, and we're here to{" "}
              <span class="border-b border-slate-300 font-bold">
                {" "}
                take care of that.
              </span>
            </h1>
          </div>
        </div>
        <p class="mx-auto mt-36 w-3/4 py-8 text-sm leading-5 tracking-normal text-gray-300/80 sm:mt-0 sm:w-2/4 sm:translate-y-36 lg:w-1/3">
          Elevate your wedding day with our exquisite design services. Our
          talented team of designers will collaborate with you to create a
          stunning aesthetic that reflects your love story and captures the
          essence of your relationship. From floral arrangements and tablescapes
          to signage, stationery, and beyond.
        </p>
      </section>

      <section class="bg-black py-32 text-white lg:px-64">
        <h1 class="px-12 pb-8 text-3xl lg:px-0">Our Delicious Cuisine</h1>

        <ul class="grid grid-cols-1 gap-20">
          <li class="relative flex flex-col gap-2 sm:flex-row">
            <img
              class="h-96 w-full rounded-md sm:h-80 sm:w-80"
              src="https://images.unsplash.com/photo-1600803907087-f56d462fd26b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="absolute inset-0 bg-black opacity-15"></div>
            <div>
              <h1 class="z-50 mx-auto my-8 py-1 text-center text-2xl font-bold text-gray-300">
                Exquisite Culinary Creations
              </h1>
              <p class="mx-auto w-3/4 text-sm">
                From elegant plated dinners to lavish buffets and everything in
                between, our talented culinary team uses the finest ingredients
                and innovative techniques to create dishes that are as beautiful
                as they are delicious.
              </p>
            </div>
          </li>

          <li class="relative flex flex-col gap-2 sm:flex-row">
            <div class="mt-12">
              <h1 class="z-50 mx-auto my-8 py-1 text-center text-2xl font-bold text-gray-300">
                Artisanal Catering Excellence
              </h1>
              <p class="mx-auto w-3/4 text-sm">
                Savor the flavor of perfection with our artisanal catering
                excellence, we specialize in crafting culinary masterpieces that
                elevate any occasion to extraordinary heights. From intimate
                gatherings to grand celebrations, our expert chefs and culinary
                artisans infuse every dish with passion, creativity, and
                attention to detail.
              </p>
            </div>
            <img
              class="h-96 w-full rounded-md sm:h-96 sm:w-96"
              src=" https://images.unsplash.com/photo-1595440432061-e6c25f9feaf0?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="absolute inset-0 bg-black opacity-25"></div>
          </li>
        </ul>
      </section>

      <section class="bg-black px-16 py-2 pb-32">
        <h1 class="text-3xl text-white sm:px-32 lg:px-60">Contact Us</h1>

        <ul class="-ml-6 grid grid-cols-1 gap-4 py-16 sm:-ml-0 sm:grid-cols-2 md:px-12 lg:mx-auto lg:w-3/4">
          <div class="relative">
            <img
              class="-ml-0 rounded-lg sm:-ml-6 sm:w-full lg:h-96 lg:w-96"
              src="https://images.unsplash.com/photo-1543589077-870d0ba0a43d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="absolute inset-0 bg-black opacity-30"></div>
          </div>

          <li>
            <div class="flex flex-col gap-8 px-4 py-14 xl:w-2/4 text-xs">
              <input
                class="text-md rounded-md border border-slate-700 bg-transparent px-3 py-1 text-slate-200 outline-none transition-all placeholder:opacity-50 focus:border-gray-600"
                placeholder="Name: "
                type="text"
                name=""
                id=""
              />
              <input
                class="text-md rounded-md border border-slate-700 bg-transparent px-3 py-1 text-slate-200 outline-none transition-all placeholder:opacity-50 focus:border-gray-600"
                placeholder="Email: "
                type="email"
                name=""
                id=""
              />

              <textarea
                placeholder="Write your message here"
                class="text-md h-32 resize-none rounded-md border border-slate-700 bg-transparent px-3 py-1 text-slate-200 outline-none transition-all placeholder:opacity-50 focus:border-gray-600"
              ></textarea>

              <button
                type="button"
                class="text-white bg-gradient-to-r from-fuchsia-600 to-indigo-700 rounded-md py-2 px-8 w-40 cursor-pointer hover:scale-110 transition-all duration-500"
              >
                Submit
              </button>
            </div>
          </li>
        </ul>
      </section>

      <footer class="relative bg-black pb-16 pt-40">
        <p class="px-6 py-4 text-lg text-slate-200">Links</p>
        <div class="border-b-2 border-slate-500 opacity-40"></div>
        <ul class="grid grid-cols-2 gap-2 px-6 py-4 text-sm text-[#e9ecef]">
          <li>Menu</li>
          <li class="pb-3">Websites</li>
          <li class="w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:border-opacity-100">
            Our Team
          </li>
          <li class="w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:border-opacity-100">
            About us
          </li>
          <li class="w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:border-opacity-100">
            Services
          </li>
          <li class="w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:border-opacity-100">
            Portfolio
          </li>
          <li class="h-fit w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:border-opacity-100">
            Our Cuisines
          </li>
        </ul>
        <p class="flex gap-2 px-6 py-4 text-sm text-[#e9ecef]">Socials</p>
        <ul class="flex flex-row gap-2 px-6 text-sm">
          <li class="h-fit w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:scale-125">
            <img
              alt="Tiktok Icon"
              src="https://i.imgur.com/6HLSMYU.png"
              class="h-8"
            />
          </li>
          <li class="h-fit w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:scale-125">
            <img
              alt="Facebook Icon"
              class="h-8"
              src="https://i.imgur.com/oJZ3ePV.png"
            />
          </li>
          <li class="h-fit w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:scale-125">
            <img
              alt="Insta Icon"
              class="h-8"
              src="https://i.imgur.com/CFnINXi.png"
            />
          </li>
          <li class="h-fit w-fit cursor-pointer border-b-[1px] border-slate-500 border-opacity-0 text-[#868e96] transition-all hover:scale-125">
            <img
              class="h-8"
              src="https://i.imgur.com/n2YyVUY.png"
              alt="Pinterest Icon"
            />
          </li>
        </ul>
      </footer>
    </>
  );
}
