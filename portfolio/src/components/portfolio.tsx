import { AnimatePresence } from "motion/react";
import Modal from "./modal"
import PortfolioCard from "./portfolioCard"
import { useState } from "react";

function Portfolio() {

    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [stack, setStack] = useState("");
    const [modalTitle, setTitle] = useState("");
    const [github, setGithub] = useState("");
    const japaneseDescription = "This web application is a dictionary and flashcard system in one. Users can look up words, create decks and review flashcards based on the Spaced-Repetition System."
    const japaneseStack = "The stack includes JavaScript, PHP, Materialize CSS, and MongoDB."
    const footballDescription = "A football app which allows users to view match fixtures for various games and teams across several leagues. Furthermore, users can search up players and view their stats across various competitions."
    const footballStack = "The stack includes Flutter, Dart and Google API."
    const colourDescription = "This mobile application allows the user to change the colour of an image or photo based on the colour of pixel."
    const colourStack = "The stack includes Android Studio, Java and Firebase."
    const meteorDescription = "This game allows the player to control a space ship with fire power and the mission to survive a vast array of diverse meteorites."
    const meteorStack = "The stack includes Unity and C#."
    const movieDescription = "This movie application allows users to search for, filter, and favourite movies."
    const movieStack = "The stack includes JavaScript, PHP, and MySQL."
    const ffDescription = "*In-Development* This web application is a game which allows players to relive through the Final Fantasy series by listening to the music and forming teams to fight against some of the iconic monsters."
    const ffStack = "The stack includes C#, React, and Supabase."

    return(
        <>
            <AnimatePresence>
                {isOpen && <Modal title={modalTitle} modalDescription={description} modalStack={stack} modalLink={github} onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-[#d89b95] p-10 rounded-md">
                <PortfolioCard image={"torii.jpg"} title={"Japanese Flashcard Web Application"} description={japaneseDescription} stack={japaneseStack}
                    githubLink={"https://github.com/smuha538/Learn-Japanese-Website"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                <PortfolioCard image={"football.jpg"} title={"Flutter Football App"} description={footballDescription} stack={footballStack} 
                    githubLink={"https://github.com/smuha538/flutter_football"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                <PortfolioCard image={"colour.jpg"} title={"C-Visualizer"} description={colourDescription} stack={colourStack} 
                    githubLink={"https://github.com/smuha538/C-Visualizer"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                <PortfolioCard image={"meteor.jpg"} title={"Meteoric Quest"} description={meteorDescription} stack={meteorStack} 
                    githubLink={"https://github.com/smuha538/Meteoric-Quest"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                <PortfolioCard image={"popcorn.jpg"} title={"Movie Web Application"} description={movieDescription} stack={movieStack} 
                    githubLink={"https://github.com/smuha538/Advanced-Movie-Web-Application"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
                <PortfolioCard image={"ff.png"} title={"Final Fantasy Project"} description={ffDescription} stack={ffStack} 
                    githubLink={"https://github.com/smuha538/FFProject"} githubHandler={setGithub} descriptionHandler={setDescription} stackHandler={setStack} titleHandler={setTitle} handler={setIsOpen}/>
            </div>
        </>
    )
}

export default Portfolio