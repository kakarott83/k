import { Spend } from "./spend";

export interface Travel {
    id?: string,
    start: string,
    end: string,
    customer: string,
    city: string,
    reason: string,
    checkIn: boolean,
    payOut: boolean,
    mySpend?: Spend[] 
}