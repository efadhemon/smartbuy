import {
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineMenu,
    AiOutlineProfile,
    AiOutlineSearch,
    AiOutlineUser,
} from "react-icons/ai";
import Link from "next/link";
import { Paths } from "@shared/constant/routes.constant";

const AppFooterNav = () => {
    return (
        <div className="app-footer-nav">
            <div className="footer-nav-item">
                <Link href={Paths.root}>
                    <a>
                        <AiOutlineHome />
                        <h6>Home</h6>
                    </a>
                </Link>
            </div>
            <div className="footer-nav-item">
                <Link href={Paths.root}>
                    <a>
                        <AiOutlineMenu />
                        <h6>Category</h6>
                    </a>
                </Link>
            </div>
            <div className="footer-nav-item">
                <Link href={Paths.root}>
                    <a>
                        <AiOutlineSearch />
                        <h6>Search</h6>
                    </a>
                </Link>
            </div>
            <div className="footer-nav-item">
                <Link href={Paths.root}>
                    <a>
                        <AiOutlineProfile />
                        <h6>Account</h6>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default AppFooterNav;
