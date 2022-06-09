import { Link } from "react-router-dom";

export const ActivityRow = ({activity}) => {

    return (
        <tr>
            <td> <Link to="/activity">{activity.CD_ACTIVITY}</Link> </td>
            <td> {activity.DS_TITLE} </td>
            <td> {activity.CD_FACULTY}</td>
            <td> {activity.DS_INIT_DATE}</td>
            <td> {activity.Categoria } </td>
            <td> {activity.Estudiantes.length}</td>
        </tr>
    );
};