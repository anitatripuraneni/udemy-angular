import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route: ActivatedRoute, private router: Router) { }

  /*ngOnInit() {
    const id= +this.route.snapshot.params['id'];
    //+ is added because the id which is coming from params is string but we require the number so to make sure the id is treated as number we need to add +
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params)=>{
        this.server = this.serversService.getServer(+params['id']);
        //+ is added because the id which is coming from params is string but we require the number so to make sure the id is treated as number we need to add +
      }
    );
  }*/
  ngOnInit() {
    this.route.data.subscribe(
      (data: Data)=>{
        this.server = data['server'];
      }
    );
  }
onEdit(){
this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});
//By default the query params will not be remembered while passing from 1 router link to another, to come over this behaviourwe can pass another attirbute called queryParamsHandling to hold the query params
  //if we want hold the query params we can use perserve option
  // if we want to append the new query params with existing values we can use merge option
}
}
