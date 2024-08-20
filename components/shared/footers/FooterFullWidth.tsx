import React from 'react';
// import FooterWidgets from './modules/FooterWidgets';

const FooterFullwidth = () => (
<footer className="">
  <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
    <div className="max-w-sm">
      <div className="mb-6 flex h-10 items-center space-x-2">
        <img className="h-full object-contain" src="/images/logo-circle.png" alt="" />
        <span className="text-lg font-medium">Boleno</span>
      </div>
      <div className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
    </div>
    <div className="">
      <div className="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
      <nav aria-label="Guides Navigation" className="text-gray-500">
        <ul className="space-y-3">
          <li><a className="hover:text-blue-600 hover:underline" >How to make a footer</a></li>
          <li><a className="hover:text-blue-600 hover:underline" >Designing your app</a></li>
          <li><a className="hover:text-blue-600 hover:underline" >Getting help from the community</a></li>
          <li><a className="hover:text-blue-600 hover:underline" >Pricing vs Hourly Rate</a></li>
        </ul>
      </nav>
    </div>
    <div className="">
      <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
      <nav aria-label="Footer Navigation" className="text-gray-500">
        <ul className="space-y-3">
          <li><a className="hover:text-blue-600 hover:underline" >Pricing</a></li>
          <li><a className="hover:text-blue-600 hover:underline" >Demo</a></li>
          <li><a className="hover:text-blue-600 hover:underline" >Press</a></li>
          <li><a className="hover:text-blue-600 hover:underline" >Support Hub</a></li>
          <li><a className="hover:text-blue-600 hover:underline" >Contact</a></li>
        </ul>
      </nav>
    </div>
    <div className="">
      <div className="mt-4 mb-2 font-medium xl:mb-4">Support Us on Product Hunt</div>
      <div className="flex flex-col">
        <div className="mb-4">
          <a href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light" alt="Apple - Think&#0032;Different | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="border-t">
    <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
      <p className="">© 2022 Boleno | All Rights Reserved</p>
      <p className="-order-1 sm:order-none">Made with ❤️ Remotely</p>
      <p className="">
        <a className="" >Privacy Policy</a>
        <span>|</span>
        <a className="" >Terms of Service</a>
      </p>
    </div>
  </div>
</footer>

);

export default FooterFullwidth;
