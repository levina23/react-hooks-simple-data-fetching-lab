import React, {useEffect, useState} from 'react';

const App = () => {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then ((data) => setDogImage(data.message))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

return (
    <div>
        {dogImage ? (
            <img src={dogImage} alt="A Random dog" />
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
};
        export default App;

