/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


 // Define Global Variables

let navigation=document.querySelector('#navbar__list');

// Adding a global variable for all sections
let sections=document.querySelectorAll("section");
 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//Use of Arrow function to loop over all the sections

let buildNav=()=>{

    //Defining the empty variable to receive our looped information
    let navBuilt='';

    // use of forEach function so that our loop can apply to all of the sections in index.html

    sections.forEach(section =>{

       // defining using const all the sections and dataNav

    let sectionId= section.id;
    let sectionData=section.dataset.nav;
    //Making sure to tell how the loop function will be executed and also adding our sections hyperlinked to the page

    navBuilt +=`<li><a class="menu__link" href="#${sectionId}"> {sectionData} </a></li>`;
   
    
});
// Let's append all we defined in the inner html

navigation.innerHTML=navBuilt;

}
buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


