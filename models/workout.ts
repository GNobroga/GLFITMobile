import IExercise from "./exercise";

export default interface IWorkout {
    id: string;
    name: string;
    exercises: IExercise[];
}