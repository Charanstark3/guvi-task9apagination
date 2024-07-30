document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 5;
    let currentPage = 1;

    // Sample data for demonstration
    const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

    const paginationContainer = document.getElementById('pagination-container');
    const dataList = document.createElement('ul');
    dataList.id = 'data-list';
    paginationContainer.appendChild(dataList);

    const pagination = document.createElement('ul');
    pagination.className = 'pagination';
    paginationContainer.appendChild(pagination);

    function renderData(page) {
        dataList.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = data.slice(start, end);

        paginatedData.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            dataList.appendChild(listItem);
        });
    }

    function renderPagination() {
        pagination.innerHTML = '';

        const totalPages = Math.ceil(data.length / itemsPerPage);

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                render();
            }
        });
        pagination.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.disabled = i === currentPage;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                render();
            });
            pagination.appendChild(pageButton);
        }

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                render();
            }
        });
        pagination.appendChild(nextButton);
    }

    function render() {
        renderData(currentPage);
        renderPagination();
    }

    render();
});