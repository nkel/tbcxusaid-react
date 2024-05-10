import CardHeader from "../../../../components/admin/header/cardHeader";
import {getUsers} from "../../../../../api";
import {IUser} from "../../../../interfaces";
import EditBtn from "../../../../components/admin/form/user/editBtn";
import DeleteBtn from "../../../../components/admin/form/user/deleteBtn";

export default async function Users(){
    const users = await getUsers();

    return (
    <div className="container">
        <CardHeader cardTitle="Users" cardBtnTxt="User"  />
        <div className="card">
            <table>
                <thead className="card--head">
                <tr>
                    <th>id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                { users.map((user: IUser) =>
                    <tr className="card--item" key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <EditBtn user = {user}/>
                        </td>
                        <td>
                            <DeleteBtn userId={user.id} />
                        </td>
                    </tr>
                )}
                </tbody>

            </table>
        </div>
    </div>
    );
}