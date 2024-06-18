import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { personalDetail } from '../../../Redux/Resume/ResumeEditorSlice';

const ProjectDetail = ({ personalInfoData }: any) => {
    const dispatch = useDispatch();
    const [projectDetails, setProjectDetails] = useState([{ title: '', teamSize: '', duration: '', technologies: '' }]);

    useEffect(()=>{
        setProjectDetails(personalInfoData?.projectDetails ?? [{}]);
    },[personalInfoData])

    const handleAddProject = () => {
        const newProjectDetails = [...projectDetails, { title: '', teamSize: '', duration: '', technologies: '' }];
        setProjectDetails(newProjectDetails);
    };

    const handleDeleteProject = (index: any) => {
        const newProjectDetails = [...projectDetails];
        newProjectDetails.splice(index, 1);
        setProjectDetails(newProjectDetails);
        dispatch(personalDetail({
            ...personalInfoData,
            projectDetails: newProjectDetails
        }));
    };

    const handleFieldChange = (event: any, index: any, field: any) => {
        const newProjectDetails = projectDetails.map((detail, i) => {
            if (i === index) {
                return {
                    ...detail,
                    [field]: event.target.value
                };
            }
            return detail;
        });
        setProjectDetails(newProjectDetails);
        dispatch(personalDetail({
            ...personalInfoData,
            projectDetails: newProjectDetails
        }));
    };

    return (
        <div>
            {projectDetails?.map((proDetail: any, index: any) => {
                return (<form className="pb-10">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Project Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Add info related past Project that worked on.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                        Project name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="title"
                                            id={`title-${index}`}
                                            autoComplete="title"
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={proDetail.title}
                                            onChange={(event) => handleFieldChange(event, index, 'title')}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="teamSize" className="block text-sm font-medium leading-6 text-gray-900">
                                        Team Size
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="teamSize"
                                            id={`teamSize-${index}`}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={proDetail.teamSize}
                                            onChange={(event) => handleFieldChange(event, index, 'teamSize')}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
                                        Duration
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id={`duration-${index}`}
                                            name="duration"
                                            type="duration"
                                            autoComplete="duration"
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={proDetail.duration}
                                            onChange={(event) => handleFieldChange(event, index, 'duration')}
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="technologies" className="block text-sm font-medium leading-6 text-gray-900">
                                        Technologies
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id={`technologies-${index}`}
                                            name="technologies"
                                            rows={3}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                            value={proDetail.technologies}
                                            onChange={(event) => handleFieldChange(event, index, 'technologies')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-full w-100 flex-row-reverse h-5  px-4 pt-4">
                                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => { handleDeleteProject(index) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>

                </form>)
            })}

            <button
                onClick={handleAddProject}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Add more
            </button>
        </div>
    )
}

export default ProjectDetail