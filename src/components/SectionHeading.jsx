import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SectionHeading = ({ headText, title, text}) => {
  return (
    <div>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {headText}
        </p>
        <h2 className={styles.sectionHeadText}>
         {title}
        </h2>
      </motion.div>
      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] w-full leading-[30px]'
      >
          {text}
      </motion.p>
    </div>
  )
}

export default SectionHeading