import { RiReactjsLine } from "react-icons/ri"
import { FaHtml5} from 'react-icons/fa';
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariation=(duration)=>({
    initial:{y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Tech = () => {
    return (
        <div className="border-b border-neutral-800">
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">

                Technologies
            </motion.h1>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap item-ceneter justify-center mb-10 gap-4">
                <motion.div
                variants={iconVariation(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                 variants={iconVariation(1.3)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-[#FF4111]"/>
                </motion.div>
                <motion.div
                 variants={iconVariation(1.6)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3 className="text-7xl text-[#34A8DD]"/>
                </motion.div>
                <motion.div
                 variants={iconVariation(1.9)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJsSquare className="text-7xl text-[#EFDA4D]"/>
                </motion.div>
                <motion.div
                 variants={iconVariation(2.2)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-600"/>
                </motion.div>
                <motion.div
                 variants={iconVariation(2.5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-[#36BBF6]"/>
                </motion.div>
                <motion.div
                 variants={iconVariation(2.8)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaBootstrap className="text-7xl text-[#7B11F8]"/>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Tech
