document.addEventListener('DOMContentLoaded', () => {
  const viewBtn = document.getElementById('viewUsersBtn');
  const editBtn = document.getElementById('editUserBtn');
  const roleBtn = document.getElementById('roleAccessBtn');
  const userSection = document.getElementById('userTableSection');
  const roleSection = document.getElementById('roleSection');
  const userTableBody = document.getElementById('userTableBody');

  const users = [
    { id: 1, name: 'Md. Jahid Hasan', role: 'Farmer', status: 'Active' },
    { id: 2, name: 'Admin Rahman', role: 'Admin', status: 'Active' },
    { id: 3, name: 'Ali Viewer', role: 'Viewer', status: 'Inactive' }
  ];

  viewBtn.addEventListener('click', () => {
    userSection.classList.remove('hidden');
    roleSection.classList.add('hidden');
    renderUsers();
  });

  roleBtn.addEventListener('click', () => {
    roleSection.classList.remove('hidden');
    userSection.classList.add('hidden');
  });

  editBtn.addEventListener('click', () => {
    userSection.classList.remove('hidden');
    roleSection.classList.add('hidden');
    renderUsers(true); // Allow editing
  });

  function renderUsers(allowEdit = false) {
    userTableBody.innerHTML = '';
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.role}</td>
        <td>${user.status}</td>
        <td>
          ${allowEdit ? `
            <button class="action-btn edit" onclick="editUser(${user.id})">Edit</button>
            <button class="action-btn deactivate" onclick="deactivateUser(${user.id})">Deactivate</button>
          ` : '-'}
        </td>
      `;
      userTableBody.appendChild(row);
    });
  }

  window.editUser = (id) => {
    alert(`Edit user with ID: ${id}`);
    // Implement edit logic here
  };

  window.deactivateUser = (id) => {
    alert(`Deactivate user with ID: ${id}`);
    // Implement deactivate logic here
  };

  // Handle role form submission
  document.getElementById('roleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Role assigned successfully!');
  });
});
