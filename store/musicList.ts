import { createMapperHooksStore } from "@apiknight/store/lib/hooks";

export interface MusicListItem {
    id: number,
    url: string,
    title: string,
    artist: string,
}

const musicListStore = createMapperHooksStore<MusicListItem[]>([])

export const useMuiscList = musicListStore.useStoreValue;

export const setMusicList = musicListStore.setStoreValue;

export const addMusicList = (e: MusicListItem) => {
    setMusicList(musicList => [...musicList, e]);
};