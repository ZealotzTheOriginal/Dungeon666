import React from "react";
import Navbar from "../components/Pages_Navbar";
import Footer from "../components/Pages_Footer";
import Section from "../components/Pages_Section";
import Article from "../components/Pages_Article";
import Main from "../components/Pages_Main";
import styles from '../pages_styles/URL_Home.module.css';
import { HomeDecoration } from '../components/Decoration_Images'; 
import { MegaDecorationGroup } from '../components/MegaDecorationGroup'; 


export default function Home() {

    return (
        <>
            <Navbar />
            <Main>
                <Section title="THE WONDERFUL HOME OF DUNGEON666">
                    <Article>
                        <h2>Welcome To Home...</h2>
                        <HomeDecoration />
                        <p>
                            Roses are red,<br />
                            Violets are blue,<br />
                            This dungeon is wild,<br />
                            And so are you!
                        </p>
                    </Article>
                    <Article>
                        <h3>Poetry Corner</h3>
                        <HomeDecoration />
                        <p>
                            In the shadows we dance,<br />
                            With a mystical trance,<br />
                            The rhythm is strange,<br />
                            In this home, we exchange.
                        </p>
                    </Article>
                    <Article>
                        <h3>Excentric Vibes</h3>
                        <HomeDecoration />
                        <p>
                            Whispers of laughter echo through halls,<br />
                            Neon lights flicker, the disco ball calls.<br />
                            Poems and pixels, chaos and rhyme,<br />
                            Welcome, dear guest, to a curious time!
                        </p>    
                    </Article>
                    <Section title="More Fun Inside">
                        <Article>
                            <h3>Random Poem</h3>
                            <p>
                                Stars above, dungeons below,<br />
                                Where will your wildest dreams go?
                            </p>
                            <div className={styles.homeDecorationRow}>
                                <HomeDecoration />
                                <HomeDecoration />
                            </div>
                        </Article>
                        <Article>
                            <h3>Party All Night</h3>
                            <p>
                                The night is young, the beat is strong,<br />
                                Join the dance, you can't go wrong!
                            </p>
                            <div className={styles.homeDecorationRow}>
                                <HomeDecoration />
                                <HomeDecoration />
                            </div>
                        </Article>
                        <Article>
                            <h3>Infinite Fun</h3>
                            <p>
                                Poems, memes, and endless delight,<br />
                                Stay as long as you like tonight!
                            </p>
                            <div className={styles.homeDecorationRow}>
                                <HomeDecoration />
                                <HomeDecoration />
                            </div>
                        </Article>
                    </Section>
                    <Section title="More Fun Inside"></Section>
                    <MegaDecorationGroup count={4} styleClass={styles.homeDecorationRow} />
                    <Article>
                        <h3>Thanks for Visiting!</h3>
                        <p>
                            May your journey be poetic and your dance eternal.<br />
                            Dungeon666 welcomes you, now and forever!
                        </p>
                        <div className={styles.homeDecorationRow}>
                            <HomeDecoration />
                            <HomeDecoration />
                            <HomeDecoration />
                            <HomeDecoration />
                            <HomeDecoration />
                            <HomeDecoration />
                            <HomeDecoration />
                        </div>
                    </Article>
                </Section>
            </Main>
            <Footer>
                👿 © 2025 El Diablo. All poems and parties reserved.
            </Footer>
        </>
    );
}