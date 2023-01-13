import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  openSidebar: boolean = true;

  menuSidebar = [
    // {
    //   link_name: 'Dashboard-Charts',
    //   link: '/dashboard',
    //   icon: 'bi bi-bar-chart',
    //   sub_menu: [],
    // },
    {
      link_name: 'Dashboard-Charts',
      link: null,
      icon: 'bi bi-bar-chart',
      sub_menu: [
        {
          link_name: 'BarChart',
          link: '/barchart',
        },
        {
          link_name: 'PieChart',
          link: '/piechart',
        },
      ],
    },
    {
      link_name: 'Table-Example',
      link: null,
      icon: 'bi bi-table',
      sub_menu: [
        {
          link_name: 'Table',
          link: '/table',
        },
        {
          link_name: 'Export-Table',
          link: '/export_table',
        },
        {
          link_name: 'Import-Table',
          link: '/import_table',
        },
        {
          link_name: 'Import-MatTable',
          link: '/import_mattable',
        },
      ],
    },
    {
      link_name: 'Upload Files',
      link: null,
      icon: 'bi bi-calendar3-fill',
      sub_menu: [
        {
          link_name: 'Image Reader',
          link: '/image',
        },
        {
          link_name: 'Pdf Reader',
          link: '/pdf-reader',
        },
        {
          link_name: 'Box Icons',
          link: '/box-icons',
        },
      ],
    },
    {
      link_name: 'Dropdown',
      link: '/dropdown',
      icon: 'bi bi-filter-square',
      sub_menu: [],
    },
    {
      link_name: 'Json-Validation',
      link: '/jsonvalidate',
      icon: 'bi bi-filter-square',
      sub_menu: [],
    },
  ];

  constructor() {}

  ngOnInit() {}

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }


}
