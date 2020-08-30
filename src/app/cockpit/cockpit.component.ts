import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
  // property
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // property
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // these will use when we will use two way data binding
  // newserverName = '';
  // newserverContent = '';

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newserverName,
  //     serverContent: this.newserverContent,
  //   });
  // }
  // onAddBluePrintServer() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newserverName,
  //     serverContent: this.newserverContent,
  //   });
  // }

  // *************************************
  // 1st way of local reference

  // onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
  //   console.log();
  //   this.serverCreated.emit({
  //     serverName: serverName.value,
  //     serverContent: serverContent.value,
  //   });
  // }
  // onAddBluePrintServer(serverName, serverContent: HTMLInputElement) {
  //   this.blueprintCreated.emit({
  //     serverName: serverName.value,
  //     serverContent: serverContent.value,
  //   });
  // }

  // *************************************

  // 2nd way of local reference

  // property
  @ViewChild('serverName') serverName: ElementRef;
  @ViewChild('serverContent') serverContent: ElementRef;

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });
  }
  onAddBluePrintServer(serverName, serverContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
