export class TableList {
    id: number = 0;
    useCaseName: string = '';
    description: string = '';
    createdByUserId: number = 0;
    createdDate: string = '';
    statusName: string = '';
    members: string = '';
}

export class PaginationModel {
    length: number | undefined;
    pageSize: number = 5;
    pageSizeOptions: number[] = [5, 15, 25, 50]
}