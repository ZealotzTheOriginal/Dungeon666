import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import sonidoMeme from '../assets/party_party.mp3';
import Meme from "../components/Meme";
import Main from "../components/Main";
import Article from "../components/Article";
import Section from "../components/Section";
import MemeDisco from '../components/MemeDisco';

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
            <Section>
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