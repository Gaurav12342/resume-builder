import {createSlice } from '@reduxjs/toolkit';

const initialState : any = {
    loading : false,
    template : "resume-editor-template-1",
    personalInfo: {
        imageUrl:"",  
        firstName: "Gaurav",
        lastName: "Pendharkar",
        email: "gaurav.pendharjar@gmail.com",
        mobile: "+919904449443",
        address: "56,Santacruz Mumbai ",
        city: " Pune",
        state: "Maharastra",
        postalCode: "400705",
        profileImg: "https://img.icons8.com/color/344/test-account.png",
        paragraph:
            "Front-End Developer with experience in React.js, Redux, and REST APIs, as well as a working knowledge of Node.js, a popular back-end language. I am passionate about creating dynamic, interactive web applications that provide an engaging user experience.",
    },
    educationDetails: [{
        university: "Surat",
        degree: "BCA",
        percentage:"95%"
    },{
      degree: 'bachlor of computer engeerning', university: 'VNSGU', percentage: '10'
    }],
    skills: ["ReactJs", "Javascript"],
    workExperience: [
        {
          companyName: "ABC",
          location: "surat",
          position: "FRONT End",
          technologies: "Ui developer",
          CTC : 500000
        },
      ],
      projectDetails : [
        {title :"OXit", teamSize : "15", duration : 10, technologies : "MERN stack"}
    ]
}


const resumeEditorSlice :any = createSlice({
    name:"resume-editor",
    initialState,
    reducers:{
        personalDetail: (state, action) => {
            return {
              ...state,
              ...action.payload,
            };
          },
    },
    
});

export const { personalDetail } = resumeEditorSlice.actions;

export default resumeEditorSlice.reducer;
