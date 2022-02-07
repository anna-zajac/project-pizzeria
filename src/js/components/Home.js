/* Global Flickity */
import {templates, classNames, select} from '../settings.js';

class Home{
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initLinks();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.carousel = thisHome.dom.wrapper.querySelector(select.widgets.carousel);
  }

  activatePage(pageId){
    const thisHome = this;

    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);

    for(let page of thisHome.pages){
      
      if(page.id == pageId){
        page.classList.add(classNames.pages.active);
      } else {
        page.classList.remove(classNames.pages.active);
      }
    }

    for(let link of thisHome.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  }

  initLinks(){
    const thisHome = this;

    thisHome.boxLinks = document.querySelectorAll('.home-link');

    for(let link of thisHome.boxLinks){
      link.addEventListener('click', function(event){
        event.preventDefault();

        const clickedElement = this;

        // get page id from href attribute
        const id = clickedElement.getAttribute('href').replace('#', '');

        thisHome.activatePage(id);
      });
    }
  }

  /*initWidget(){

    const element = document.querySelector(select.widgets.carousel);

    new Flickity(element, {

      //options
      autoPlay: 3000,
      cellAlign: 'left',
      imagesLoaded: true,

    });

  }*/

}

  
export default Home;