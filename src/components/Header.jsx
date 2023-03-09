import React, {useEffect, useState} from "react";
import Profile from '../media/profile/profile.avif'

function Header() {

    const[windowWidth, setWindowWidth] = useState(window.innerWidth);
    const[responsive, setResponsive] = useState(false);

    useEffect(()=>{
        window.addEventListener('resize', updateResponsive)
        
        if(windowWidth < 900){
            setResponsive(true);
        } else {
            setResponsive(false)
        }
    });

    const updateResponsive = () => {
        setWindowWidth(window.innerWidth);
    };

    function darkMode() {

        const darkModeSpinning = [
            { opacity: 0, transform:'scale(1.0)'},
            { opacity: 50, transform:'scale(0.99)'},
            { opacity: 100, transform:'scale(1.0)' }
          ];
          
          const darkModeTiming = {
            duration: 500,
            iterations: 1,
          }

          document.body.animate(darkModeSpinning, darkModeTiming);

       document.body.classList.toggle('dark');
    }


    return(
        <div className="header">
            <div className="header-left">
                <h1>Dashboard</h1>
            </div>
            
            <div>
                <div className="header-right" >
                    <div className={responsive ? 'header-right_search-hide' : 'header-right_search'}>
                        <input type="search" name="search" id="search" placeholder="Search..."/>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.55045 14.1932C4.02214 14.1932 1.14954 11.3206 1.14954 7.79227C1.14954 4.26396 4.02214 1.39136 7.55045 1.39136C11.0788 1.39136 13.9514 4.26396 13.9514 7.79227C13.9514 11.3206 11.0788 14.1932 7.55045 14.1932ZM7.55045 2.32808C4.53421 2.32808 2.08625 4.78228 2.08625 7.79227C2.08625 10.8023 4.53421 13.2565 7.55045 13.2565C10.5667 13.2565 13.0146 10.8023 13.0146 7.79227C13.0146 4.78228 10.5667 2.32808 7.55045 2.32808Z" fill="#9E9E9E"/>
<path d="M14.1075 14.8177C13.9889 14.8177 13.8702 14.774 13.7766 14.6803L12.5276 13.4313C12.3465 13.2502 12.3465 12.9505 12.5276 12.7694C12.7087 12.5883 13.0085 12.5883 13.1896 12.7694L14.4385 14.0184C14.6196 14.1995 14.6196 14.4992 14.4385 14.6803C14.3448 14.774 14.2262 14.8177 14.1075 14.8177Z" fill="#9E9E9E"/>
                        </svg>
                    </div>
                    
                    <div className={responsive ? 'header-right_search-responsive' : 'header-right_search-responsive_hide'}>
                        <svg width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.55045 14.1932C4.02214 14.1932 1.14954 11.3206 1.14954 7.79227C1.14954 4.26396 4.02214 1.39136 7.55045 1.39136C11.0788 1.39136 13.9514 4.26396 13.9514 7.79227C13.9514 11.3206 11.0788 14.1932 7.55045 14.1932ZM7.55045 2.32808C4.53421 2.32808 2.08625 4.78228 2.08625 7.79227C2.08625 10.8023 4.53421 13.2565 7.55045 13.2565C10.5667 13.2565 13.0146 10.8023 13.0146 7.79227C13.0146 4.78228 10.5667 2.32808 7.55045 2.32808Z" fill="#9E9E9E"/>
<path d="M14.1075 14.8177C13.9889 14.8177 13.8702 14.774 13.7766 14.6803L12.5276 13.4313C12.3465 13.2502 12.3465 12.9505 12.5276 12.7694C12.7087 12.5883 13.0085 12.5883 13.1896 12.7694L14.4385 14.0184C14.6196 14.1995 14.6196 14.4992 14.4385 14.6803C14.3448 14.774 14.2262 14.8177 14.1075 14.8177Z" fill="#9E9E9E"/>
                        </svg>
                    </div>

                    <div className="header-right_profile">
                        <button onClick={darkMode} className='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon icon" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                        </svg>
                        </button>

                        <button className="button">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="header-right_profile-notification icon">
                        <path d="M10.169 17.2069C8.22895 17.2069 6.2889 16.8989 4.44877 16.2827C3.74935 16.0412 3.21647 15.55 2.98333 14.9088C2.74186 14.2677 2.82513 13.56 3.20814 12.9272L4.16567 11.3368C4.36551 11.0038 4.54869 10.3377 4.54869 9.94632V7.53999C4.54869 4.44257 7.07158 1.91968 10.169 1.91968C13.2664 1.91968 15.7893 4.44257 15.7893 7.53999V9.94632C15.7893 10.3293 15.9725 11.0038 16.1723 11.3451L17.1215 12.9272C17.4796 13.5267 17.5462 14.2511 17.3047 14.9088C17.0632 15.5666 16.5387 16.0662 15.8809 16.2827C14.0491 16.8989 12.109 17.2069 10.169 17.2069ZM10.169 3.16864C7.76267 3.16864 5.79765 5.12534 5.79765 7.53999V9.94632C5.79765 10.5541 5.54785 11.4534 5.23978 11.978L4.28224 13.5683C4.09906 13.8764 4.0491 14.2011 4.15735 14.4759C4.25726 14.759 4.50706 14.9755 4.84844 15.092C8.32887 16.2577 12.0175 16.2577 15.4979 15.092C15.7976 14.9921 16.0308 14.7673 16.139 14.4675C16.2473 14.1678 16.2223 13.8431 16.0558 13.5683L15.0982 11.978C14.7818 11.4367 14.5404 10.5458 14.5404 9.93799V7.53999C14.5404 5.12534 12.5837 3.16864 10.169 3.16864Z"/>
                        <path d="M11.7179 3.39345C11.6596 3.39345 11.6014 3.38512 11.5431 3.36847C11.3016 3.30186 11.0685 3.2519 10.8437 3.2186C10.1359 3.12701 9.45315 3.17696 8.81201 3.36847C8.57888 3.44341 8.32908 3.36847 8.17088 3.19362C8.01268 3.01876 7.96272 2.76897 8.05431 2.54416C8.39569 1.66989 9.22833 1.09537 10.1775 1.09537C11.1268 1.09537 11.9594 1.66156 12.3008 2.54416C12.384 2.76897 12.3424 3.01876 12.1842 3.19362C12.0593 3.32684 11.8845 3.39345 11.7179 3.39345Z"/>
                        <path d="M10.1691 19.1053C9.34481 19.1053 8.54547 18.7723 7.96262 18.1894C7.37978 17.6066 7.04672 16.8073 7.04672 15.9829H8.29568C8.29568 16.4742 8.49551 16.9571 8.84522 17.3068C9.19493 17.6565 9.67786 17.8564 10.1691 17.8564C11.2016 17.8564 12.0426 17.0154 12.0426 15.9829H13.2915C13.2915 17.7065 11.8927 19.1053 10.1691 19.1053Z"/>
                        <circle cx="14.3157" cy="4.27605" r="2.0816" stroke="#1A1C22" stroke-width="0.832639"/>
                        </svg>
                        </button>
                        
                        <img src={Profile} alt="User profile" className="header-right_profile-picture"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;