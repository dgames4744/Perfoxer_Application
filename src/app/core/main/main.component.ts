import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    items: MenuItem[];

    items2: MenuItem[];
    cars: any[];
    responsiveOptions: any;

    constructor() {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '768px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    ngOnInit() {
        this.cars = [{ brand: 'hola1', year: 1999, color: 'red' }, { brand: 'hola2', year: 1999, color: 'red' }, { brand: 'hola3', year: 1999, color: 'red' }, { brand: 'hola4', year: 1999, color: 'red' }];
        this.items = [
            {
                label: 'Perfoxer'
            },
            { separator: true },
            {
                label: 'Quit', icon: 'pi pi-fw pi-times'
            }
        ];
        this.items2 = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file-o',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-palette',
                items: [
                    { label: 'Undo', icon: 'pi pi-fw pi-undo' },
                    { label: 'Redo', icon: 'pi pi-fw pi-replay' }
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-refresh',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-mobile',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            }
        ];
    }
}
