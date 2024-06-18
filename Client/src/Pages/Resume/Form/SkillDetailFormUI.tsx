import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { personalDetail } from '../../../Redux/Resume/ResumeEditorSlice';
import Button from '../../../components/Button';

const SkillDetailFormUI = ({ personalInfoData }: any) => {
    const dispatch = useDispatch();
    const [skills, setSkills] = useState<any>([]);

    useEffect(() => {
        setSkills(personalInfoData?.skills ?? ['']);
    }, []);

    const handleAdd = () => {
        const newSkills = [...skills, ''];
        setSkills(newSkills);
    };

    const handleDelete = (index: any) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
        dispatch(personalDetail({
            ...personalInfoData,
            skills: newSkills
        }));
    };

    const handleChange = (event: any, index: any) => {
        const newSkills = [...skills];
        newSkills[index] = event.target.value;
        setSkills(newSkills);
        dispatch(personalDetail({
            ...personalInfoData,
            skills: newSkills
        }));
    };

    return (
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Skills</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Add skills that you know and had work on.
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            {skills.map((skill: any, index: any) => {
                                return (
                                    <>
                                        <div className='flex'>
                                            <div className="mt-2">
                                                <input
                                                    onChange={(event) => handleChange(event, index)}
                                                    value={skill}
                                                    type="text"
                                                    name="skills"
                                                    id="skills"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                    <div className="wflex-none items-center h-5 max-sm:py-10 px-4 ">
                                                        <button onClick={() => handleDelete(index)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                            <div className="mt-2">
                                <Button onClick={handleAdd}>Add</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillDetailFormUI