import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorMensagemComponent } from './editor-mensagem.component';

describe('EditorMensagemComponent', () => {
  let component: EditorMensagemComponent;
  let fixture: ComponentFixture<EditorMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorMensagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
