import FadingGif from "../components/Pages_FadingGif"
import RedirectComponent from "../components/Pages_Redirect"

export default function Redirecting() {
    return (
        <>
            <FadingGif gifUrl="https://i.imgur.com/AqFXi6X.gif" />
            <RedirectComponent to="/EVENTUALLY" delayInMs={1700} />
        </>
    )
}
