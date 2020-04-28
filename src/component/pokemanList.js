import React from 'react';

 const PokemanList = ({pokeman}) => {
    return (
        <div>
        {
            pokeman.map(p => (
                <div key={p}>{p}</div>
            ))
        }
        </div>
    );
}

export default PokemanList;