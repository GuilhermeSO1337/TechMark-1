import React from 'react';
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import Map from '../components/Map';
import PublicationSection from '../components/PublicationSection';

export default function Commerce(){
    return(
        <main style={{overflowX:'hidden'}}>
            <Header/>
            <ProfileHeader/>
            <Map/>
            <PublicationSection/>
        </main>
    );
}