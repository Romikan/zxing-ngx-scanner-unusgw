import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import { FormatsDialogComponent } from './formats-dialog/formats-dialog.component';
import { AppInfoDialogComponent } from './app-info-dialog/app-info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // availableDevices: MediaDeviceInfo[];
  // currentDevice: MediaDeviceInfo = null;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.CODE_39,
    BarcodeFormat.ITF
  ];

  // hasDevices: boolean;
  // hasPermission: boolean;
  scannerEnabled: boolean;
  result: boolean;
  

  qrResultString: string;

  // torchEnabled = false;
  // torchAvailable$ = new BehaviorSubject<boolean>(false);
  // tryHarder = false;


// private readonly _dialog: MatDialog
  constructor() {
    this.scannerEnabled = false;
    this.result = false;
   }

  //  OnInit(){
 
  //  }
  //  onScan(){
  //     this.scannerEnabled = true;
  //   }
  //   offScan(){
  //     this.scannerEnabled = false;
  //   }


  // clearResult(): void {
  //   this.qrResultString = null;
  // }

  // onCamerasFound(devices: MediaDeviceInfo[]): void {
  //   this.availableDevices = devices;
  //   this.hasDevices = Boolean(devices && devices.length);
  // }

  // onCodeResult(resultString: string) {
  //   this.qrResultString = resultString;
  //   if(this.result == true){
  //   this.scannerEnabled = false;
  //   }
  // }

  // onDeviceSelectChange(selected: string) {
  //   const device = this.availableDevices.find(x => x.deviceId === selected);
  //   this.currentDevice = device || null;
  // }

  // openFormatsDialog() {
  //   const data = {
  //     formatsEnabled: this.formatsEnabled,
  //   };

  //   this._dialog
  //     .open(FormatsDialogComponent, { data })
  //     .afterClosed()
  //     .subscribe(x => { if (x) { this.formatsEnabled = x; } });
  // }

  // onHasPermission(has: boolean) {
  //   this.hasPermission = has;
  // }

  // openInfoDialog() {
  //   const data = {
  //     hasDevices: this.hasDevices,
  //     hasPermission: this.hasPermission,
  //   };

  //   this._dialog.open(AppInfoDialogComponent, { data });
  // }

 
  // toggleTryHarder(): void {
  //   this.tryHarder = !this.tryHarder;
  // }
}
