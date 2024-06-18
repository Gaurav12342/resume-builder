import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepLabel } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import PersonalDetailForm from './PersonalDetailForm'
import SkillDetailFormUI from './SkillDetailFormUI'
import EmploymentHistoryForm from './EmploymentHistoryForm'
import ProjectDetail from './ProjectDetail'
import EducationDetail from './EducationDetail'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTemplateById } from '../../../Redux/Resume/GetTemplateByIdSlice';
import { personalDetail } from '../../../Redux/Resume/ResumeEditorSlice';
import CustomButton from '../../../components/Button';
import { updateTemplateAPI } from '../../../Redux/Resume/UpdateTemplateSlice';
import { routeConstant } from '../../../Routes/constant';
import { createTemplateAPI } from '../../../Redux/Resume/CreateTemplateSlice';
import { MAKE_PAYMENT } from '../../../utils/constants';

const steps = ['Personal detail', 'Skill', 'Emp history', 'Project', 'Education'];

const FormUI = () => {
  const params: any = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const personalInfoData = useSelector((state: any) => state?.resumeEditor);

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  useEffect(() => {
    if (params?.id) {
      dispatch(fetchTemplateById(params?.id)).then((res: any) => {
        dispatch(personalDetail(res?.payload?.data));
      }).catch();
    } else {
      dispatch(personalDetail(personalInfoData));
    }
  }, [params]);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const makePayment = async (data:any) => {
    const stripe : any = await loadStripe("pk_test_51OwfbWSGesfbBenvEQIkdXLnsOLfy1DryGVxkBlDOI1kdh3xv47tzGPENgnbobSUwMAeRKrtE1u2KRLRTFXHAG6D001scEY0Da");

    const product = [
        {
            email: data,
            price: 10,
            qnty: 1
        },
    ]

    const body = {
        products: product
    }
    const headers = {
        "Content-Type": "application/json"
    }
    const url = `http://localhost:5004/${MAKE_PAYMENT}`
    const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    });

    const session = await response.json();
    const result = stripe.redirectToCheckout({
        sessionId: session.id
    });

    if (result.error) {
        console.log(result.error);
    }
}

  const handleNext = () => {
    let newSkipped = skipped;
    if (activeStep === steps.length - 1) {
      const { personalInfo, educationDetails, skills, workExperience, projectDetails } = personalInfoData;
      const obj = {
        personalInfo, educationDetails, skills, workExperience, projectDetails, template: location?.pathname
      }
      if (params?.id) {
        dispatch(updateTemplateAPI(personalInfoData)).then((res:any) => {
            if (res?.payload?.statusCode === 200) {
                dispatch(personalDetail(res?.payload?.data));
                navigate(routeConstant?.dashboard);
            }
        }).catch();
      } else {
        dispatch(createTemplateAPI(obj)).then((res:any) => {
            if (res?.payload?.status === "Created") {
                const dataObj = res?.payload?.data?.personalInfo?.email ?? "test@gmail.com"
                makePayment(dataObj);
            }
        }).catch();
      }

    } else {
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderForm = (step: any) => {
    switch (step) {
      case 0:
        return <PersonalDetailForm personalInfoData={personalInfoData} />
      case 1:
        return <SkillDetailFormUI personalInfoData={personalInfoData} />
      case 2:
        return <EmploymentHistoryForm personalInfoData={personalInfoData} />
      case 3:
        return <ProjectDetail personalInfoData={personalInfoData} />
      case 4:
        return <EducationDetail personalInfoData={personalInfoData} />
      default:
        return <PersonalDetailForm personalInfoData={personalInfoData} />
    }
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <>
          <div className="container sm:my-12 h-full mx-auto max-sm:px-4 pb-12 sm:px-6 flex flex-col lg:flex-row max-sm:flex-wrap">
            <div className="container h-full mx-auto border-b border-gray-900/10 pb-12 h-16 mb-2 md:mb-0">
              {renderForm(activeStep)}
            </div>
          </div>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={`cursor-pointer bg-white border-2 rounded-md px-4 py-1 text-sm font-semibold ${activeStep === 0 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-indigo-600'}`}>
              Back
            </button>
            <Box sx={{ flex: '1 1 auto' }} />
            <CustomButton onClick={handleNext}>
              {activeStep === steps.length - 1 ? params?.id ? 'Finish & Update' : 'Finish & Create' : 'Next'}
            </CustomButton>
          </Box>
        </>
      </Box>
    </div>
  )
}

export default FormUI