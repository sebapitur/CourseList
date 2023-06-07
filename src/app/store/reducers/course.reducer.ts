
// import the interface
import { CourseItem } from '../models/courseItem.model';
import { AddItemAction } from '../actions/course.action';
import { Action, createReducer, on } from '@ngrx/store';
//create a dummy initial state
export const initialState: Array<CourseItem> = [
  {
    id: '1',
    department: 'Computer Engineering',
    name: 'C++ Programming',
  },
];

export const CourseReducer = createReducer(
    initialState,
    on(AddItemAction, (state, action) => {
        console.log('arrived at reducer');
        let new_state = [...state, action.payload];
        console.log(new_state);
        return new_state;
    })
 );