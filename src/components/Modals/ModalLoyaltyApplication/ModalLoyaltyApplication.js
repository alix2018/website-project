import React from 'react';
import './ModalLoyaltyApplication.css';
import Modal from '../Modal';
import Paragraph from '../Paragraph';

function LoyaltyApplication({showModal, closeModal}) {
  const listSubtitles = [
    {
      category: 'technologies',
      details: 'Web components, Polymer, Webpack'
    },
    {
      category: 'date',
      details: 'From September 2018'
    }
  ];
  const modalInfo = {
    modalName: 'modal-loyalty',
    firstTitle: 'Loyalty',
    secondTitle: 'Application',
    firstSubtitle: 'From WEB app to PWA using',
    secondSubtitle: 'Web Components',
    imageName: 'loyalty-application'
  };
  const paragraphIntro = {
    context: 'Introduction',
    text: 'Stamps is a digital solution that informs the customers about the current loyalty program. They can find the number of stamps they have, see the rewards they can redeem or check the promotions that will make them earn more points.',
    keywords: 'digital solution'
  };
  const paragraphPwa = {
    context: 'Stamps PWA',
    text: 'In 2018, we started to develop the same application as a Progressive Web App (PWA) with Polymer 3 and still using web components. This includes the shell application, mobile app experience, offline mode and all the features that PWA provides.'
  };
  const paragraphStamps = {
    context: 'Stamps Application',
    text: 'The first implementation was with Polymer 1 and web components to be able to reuse them from one application to another and do efficient customization.'
  };
  const pwaQuote = {
    mainText: 'Progressive Web Apps are user experiences that have the reach of the web, and are:',
    line1: '- Reliable,',
    line2: '- Fast,',
    line3: '- Engaging',
    source: 'Google Developers'
  };

  return (
    <Modal showModal={showModal} closeModal={closeModal} listSubtitles={listSubtitles}
      modalInfo={modalInfo} paragraphInfo={paragraphIntro}
    >
      <div className={`${modalInfo.modalName} box`}>
        <section className="page-two half-page">
          <div className="loyalty-top-right">
            <Paragraph>
              {paragraphStamps}
            </Paragraph>
          </div>
          <div className="quote">
            <img src="../../../../public/images/quotation-mark.svg"/>
            {pwaQuote.mainText}<br/>
            {pwaQuote.line1}<br/>
            {pwaQuote.line2}<br/>
            {pwaQuote.line3}<br/>
            <div className="source-quote">
              <div className="line-source"/>
              <a href="https://developers.google.com" target="_blank" rel="noopener noreferrer">Source: {pwaQuote.source}</a>
            </div>
          </div>
          <div className="bottom-right">
            <Paragraph>
              {paragraphPwa}
            </Paragraph>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default LoyaltyApplication;
