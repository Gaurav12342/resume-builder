import { useSelector } from "react-redux";
import Header from "../../../components/Header"
import FormUI from "../Form"

const ResumeFormatFirst = (props:any) => {
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
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-md px-8 py-4 max-w-3xl">
            <div className="flex flex-row items-unset justify-start">
              <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
                
                {/*  */}

                {personalInfoData?.personalInfo?.imageUrl?.length > 0 ? (
                  <div className="template-img-cont">
                    <img
                      alt="Profile Picture"
                      className="object-cover rounded-full"
                      height={70}
                      width={70}
                      style={{
                        aspectRatio: "70/70",
                        objectFit: "cover",
                      }}
                      src={personalInfoData?.personalInfo?.imageUrl}
                    />

                  </div>
                ) : (
                  <div
                    className="w-20 h-20 rounded-full bg-cyan-300 flex justify-center items-center overflow-hidden">
                    <p className="w-full text-center text-2xl font-semibold">
                      {personalInfoData?.personalInfo?.firstName.charAt(0) + "" + personalInfoData?.personalInfo?.lastName.charAt(0)}
                    </p>
                  </div>
                )}

                {/*  */}
                
              </div>
              <div className="text-start mt-4">
                <h1 className="text-2xl font-bold text-gray-900 ">{`${personalInfo?.firstName ?? ""} ${personalInfo?.lastName ?? ""}`}</h1>
                <p className="text-gray-600 text-sm">{`${personalInfo?.city ?? ""}, ${personalInfo?.state ?? ""}`}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-md font-bold text-gray-900 mb-4">Work Experience</h2>
                <div className="space-y-4">
                  {workExperience?.map((exp: any) => {
                    return (
                      <div className="">
                        <h3 className="text-sm font-medium text-gray-900 ">{exp?.position ?? ""}</h3>
                        <p className="text-gray-600 text-sm">Location - {exp?.location ?? ""}</p>
                        <ul className="list-disc pl-4 text-gray-600 text-sm">
                          <li>Company Name - {exp?.companyName ?? ""}</li>
                          <li>Technologies - {exp?.technologies ?? ""}</li>
                          <li>CTC - {exp?.CTC ?? ""}</li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-sm font-bold text-gray-900 mb-4">Education</h2>
                <div className="space-y-4">
                  {educationDetails?.map((edu: any) => {
                    return (
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {edu?.degree ?? ""}
                        </h3>
                        <p className="text-gray-600 text-sm">University of {edu?.university ?? ""}</p>
                        <p className="text-gray-600 text-sm">GPA: {edu?.percentage ?? ""}</p>
                      </div>
                    )
                  })}
                </div>
                <h2 className="text-sm font-bold text-gray-900 mt-8 mb-4">Skills</h2>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  {skills?.map((skill: any) => {
                    return (<div className="bg-gray-100 rounded-md px-3 py-1 text-gray-600 text-sm">
                      {skill}
                    </div>)
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-md font-bold text-gray-900 mb-4">Project Details</h2>
                <div className="space-y-4">
                  {projectDetails?.map((project: any) => {
                    return (
                      <div className="">
                        <h3 className="text-sm font-medium text-gray-900 ">{project?.title ?? ""}</h3>
                        <ul className="list-disc pl-4 text-gray-600 text-sm">
                          <li>Company Name - {project?.teamSize ?? ""}</li>
                          <li>Technologies - {project?.duration ?? ""}</li>
                          <li>CTC - {project?.technologies ?? ""}</li>
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default ResumeFormatFirst