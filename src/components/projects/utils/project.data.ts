import { IProject } from "src/models/project.model";

export const porjectsData: IProject[] = [
    {
        title: 'R-Suite',
        subTitle: 'Admin page of generating reports',
        timePeriod: '2023 - 2024',
        description: 'Data analytics and reporting platform, with a focus on providing administrators with tools to generate and analyze reports efficiently.',
        technologies: 'Angular 16, Ag-Grid, Ag-Charts, NgRx, RxJS, Bootstrap, TypeScript, Moment, ImageCropper.',
        url: 'https://www.radiusfintech.com',
        projectImg: 'assets/images/radius.png'
      },
      {
        title: 'Roam Stay',
        subTitle: 'Apartment booking platform',
        timePeriod: '2023',
        description: `An apartment booking platform integrating sophisticated calendar functionalities, a
                      messaging system, and visualizations to optimize user experience and streamline B2B and
                      B2C interactions.`,
        technologies: 'Angular 15, Angular Material (Customized Theming), RxJS, ApexCharts.js, moment, swiper, CDK DragDrop, DeviceDetector',
        url: 'https://roamstay.com',
        projectImg: 'assets/images/roam.png'
      },
      {
        title: 'Mosaico',
        subTitle: 'Tokenization Platform',
        timePeriod: '2022 - 2023',
        description: `Comprehensive tokenization platform facilitating capital raising and investment
                      amplification, supported by robust investor relationship management and leveraging
                      cutting-edge technologies for seamless deployment and global accessibility.`,
        technologies: `Angular 13, Typescript, RxJS, ApexChart.js, Docker, I18n, Bootstrap, DeviceDetector,
                      ColorPicker, ImageCropper, moment, swiper, ApexCharts`,
        url: 'https://mosaico.ai',
        projectImg: 'assets/images/mosaico.png'
      },
      {
        title: 'Fulton Grace',
        subTitle: 'Real Estate Platform',
        timePeriod: '2021 - 2022',
        description: `This project involves frontend development for a real estate company's innovative
                      property management division, leveraging cutting-edge tools and technology to enhance
                      client services and maximize connections between buyers, sellers, and renters.`,
        technologies: 'Angular 13, RxJS, Toastr, Angular Bootstrap',
        url: 'https://www.fultongrace.com',
        projectImg: 'assets/images/fulton.png'
      }  
];