import React, {useState, useEffect} from 'react';
import './PagePortfolio.css';
import ReactGA from 'react-ga';
import LoyaltyApplication from '../Modals/ModalLoyaltyApplication/ModalLoyaltyApplication';
import RetailerPortal from '../Modals/ModalRePo/ModalRePo';
import Games from '../Modals/ModalGames/ModalGames';
import Chatbot from '../Modals/ModalChatbot/ModalChatbot';
import DisplayProjectTitles from './DisplayProjectTitles';
import DisplayCarousel from './DisplayCarousel';

import '../../scroll-snap-polyfill';

function PagePortfolio() {
  const projectsList = [
    {
      id: 1,
      class: 'loyalty-application',
      name: 'Loyalty Application'
    },
    {
      id: 2,
      class: 'retailer-portal',
      name: 'Retailer Portal'
    },
    {
      id: 3,
      class: 'games',
      name: '2D Games'
    },
    {
      id: 4,
      class: 'facebook-chatbot',
      name: 'Facebook Chatbot'
    }
  ];

  const projects = projectsList.map(element => element.class);
  const [projectsArray, setProjectsArray] = useState(projects);
  const [activeProject, setActiveProject] = useState(projectsList[0]);
  const [showModal, setShowModal] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  function openModal(project) {
    setShowModal(project);
    if (projects.includes(project)) {
      history.pushState(null, null, `?project=${project}`);
      ReactGA.pageview(`${project}`);
    } else {
      history.pushState(null, null, '/');
      const menuBar = document.querySelector('ul.menu-effect');
      if (menuBar) {
        menuBar.style.pointerEvents = 'visible';
      }
    }
  }

  function updateProjectsArray(currentProject) {
    setActiveProject(currentProject);
    const differenceBetween = currentProject.id - activeProject.id;
    const projectsLength = projectsArray.length;
    const newArray = projectsArray.map((_p, index, arr) => {
      return arr[(projectsLength + index + differenceBetween) % projectsLength];
    });
    setProjectsArray(newArray);
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
    const url = window.location.search;
    if (url.substring(0, 9) === '?project=') {
      const query = url.split('=')[1];
      openModal(query);
    }
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      {isMobile &&
        <div id="swipe-carousel">
          {projectsList.map((project, index) => {
            return (
              <DisplayCarousel key={project.class} project={project} index={index} openModal={openModal}/>
            );
          })}
        </div>
      }
      {!isMobile &&
        <div id="desktop-carousel">
          <div className="left">
            <div className="titles">
              <DisplayProjectTitles projectsList={projectsList} activeProject={activeProject} updateProjectsArray={updateProjectsArray}/>
            </div>
          </div>
          <div className="right">
            {projectsArray.map(project => {
              return (
                <img key={project} className="isometric" src={`../../../public/images/isometric/${project}.png`}
                  onClick={() => {openModal(project);}}/>
              );
            })}
          </div>
        </div>
      }
      <LoyaltyApplication
        showModal={showModal === 'loyalty-application'}
        closeModal={() => {openModal('');}}
      />
      <RetailerPortal
        showModal={showModal === 'retailer-portal'}
        closeModal={() => {openModal('');}}
      />
      <Games
        showModal={showModal === 'games'}
        closeModal={() => {openModal('');}}
      />
      <Chatbot
        showModal={showModal === 'facebook-chatbot'}
        closeModal={() => {openModal('');}}
      />
    </section>
  );
}

export default PagePortfolio;