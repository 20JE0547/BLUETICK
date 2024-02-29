import React from 'react';
import { Blogs,InfoSection, Service } from '../../components';
import { homeObjOne,speakingSQL,reinforcementLearning,fineTuning,privacyMatters} from './Data';

const Home = () => {
    return ( 
        <>
            <InfoSection {...homeObjOne} />
            <Service />
           <div id="blogs"> <Blogs {...speakingSQL} />

            <Blogs {...reinforcementLearning} />

            <Blogs {...fineTuning} />

            <Blogs {...privacyMatters} /></div>
        </>
    )
}

export default Home;