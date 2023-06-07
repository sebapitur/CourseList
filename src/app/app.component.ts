import { Component, OnInit } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseItem } from './store/models/courseItem.model';
import { State } from './store/models/state.model';
import { AddItemAction } from './store/actions/course.action';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public courseItems$: Observable<Array<CourseItem>>;

  constructor(private store: Store<State>, private actions$: ActionsSubject) {
    this.courseItems$ = this.store.select((store) => store.courses);
    actions$.pipe().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
  
  ngOnInit(): void {
    this.courseItems$ = this.store.select((store) => 
    {
      console.log(store.courses);
      console.log(store);
      return store.courses
    });
  }

  addCourse(form: NgForm) {
    console.log(form.value);
    this.store.dispatch(AddItemAction({payload: form.value}));
    // form.reset();
}
}