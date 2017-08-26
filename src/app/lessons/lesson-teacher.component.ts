import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./lesson-teacher.component.html"
})

export class LessonTeacherComponent {

    index: number;

    constructor(
        private _route: Router
    ) { }

    ngOnInit() {
        this.index = 0;
        var x = document.getElementsByClassName("list");
        for (var i = 0; i < 3; i++) {
            x[i].className += " w3-show";
        }
        var y = document.getElementsByClassName("lesson")[0];
        y.className += " w3-show";
        console.log(this.index);
    }



    moreLesson() {
        var y = document.getElementsByClassName("list")
        if (this.index + 2 < y.length - 1) {
            y[this.index].className = y[this.index].className.replace(" w3-show", "");
            y[this.index + 3].className += " w3-show";
            this.index++;
            console.log(this.index);
        }
    }
    lessLesson() {
        if (this.index > 0) {
            var y = document.getElementsByClassName("list")
            y[this.index + 2].className = y[this.index + 2].className.replace(" w3-show", "");
            y[this.index - 1].className += " w3-show";
            this.index--;
            console.log(this.index);
        }
    }
    showLesson(n:number) {
        // apresenta valores da lição desejada
    }

    showClass(n:number) {
        // apresenta os valores da turma desejada

        let element = document.getElementById("students");
        if (element.className.indexOf("w3-show") == -1) {
            element.className += " w3-show";
        } else {
            element.className = element.className.replace(" w3-show", "");
        }
    }
}