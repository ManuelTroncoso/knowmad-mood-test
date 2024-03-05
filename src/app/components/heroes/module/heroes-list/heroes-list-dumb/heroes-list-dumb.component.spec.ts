import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { HeroesListDumbComponent } from './heroes-list-dumb.component';

describe('HeroesListDumbComponent', () => {
  let component: HeroesListDumbComponent;
  let fixture: ComponentFixture<HeroesListDumbComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [HeroesListDumbComponent],
      providers: [{ provide: MatDialog, useValue: dialogSpy }],
    });

    fixture = TestBed.createComponent(HeroesListDumbComponent);
    component = fixture.componentInstance;
    mockDialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onEdit when editing a hero', () => {
    const id = 456;
    spyOn(component.onEdit, 'emit');

    component.editHero(id);

    expect(component.onEdit.emit).toHaveBeenCalledWith(id);
  });

  it('should emit onEdit when canceling edit', () => {
    const id = 789;
    spyOn(component.onEdit, 'emit');

    component.cancelEdit(id);

    expect(component.onEdit.emit).toHaveBeenCalledWith(id);
  });

  it('should emit onCreate when creating a hero', () => {
    spyOn(component.onCreate, 'emit');

    component.createHero();

    expect(component.onCreate.emit).toHaveBeenCalled();
  });
});
