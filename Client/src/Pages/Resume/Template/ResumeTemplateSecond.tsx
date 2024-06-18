import { useSelector } from "react-redux";
import Header from "../../../components/Header"
import FormUI from "../Form";

const ResumeTemplateSecond = (props:any) => {
    const { isFormVisible = true } = props;
    const personalInfoData: any = useSelector((state: any) => state?.resumeEditor);
    const { personalInfo, workExperience, educationDetails, skills, projectDetails }: any = personalInfoData;
    return (
        <div>
            <Header />
            <div className={`grid grid-cols-1 gap-6 p-6 ${isFormVisible && "md:grid-cols-2"}`}>
                <div className="flex flex-col gap-4">
                    {isFormVisible && <FormUI />}
                </div>
                <div id={'content'} className="flex flex-col gap-6">
                    <div className="bg-gray-100 py-12 px-4 md:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            <header className="mb-8">
                                <div className="flex items-end justify-between mb-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-900">{`${personalInfo?.firstName ?? ""} ${personalInfo?.lastName ?? ""}`}</h1>
                                        <p className="text-sm text-gray-600 ">{`${personalInfo?.city ?? ""}, ${personalInfo?.state ?? ""}`}</p>
                                    </div>
                                    <div className="space-x-4">
                                        <a className="text-sm text-gray-600 hover:text-gray-900" href="#">
                                            {personalInfo?.email ?? ""}
                                        </a>
                                        <a className="text-sm text-gray-600 hover:text-gray-900" href="#">
                                            {personalInfo?.mobile ?? ""}
                                        </a>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-gray-600 text-sm">
                                        {personalInfo?.paragraph ?? ""}
                                    </p>
                                </div>
                            </header>
                            <section className="mb-8">
                                <h2 className="text-1xl font-bold text-gray-900 mb-4">Education</h2>
                                <div className="space-y-4">
                                    {educationDetails?.map((edu: any) => {
                                        return (
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-900 mb-1">
                                                    {edu?.degree ?? ""}
                                                </h3>
                                                <p className="text-gray-600 text-sm">University - {edu?.university ?? ""}</p>
                                                <p className="text-gray-600 text-sm">Percentage - {edu?.percentage ?? ""}</p>
                                            </div>
                                        )
                                    })}

                                </div>
                            </section>
                            <section className="mb-8">
                                <h2 className="text-1xl font-bold text-gray-900 mb-4">Work Experience</h2>
                                <div className="space-y-6">
                                    {workExperience?.map((exp: any) => {
                                        return (
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-900 mb-1">{exp?.position ?? ""}</h3>
                                                <p className="text-sm text-gray-600 mb-2">Location - {exp?.location ?? ""}</p>
                                                <ul className="text-sm list-disc pl-4 text-gray-600">
                                                    <li>Company Name - {exp?.companyName ?? ""}</li>
                                                    <li>Technologies - {exp?.technologies ?? ""}</li>
                                                    <li>CTC - {exp?.CTC ?? ""}</li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                            <section className="mb-8">
                                <h2 className="text-1xl font-bold text-gray-900 mb-4">Project Details</h2>
                                <div className="space-y-6">
                                    {projectDetails?.map((project: any) => {
                                        return (
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-900 mb-1">{project?.title ?? ""}</h3>
                                                <p className="text-sm text-gray-600 mb-2">Location - {project?.location ?? ""}</p>
                                                <ul className="text-sm list-disc pl-4 text-gray-600">
                                                    <li>Company Name - {project?.teamSize ?? ""}</li>
                                                    <li>Technologies - {project?.duration ?? ""}</li>
                                                    <li>CTC - {project?.technologies ?? ""}</li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                            <section className="mt-8">
                                <h2 className="text-1xl font-bold text-gray-900 mb-4">Skills</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <h3 className="text-sm font-medium text-gray-900 mb-2">Programming Languages</h3>
                                        {skills?.map((skill: any) => {
                                            return (
                                                <ul className="text-gray-600 text-sm">
                                                    <li>{skill}</li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            </section>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResumeTemplateSecond