import {
    Claro_str,
    garbanzo_frito_str,
    garbanzo_frito_subTitle,
    lumina_str,
    meir_adoni_str,
    pad_ki_mao_str,
    pad_ki_mao_subTitle,
    ran_shmueli_str,
    smoked_pizza_str,
    smoked_pizza_subTitle,
    tiger_Lilly_str,
    yanir_Green_str
} from "./DictioneryManagement";
import {
    claro_img,
    garbanzoFriyoImage,
    lumina_img,
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
        image: padKi_image,
        title: pad_ki_mao_str,
        subTitle: pad_ki_mao_subTitle,
        Icon: spicyIcon,
        price: 88
    },
    {
        image: garbanzoFriyoImage,
        title: garbanzo_frito_str,
        subTitle: garbanzo_frito_subTitle,
        price: 98
    },
    {
        image: smokedPizzaImage,
        title: smoked_pizza_str,
        subTitle: smoked_pizza_subTitle,
        Icon: veganIcon,
        price: 65
    }

]


export const RowCard_3 = {
    onza: '#f9f4ea',
    kiitchen_market: 'rgba(232, 196, 122, 0.2)',
    mashya: '#979797',
}

