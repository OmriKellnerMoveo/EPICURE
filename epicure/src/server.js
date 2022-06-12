import {serverApi} from "./utils/GlobalApi";


export const getPopularRestaurant = async (setPopularRestaurants) => {
    try {
        const url = `${serverApi}/api/v1/restaurant/popular`;
        const response = await fetch(url)
        const responseJson = await response.json();
        setPopularRestaurants(responseJson)
    }catch (err){
        console.log(err)
    }
}
export const getSignatureDish = async (setSignatureDishes) => {
    try {
        const url = `${serverApi}/api/v1/dish/signature`;
        const response = await fetch(url)
        const responseJson = await response.json();
        setSignatureDishes(responseJson)
    }catch (err){
        console.log(err)
    }
}
export const getChefOfTheWeek = async (setChefOfTheWeek) => {
    try {
        const url = `${serverApi}/api/v1/chefOfTheWeek`;
        const response = await fetch(url)
        const responseJson = await response.json();
        setChefOfTheWeek(responseJson)
    }catch (err){
        console.log(err)
    }
}
export const getChefOfTheWeekRestaurant = async (setChefOfTheWeekRestaurants) => {
    try {
        const url = `${serverApi}/api/v1/chefOfTheWeek/restaurants`;
        const response = await fetch(url)
        const responseJson = await response.json();
        setChefOfTheWeekRestaurants(responseJson)
    }catch (err){
        console.log(err)
    }
}

