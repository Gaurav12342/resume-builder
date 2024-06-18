import { useNavigate } from 'react-router-dom';
import { routeConstant } from '../../../Routes/constant';
import Card from '@mui/material/Card';
import CustomButton from '../../../components/Button';
import Header from '../../../components/Header';
import templateImg1 from '../../../assets/images/template-1.png';
import templateImg2 from '../../../assets/images/template-2.png';

const TemplateCard = () => {
    const navigate = useNavigate();
    const tempalteArray: any = [
        { id: 1, title: "Template 1", imgUrl : templateImg1, description: "Basic resume template.", redirectUrl: routeConstant.resumeTemplateFirst },
        { id: 2, title: "Template 2", imgUrl : templateImg2,description: "Wide Range of Resume Template.", redirectUrl: routeConstant.resumeTemplateSecond },
    ];
    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3 md:p-6">
                {tempalteArray?.map((data: any) => {
                    return (
                        <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2'>
                            <Card className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    alt="Card Image"
                                    className="w-full h-[200px] object-cover"
                                    height="200"
                                    src={data?.imgUrl}
                                    style={{
                                        aspectRatio: "400/200",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className='py-2 px-4 flex bg-gray-950 justify-between'>
                                    <div className="">
                                        <h3 className="font-bold text-xl text-gray-400">{data?.title}</h3>
                                        <p className="text-sm text-gray-500 text-gray-400">{data?.description}</p>
                                    </div>
                                    <div>
                                        <CustomButton onClick={() => navigate(data?.redirectUrl)} variant="primary">Use</CustomButton>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TemplateCard