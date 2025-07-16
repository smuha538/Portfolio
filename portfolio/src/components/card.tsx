import { motion } from "motion/react"

function Card(props: {margin: string; direction: number; topText: string; bottomText: string}) {
    return (
        <motion.div className={props.margin} initial={{ scale: 0, x: props.direction }} animate={{ scale: 1, transition: {duration: 0.3} } }>
            <div className="block md:max-w-sm p-6 bg-linear-to-t from-[#d89b95] to-[#d3958b] border rounded-lg shadow-sm m-5">
                <h5 className="mb-2 text-center md:text-2xl text-sm font-bold text-white">{props.topText}</h5>
                <h2 className="font-bold text-center md:text-2xl text-sm text-white">{props.bottomText}</h2>
            </div>
        </motion.div>
    )
}

export default Card