import React, { useState } from 'react';
import './Egg.css'; 
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Egg: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    const handleBlur = () => {
        if (inputValue == '4') {
            setMessage('Wrong ❌');
            setIsCorrect(false);
        } else {
            setMessage('Correct! ✔️ <br> look down <br> ⬇️');
            setIsCorrect(true);
        }
    };

    return (
        <div className="main-content">
            <div className="intro">
                <p>Free pizza? That is on it's way! In the mean time, solve this math problem. Should be pretty easy, right?</p>
            </div>
            <div className="math">
                <p>2 × 2 = <input 
                            className="answer" 
                            type="text" 
                            inputMode="numeric" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onBlur={handleBlur} />
                </p>
            </div>
            <p className="verify" style={{ color: (isCorrect ? 'greenyellow' : 'red')}} dangerouslySetInnerHTML={{ __html: message }} />
            {isCorrect && (
                <div className="github" style={{visibility: isCorrect ? 'visible' : 'hidden'}}>
                    <button className="gitbutton" onClick={() => window.location.href = 'https://masonicgit.github.io/pacman/'}>
                        <GitHubLogoIcon className="w-20 h-20 items-center align-middle" />
                    </button>
                    <p>Does this mean something to you? <br/> Govmywo dy Oxqswk, Iyexq Yxo!<br/> Maybe 'Rot'ten tomatoes may be useful?</p>
                </div>
            )}
        </div>
    );
};

export default Egg;
