export const Activity = ({activity}) => {

    return (
        <tr>
            <td> <a href="http://localhost:3000">{activity.id}</a> </td>
            <td> {activity.name} </td>
            <td> {activity.faculty}</td>
            <td> {activity.date}</td>
            <td> 10 per.</td>
        </tr>
    );
};