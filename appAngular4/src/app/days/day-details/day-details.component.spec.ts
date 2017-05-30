import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from "@angular/forms";

import { DayDetailsComponent } from './day-details.component';
import { DayService } from "../../shared/day.service";

describe('DayDetailsComponent', () => {
    let component: DayDetailsComponent;
    let fixture: ComponentFixture<DayDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule
                ],
            declarations: [
                DayDetailsComponent
            ],
            providers: [
                DayService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DayDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
