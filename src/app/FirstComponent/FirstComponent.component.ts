import {Component} from '@angular/core';

@Component({
    selector: 'app-FirstComponent',
    templateUrl: './FirstComponent.component.html'
})
export class FirstComponent {
    serverID : number =10; 
    serverStatus : string = 'online';

    getServerStatus(){
        return this.serverStatus;
    }
}