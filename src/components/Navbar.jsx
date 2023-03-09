import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThList} from '@fortawesome/free-solid-svg-icons'
import Logotipo from '../media/img/Logo.svg';
import Isotipo from '../media/img/isotipo.svg';
import { useState } from "react";



function Navbar({navAction}) {

  const [textMenu, setTextMenu] = useState(true)
  const [logo, setLogo] = useState (true)

  const hiddeTextMenu= ()=>{
    setTextMenu(!textMenu);

    let toggleIcon = document.getElementById('toggleIcon');
    toggleIcon.classList.toggle('toggle-active')
  }


  function changeLogo() {
    let textLogo = document.getElementById('penta')
    textLogo.classList.toggle('text-animate')
  }
  

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Isotipo} alt={logo} className='isotipo'/>
        <span className='texto-logo' id="penta">Penta</span>
      </div>

      <div className="nav-menu">
        <div className="nav-menu_option">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="nav-menu_icon">
    <path d="M18.5334 7.96872V4.18854C18.5334 3.01452 18.0005 2.53992 16.6766 2.53992H13.3128C11.9889 2.53992 11.456 3.01452 11.456 4.18854V7.9604C11.456 9.14274 11.9889 9.60902 13.3128 9.60902H16.6766C18.0005 9.61735 18.5334 9.14274 18.5334 7.96872Z"/>
    <path d="M18.5334 17.3359V13.972C18.5334 12.6482 18.0005 12.1153 16.6766 12.1153H13.3128C11.9889 12.1153 11.456 12.6482 11.456 13.972V17.3359C11.456 18.6598 11.9889 19.1927 13.3128 19.1927H16.6766C18.0005 19.1927 18.5334 18.6598 18.5334 17.3359Z"/>
    <path d="M8.95805 7.96872V4.18854C8.95805 3.01452 8.42516 2.53992 7.10126 2.53992H3.7374C2.4135 2.53992 1.88062 3.01452 1.88062 4.18854L1.88062 7.9604C1.88062 9.14274 2.4135 9.60902 3.7374 9.60902H7.10126C8.42516 9.61735 8.95805 9.14274 8.95805 7.96872Z"/>
    <path d="M8.95805 17.3359V13.972C8.95805 12.6482 8.42516 12.1153 7.10126 12.1153H3.7374C2.4135 12.1153 1.88062 12.6482 1.88062 13.972L1.88062 17.3359C1.88062 18.6598 2.4135 19.1927 3.7374 19.1927H7.10126C8.42516 19.1927 8.95805 18.6598 8.95805 17.3359Z"/>
              </svg>
            </div>
            <a href="dashboard" className={textMenu ? 'nav-menu_text' : 'nav-menu_text-hidden' }>Dashboard</a>
        </div>

        <div className="nav-menu_option">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-menu_icon">
<path d="M11.0395 8.28178H6.04367C5.70229 8.28178 5.41919 7.99868 5.41919 7.6573C5.41919 7.31592 5.70229 7.03282 6.04367 7.03282H11.0395C11.3809 7.03282 11.664 7.31592 11.664 7.6573C11.664 7.99868 11.3809 8.28178 11.0395 8.28178Z"/>
<path d="M16.0686 12.4865C14.8113 12.4865 13.7455 11.554 13.6456 10.355C13.579 9.66391 13.8288 8.98948 14.3284 8.49823C14.7447 8.06525 15.3358 7.82379 15.9603 7.82379H17.7006C18.5249 7.84877 19.1577 8.49819 19.1577 9.29753V11.0128C19.1577 11.8121 18.5249 12.4616 17.7256 12.4865H16.0686ZM17.6755 9.07275H15.9687C15.6772 9.07275 15.4108 9.18099 15.2193 9.38082C14.9778 9.61396 14.8613 9.93035 14.8946 10.2467C14.9362 10.7963 15.4691 11.2376 16.0686 11.2376H17.7006C17.8088 11.2376 17.9087 11.1377 17.9087 11.0128V9.29753C17.9087 9.17263 17.8088 9.08108 17.6755 9.07275Z"/>
<path d="M13.5375 17.8571H6.04372C3.17944 17.8571 1.25604 15.9337 1.25604 13.0695V7.24098C1.25604 4.67645 2.83804 2.81968 5.29432 2.5116C5.51913 2.47829 5.77727 2.45331 6.04372 2.45331L13.5375 2.45331C13.7373 2.45331 13.9954 2.46163 14.2619 2.50326C16.7181 2.78636 18.3251 4.65147 18.3251 7.24098V8.44832C18.3251 8.7897 18.042 9.0728 17.7007 9.0728H15.9688C15.6773 9.0728 15.4109 9.18104 15.2194 9.38087L15.2111 9.3892C14.9779 9.61402 14.8697 9.92206 14.8947 10.2385C14.9363 10.788 15.4692 11.2293 16.0687 11.2293H17.7007C18.042 11.2293 18.3251 11.5124 18.3251 11.8538V13.0611C18.3251 15.9337 16.4017 17.8571 13.5375 17.8571ZM6.04372 3.70227C5.84388 3.70227 5.65237 3.71891 5.46086 3.74389C3.62905 3.97703 2.505 5.30926 2.505 7.24098V13.0695C2.505 15.2177 3.89551 16.6082 6.04372 16.6082H13.5375C15.6857 16.6082 17.0762 15.2177 17.0762 13.0695V12.4866H16.0687C14.8114 12.4866 13.7456 11.554 13.6457 10.355C13.5791 9.67228 13.8289 8.98954 14.3285 8.50661C14.7615 8.06531 15.3443 7.82384 15.9688 7.82384H17.0762V7.24098C17.0762 5.29261 15.9354 3.95204 14.087 3.73555C13.8872 3.70225 13.7123 3.70227 13.5375 3.70227L6.04372 3.70227Z"/>
              </svg>
            </div>
            <a href="#" className={textMenu ? 'nav-menu_text' : 'nav-menu_text-hidden' }>Transaction</a>
        </div>

        <div className="nav-menu_option">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-menu_icon">
    <path d="M12.2885 14.3991H8.12527C7.78389 14.3991 7.50079 14.116 7.50079 13.7746C7.50079 13.4332 7.78389 13.1501 8.12527 13.1501H12.2885C12.6298 13.1501 12.9129 13.4332 12.9129 13.7746C12.9129 14.116 12.6298 14.3991 12.2885 14.3991Z"/>
    <path d="M4.54512 9.1618C4.38692 9.1618 4.22872 9.09519 4.10383 8.97862C3.92897 8.80377 3.87069 8.529 3.9706 8.29586L5.51931 4.59894C5.55262 4.524 5.56927 4.47405 5.59425 4.43241C6.82656 1.59312 8.40024 0.902025 11.1813 1.9678C11.3395 2.02609 11.4644 2.15098 11.531 2.30919C11.5976 2.46739 11.5976 2.64224 11.531 2.80044L9.09133 8.46239C8.99142 8.6872 8.7666 8.83707 8.51681 8.83707H6.14379C5.66919 8.83707 5.21956 8.92866 4.78659 9.11184C4.71165 9.14515 4.62839 9.1618 4.54512 9.1618ZM9.0497 2.74216C8.01723 2.74216 7.38442 3.41659 6.72664 4.94865C6.71831 4.97363 6.70166 4.99861 6.69333 5.02359L5.60258 7.6131C5.78576 7.59644 5.96061 7.58812 6.14379 7.58812H8.10049L10.1072 2.92534C9.71581 2.80044 9.3661 2.74216 9.0497 2.74216Z"/>
    <path d="M15.4444 9.00362C15.3861 9.00362 15.3195 8.99529 15.2612 8.97864C14.9531 8.88705 14.6118 8.83709 14.2621 8.83709H8.51684C8.30868 8.83709 8.10885 8.72885 7.99228 8.55399C7.88404 8.37914 7.85906 8.15433 7.94232 7.96282L10.357 2.35916C10.4819 2.05941 10.8399 1.85958 11.1563 1.95949C11.2562 1.9928 11.3478 2.03443 11.4477 2.07606L13.4128 2.90038C14.5618 3.37498 15.3278 3.87456 15.8274 4.47406C15.9273 4.59063 16.0106 4.71553 16.0855 4.84042C16.1771 4.98197 16.2604 5.15683 16.3187 5.33168C16.3436 5.38997 16.3853 5.49821 16.4103 5.61478C16.6434 6.39746 16.5268 7.37165 16.0272 8.6206C15.9273 8.85374 15.6942 9.00362 15.4444 9.00362ZM9.46605 7.58813H14.2704C14.5368 7.58813 14.7949 7.61311 15.0531 7.65474C15.2862 6.93035 15.3362 6.37248 15.2029 5.92286C15.1863 5.84792 15.1696 5.81461 15.1613 5.78131C15.1113 5.64808 15.078 5.57315 15.0364 5.50654C14.9781 5.41495 14.9365 5.34001 14.8699 5.26507C14.5118 4.8321 13.879 4.43243 12.9382 4.04942L11.2895 3.35833L9.46605 7.58813Z"/>
    <path d="M13.4542 19.3949H6.95959C6.72645 19.3949 6.50996 19.3782 6.29348 19.3532C3.37092 19.1534 1.70564 17.4881 1.5058 14.5323C1.48083 14.3491 1.46417 14.1243 1.46417 13.8995V12.2758C1.46417 10.4024 2.57991 8.71212 4.30347 7.96275C4.88632 7.71295 5.5108 7.58806 6.15193 7.58806H14.2785C14.7531 7.58806 15.211 7.65467 15.6357 7.78789C17.5924 8.37907 18.9662 10.2275 18.9662 12.2758V13.8995C18.9662 14.0826 18.9579 14.2575 18.9496 14.424C18.7664 17.6796 16.868 19.3949 13.4542 19.3949ZM6.1436 8.83702C5.669 8.83702 5.21937 8.92861 4.7864 9.11179C3.52079 9.66133 2.7048 10.902 2.7048 12.2758V13.8995C2.7048 14.0743 2.72146 14.2492 2.73811 14.4157C2.89631 16.7887 4.06201 17.9544 6.40172 18.1126C6.60988 18.1376 6.77641 18.1542 6.95126 18.1542H13.4458C16.1936 18.1542 17.5424 16.9469 17.6756 14.3657C17.684 14.2159 17.6923 14.066 17.6923 13.8995V12.2758C17.6923 10.7687 16.6848 9.41986 15.2527 8.97857C14.9446 8.88698 14.6032 8.83702 14.2535 8.83702H6.1436Z"/>
    <path d="M2.08053 12.9004C1.73915 12.9004 1.45605 12.6173 1.45605 12.2759V9.83628C1.45605 7.21347 3.31284 4.94869 5.87737 4.44911C6.10218 4.40747 6.33532 4.49074 6.48519 4.66559C6.62674 4.84045 6.66837 5.09024 6.57678 5.2984L5.11967 8.77883C5.05305 8.9287 4.93649 9.04527 4.79494 9.11188C3.52933 9.66142 2.71334 10.9021 2.71334 12.2759C2.70501 12.6173 2.43024 12.9004 2.08053 12.9004ZM4.8782 6.13104C3.81242 6.73054 3.03807 7.77966 2.7966 9.00364C3.16296 8.62895 3.58761 8.31255 4.07054 8.07941L4.8782 6.13104Z"/>
    <path d="M18.3336 12.9004C17.9922 12.9004 17.7091 12.6173 17.7091 12.2759C17.7091 10.7688 16.7016 9.41993 15.2695 8.97863C15.103 8.92867 14.9614 8.8121 14.8865 8.6539C14.8115 8.4957 14.8032 8.31252 14.8698 8.15432C15.2612 7.18013 15.3611 6.47239 15.2029 5.92285C15.1862 5.84791 15.1696 5.8146 15.1612 5.7813C15.053 5.53983 15.1113 5.25674 15.3028 5.07356C15.4943 4.89037 15.7857 4.84874 16.0189 4.97364C17.834 5.92285 18.9581 7.78796 18.9581 9.83625V12.2759C18.9581 12.6173 18.675 12.9004 18.3336 12.9004ZM16.2437 8.0211C16.7682 8.26256 17.2345 8.60394 17.6258 9.01194C17.4676 8.19595 17.0763 7.4549 16.5018 6.87205C16.4602 7.22176 16.3769 7.60478 16.2437 8.0211Z"/>
              </svg>
            </div>
            <a href="#" className={textMenu ? 'nav-menu_text' : 'nav-menu_text-hidden' }>Wallet</a>
        </div>

        <div className="nav-menu_option">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-menu_icon">
    <path d="M15.286 15.5206H5.12781C3.19609 15.5206 2.08868 14.4132 2.08868 12.4815L2.08868 2.40652C2.08868 2.06514 2.37178 1.78204 2.71316 1.78204L17.7007 1.78204C18.042 1.78204 18.3251 2.06514 18.3251 2.40652V12.4815C18.3251 14.4132 17.2177 15.5206 15.286 15.5206ZM3.33764 3.031V12.4815C3.33764 13.7221 3.88718 14.2716 5.12781 14.2716H15.2777C16.5183 14.2716 17.0678 13.7221 17.0678 12.4815V3.031L3.33764 3.031Z"/>
    <path d="M18.5333 3.031L1.88052 3.031C1.53914 3.031 1.25604 2.7479 1.25604 2.40652C1.25604 2.06514 1.53914 1.78204 1.88052 1.78204L18.5333 1.78204C18.8747 1.78204 19.1578 2.06514 19.1578 2.40652C19.1578 2.7479 18.8747 3.031 18.5333 3.031Z"/>
    <path d="M6.87657 19.6838C6.64343 19.6838 6.42693 19.5589 6.31869 19.3424C6.16049 19.0343 6.28541 18.6596 6.60181 18.5014L9.58265 17.011V14.8961C9.58265 14.5547 9.86574 14.2716 10.2071 14.2716C10.5485 14.2716 10.8316 14.5547 10.8316 14.8961V17.394C10.8316 17.6272 10.6984 17.8437 10.4819 17.9519L7.15133 19.6172C7.06807 19.6588 6.96816 19.6838 6.87657 19.6838Z"/>
    <path d="M13.5374 19.6837C13.4458 19.6837 13.3459 19.6587 13.2627 19.6171L9.93212 17.9518C9.62404 17.7936 9.49912 17.4189 9.649 17.1109C9.8072 16.8028 10.1819 16.6779 10.49 16.8278L13.8205 18.493C14.1286 18.6512 14.2535 19.0259 14.1036 19.334C13.9871 19.5588 13.7622 19.6837 13.5374 19.6837Z"/>
    <path d="M6.45997 10.5247C6.28511 10.5247 6.10194 10.4497 5.97705 10.2999C5.75223 10.0334 5.79384 9.64209 6.06029 9.41728L8.68312 7.22743C8.92459 7.0276 9.23265 6.94434 9.52407 6.9943C9.82382 7.04425 10.082 7.22741 10.2402 7.49386L11.1144 8.95098L13.554 6.91936C13.8205 6.70288 14.2118 6.73616 14.4366 7.00261C14.6614 7.26905 14.6198 7.66039 14.3534 7.8852L11.7306 10.075C11.4891 10.2749 11.181 10.3581 10.8896 10.3082C10.5899 10.2582 10.3317 10.0751 10.1735 9.80862L9.29927 8.3515L6.85964 10.3831C6.74307 10.4747 6.60151 10.5247 6.45997 10.5247Z"/>
              </svg>
            </div>
            <a href="#" className={textMenu ? 'nav-menu_text' : 'nav-menu_text-hidden' }>Analytics</a>
        </div>

        <div className="nav-menu_option">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-menu_icon">
    <path d="M10.2069 10.6463C7.5674 10.6463 5.41919 8.49812 5.41919 5.85866C5.41919 3.21919 7.5674 1.07098 10.2069 1.07098C12.8463 1.07098 14.9945 3.21919 14.9945 5.85866C14.9945 8.49812 12.8463 10.6463 10.2069 10.6463ZM10.2069 2.31994C8.25849 2.31994 6.66815 3.91028 6.66815 5.85866C6.66815 7.80703 8.25849 9.39737 10.2069 9.39737C12.1552 9.39737 13.7456 7.80703 13.7456 5.85866C13.7456 3.91028 12.1552 2.31994 10.2069 2.31994Z"/>
    <path d="M17.3594 18.9727C17.018 18.9727 16.7349 18.6896 16.7349 18.3482C16.7349 15.4756 13.804 13.1443 10.207 13.1443C6.61002 13.1443 3.67913 15.4756 3.67913 18.3482C3.67913 18.6896 3.39604 18.9727 3.05465 18.9727C2.71327 18.9727 2.43018 18.6896 2.43018 18.3482C2.43018 14.7929 5.91893 11.8953 10.207 11.8953C14.4951 11.8953 17.9839 14.7929 17.9839 18.3482C17.9839 18.6896 17.7008 18.9727 17.3594 18.9727Z"/>
              </svg>
            </div>
            <a href="#" className={textMenu ? 'nav-menu_text' : 'nav-menu_text-hidden' }>Personal</a>
        </div>

        <div className="nav-menu_option">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-menu_icon">
    <path d="M14.3701 18.0127H6.04372C3.00458 18.0127 1.25604 16.2642 1.25604 13.225V7.39657C1.25604 4.35744 3.00458 2.60889 6.04372 2.60889L14.3701 2.60889C17.4092 2.60889 19.1578 4.35744 19.1578 7.39657V13.225C19.1578 16.2642 17.4092 18.0127 14.3701 18.0127ZM6.04372 3.85785C3.66237 3.85785 2.505 5.01522 2.505 7.39657V13.225C2.505 15.6064 3.66237 16.7638 6.04372 16.7638H14.3701C16.7515 16.7638 17.9088 15.6064 17.9088 13.225V7.39657C17.9088 5.01522 16.7515 3.85785 14.3701 3.85785L6.04372 3.85785Z"/>
    <path d="M10.2067 11.0352C9.50726 11.0352 8.79952 10.8187 8.2583 10.3774L5.65214 8.29579C5.3857 8.07931 5.33574 7.68796 5.55223 7.42152C5.76871 7.15508 6.16006 7.10512 6.4265 7.32161L9.03265 9.40321C9.66546 9.91111 10.7396 9.91111 11.3724 9.40321L13.9785 7.32161C14.245 7.10512 14.6446 7.14675 14.8528 7.42152C15.0693 7.68796 15.0277 8.08763 14.7529 8.29579L12.1467 10.3774C11.6138 10.8187 10.9061 11.0352 10.2067 11.0352Z"/>
              </svg>
            </div>
            <a href="#" className={textMenu ? 'nav-menu_text' : 'nav-menu_text-hidden' }>Message</a>
        </div>

        <div className="nav-menu_option">
            <div>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-menu_icon">
    <path d="M10.2069 13.7221C8.48331 13.7221 7.08447 12.3232 7.08447 10.5997C7.08447 8.8761 8.48331 7.47727 10.2069 7.47727C11.9304 7.47727 13.3293 8.8761 13.3293 10.5997C13.3293 12.3232 11.9304 13.7221 10.2069 13.7221ZM10.2069 8.72622C9.1744 8.72622 8.33343 9.56719 8.33343 10.5997C8.33343 11.6321 9.1744 12.4731 10.2069 12.4731C11.2393 12.4731 12.0803 11.6321 12.0803 10.5997C12.0803 9.56719 11.2393 8.72622 10.2069 8.72622Z"/>
    <path d="M12.8797 19.0843C12.7048 19.0843 12.53 19.0593 12.3551 19.0177C11.8389 18.8761 11.4059 18.5514 11.1311 18.0934L11.0312 17.9269C10.54 17.0776 9.86553 17.0776 9.37427 17.9269L9.28268 18.0851C9.00791 18.5514 8.57494 18.8845 8.0587 19.0177C7.53414 19.1592 6.99292 19.0843 6.53497 18.8095L5.10283 17.9852C4.59492 17.6938 4.22856 17.2192 4.07036 16.6447C3.92049 16.0701 3.99542 15.479 4.28685 14.9711C4.52831 14.5464 4.59492 14.1634 4.45338 13.9219C4.31183 13.6805 3.95379 13.5389 3.46254 13.5389C2.24688 13.5389 1.25604 12.5481 1.25604 11.3324V9.86697C1.25604 8.65132 2.24688 7.66048 3.46254 7.66048C3.95379 7.66048 4.31183 7.51893 4.45338 7.27747C4.59492 7.036 4.53664 6.65299 4.28685 6.22834C3.99542 5.72043 3.92049 5.12093 4.07036 4.55474C4.22024 3.98022 4.5866 3.50561 5.10283 3.21419L6.5433 2.38988C7.48418 1.83201 8.72481 2.15674 9.29101 3.11427L9.39092 3.2808C9.88218 4.13009 10.5566 4.13009 11.0479 3.2808L11.1395 3.1226C11.7057 2.15674 12.9463 1.83201 13.8955 2.3982L15.3276 3.22252C15.8355 3.51394 16.2019 3.98854 16.3601 4.56307C16.51 5.13759 16.435 5.72876 16.1436 6.23667C15.9022 6.66132 15.8355 7.04433 15.9771 7.2858C16.1186 7.52726 16.4767 7.66881 16.9679 7.66881C18.1836 7.66881 19.1744 8.65965 19.1744 9.8753V11.3407C19.1744 12.5564 18.1836 13.5472 16.9679 13.5472C16.4767 13.5472 16.1186 13.6888 15.9771 13.9303C15.8355 14.1717 15.8938 14.5547 16.1436 14.9794C16.435 15.4873 16.5183 16.0868 16.3601 16.653C16.2102 17.2275 15.8439 17.7021 15.3276 17.9935L13.8872 18.8178C13.5708 18.9927 13.2294 19.0843 12.8797 19.0843ZM10.2069 16.0035C10.948 16.0035 11.639 16.4698 12.1137 17.2941L12.2052 17.4523C12.3052 17.6272 12.4717 17.7521 12.6715 17.802C12.8714 17.852 13.0712 17.827 13.2377 17.7271L14.6782 16.8944C14.8947 16.7696 15.0612 16.5614 15.1278 16.3116C15.1944 16.0618 15.1611 15.8037 15.0362 15.5872C14.5616 14.7712 14.5033 13.9303 14.8697 13.2891C15.236 12.648 15.9938 12.2816 16.943 12.2816C17.4758 12.2816 17.9005 11.857 17.9005 11.3241V9.85865C17.9005 9.33409 17.4758 8.90111 16.943 8.90111C15.9938 8.90111 15.236 8.53475 14.8697 7.89362C14.5033 7.25249 14.5616 6.41152 15.0362 5.59554C15.1611 5.37905 15.1944 5.12093 15.1278 4.87114C15.0612 4.62135 14.903 4.42152 14.6865 4.28829L13.246 3.46398C12.888 3.2475 12.4134 3.37239 12.1969 3.73875L12.1053 3.89695C11.6307 4.72127 10.9396 5.18754 10.1986 5.18754C9.45753 5.18754 8.76644 4.72127 8.29184 3.89695L8.20025 3.73043C7.99209 3.38072 7.52581 3.25582 7.16778 3.46398L5.72731 4.29662C5.51083 4.42152 5.3443 4.62968 5.27769 4.87947C5.21108 5.12926 5.24438 5.38738 5.36928 5.60386C5.84388 6.41985 5.90217 7.26082 5.53581 7.90195C5.16945 8.54308 4.41174 8.90944 3.46254 8.90944C2.92965 8.90944 2.505 9.33409 2.505 9.86697V11.3324C2.505 11.857 2.92965 12.29 3.46254 12.29C4.41174 12.29 5.16945 12.6563 5.53581 13.2974C5.90217 13.9386 5.84388 14.7795 5.36928 15.5955C5.24438 15.812 5.21108 16.0701 5.27769 16.3199C5.3443 16.5697 5.5025 16.7696 5.71899 16.9028L7.15945 17.7271C7.33431 17.8353 7.54247 17.8603 7.73397 17.8104C7.93381 17.7604 8.10033 17.6272 8.20858 17.4523L8.30017 17.2941C8.77477 16.4781 9.46586 16.0035 10.2069 16.0035Z"/>
              </svg>
            </div>
            <a href="#" className={textMenu ? 'nav-menu_text' : 'nav-menu_text-hidden' }>Setting</a>
        </div>
      </div>

      <FontAwesomeIcon 
        icon={faThList}
        onClick={()=> {navAction(); hiddeTextMenu(); changeLogo()}}
        className="toggle-icon"
        id="toggleIcon"/>
  
    </div>
        

  );
}

export default Navbar;