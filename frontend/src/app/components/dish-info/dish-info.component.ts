import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-dish-info',
  templateUrl: './dish-info.component.html',
  styleUrls: ['./dish-info.component.css']
})
export class DishInfoComponent implements OnInit {

  constructor(private readonly statsService: StatsService) { }

  legPos: any = "below";
  scheme: any = {domain: ["#f51720", "#fa26a0", "#f8d210", "#2ff3e0"]};
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = "Date";
  yAxisLabel = "Values";

  InitDailyData: any;
  InitTimeLineData: any;

  async ngOnInit(): Promise<void> {
      this.initDailyStats();
      this.initTimeLineStats();
  }

  transformData(input: any, option: string)
  {
    let lines: any[] = [];
    switch(option)
    {
      case "single":
      {
        let categories = Object.keys(input);
        console.log(categories);
        for(let category of categories)
        {
          if(category === "date")
          {
            continue;
          }
          console.log(category);
          lines.push({"name": category, "value": input[category]});
        }
        console.log(lines);
      }
      break;
      case "series":
      {
        let linesNames = Object.keys(input[0]);
        console.log(linesNames);
        for(let name of linesNames)
        {
          if(name === "date")
          {
            continue;
          }
          lines.push({"name": name, "series": []});
        }
        console.log(lines);
        for(let obj of input)
        {
          console.log("OBJECT", obj);
          let fields: string[] = Object.keys(obj);
          for(let field of fields)
          {
            if(field === "date")
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
        console.log(lines);
      }
      break;
      default:
      {
        // It is an error :)
      }
    }
    return lines;
  }

  async initDailyStats()
  {
    await this.statsService.requestStatsInitData("daily", 10, "2021-06-01")
      .subscribe({
        next: data =>{
          console.log(data);
          this.InitDailyData = this.InitDailyData = this.transformData(data, "single");
        },
        error: error=>{
          console.log("There was an error", error);
        }
    });
  }

  async initTimeLineStats()
  {
    await this.statsService.requestStatsInitData("timeline", 10, "2021-06-01")
      .subscribe({
        next: data =>{
          console.log(data);
          this.InitTimeLineData = this.transformData(data, "series");
        },
        error: error=>{
          console.log("There was an error", error);
        }
      });
  }

}
