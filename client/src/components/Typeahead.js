import { useState } from 'react';
import styled from 'styled-components';
import { users } from './data';


const Typeahead = ({ suggestions, handleSelect }) => {
        const [value, setValue] = useState('');
        const filtered = suggestions.filter((Paintings) => {
            const moreTwoCharacters = value.length >= 2;
            const matchingPaintings = Paintings.description.toLowerCase().includes(value.toLowerCase());
            return moreTwoCharacters && matchingPaintings;
        })
    
        return (
        <Wrapper>
            <div>
            <input
            type='text'
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                handleSelect(ev.target.value);
                }
            }}
            />
            <button onClick={() => setValue('')}>Clear</button>
            </div>
            { filtered.length > 0 && 
            <ul>
                {filtered.map((suggestion) => {
                    const indexToSlice = suggestion.description.indexOf(value) + value.length;
                    const firstHalf = suggestion.description.slice(0, indexToSlice +1);
                    const secondHalf = suggestion.description.slice(indexToSlice +1);
                    return (
                        <Suggestion 
                        key = {suggestion.id}
                        onClick = {() => handleSelect(suggestion.description)}>
                            <span>
                                {firstHalf}
                                <Prediction>{secondHalf}</Prediction>
                                {/* <Category> in {suggestion.CategoryId}</Category> */}
                            </span>
                        </Suggestion>
                    )})
                    }
            </ul>}
            </Wrapper>
        )};
                

export default Typeahead;


const Wrapper = styled.div`
input {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: solid #cdcdcd 2px;
    padding: 10px;
    font-size: 20px;
}

button {
    font-size: 20px;
    width: 90px;
    height: 40px;
    background-color: #3217d5;
    color: #f6f5fd;
    margin: 10px;
    border: none;
    border-radius: 6px;
}

ul {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 400px;
    padding: 10px;
}
`
const Suggestion = styled.li`
    cursor: pointer;
    font-size: 17px;
    padding: 10px 5px 10px 5px;

&:hover {
    background-color: #FFFAE2;
}
`
const Prediction = styled.span`
    font-weight: bold;
`

// const Category = styled.span`
//     font-size: 15px;
//     font-style: italic;
//     color: #af519e;
// `


