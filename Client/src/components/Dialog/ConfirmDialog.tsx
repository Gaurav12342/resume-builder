import { DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, } from '@mui/material';
import CutomButton from '../../components/Button';
import { usePDF } from '@react-pdf/renderer';
import ResumeFormatPDPFirst from '../../Pages/Resume/PDFTemplate/ResumeFormatPDPFirst';
import { routeConstant } from '../../Routes/constant';
import ResumeFormatPDFSecond from '../../Pages/Resume/PDFTemplate/ResumeFormatPDFSecond';

const ConfirmDialog = ({ isDownload = false, fullWidth = false, maxWidth = "md", open, onCancel, title, description, onDelete, confirmText, cancelText, selectedRow, ...rest }: any) => {
    const { personalInfo, workExperience, skills, projectDetails }: any = selectedRow;
    const component = routeConstant?.resumeTemplateFirst === selectedRow?.template ? <ResumeFormatPDPFirst personalInfo={personalInfo} workExperience={workExperience} skills={skills} projectDetails={projectDetails} />  : <ResumeFormatPDFSecond personalInfo={personalInfo} workExperience={workExperience} skills={skills} projectDetails={projectDetails}/>
    
    const [instance, updateInstance] = usePDF({ document: component });
    
    if (instance.loading) return <div>Loading ...</div>;
    if (instance.error) return <div>Something went wrong: {instance.error}</div>;

    return (
        <Dialog
            {...rest}
            open={open}
            onClose={onCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button className={`cursor-pointer bg-white border-2 rounded-md px-4 py-1 text-sm font-semibold  'border-indigo-600'`}
                    onClick={onCancel}>{cancelText ?? "Cancel"}
                </button>

                {isDownload ? <a href={instance.url} download="resume.pdf"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Download
                </a> : <CutomButton variant="contained" size="small" onClick={onDelete}>
                    {confirmText ?? "Confirm"}
                </CutomButton>}
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;