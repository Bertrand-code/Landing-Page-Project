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
 const navigation=document.querySelector('#navbar__list');


// Adding a global variable for all sections
const sections=document.querySelectorAll("section");

const menuLinks=document.querySelectorAll('.navbar__menu ul');

//Formatting the landing page header
const headingOne=document.getElementById('header');
headingOne.style.backgroundColor="rgb(50,50,80)";
// build the nav
    //Defining the empty variable to receive our looped information
    let navBuilt='';

    // use of forEach function so that our forEach loop can apply to all of the sections in index.html
 function buildNav(){
    sections.forEach(section =>{
    //Making sure to tell how the loop function will be executed and also adding our sections hyperlinked to the page
        
    navBuilt +=`<li class="${section.id}"><a id="active" href="#${section.id}"> ${section.dataset.nav} </a></li>`;

});
// Let's append all we defined in the inner html

navigation.innerHTML=navBuilt;


 }
// Call the function
buildNav();
// Adding 'Your active Class' to all the sections viewed while scrolling on the page;
           
const viewPort=(section)=>{
    const activeClass=section.getBoundingClientRect().top<150 && section.getBoundingClientRect().bottom>=150;
    return activeClass;

}

//Implementation of the actual function
const scrollFunction=(sec)=>{
   
    sections.forEach(section=>{
    ////Add class 'active' to section when near top of viewport
    if(viewPort(section)){
            section.classList.add('your-active-class');
            section.style.cssText='background-color:crimson';
            section.preventDefault;
            
        } 
        //Remove the 'active' to section
        else{
        section.classList.remove('your-active-class');
        section.style.cssText="background-color:black";

        }
    })
}
document.addEventListener('scroll', scrollFunction);

 
// Scroll to section on link click

  const eventWhenScrollingDown=()=>{
    sections.forEach(section => {
        section.addEventListener("click", function(e){
            e.preventDefault();
                section.scrollIntoView({behavior: "smooth"})
        });
    });
}; 

// Calling the function so that when the user scrolls down, the event listener can be added to the sections
eventWhenScrollingDown()

//Highlighting the navItems while Scrolling down;
window.addEventListener('scroll', ()=>{

    let current='';
    sections.forEach(section=>{
       const sectionTop=section.offsetTop;
       const sectionHeight=section.clientHeight;
       if(pageYOffset>=sectionTop){
           current=section.getAttribute('id');
       }

    })
    menuLinks.forEach(menu=>{

        menu.classList.remove('menu__link');
        if(menu.classList.contains(current)){
            console.log(menu);
            menu.classList.add('menu__link')
            
        }
    })
})