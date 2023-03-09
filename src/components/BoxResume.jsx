import React, { useState } from 'react';

function BoxResume({tittle, icon, number}) {
    return(
        <div className='box box-resume'>
            <div className='box-icon'>
                {icon}
            </div>
            <div className='box-information'>
                <p className='box-information_tittle'>{tittle}</p>
                <h2 className='box-information_number' >${number}</h2>
            </div>
        </div>
    )
}

export default BoxResume;