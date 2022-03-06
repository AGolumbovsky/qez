import { request } from "../Instance"

export const getQuestions = (level = "level-one") => {
    
    return request(`/${ level }`)
}