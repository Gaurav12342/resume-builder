import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import { useSelector, useDispatch } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from '../../components/Header';
import CustomButton from '../../components/Button';
import { routeConstant } from '../../Routes/constant';
import CustomTable from '../../components/Table';
import { fetchAllTemplate } from '../../Redux/Resume/GetTemplateSlice';
import { deleteTemplateByIdApi } from '../../Redux/Resume/DeleteTemplateSlice';
import ConfirmDialog from '../../components/Dialog/ConfirmDialog';
import ResumeFormatFirst from './Template/ResumeFormatFirst';
import ResumeTemplateSecond from './Template/ResumeTemplateSecond';

export const PreviewtemplateComponent = ({data}:any)=>{
    return(
        <>
            <Grid container>
                <Grid item xs={12}>
                    {data?.template === routeConstant?.resumeTemplateFirst ? <ResumeFormatFirst isFormVisible={false} /> : <ResumeTemplateSecond isFormVisible={false}/>}
                </Grid>
            </Grid>
        </>
    )
}

const ResumeList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectordata = useSelector((state:any) => state?.fetchAllTemplates);
    const [isDeletePopup, setIsDeletePopup] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any>({});
    const [isPreviewModal, setIsPreviewModal] = useState(false);
    
    const handleNavigateToResume = () => {
        navigate(routeConstant.template);
    }

    useEffect(()=>{
        dispatch(fetchAllTemplate());
    },[]);

    const handleConfirmDelete = () => {
        dispatch(deleteTemplateByIdApi(selectedRow?._id)).then((res:any)=>{
            if(res?.payload?.data){
                dispatch(fetchAllTemplate());
                setIsDeletePopup(false);
            }
        }).catch(()=>{
            setIsDeletePopup(false);
        });
    }

    const handleDeletePopupOpen = (row:any) => {
        setSelectedRow(row);
        setIsDeletePopup(true);
    }

    const handleDeletePopupClose = () => {
        setSelectedRow({});
        setIsDeletePopup(false);
    }

    const columns = [
        {
            id: 'personalInfo?.firstName',
            label: 'User Name',
            // minWidth: 170,
            format: (row:any) => {
                return row?.personalInfo?.firstName ?? ""
            },
        },
        {
            id: 'personalInfo?.firstName',
            label: 'First Name',
            // minWidth: 170,
            format: (row:any) => {
                return row?.personalInfo?.firstName ?? ""
            },
        },
        {
            id: 'personalInfo?.lastName',
            label: 'Last Name',
            // minWidth: 170,
            format: (row:any) => {
                return row?.personalInfo?.lastName ?? ""
            },
        },
        {
            id: 'personalInfo?.email',
            label: 'Email',
            // minWidth: 170,
            format: (row:any) => {
                return row?.personalInfo?.email ?? ""
            },
        },
        {
            id: 'personalInfo?.mobile',
            label: 'Mobile',
            // minWidth: 170,
            format: (row:any) => {
                return row?.personalInfo?.mobile ?? ""
            },
        },
        {
            id: 'action',
            label: 'Action',
            minWidth: 120,
            align: 'left',
            format: (row:any) => (
                <div>
                    <IconButton onClick={() => {
                        setSelectedRow(row);
                        const route = `${row?.template}/${row?._id}`
                        navigate(route);
                    }}>
                        <EditSharpIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeletePopupOpen(row)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => {
                        setIsPreviewModal(true);
                        setSelectedRow(row);
                    }}>
                        <RemoveRedEyeSharpIcon />
                    </IconButton>
                </div>
            ),
        }
    ];

    const downloadPdf = () => {
        const contentRef : any = document.getElementById('content');
        html2canvas(contentRef).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdfWidth = 210;
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${selectedRow?.personalInfo?.firstName}.pdf`);
        });
    };

    return (
        <div>
            <Header />
            <div className='flex justify-end mr-[9rem] mt-[5rem]'>
                <CustomButton onClick={handleNavigateToResume}>Create New</CustomButton>
            </div>
            <div className='flex justify-center my-4'>
                <CustomTable columns={columns} rows={selectordata?.data?.data ?? []} />
            </div>

            <div>
        </div>
            {isDeletePopup && <>
                <ConfirmDialog 
                    title={"Delete temeplate."}
                    description={"Are you sure you want to delete."}
                    onCancel={handleDeletePopupClose}
                    onDelete={handleConfirmDelete}
                    open={isDeletePopup}
                    selectedRow={selectedRow}
                />
            </>}

            {isPreviewModal && <>
                <ConfirmDialog
                        className='mt-[5rem]'
                        title={"Preview temeplate."}
                        description={<PreviewtemplateComponent data={selectedRow} />}
                        onCancel={() => setIsPreviewModal(false)}
                        onDelete={downloadPdf}
                        open={isPreviewModal}
                        fullWidth={true}
                        isDownload={true}
                        maxWidth="md"
                        // confirmText={"Download"}
                        selectedRow={selectedRow}
                    />
            </>}
        </div>
    )
}

export default ResumeList