import { Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';

export const routes: Routes = [
    {
        path:'rating', component: QuestionComponent
    },
    {
        path: '', redirectTo: (urlInfo) => {
            console.info(urlInfo);
            return '/rating';
        },
        pathMatch: 'full'
    }
];
