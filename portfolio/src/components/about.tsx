import Card from "./card"

function About() {

    return(
        <div className="bg-[#f5e9e5]/80 p-10 rounded-md">
            <Card direction={50} topText={"Hey,"} bottomText={"I'm Sahir Muhammad Tariq"} margin={""}/>
            <Card direction= {-50} margin={"md:ml-150"} topText={"A Graduate from"} bottomText={"Mount Royal University"}/>
            <Card direction={50} topText={"With a Degree in"} bottomText={"Computer Information Systems"} margin={""}/>
            <Card direction= {-50} margin={"md:ml-150"} topText={"And this is"} bottomText={"My Portfolio"}/>
        </div>
    )
}

export default About