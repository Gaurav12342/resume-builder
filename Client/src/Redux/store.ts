import { configureStore } from '@reduxjs/toolkit';
import signInSlice from '../Redux/Auth/SignIn';
import signUpSlice from '../Redux/Auth/SignUp';
import ResumeEditorSlice from './Resume/ResumeEditorSlice';
import  getAllTemplateSlice  from './Resume/GetTemplateSlice';
import  deleteTemplateSlice  from './Resume/DeleteTemplateSlice';
import getATemplateByIdSlice  from './Resume/GetTemplateByIdSlice';

export const store : any = configureStore({
    reducer: {
        signUp: signUpSlice,
        signIn : signInSlice,
        resumeEditor : ResumeEditorSlice,
        fetchAllTemplates : getAllTemplateSlice,
        deleteTemplate : deleteTemplateSlice,
        fetchTemplateById : getATemplateByIdSlice
    }
}); 