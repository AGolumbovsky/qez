import { LogoImage } from "../images"

export const Navbar = () => {

    return (
        <div class="navbar">
            <a><img class="logo" src={ LogoImage } /></a>
            <a>NAVIGATION</a>
            <a>AUTH</a>
        </div>
    )
}