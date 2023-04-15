import { Component } from '@angular/core';

@Component({
    selector : "app-nokia",
    // templateUrl : "./nokia.component.html",
    template : `
    
        <p class="info">
             Nokia Corp (Nokia) is a communications and information technology company that operates in the areas of network infrastructure and advanced technologies. It offers fixed networks, mobile phones, WiFi systems, IP routing, subscriber data management, network implementation, network modernization, IoT, and 5G services.
        </p>
    
    `,
    // styleUrls : ["./nokia.component.scss"]
    styles : [
        `.info{
            padding: 10px;
            border: 1px solid #ededed;
            border-radius: 10px;
            background-color: #ededed;
            color : blue;
        }`

    ]
})
export class nokiacomponent{

}