// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// const SIZES = ['btn--medium', 'btn--large'];

//     export const Button = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize
//     }) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle)
//         ? buttonStyle
//         : STYLES[0];

//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//     return (
//         <Wrapper>
//         <Link to='/sign-up' className='btn-mobile'>
//         <button
//             className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//             onClick={onClick}
//             type={type}
//         >
//             {children}
//         </button>
//         </Link>
//         </Wrapper>
//     );
//     };

    
//     const Wrapper = styled.div`
    
//         :root {
//     --primary: #fff;
//     }

//     .btn {
//     padding: 8px 20px;
//     border-radius: 2px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     }

//     .btn--primary {
//     background-color: var(--primary);
//     color: #242424;
//     border: 1px solid var(--primary);
//     }

//     .btn--outline {
//     background-color: transparent;
//     color: #fff;
//     padding: 8px 20px;
//     border: 1px solid var(--primary);
//     transition: all 0.3s ease-out;
//     }

//     .btn--medium {
//     padding: 8px 20px;
//     font-size: 18px;
//     }

//     .btn--large {
//     padding: 12px 26px;
//     font-size: 20px;
//     }

//     .btn--large:hover,
//     .btn--medium:hover {
//     transition: all 0.3s ease-out;
//     background: #fff;
//     color: #242424;
//     transition: 250ms;
// }

//     `