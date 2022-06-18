export default function PublicationMedia(PublicationData){
    let Dir = JSON.stringify(PublicationData.media)
    let Type = Dir.match('jpg');
    let MediaElement;
    switch (Type) {
        case 'jpg':
            MediaElement = <img src='' alt=''/>
            break;
        case 'mp4':
            MediaElement = <video controls autoPlay={true} >
                <source src='' type="video/mp4" />
            </video>
            break;
    
        default:
            MediaElement = null;
            break;
    }
    return MediaElement;
}