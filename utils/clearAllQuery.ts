import TrackPlayer from "react-native-track-player";

async function clearAll() {
    TrackPlayer.pause()
    TrackPlayer.getQueue().then(queue => {
        queue.forEach((track, index) => {
            TrackPlayer.remove(index);
        });
    });
}

export { clearAll }