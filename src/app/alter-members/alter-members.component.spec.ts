import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterMembersComponent } from './alter-members.component';

describe('AlterMembersComponent', () => {
  let component: AlterMembersComponent;
  let fixture: ComponentFixture<AlterMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
