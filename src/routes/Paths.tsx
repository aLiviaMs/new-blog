import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//Pages
import Home from "pages/Home";
import Contact from "pages/Contact";
import About from "pages/About";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Post from "pages/Post";
import Search from "pages/Search";
import Page404 from "pages/Page404";

const Paths = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/search" element={<Search />} />

                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
        </>
    )
}

export default Paths;