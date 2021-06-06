import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable, of } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { DiaryTableRecord } from '../../../models/diaryTablerecord.model';
import { DiaryTableService } from '../diary.service';

export class DiaryTableDataSource implements DataSource<DiaryTableRecord> {

    private tableRecordsSubject = new BehaviorSubject<DiaryTableRecord[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    constructor(private diaryTableService: DiaryTableService) {}

    connect(collectionViewer: CollectionViewer): Observable<DiaryTableRecord[]> {
      return this.tableRecordsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
      this.tableRecordsSubject.complete();
      this.loadingSubject.complete();
    }

    getTableRows(mealType: string)
    {
        this.loadingSubject.next(true);
        this.diaryTableService.getDataForUser(mealType)
        .pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(
            tableRecords => {
                this.tableRecordsSubject.next(tableRecords);
                console.log(tableRecords);
            }
        )
    }
}