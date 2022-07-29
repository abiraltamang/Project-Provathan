import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-main pt-8 relative h-60 bottom-0 w-full">
            <div className="flex justify-center gap-60">
            <div>
                <Link to="/">
                    <img className="h-20 w-20" src="logo192.png" alt="" />
                    <p className="text-lg text-center">Name</p>
                </Link>
            </div>
            <div>
                <div className="text-lg font-bold pb-2">
                    Start Here
                </div>
                <div>Categories</div>
                <div>Upcoming events</div>
                <div>Ongoing events</div>
            </div>
            <div>
                <div className="text-lg font-bold pb-2">
                    Company
                </div>
                <Link to="/contactus">
                    <div>Contact Us</div>
                </Link>
                <Link to="/aboutus">
                    <div>About Us</div>
                </Link>
            </div>
            <div>
                <div className="text-lg font-bold pb-2">Social Media Links</div>
                <div className="flex gap-2 pb-2">
                    <div
                    className={`relative h-12 w-12 object-center`}
                    style={{
                    backgroundImage: `url('/images/facebook-4-240.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                    backgroundPosition: "center",
                    }}
                    ></div>
                    <div
                    className={`relative h-12 w-12 object-center`}
                    style={{
                    backgroundImage: `url('/images/instagram-4-240.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                    backgroundPosition: "center",
                    }}
                    ></div>
                    <div
                    className={`relative h-12 w-12 object-center`}
                    style={{
                    backgroundImage: `url('/images/linkedin-4-240.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                    backgroundPosition: "center",
                    }}
                    ></div>
                </div>
                <div className="flex gap-2">
                    <div
                    className={`relative h-12 w-12 object-center`}
                    style={{
                    backgroundImage: `url('/images/reddit-4-240.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                    backgroundPosition: "center",
                    }}
                    ></div>
                    <div
                    className={`relative h-12 w-12 object-center`}
                    style={{
                    backgroundImage: `url('/images/twitter-4-240.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                    backgroundPosition: "center",
                    }}
                    ></div>
                    <div
                    className={`relative h-12 w-12 object-center`}
                    style={{
                    backgroundImage: `url('/images/youtube-4-240.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    filter: "brightness(50%)",
                    backgroundPosition: "center",
                    }}
                    ></div>
                </div>
            </div>
            </div>
            <div className="text-center pt-8">
                NameHere.com © 2022 All rights reserved
            </div>
        </div>
    );
};

export default Footer;