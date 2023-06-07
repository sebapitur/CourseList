
import { createAction, props } from '@ngrx/store';
import { CourseItem } from '../models/courseItem.model';
export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
}

export const AddItemAction = createAction(
  CourseActionType.ADD_ITEM,
  props<{payload: CourseItem}>()
);