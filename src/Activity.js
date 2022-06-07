export const Activity = ({activity}) => {

    return (
        <tr>
            <td> <a href="http://localhost:3000">{activity.CD_ACTIVITY}</a> </td>
            <td> {activity.DS_TITLE} </td>
            <td> {activity.CD_FACULTY}</td>
            <td> {activity.DS_INIT_DATE}</td>
            <td> {activity.Categoria } </td>
            <td> {activity.Estudiantes.length}</td>
        </tr>
    );
};