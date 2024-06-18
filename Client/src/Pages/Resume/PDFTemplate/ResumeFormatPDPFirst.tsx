import { Document, Page, Text, View, Image,StyleSheet } from '@react-pdf/renderer';

const ResumeFormatPDPFirst = ({personalInfo, workExperience, skills, projectDetails}:any) => {
    return (
        <Document>
                <Page style={styles.page}>
                    <View style={styles.section}>
                        <View style={styles.header}>
                            {/* Render profile picture */}
                            {personalInfo?.imageUrl?.length > 0 ? (
                                <Image style={styles.profilePic} src={personalInfo?.imageUrl} />
                            ) : (
                                <View style={styles.defaultProfilePic}>
                                    <Text style={styles.defaultProfileInitials}>
                                        {personalInfo?.firstName.charAt(0) + personalInfo?.lastName.charAt(0)}
                                    </Text>
                                </View>
                             )}
                            {/* Render name and location */}
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{`${personalInfo?.firstName ?? ""} ${personalInfo?.personalInfo?.lastName ?? ""}`}</Text>
                                <Text style={styles.location}>{`${personalInfo?.city ?? ""}, ${personalInfo?.state ?? ""}`}</Text>
                            </View> 
                        </View>
                        {/* Render work experience */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Work Experience</Text>
                            {workExperience?.map((exp:any, index:any) => (
                                <View key={index} style={styles.experienceItem}>
                                    <Text>{exp?.position}</Text>
                                    <Text>{`Location - ${exp?.location}`}</Text>
                                    <Text>{`Company Name - ${exp?.companyName}`}</Text>
                                    <Text>{`Technologies - ${exp?.technologies}`}</Text>
                                    <Text>{`CTC - ${exp?.CTC}`}</Text>
                                </View>
                            ))}
                        </View>
                        {/* Render education details */}
                        {/* <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Education</Text>
                            {educationDetails?.map((edu:any, index:any) => (
                                <View key={index} style={styles.educationItem}>
                                    <Text>{edu?.degree}</Text>
                                    <Text>{`University of ${edu?.university}`}</Text>
                                    <Text>{`GPA: ${edu?.percentage}`}</Text>
                                </View>
                            ))}
                        </View> */}
                        {/* Render skills */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            <View style={styles.skillsContainer}>
                                {skills?.map((skill:any, index:any) => (
                                    <Text key={index} style={styles.skill}>{skill}</Text>
                                ))}
                            </View>
                        </View>
                        {/* Render project details */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Project Details</Text>
                            {projectDetails?.map((project:any, index:any) => (
                                <View key={index} style={styles.projectItem}>
                                    <Text>{project?.title}</Text>
                                    <Text>{`Team Size - ${project?.teamSize}`}</Text>
                                    <Text>{`Duration - ${project?.duration}`}</Text>
                                    <Text>{`Technologies - ${project?.technologies}`}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </Page>
            </Document>
    )
}

const styles:any = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      padding: 30,
    },
    section: {
      marginBottom: 10,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    profilePic: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginRight: 20,
    },
    defaultProfilePic: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: 'cyan',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
    },
    defaultProfileInitials: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    nameContainer: {
      flexDirection: 'column',
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    location: {
      fontSize: 14,
      color: 'gray',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    experienceItem: {
      marginBottom: 10,
    },
    educationItem: {
      marginBottom: 10,
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    skill: {
      backgroundColor: '#f0f0f0',
      padding: 5,
      marginRight: 5,
      marginBottom: 5,
    },
    projectItem: {
      marginBottom: 10,
    },
  });

export default ResumeFormatPDPFirst