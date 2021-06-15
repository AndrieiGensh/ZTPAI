import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { StatsService } from './stats.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dish-info',
  templateUrl: './dish-info.component.html',
  styleUrls: ['./dish-info.component.css']
})
export class DishInfoComponent implements OnInit {

  constructor(private readonly statsService: StatsService) { }

  legPos: any = "below";
  scheme: any = {domain: ["#3a86ff", "#fb5607", "#ff006e", "#8338ec"]};
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = "Date";
  yAxisLabel = "Values";

  InitDailyData: any;
  InitTimeLineData: any;

  async ngOnInit(): Promise<void> {
    const date : string = moment().format('YYYY-MM-DD');
      this.initDailyStats(date);
      this.initTimeLineStats(date);
  }

  transformData(input: any, option: string)
  {
    let lines: any[] = [];
    switch(option)
    {
      case "single":
      {
        let categories = Object.keys(input);
        for(let category of categories)
        {
          if(category === "date" || category === "id")
          {
            continue;
          }
          lines.push({"name": category, "value": input[category]});
        }
      }
      break;
      case "series":
      {
        let linesNames = Object.keys(input[0]);
        for(let name of linesNames)
        {
          if(name === "date" || name === "id")
          {
            continue;
          }
          lines.push({"name": name, "series": []});
        }
        for(let obj of input)
        {
          let fields: string[] = Object.keys(obj);
          for(let field of fields)
          {
            if(field === "date" || field === "id")
            {
              continue;
            }
            for(let line of lines)
            {
              if(line["name"] === field)
              {
                line["series"].push({"name": obj["date"], "value": obj[field]});
                break;
              }
            }
          }
        }
      }
      break;
      default:
      {
        // It is an error :) Not really possible to get here
      }
    }
    return lines;
  }

  async initDailyStats(date: string)
  {
    await this.statsService.requestStatsInitData("daily", 10, date)
      .subscribe({
        next: data =>{
          this.InitDailyData = this.transformData(data, "single");
        },
        error: error=>{
          console.log("There was an error", error);
        }
    });
  }

  async initTimeLineStats(date: string)
  {
    await this.statsService.requestStatsInitData("timeline", 10, date)
      .subscribe({
        next: data =>{
          this.InitTimeLineData = this.transformData(data, "series");
        },
        error: error=>{
          console.log("There was an error", error);
        }
      });
  }

}
