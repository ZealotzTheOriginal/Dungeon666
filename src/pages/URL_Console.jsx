import Navbar from "../components/Pages_Navbar"
import Footer from "../components/Pages_Footer"
import Main from "../components/Pages_Main"
import Section from "../components/Pages_Section"

export default function Console() {
    return (
        <>
        <Navbar />
            <Main>
                <Section title="CONSOLE">
                    <Section title={"Use with caution"}></Section>
                </Section>
            </Main>
        <Footer title="👿 © 666 El Diablo. Todos los derechos reservados."/>
        </>
    )
}