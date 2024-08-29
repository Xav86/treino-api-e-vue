export function req() {
    const req = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    return req;
}
