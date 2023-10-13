import { IndexMenuItemType } from "../../types/type";

const bottomMenuData:Array<IndexMenuItemType> = [
    {
        key: '0',
        name: '首页',
        icon: require('../../public/icon/more-music.png'),
        url: "Home"
    },
    {
        key: '1',
        name: '播客',
        icon: require('../../public/icon/bk.png'),
        url: "Procast"
    },
    {
        key: '2',
        name: '关注',
        icon: require('../../public/icon/gz.png'),
        url: "Follow"
    },
    {
        key: '3',
        name: "我的",
        icon: require('../../public/icon/my.png'),
        url: "MyPage"
    }
]

export { bottomMenuData };