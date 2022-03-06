import './loader.css';
import { motion } from 'framer-motion';
import { cardAnimation, transition } from '../../animations';

export const Loader = () => {
    return (
        <motion.div className="loader"
            initial="start"
            animate="in"
            exit="exit"
            transition={transition}
            variants={cardAnimation}
            key="loader"
        >
            <h2>Loading Information ...</h2>
            <img src="https://i.pinimg.com/originals/d5/a2/b0/d5a2b01b8294bfb8678d67342b106795.gif" alt="load" />
        </motion.div>
    )
}
