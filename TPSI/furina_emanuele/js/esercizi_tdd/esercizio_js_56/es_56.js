export const avg_age = (students) => {
    return students.reduce((sum, student) => sum + student.eta, 0) / students.length;
};