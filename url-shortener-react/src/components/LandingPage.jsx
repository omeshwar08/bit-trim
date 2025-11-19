import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const { token } = useStoreContext();
    const navigate = useNavigate();
    const dashBoardNavigateHandler = () => {
        try {
            if (token) {
                navigate("/dashboard")
            }
            else {
                navigate("/register");
            }
        } catch (error) {
            navigate("/error")
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
            <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
                    >
                        BitTrim simplifies URL shortening for efficient sharing.
                    </motion.h1>
                    <p className="text-slate-700 text-sm my-5">
                        BitTrim streamlines URL shortening so sharing links becomes fast and
                        effortless. With a clean interface and powerful analytics, BitTrim helps
                        creators, teams, and marketers shorten, share and measure link performance
                        in seconds.
                    </p>
                    <div className="flex items-center gap-3">
                        <motion.button
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            aria-label="Manage Links"
                            className="bg-custom-gradient w-40 text-white rounded-md py-2"
                            onClick={dashBoardNavigateHandler}
                        >
                            Manage Links
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            aria-label="Create Short Link"
                            className="border-btnColor border w-40 text-btnColor rounded-md py-2"
                            onClick={dashBoardNavigateHandler}
                        >
                            Create Short Link
                        </motion.button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center w-full">
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="sm:w-[480px] w-[400px] object-cover rounded-md"
                        src="/images/img2.png"
                        alt="BitTrim hero illustration"
                    />
                </div>
            </div>
            <div className="sm:pt-12 pt-7">
                <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
                    <Card
                        title="Simple URL Shortening"
                        desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
                    />
                    <Card
                        title="Powerful Analytics"
                        desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
                    />
                    <Card
                        title="Enhanced Security"
                        desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
                    />
                    <Card
                        title="Fast and Reliable"
                        desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
