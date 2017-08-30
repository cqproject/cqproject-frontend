import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Resolve, Router } from '@angular/router';

import { UserService } from '../users/user.service';
import { FileService } from '../utils/files.service';
import { ClassService } from "./class.service";
import { UserProfile } from '../users/iUsers';

@Component({ templateUrl: "./class-students.component.html" })

export class ClassStudentsComponent {

    public students: UserProfile[];


    constructor(
        private _service: ClassService,
        private _userService: UserService,
        private _fileService: FileService,
        private _router: Router,
        private _route: ActivatedRoute,
    ) { this.students = []; }

    public async ngOnInit() {

        let classID;
        this._route.params.subscribe(params => classID = params['id']);
        let studentIDs = await this._service.getStudentsByClass(classID);
        for (var i = 0; i < studentIDs.length; i++) {
            this.students[i] = await this._userService.getProfile(studentIDs[i]);
        }
        console.log(this.students);
        for (let student of this.students) {
            this._fileService.imageDownload(student.Photo)
                .subscribe((res) => {
                    student.Photo = res;
                });
        }
    }
}