import {SeatOut} from './seat.model'
interface Plane{
    id: number;
    start: string;
    finish: string;
    price: number;
    seat: SeatOut;
}
export type PlaneOut = Plane[];