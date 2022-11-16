import { Pangolin } from "./pangolin";

export interface Score {
    _id: string;
    victories: number;
    defeates: number;
    points: number;
    game_id: string;
    pangolin_id: Pangolin;
    friends: Pangolin[];
}