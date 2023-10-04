// service.js
import { Platform } from 'react-native';
import TrackPlayer , { Event } from 'react-native-track-player';

module.exports = async function() {
    // This service needs to be registered for the module to work
    // but it will be used later in the "Receiving Events" section
    if (Platform.OS === 'android') {
      TrackPlayer.addEventListener(Event.RemotePause, () => {
        console.log('Event.RemotePause');
        TrackPlayer.pause();
      });
    
      TrackPlayer.addEventListener(Event.RemotePlay, () => {
        console.log('Event.RemotePlay');
        TrackPlayer.play();
      });
    
      TrackPlayer.addEventListener(Event.RemoteNext, () => {
        console.log('Event.RemoteNext');
        TrackPlayer.skipToNext();
      });
    
      TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        console.log('Event.RemotePrevious');
        TrackPlayer.skipToPrevious();
      });
    
      TrackPlayer.addEventListener(Event.RemoteJumpForward, async (event) => {
        console.log('Event.RemoteJumpForward', event);
        TrackPlayer.seekBy(event.interval);
      });
    
      TrackPlayer.addEventListener(Event.RemoteJumpBackward, async (event) => {
        console.log('Event.RemoteJumpBackward', event);
        TrackPlayer.seekBy(-event.interval);
      });
    
      TrackPlayer.addEventListener(Event.RemoteSeek, (event) => {
        console.log('Event.RemoteSeek', event);
        TrackPlayer.seekTo(event.position);
      });
    
      TrackPlayer.addEventListener(Event.RemoteDuck, async (event) => {
        console.log('Event.RemoteDuck', event);
      });
    
      TrackPlayer.addEventListener(Event.PlaybackQueueEnded, (event) => {
        console.log('Event.PlaybackQueueEnded', event);
      });
    
      TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, (event) => {
        console.log('Event.PlaybackActiveTrackChanged', event);
      });
    
      TrackPlayer.addEventListener(Event.PlaybackPlayWhenReadyChanged, (event) => {
        console.log('Event.PlaybackPlayWhenReadyChanged', event);
      });
    
      TrackPlayer.addEventListener(Event.PlaybackState, (event) => {
        console.log('Event.PlaybackState', event);
      });
    
      TrackPlayer.addEventListener(Event.PlaybackMetadataReceived, (event) => {
        console.log('[Deprecated] Event.PlaybackMetadataReceived', event);
      });
    
      TrackPlayer.addEventListener(Event.MetadataChapterReceived, (event) => {
        console.log('Event.MetadataChapterReceived', event);
      });
    
      TrackPlayer.addEventListener(Event.MetadataTimedReceived, (event) => {
        console.log('Event.MetadataTimedReceived', event);
      });
    
      TrackPlayer.addEventListener(Event.MetadataCommonReceived, (event) => {
        console.log('Event.MetadataCommonReceived', event);
      });
    
      TrackPlayer.addEventListener(
        Event.PlaybackMetadataReceived,
        async ({ title, artist }) => {
          const activeTrack = await TrackPlayer.getActiveTrack();
          TrackPlayer.updateNowPlayingMetadata({
            artist: [title, artist].filter(Boolean).join(' - '),
            title: activeTrack?.title,
            artwork: activeTrack?.artwork,
          });
        }
      );
    }
    else {
      addEventListener('remote-play', () => TrackPlayer.play());

      addEventListener('remote-pause', () => TrackPlayer.pause());

      addEventListener('remote-stop', () => TrackPlayer.destroy());

      addEventListener('remote-next', () => TrackPlayer.skipToNext());

      addEventListener('playback-state', () => console.log("playback-state"))

      addEventListener('remote-previous', async (param) => skipToPrevious());

      addEventListener('remote-jump-forward', async ({interval}) => {
        const position = await TrackPlayer.getPosition();
        TrackPlayer.seekTo(position + interval);
      });

      addEventListener('remote-jump-backward', async ({interval}) => {
        const position = await TrackPlayer.getPosition();
        TrackPlayer.seekTo(position - interval);
      });
      
      addEventListener('remote-seek', ({position}) => TrackPlayer.seekTo(position));
    }
}