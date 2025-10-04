import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Section from "../components/Section"
import Article from "../components/Article"
import Main from "../components/Main"

export default function Home() {
    return (
        <>
        <Navbar />
            <Main>
                <Section title='👿 HOME'>
                    <Article>
                        <h2>Welcome To Home...</h2>
                    </Article>
                    <Article>
                            <Section title='WELCOME !'>
                                <Article><h3>A</h3></Article>
                                <Article><h3>A</h3></Article>
                                <Article><h3>A</h3></Article>
                                <Article><h3>A</h3></Article>
                            </Section>
                    </Article>
                </Section>
            </Main>
        <Footer/>
        </>
    )
}