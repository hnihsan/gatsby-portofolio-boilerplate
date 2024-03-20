import React from 'react';
import ExpertSubtitle from '../components/ExpertSubtitle';
import HeroA from '../components/HeroA';
import HeroB from '../components/HeroB';
import HeroC from '../components/HeroC';
import FeatureHighlightA from '../components/FeatureHighlightA';
import FeatureHighlightB from '../components/FeatureHighlightB';
import FaqA from '../components/FAQa';
import FaqB from '../components/FAQb';
import FaqC from '../components/FAQc';
import ContactUsA from '../components/ContactUsA';
import ContactUsB from '../components/ContactUsB';
import OurTeamB from '../components/OurTeamB';
import OurClient from '../components/OurClients';
import OurTeamA from '../components/OurTeamA';

function PageA() {
  return (
    <>
      <OurClient />
      <HeroA />
      <HeroB />
      <HeroC />
      <FeatureHighlightA />
      <FeatureHighlightB />
      <ExpertSubtitle />
      <FaqA />
      <FaqB />
      <FaqC />
      <ContactUsA />
      <ContactUsB />
      <OurTeamA />
      <OurTeamB />
    </>
  );
}

export default PageA;
