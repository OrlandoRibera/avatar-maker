import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarMkrComponent } from './avatar-mkr.component';

describe('AvatarMkrComponent', () => {
  let component: AvatarMkrComponent;
  let fixture: ComponentFixture<AvatarMkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarMkrComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarMkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AvatarMkrComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'avatarmkr-front app is running!'
    );
  });
});
