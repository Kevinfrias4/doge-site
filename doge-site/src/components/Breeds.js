import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Breeds = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [breedData, setBreedData] = useState({});

    useEffect(() => {
        const fetchBreeds = async () => {
            let arr = [];
            try {
                const res = await axios.get('https://dog.ceo/api/breeds/list/all');
                const data = res.data;
                arr.push(data.message)
                setBreedData(arr[0])
            } catch(err){
                console.log(err);
            }
            setIsLoading(false)
            console.log(arr[0])
        }
        setTimeout(() => {
            fetchBreeds();
        }, 2000);
    }, [])

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <BreedPage>
            <div>
                <h1>Know Your Breeds</h1>
            </div>
            <List>
                <select>
                    {Object.keys(breedData).map((data, id) => (
                        <option value={id}>{`${data}`}</option>
                    ))}
                </select>
            </List>
        </BreedPage>
    );
}

const BreedPage = styled.div`
    
`;

const List = styled.div`
    //display: grid;
    //grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
    ///grid-column-gap: 0rem;
    //grid-row-gap: 0.1rem;
    width: 100%;
    text-align: center;
`;

export default Breeds;