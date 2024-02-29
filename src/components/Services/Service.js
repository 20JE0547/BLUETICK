import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  ServiceSection,
  ServiceWrapper,
  ServiceHeading,
  ServiceContainer,
  Card1,
  Card1Info,
  Card1Icon,
  Card1Plan,
  Card1Cost,
  Card1Length,
  Card1Features,
  Card1Feature
} from './Service.elements';

 const Service = () => {
  return (
    
    <IconContext.Provider value={{ color: '#a9b3c1', size: 100 }}>
      <ServiceSection>
        <ServiceWrapper>
        <div id="services">
          <ServiceHeading>What we offer</ServiceHeading>
          <ServiceContainer> 
            <Card1 >
              <Card1Info>
                
                <Card1Plan>Explore AI Opportunities for Your Enterprise</Card1Plan>
               
                <Card1Features>
                  <Card1Feature>Unlock the potential of generative AI by identifying tailored opportunities for integration within
your organization, ensuring a strategic and efficient approach to AI implementation.</Card1Feature>
                  
                </Card1Features>
                 
              </Card1Info>
            </Card1>
            <Card1 >
              <Card1Info>
                
                <Card1Plan>Design AI Trust Layer
</Card1Plan>
               
                <Card1Features>
                  <Card1Feature>Prioritize data security and build trust in generative AI applications with a dedicated trust
layer, emphasizing privacy-focused solutions that safeguard both organizational and
customer data.</Card1Feature>
                  
                </Card1Features>
                 
              </Card1Info>
            </Card1>  <Card1 >
              <Card1Info>
                
                <Card1Plan>Scalability-Focused Solutions
</Card1Plan>
               
                <Card1Features>
                  <Card1Feature>Streamline and optimize business processes with comprehensive workflow automation,
ensuring seamless integration of AI technologies from inception to execution for increased
efficiency and productivity.
</Card1Feature>
                  
                </Card1Features>
                 
              </Card1Info>
            </Card1>
            </ServiceContainer>
         <ServiceContainer>
        <Card1 >
              <Card1Info>
                
                <Card1Plan>End to end Workflow automation</Card1Plan>
               
                <Card1Features>
                  <Card1Feature>Implement cutting-edge, scalable generative AI solutions that not only meet current
organizational needs but also adapt and grow with the evolving demands of your enterprise,
providing a future-proof approach to AI integration.</Card1Feature>
                  
                </Card1Features>
                 
              </Card1Info>
            </Card1> </ServiceContainer>
    </div>

        </ServiceWrapper>
      </ServiceSection>
    </IconContext.Provider>
  );
}

export default Service