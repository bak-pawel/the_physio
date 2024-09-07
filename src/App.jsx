import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React, { useRef } from 'react';
import Self from './components/Self';
import Contact from './components/Contact';
import { I18nProvider } from './components/i18n';
import Osteo from './components/Osteo';
import { Menu } from './components/Menu/Menu';

function App() {
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);


    if (sessionStorage.getItem('language') == null) {

        sessionStorage.setItem('language', 'pl-PL')
    }

    const handleScroll = (e) => {
        const { scrollTop, clientHeight } = e.target;
        if (scrollTop >= clientHeight * 4) {
            div5Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (scrollTop >= clientHeight * 3) {
            div4Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (scrollTop >= clientHeight * 2) {
            div3Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else if (scrollTop >= clientHeight) {
            div2Ref.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            div1Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <I18nProvider locale={sessionStorage.getItem('language')}>
            <div className="body-scroll" onScroll={handleScroll}>
                <div ref={div1Ref} className="page">
                    <Menu handleScroll={handleScroll} />
                    <Self />
                </div>
                <div ref={div2Ref} className="page">
                    <Osteo />
                </div>
                <div ref={div3Ref} className="page">
                    <Self />
                </div>
                <div ref={div4Ref} className="page">
                    <Osteo />
                </div>
                <div ref={div5Ref} className="page">
                    <Contact />
                </div>
            </div>

        </I18nProvider>
    )
}



export default App;
