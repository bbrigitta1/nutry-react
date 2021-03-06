import { Footer } from "antd/lib/layout/layout";
import logo from "../../static/logo.png";
import { Space } from "antd";
import "./AppFooter.css";

function AppFooter() {
    return (


            <Footer>
                <Space>
                    <img src={logo} className="footer-logo" alt="Nutry logo" />
                    <h1 className="footer-brand">nutry</h1>
                    <h1 className="footer-text">by Brigi, Tomi & Mate</h1>
                </Space>
            </Footer>

    );
}

export default AppFooter;