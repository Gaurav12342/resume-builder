export interface ICreateTemplateInitialState {
    loading: boolean,
    createTemplateData: any,
    error: string
}

export interface IDeleteTemplateInitialState {
    loading?: boolean,
    deleteTemplate?: any,
    error?: string
}

export interface IFetchByIdTemplateInitialState {
    loading?: boolean,
    data?: any,
    error?: string
}

interface IProjectDetail {
    title?: string,
    teamSize?: string,
    duration?: Number,
    technologies?: string
}

interface IWorkExperience {
    companyName?: string,
    location?: string,
    position?: string,
    technologies?: string,
    CTC?: number
}

export interface ICreateTemplatePayloadObject {
    personalInfo: {
        firstName?: string,
        lastName?: string,
        email?: string,
        mobile?: string,
        address?: string,
        city?: string,
        state?: string,
        postalCode?: string,
        profileImg?: string,
        paragraph?: string,
        imageUrl?: string,
    },

    educationDetails: {
        university?: string,
        degree?: string,
        percentage?: string,
    },
    skills?: string[],
    workExperience?: IWorkExperience[],
    projectDetails?: IProjectDetail[],
    template?: string,

}

export interface IDeleteTemplatePayload {
    id?:string
}

export interface IFetchByIdTemplatePayload {
    id?:string
}