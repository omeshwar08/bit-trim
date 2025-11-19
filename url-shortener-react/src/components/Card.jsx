import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-linkColor/30 shadow-md shadow-linkColor/20 
                flex flex-col px-5 py-8 gap-3 rounded-md bg-white"
        >
            <h1 className="text-slate-900 text-xl font-bold">{title}</h1>
            <p className="text-slate-700 text-sm">{desc}</p>
        </motion.div>
    );
};

export default Card;
