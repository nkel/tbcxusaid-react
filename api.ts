export const BASE_URL = 'http://localhost:3000/';

export async function getUsers() {
    const response = await fetch(BASE_URL + '/api/users/get-users');
    const { users } = await response.json();

    return users.rows;
}

export async function deleteUser(id: number) {
    console.log(id)
        return await fetch(`${BASE_URL}/api/users/delete-user/${id}`, {
            method: 'DELETE',
        });
}