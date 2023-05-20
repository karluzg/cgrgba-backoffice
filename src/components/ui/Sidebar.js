import React from 'react';
import logo from '../../assets/images/logo-portal-consular.jpg';
import style from '../../assets/css/sidebar.module.scss';

export default function Sidebar() {

    const subNavs = document.querySelectorAll(`.subnav`);
    const result = Array.from(document.querySelectorAll('.subnav'), ({ value }) => value);
    
    console.log("Result: ", result);

    const buttons = document.querySelectorAll(`.sidebar button`);

    console.log("Result2: ", buttons);
    
    const resetSidebar = () => {
      subNavs.forEach((nav) => {
        nav.style.height = 0;
      });
    
      buttons.forEach((b) => {
        b.classList.remove("active");
      });
    };
    
    const handleHeaderClicked = (subNav) => {
      resetSidebar();
    
    const subNavOuter = document.querySelector(`#${subNav}`);
    const subNavInner = document.querySelector(`${subNav} .subnav-inner`);
    const button = subNavOuter.previousElementSibling;
    
      if (subNavOuter.clientHeight > 0) {
        subNavOuter.style.height = 0;
        button.classList.remove("active");
        return;
      }
    
      button.classList.toggle("active");
      const newHeight = `${subNavInner.clientHeight}px`;
      subNavOuter.style.height = newHeight;
    };
    

  return (
    <>
        <aside class="sidebar">
            <header>
                <img src="logo.svg" />
                <span> DataHub </span>
            </header>
            <button>
                <span class="material-symbols-outlined"> home </span>
                <span>Home</span>
            </button>
            <button onclick={handleHeaderClicked('tools')}>
                <span class="material-symbols-outlined"> build </span>
                <span>Tools</span>
                <span class="material-symbols-outlined"> expand_more </span>
            </button>
            <div id="tools" class="subnav">
                <div class="subnav-inner">
                <button>
                    <span>Documents</span>
                </button>
                <button>
                    <span>Editor</span>
                </button>
                <button>
                    <span>Themes</span>
                </button>
                </div>
            </div>
            <button onclick={handleHeaderClicked('settings')}>
                <span class="material-symbols-outlined"> settings </span>
                <span>Settings</span>
                <span class="material-symbols-outlined"> expand_more </span>
            </button>
            <div id="settings" class="subnav">
                <div class="subnav-inner">
                <button>
                    <span>Display</span>
                </button>
                <button>
                    <span>Audio</span>
                </button>
                <button>
                    <span>Interface</span>
                </button>
                <button>
                    <span>Accessibility</span>
                </button>
                </div>
            </div>
            <button>
                <span class="material-symbols-outlined"> account_circle </span>
                <span>Profile</span>
            </button>
            <button>
                <span class="material-symbols-outlined"> logout </span>
                <span>Sign Out</span>
            </button>
        </aside>
    </>
  )
}
