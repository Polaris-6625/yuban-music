import { createMapperHooksStore } from "@apiknight/store/lib/hooks"

export interface MusicListItemSlice {
    id: number,
    url: string,
    title: string,
    artist: string,
}

const currentMusicStore = createMapperHooksStore<MusicListItemSlice>(
    {
        id: 0,
        url: '链接',
        title: '歌曲名',
        artist: '歌曲作者'
    }
)

export const useCurrentMusic = currentMusicStore.useStoreValue

export const getCurrentMusic = currentMusicStore.getStoreValue

export const setCurrentMusic = currentMusicStore.setStoreValue