import React from 'react';
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import Map from '../components/Map';
import PublicationSection from '../components/PublicationSection';
import CommentSection from '../components/CommentSection';

export default function Commerce(){
    return(
         <main>
            <Header/>
            <ProfileHeader/>
            <Map/>
            <PublicationSection/>
            <CommentSection/>
        </main>
    );
}