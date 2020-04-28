import React from 'react';

 const Pagination = ({gotoNextPageUrl, gotoPrevPageUrl}) => {
    return (
        <div>
        {gotoNextPageUrl && <button onClick={gotoNextPageUrl}>Next</button>}
        {gotoPrevPageUrl && <button onClick={gotoPrevPageUrl}>Previous</button>}
        </div>
    );
}

export default Pagination;