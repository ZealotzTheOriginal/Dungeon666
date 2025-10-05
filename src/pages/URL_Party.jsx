import React, { useEffect } from 'react';
import Navbar from '../components/Pages_Navbar';
import sonidoMeme from '../assets/audio/music/audio_party_1.mp3';
import Meme from "../components/Meme_DanceGuys";
import Main from "../components/Pages_Main";
import Article from "../components/Pages_Article";
import Section from "../components/Pages_Section";
import MemeDisco from '../components/Meme_PartyShader';

export default function Party() {
    useEffect(() => {
        const audio = new Audio(sonidoMeme);
        
        const playAudio = async () => {
            try {
                await audio.play();
            } catch (error) {
                console.error("Error al intentar reproducir el audio:", error);
            }
        };

        playAudio();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <>
        <Navbar />
        <MemeDisco></MemeDisco>
        <Main>
            <Section title='WELCOME TO THE PARTY!'>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
                <Article><Meme></Meme></Article>
                <Article></Article>
            </Section>
        </Main>
        </>
    );
}