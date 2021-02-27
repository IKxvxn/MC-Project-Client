import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'
import banner3 from '../images/banner3.png'
import banner4 from '../images/banner4.png'
import banner5 from '../images/banner5.png'
import banner6 from '../images/banner6.png'

export const banners = [
    { key: 0, banner: { large: banner1 } },
    { key: 1, banner: { large: banner2 } },
    { key: 2, banner: { large: banner3 } },
    { key: 3, banner: { large: banner4 } },
    { key: 4, banner: { large: banner5 } },
    { key: 5, banner: { large: banner6 } },
]

export const getBannerByKey = (key) => {
    let banner = banners.find((x) => x.key === key)

    if (!banner) { return banners[0] }
    return banner
}
