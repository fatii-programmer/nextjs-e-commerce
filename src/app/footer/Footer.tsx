import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-20 border-t border-gray-300">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="text-gray-600 text-sm ">
                        <p>400 University Drive Suite 200 Coral Gables,</p>
                        <p>FL 33134 USA</p>
                    </div>
                    <div>
                        <h3 className="text-gray-400 text-sm font-medium mb-10">Links</h3>
                        <ul className="space-y-6">
                            <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Home</a></li>
                            <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Shop</a></li>
                            <li><a href="#" className="text-black-800 hover:text-gray-900 transition">About</a></li>
                            <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-400 text-sm font-medium mb-10">Help</h3>
                        <ul className="space-y-6">
                            <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Payment Options</a></li>
                            <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Return</a></li>
                            <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Privacy Policies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-400 text-sm font-medium mb-10">Newsletter</h3>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-black-600 text-sm">
                    <hr />
                    <p className="pt-4">2022 Meubel House. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
