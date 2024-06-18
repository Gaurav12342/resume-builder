import { useDispatch } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from "@mui/material/styles";
import { personalDetail } from '../../../Redux/Resume/ResumeEditorSlice';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const PersonalDetailForm = (props: any) => {
    const { personalInfoData } = props;
    const dispatch = useDispatch();

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            dispatch(personalDetail({
                ...personalInfoData,
                personalInfo: {
                    ...personalInfoData.personalInfo,
                    imageUrl: fileUrl
                }
            }));
        }
    };

    return (
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Add personal info for cv.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            {personalInfoData?.personalInfo?.imageUrl ? <Avatar
                                sx={{ width: 80, height: 80, marginBottom: 1 }}
                                alt="profile img"
                                src={personalInfoData?.personalInfo?.imageUrl ?? ""}
                            >
                            </Avatar> : <div
                                className="w-20 h-20 rounded-full bg-cyan-300 flex justify-center items-center overflow-hidden">
                                <p className="w-full text-center text-2xl font-semibold">
                                    {personalInfoData?.personalInfo?.firstName.charAt(0) + "" + personalInfoData?.personalInfo?.lastName.charAt(0)}
                                </p>
                            </div>}
                        </div>
                        <div className="sm:col-span-3">
                            <Button component="label"
                                role={undefined}
                                sx={{background :"#4f46e5", fontFamily : "sans-serif", fontWeight : "semibold"}}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}>
                                Upload image
                                <VisuallyHiddenInput onChange={handleFileChange} type="file" />
                            </Button>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="first-name"
                                    // autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.firstName ?? ""}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                firstName: event.target.value,
                                            }
                                        }));
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="lastName"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.lastName ?? ""}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                lastName: event.target.value,
                                            }
                                        }));
                                    }}
                               />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.email ?? ""}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                email: event.target.value,
                                            }
                                        }));
                                    }}
                               />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                                Contact Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="mobile"
                                    autoComplete="mobile"
                                    value={personalInfoData?.personalInfo?.mobile ?? ""}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                mobile: event.target.value,
                                            }
                                        }));
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    autoComplete="address"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.address ?? "surat"}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                address: event.target.value,
                                            }
                                        }));
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.city ?? ""}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                city: event.target.value,
                                            }
                                        }));
                                    }}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.state ?? ""}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                state: event.target.value,
                                            }
                                        }));
                                    }}
                               />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.postalCode ?? ""}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                postalCode: event.target.value,
                                            }
                                        }));
                                    }}
                               />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                Objective
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="paragraph"
                                    name="paragraph"
                                    rows={3}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={personalInfoData?.personalInfo?.paragraph ?? ""}
                                    onChange={(event) => {
                                        dispatch(personalDetail({
                                            ...personalInfoData,
                                            personalInfo: {
                                                ...personalInfoData?.personalInfo,
                                                paragraph: event.target.value,
                                            }
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetailForm