import { motion } from "framer-motion"
import { cardAnimation, transition } from "../../animations"
import './notFound.css'

export const NotFound = () => {
    return (
        <motion.div
            initial="start"
            animate="in"
            exit="exit"
            transition={transition}
            variants={cardAnimation}
            key={"new"}
            className="notfound"
        >
            <h4>NO CONTENT</h4>
            <img src="https://c.tenor.com/A5RlBmmGOSQAAAAC/flosktchs-toilet-paper.gif" alt="" />
        </motion.div>
    )
}
