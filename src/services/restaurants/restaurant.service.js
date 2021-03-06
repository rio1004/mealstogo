import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155")  => {
    return new Promise ((resolve, reject)=> {
        const mock = mocks[location];
        if(!mock){
            reject("not Found");
        }
        resolve(mock);
    })
}
export const restaurantsTransform =({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((restaurant)=>{
            return mockImages[Math.ceil(Math.random()*(mockImages.length - 1))];
        });
        return {
            ...restaurant,
            address: restaurant.vicinity, 
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, 
            isCloseTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY", 
        }
    });
    return camelize(mappedResults);
};