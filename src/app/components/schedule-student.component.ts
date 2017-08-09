import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: "../public/schedule-student.component.html",
    styleUrls: ['../public/student-schedule.component.css']
})

export class ScheduleStudentComponent {

    constructor(
        private _route: Router
    ) { }

    ngOnInit() {

    }

    accordion(elementID) {
        var element = document.getElementById(elementID);
        if (element.className.indexOf("w3-show") == -1) {
            element.className += " w3-show";
        } else {
            element.className = element.className.replace(" w3-show", "");
        }
    }
}