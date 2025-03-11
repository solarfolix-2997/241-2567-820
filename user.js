const BASE_URL = 'http://localhost:8000';
window.onload = async () => {
    await loadData();
}

const loadData = async () => {
    console.log('loaded');
    //1. load user ทั้งหมดออกมาจาก api
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);

    //2. นำ user ที่โหลดมาใส่เข้าใน html
    const userDOM = document.getElementById('user');
    let htmlData = '<div>';
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i];
        htmlData += `<div>${user.id} ${user.firstname} ${user.lastname}
        <a href='index.html?id=${user.id}'><button>Edit</button>
        <button class = 'delete' data-id='${user.id}')">Delete</button>
        </div>`
    }

    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    //3 ลบ user

    const deleteDOMs = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            const id = event.target.dataset.id;
            try{
                await axios.delete(`${BASE_URL}/users/${id}`);
                loadData();
            } catch {
                console.log('error', error);
            }
        });
    }
}