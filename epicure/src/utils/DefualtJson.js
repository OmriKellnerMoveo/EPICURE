import {
    Claro_str,
    garbanzo_frito_str,
    garbanzo_frito_subTitle,
    kab_kem_str, kitchen_market_str,
    lumina_str, Mashya_str,
    meir_adoni_str, Onza_str,
    pad_ki_mao_str,
    pad_ki_mao_subTitle,
    popina_str,
    ran_shmueli_str,
    smoked_pizza_str,
    smoked_pizza_subTitle,
    tiger_lilly_str,
    tiger_Lilly_str,
    yanir_Green_str
} from "./DictioneryManagement";
import {
    claro_img,
    garbanzoFriyoImage, kitchenMarketImage,
    lumina_img, mashyaImage, onzaImage,
    padKi_image,
    smokedPizzaImage,
    spicyIcon,
    tiger_Lilly_img,
    veganIcon
} from "./ImageManagement";

export const numbers = [1, 2, 3, 4]
export const RowCard_1 = [
    {
        image: claro_img,
        title: Claro_str,
        subTitle: ran_shmueli_str
    },
    {
        image: lumina_img,
        title: lumina_str,
        subTitle: meir_adoni_str
    },
    {
        image: tiger_Lilly_img,
        title: tiger_Lilly_str,
        subTitle: yanir_Green_str
    },
]
export const RowCard_2 = [
    {
        topHeader: tiger_lilly_str,
        image: padKi_image,
        title: pad_ki_mao_str,
        subTitle: pad_ki_mao_subTitle,
        Icon: spicyIcon,
        price: 88
    },
    {
        topHeader: kab_kem_str,
        image: garbanzoFriyoImage,
        title: garbanzo_frito_str,
        subTitle: garbanzo_frito_subTitle,
        price: 98
    },
    {
        topHeader: popina_str,
        image: smokedPizzaImage,
        title: smoked_pizza_str,
        subTitle: smoked_pizza_subTitle,
        Icon: veganIcon,
        price: 65
    }

]


export const RowCard_3 = [
    {
        image: onzaImage,
        title: Onza_str,
    }, {
        image: kitchenMarketImage,
        title: kitchen_market_str,
    }, {
        image: mashyaImage,
        title: Mashya_str,
    }]

