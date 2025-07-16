import { motion } from "motion/react"


function PortfolioCard(props) {

    return(
            <motion.div className="rounded-md border-4 border-[#ca786d]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => 
            {props.handler(true); props.descriptionHandler(props.description); props.stackHandler(props.stack); props.titleHandler(props.title);
             props.githubHandler(props.githubLink)}}>
                <img className="h-60 w-96 object-fill " alt="test" src={`/images/${props.image}`}></img>
                <div className="bg-[#f5e9e5]">
                    <h2 className="text-center py-2 outfit-text text-black">{props.title}</h2>
                </div>
            </motion.div>
    )
}

export default PortfolioCard