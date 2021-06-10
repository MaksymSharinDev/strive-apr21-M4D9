import {Nav} from 'react-bootstrap'
import {useState} from "react";

const Navbar = () => {
    let [activeKey, setActiveKey] = useState("");
    return (
        <Nav variant="pills"
             onSelect={(selectedKey) => setActiveKey( selectedKey )}
             activeKey={ activeKey }>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
        </Nav>)
}
export default Navbar