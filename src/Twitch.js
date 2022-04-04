import './Twitch.css';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
 
const Stream = () => {
  return (
    <div>
      <header>
        <h1>TrubbleMilad's Twitch</h1>
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
      <TwitchPlayer video="1299628885" autoplay="false"/>
    </div>
  );
}

export default Stream;
