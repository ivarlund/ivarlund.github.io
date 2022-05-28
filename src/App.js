import React, {useState} from "react";
import './App.css';
import TopBar from './components/TopBar';
import {FaBeer} from 'react-icons/fa';
import {FaCheck, FaTimes} from 'react-icons/fa';
import * as helper from './helper/externalHelper';
import texts from './nls/texts.json';

const getText = function (key) {
    return helper.getText(texts, key);
}

function Button(props) {
    return (
        <button
            className={props.type + (props.className ? ' ' + props.className : '')}
            onClick={props.onClick}>
            {props.icon && props.icon}
            {props.text && props.text}
        </button>
    );
}

function App() {
    const [bool, setBool] = useState(true);
    const [count, setCount] = useState(0);

    const children = [
        <a href="/files" className="link-gray">{getText('topbar.files')}</a>,
        <a href="/contact" className="link-gray">{getText('topbar.contact')}</a>,
        // <a href="/contact" className="link-gray">{getText('topbar.contact')}</a>
    ]

    return (
        <div>
            <TopBar logo={<FaBeer size="28" color="white"/>}
                    heading={getText('topbar.heading')} titleOnClick={'#'} children={children}/>
            <div className="w-100 h-screen p-2 mx-auto bg-gray-200 relative">
                <div className="flex justify-center items-center py-2">
                    <div className="flex flex-col">
                        <div className="flex justify-center py-2">
                            <Button type="icon-button-round-green"
                                    className="mx-1"
                                    icon={<FaCheck size="16" color="white"/>}
                                    onClick={() => setBool(true)}
                            />
                            <Button type="icon-button-round-red"
                                    className="mx-1"
                                    icon={<FaTimes size="18" color="white"/>}
                                    onClick={() => setBool(false)}
                            />
                        </div>
                        <div className="flex justify-center py-2">
                            <Button type="button-gray-outlined"
                                    className="mx-1"
                                    text="Increase"
                                    onClick={() => setCount(count + 1)}
                            />
                            <Button type="button-gray-outlined"
                                    className="mx-1"
                                    text="Decrease"
                                    onClick={() => setCount(count - 1)}
                            />
                        </div>
                    </div>
                </div>
                <div className={"bg-gray-500 rounded-xl flex justify-center items-center h-36 w-36 mx-auto duration-500 "
                    + (bool ? 'transform scale-100' : 'transform scale-50')}>
                    <span className="font-extrabold text-5xl font-sans">{count}</span>
                </div>
            </div>
        </div>
    );
}

export default App;
