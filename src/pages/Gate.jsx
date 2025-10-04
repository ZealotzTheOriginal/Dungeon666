import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Main from "../components/Main"
import Section from "../components/Section"

export default function Gate() {
    return (
        <>
        <Navbar />
            <Main>
                <h1>👿 THE GATE</h1>
                <Section>
                    <h2 className="MemeDisco">Welcome To The Gate...</h2>
                </Section>
            </Main>
        <Footer/>
        </>
    )
}