import './Twitch.css';
import ResponsiveAppBar from './NavMenu';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
 
const Stream = () => {
  return (
    <div>
      <header>
        
      </header>
      <TwitchEmbed
        channel="trubblemilad"
        id="trubblemilad"
        theme="dark"
        height="80vh"
        width="100%"
        muted
        onVideoPause={() => console.log(':(')}
      />
      {/* <TwitchChat channel="trubblemilad" theme="dark" /> */}
      {/* <TwitchClip clip="Highlight: Clutch Reconnection from Brand" parent={['amilad.ca']} /> */}
      <br/>
      <TwitchPlayer
        video="1299628885"
        autoplay="false"
        height="80vh"
        width="100%"
      />
    </div>
  );
}

export default Stream;
