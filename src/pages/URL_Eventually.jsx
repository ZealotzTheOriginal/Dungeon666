import Meme_Eventually from "../components/Meme_Eventually";
import videoSource from "../assets/Eventually.mp4"; 
const VIDEO_URL = videoSource;

export default function Redirecting() {
    return (
        <>
            <Meme_Eventually videoUrl={VIDEO_URL} />
        </>
    )
}