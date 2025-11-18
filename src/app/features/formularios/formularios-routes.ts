import { FormularioPage } from "./formulario-page/formulario-page";
import { Routes } from "@angular/router";
import { FormulariosDinamicos } from "./formularios-dinamicos/formularios-dinamicos";
import { FormulariosMorePage } from "./formularios-more/formularios-more";

export const formulariosRoutes:
    Routes = [
        {
            path: '',
            children: [
                {
                    path: 'basic',
                    title: 'Formularios Básicos',
                    component:FormularioPage,
                },
                {
                    path: 'dynamic',
                    title: 'Formularios Dinámicos',
                    component:FormulariosDinamicos,
                },
                {
                    path: 'more',
                    title: 'More',
                    component:FormulariosMorePage,
                },
                {
                    path: '**',
                    redirectTo:'basic'
                }
            ],
        },
    ];