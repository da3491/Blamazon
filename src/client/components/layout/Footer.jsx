import React from "react";

const Footer = () => {
  return (
    <>
      <button className="text-center text-white bg-slate-700 py-3 w-full">
        Back to top
      </button>
      <div className="bg-slate-800 text-white divide-y divide-gray-500">
        <div className="grid grid-cols-4 max-w-screen-lg gap-10 mx-auto p-10">
          {/* Col 1 */}
          <div>
            <h3 className="font-bold text-lg pb-2">Get to Know Us</h3>
            <div>Careers</div>
            <div>Amazon</div>
            <div>Newsletter</div>
            <div>About Amazon</div>
            <div>Accessibility</div>
            <div>Sustainability</div>
            <div>Press Center</div>
            <div>Investor Relations</div>
            <div>Amazon Devices</div>
            <div> Amazon Science</div>
          </div>
          {/* Col 2 */}
          <div>
            <h3 className="font-bold text-lg pb-2">Make Money with Us</h3>
            <div>Sell products on Amazon</div>
            <div>Sell apps on Amazon</div>
            <div>Supply to Amazon</div>
            <div>Protect & Build Your Brand</div>
            <div>Become an Affiliate</div>
            <div>Become a Delivery Driver</div>
            <div>Start a package delivery business</div>
            <div>Advertise Your Products</div>
            <div>Self-Publish with Us</div>
            <div>Host an Amazon Hub</div>
            <div>More Ways to Make Money</div>
          </div>
          {/* Col 3 */}
          <div>
            <h3 className="font-bold text-lg pb-2">Amazon Payment Products</h3>
            <div>Amazon Rewards Visa Signature Cards</div>
            <div>Amazon Store Card</div>
            <div>Amazon Secured Card</div>
            <div>Amazon Business Card</div>
            <div>Shop with Points</div>
            <div>Credit Card Marketplace</div>
            <div>Reload Your Balance</div>
            <div>Amazon Currency Converter</div>
          </div>
          {/* Col 4 */}
          <div>
            <h3 className="font-bold text-lg pb-2">Let Us Help You</h3>
            <div>Amazon and COVID-19</div>
            <div>Your Account</div>
            <div>Your Orders</div>
            <div>Shipping Rates & Policies</div>
            <div>Amazon Prime</div>
            <div>Returns & Replacements</div>
            <div>Manage Your Content and Devices</div>
            <div>Your Recalls and Product Safety Alerts</div>
            <div>Help</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 p-5">
          <div className="text-xl font-bold text-orange-400 pr-5">Blamazon</div>
          <div>location</div>
          <div>country</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
