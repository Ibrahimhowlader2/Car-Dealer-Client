import React from 'react';
import './Loading.css';

const Loading = () => {
    return (

         <div class='loader_container'>
             <div class='loader'>
                 <div class='loader--dot'></div>
                 <div class='loader--dot'></div>
                 <div class='loader--dot'></div>
                 <div class='loader--dot'></div>
                 <div class='loader--dot'></div>
                 <div class='loader--dot'></div>
                 <div class='loader--text'></div>
             </div>
         </div>


    );
};

export default Loading;