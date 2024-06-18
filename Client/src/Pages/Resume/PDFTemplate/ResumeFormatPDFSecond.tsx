import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const ResumeFormatPDFSecond = ({ personalInfo, workExperience, skills, projectDetails }: any) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.name}>{`${personalInfo?.firstName ?? ""} ${personalInfo?.lastName ?? ""}`}</Text>
                        <Text style={styles.location}>{`${personalInfo?.city ?? ""}, ${personalInfo?.state ?? ""}`}</Text>
                        <Text style={styles.paragraph}>{personalInfo?.paragraph ?? ""}</Text>
                    </View>
                    {/* <View>
                            <Text style={styles.sectionTitle}>Education</Text>
                            {educationDetails?.map((edu, index) => (
                                <View key={index} style={styles.listItem}>
                                    <Text style={styles.listText}>{edu?.degree ?? ""}</Text>
                                    <Text style={styles.listText}>University - {edu?.university ?? ""}</Text>
                                    <Text style={styles.listText}>Percentage - {edu?.percentage ?? ""}</Text>
                                </View>
                            ))}
                        </View> */}
                    <View>
                        <Text style={styles.sectionTitle}>Work Experience</Text>
                        {workExperience?.map((exp: any, index: any) => (
                            <View key={index} style={styles.listItem}>
                                <Text style={styles.listText}>{exp?.position ?? ""}</Text>
                                <Text style={styles.listText}>Location - {exp?.location ?? ""}</Text>
                                <Text style={styles.listText}>Company Name - {exp?.companyName ?? ""}</Text>
                                <Text style={styles.listText}>Technologies - {exp?.technologies ?? ""}</Text>
                                <Text style={styles.listText}>CTC - {exp?.CTC ?? ""}</Text>
                            </View>
                        ))}
                    </View>
                    <View>
                        <Text style={styles.sectionTitle}>Project Details</Text>
                        {projectDetails?.map((project: any, index: any) => (
                            <View key={index} style={styles.listItem}>
                                <Text style={styles.listText}>{project?.title ?? ""}</Text>
                                <Text style={styles.listText}>Location - {project?.location ?? ""}</Text>
                                <Text style={styles.listText}>Company Name - {project?.teamSize ?? ""}</Text>
                                <Text style={styles.listText}>Technologies - {project?.duration ?? ""}</Text>
                                <Text style={styles.listText}>CTC - {project?.technologies ?? ""}</Text>
                            </View>
                        ))}
                    </View>
                    <View>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {skills?.map((skill: any, index: any) => (
                                <Text key={index} style={{ backgroundColor: '#FFFFFF', padding: 5, marginRight: 5, marginBottom: 5 }}>
                                    {skill}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        padding: 20,
    },
    container: {
        backgroundColor: '#F3F4F6',
        padding: 20,
        maxWidth: 480,
        margin: 'auto',
    },
    header: {
        marginBottom: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    location: {
        fontSize: 12,
        color: '#666666',
    },
    paragraph: {
        fontSize: 12,
        color: '#666666',
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listItem: {
        marginBottom: 10,
    },
    listText: {
        fontSize: 12,
        color: '#666666',
    },
});

export default ResumeFormatPDFSecond