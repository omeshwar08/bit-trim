import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
            <div className="bg-white w-full sm:py-10 py-8">
                <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
                    About BitTrim
                </h1>

                <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
                    BitTrim is created and developed by Omeshwar to simplify URL shortening
                    with speed, clarity, and precision. Quickly generate, manage, and track
                    your trimmed links with an intuitive interface designed for creators,
                    developers, and marketers. BitTrim makes sharing effortless and analytics
                    insightful — empowering you with the tools to optimize every link you share.
                </p>

                <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">

                    <div className="flex items-start">
                        <FaLink className="text-blue-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Simple URL Shortening
                            </h2>
                            <p className="text-gray-600">
                                Create clean, memorable links in seconds. BitTrim’s smooth and
                                beginner-friendly interface allows you to shorten URLs effortlessly
                                with zero setup or complications.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FaShareAlt className="text-green-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Powerful Analytics
                            </h2>
                            <p className="text-gray-600">
                                Track clicks, devices, locations, and referral sources through a
                                clear analytics dashboard. Perfect for improving campaigns,
                                understanding audience behavior, and maximizing reach.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FaEdit className="text-purple-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Enhanced Security
                            </h2>
                            <p className="text-gray-600">
                                Your data is safeguarded with strong encryption and secure
                                architecture. BitTrim ensures every link you share remains
                                protected from misuse and vulnerabilities.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FaChartLine className="text-red-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Fast and Reliable
                            </h2>
                            <p className="text-gray-600">
                                BitTrim delivers blazing-fast redirects and a highly stable
                                infrastructure. Your links stay available and consistent — giving
                                users a seamless browsing experience every time.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;
