<template>

<div class="container py-2 text-end d-flex justify-content-end" style="border-bottom: 1px solid gainsboro;">
  <div class="row">
    <div class="col d-flex align-items-center gap-2">
      <div>
        <div>Admin</div>
        <div>View Profile</div>
      </div>
      <div class="avatar">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="rounded-circle" alt="Avatar" style="width: 40px; height: 40px;">
      </div>
    </div>
  </div>
</div>
<br>
<h2 class="m-2">Users</h2>

<div class=" row d-flex  bg-dark text-light  text-center p-3 rounded-pill m-2">
    <div class="col-lg-4 col-sm-6 row row-cols-2 text-bold text-white text-md-start "  >
      <div class="col-10 text-start">Add User</div> 
      <div class="d-block d-md-none col-2 text-end text-white  " data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
        </svg>
      </div>
      </div>
    
    <div class="col-lg-4 col-sm-6 d-none d-lg-block"><u>Note:Click on Product Name to view/edit</u></div>
    <div class="col-lg-4 col-sm-6 d-none d-md-block  hover"  type="button" ><i class="bi bi-plus"></i><span  data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</span></div>
</div>

<!--  update model2 -->
<div>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span class="alert alert-danger d-flex align-items-center" role="alert" v-if="warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class=" p-1 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> &nbsp;
          <div>
           Input Filed can't be empty
          </div>
        </span>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email1" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  v-model="userEmail" required  placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password1" v-model="userPassword" required  placeholder="password">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" @click="updateData(selectedUserId)" class="btn btn-primary">Update User</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--comment add model -->

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="warning">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class=" p-1 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg> &nbsp;
          <div>
           Input Filed can't be empty
          </div>
        </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="userEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="userPassword" required  placeholder="password">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="addData()" class="btn btn-primary">Add User</button>
        </div>
      </div>
    </div>
    </div>

<!-- skelon -->
  <div v-if="loading1" class="table-responsive">
      <!-- Skeleton Loader -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="text-left" style="width: 150px">
              <div class="skeleton-loader" style="width: 100px; height: 20px;"></div>
            </th>
            <th class="text-right">
              <div class="skeleton-loader" style="width: 70px; height: 20px;"></div>
            </th>
            <th class="text-right">
              <div class="skeleton-loader" style="width: 70px; height: 20px;"></div>
            </th>
            <th class="text-right">
              <div class="skeleton-loader" style="width: 70px; height: 20px;"></div>
            </th>
            <th class="text-right">
              <div class="skeleton-loader" style="width: 70px; height: 20px;"></div>
            </th>
            <th class="text-right">
              <div class="skeleton-loader" style="width: 70px; height: 20px;"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 5" :key="n">
            <td class="text-left">
              <div class="skeleton-loader" style="width: 85px; height: 20px;"></div>
            </td>
            <td class="text-right">
              <div class="skeleton-loader" style="width: 50px; height: 20px;"></div>
            </td>
            <td class="text-right">
              <div class="skeleton-loader" style="width: 35px; height: 20px;"></div>
            </td>
            <td class="text-right">
              <div class="skeleton-loader" style="width: 65px; height: 20px;"></div>
            </td>
            <td class="text-right">
              <div class="skeleton-loader" style="width: 25px; height: 20px;"></div>
            </td>
            <td class="text-right">
              <div class="skeleton-loader" style="width: 85px; height: 20px;"></div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>

 <!--Admin table  -->
<div  v-else class="container-xl py-4 d-none d-sm-block">
    <div class="table-responsive"  >
      <table class="table table-bordered table-hover table-striped" style="padding:none">
        <thead class="thead-light">
          <tr>
            <th v-for="column in columns" class="text-center text-light bg-dark" :key="column.name">{{ column.label }}</th>
            <th class="text-center text-light bg-dark">Actions</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(row, index) in paginatedRows" :key="row.id">
            <td class="hover" v-for="column in columns" :key="column.name"  data-bs-toggle="modal" data-bs-target="#exampleModal1"  @click="selectUser(row)" >{{ row[column.name] }}</td>
            <td class="text-center pt-1" style="padding: 0;">
            <div class=" d-none d-md-block p-1" >
                    <button class="btn btn-sm " @click="deleteData(row.id)" style="height: 30px;width:30px;background-color: green;color:white"><i class="bi bi-trash3-fill"></i></button> &nbsp;
                    <button class="btn btn-sm " @click="viewData(row)"  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal2"  style="height: 30px;width:30px;background-color:skyblue;color:white"><i class="bi bi-eye-fill"></i></button>
   <!-- model for view -->
              <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg"> 
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">View Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <div v-if="selectedData">
                          <div class="table-responsive">
                            <table class="table table-bordered table-hover">
                              <thead class="thead-light">
                                <tr>
                                  <th v-for="column in columns" :key="column.name">{{ column.label }}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td v-for="column in columns" :key="column.name">{{ selectedData[column.name] }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div v-else>
                          <p>No details available.</p>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
              </div>
<!--  -->
                  &nbsp;
                    <button class="btn btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style="height: 30px;width:30px;background-color:blueviolet;color:white;font-weight: 1000;"> <i class="bi bi-plus"></i> </button>&nbsp;
                  <button class="btn btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" @click="selectUser(row)" style="height: 30px;width:30px;background-color: red;color:white;font-weight: 1000;"><i class="bi bi-pencil-square"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example " >
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }" >
          <button class="page-link shadow-none " @click="prevPage"><i class="bi bi-caret-left-fill" style="border:none;"></i></button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage"><i class="bi bi-caret-right-fill"></i></button>
        </li>
      </ul>
    </nav>
  </div>

  <!-- mobile -->
<div class="d-block d-md-none py-4 p-3">
    <!-- Skeleton Loader -->
    <div v-if="loading" v-for="index in 5" :key="'skeleton-' + index" class="d-flex align-self-center justify-content-between mb-3">
        <div class="d-flex gap-4 align-items-center">
          <div class="skeleton-avatar"></div>
          <div class="ms-2">
            <div class="skeleton-text skeleton-text-short"></div>
            <div class="skeleton-text skeleton-text-long"></div>
          </div>
        </div>
      </div>

     <!-- Actual Data -->  
  <div v-for="(row, index) in paginatedRows" :key="row.id" class="d-flex align-self-center  justify-content-between">
    <div>
      <div class="d-flex gap-4  align-items-center">
        <div class="d-flex align-items-center justify-content-center" style="height: 30px; width: 30px; border-radius: 50%; background-color: gray; color: white; text-align: center; font-weight: bold;">
        {{ row.email.charAt(0).toUpperCase() }} 
      </div>
        <div class="ms-2">
          <div class="pt-3 hover" @click="selectUser(row)"  data-bs-toggle="modal" data-bs-target="#exampleModal1" > {{ row.email }}</div>
          <div class="pb-1"> {{ getMaskedPassword(row.password) }}</div>
        </div>
      </div>
    </div>
    <div class="dropdown  d-flex justify-content-center" style="outline: none;border:none">
        <button class="btn btn-sm  " style="border: none;padding: none;"  id="dropdownMenuButton"  data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i> </button> 
      <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton" style="min-width: 40px;">
          <li  class="pb-1"><button class="btn btn-sm border rounded-pill " @click="deleteData(row.id)" style="height: 30px;width:30px;background-color: green;color:white"><i class="bi bi-trash3-fill"></i> </button></li> 
          <li class="pb-1"><button class="btn btn-sm  border rounded-pill " @click="viewData(row)" data-bs-toggle="modal" data-bs-target="#exampleModal2" style="height: 30px;width:30px;background-color:skyblue;color:white"><i class=" bi bi-eye-fill"></i></button></li>
          <li class="pb-1"><button class="btn btn-sm  border rounded-pill " type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" style="height: 30px;width:30px;background-color:blueviolet ;color:white;font-weight: 1000;"><i class=" bi bi-plus "></i></button></li>
          <li class="pb-1"><button class="btn btn-sm   border rounded-pill"  type="button" @click="selectUser(row)" data-bs-toggle="modal" data-bs-target="#exampleModal1" style="height: 30px;width:30px;background-color: red;color:white;font-weight: 1000;"><i class="bi bi-pencil-square"></i></button></li>
      </ul>
    </div>      
  </div>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="prevPage"><i class="bi bi-caret-left-fill"></i></button>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="nextPage"><i class="bi bi-caret-right-fill"></i></button>
          </li>
        </ul>
      </nav>
</div>

</template>

<script>
import moment from 'moment';
export default {
  data() {
    return { 
      warning:false,
        selectedData:null,
        loading: true,
        // loading1:true,
        userEmail: '',
        userPassword: '',
        selectedUserId: null,
        columns: [
          { name: 'email', label: 'Email' },
          { name: 'password', label: 'Password' },
          { name: 'createdAt', label: 'Created At' },
        ],
        rows: [], 
        pagination: {
        page: 1,
        rowsPerPage: 5,
      },
    };
  },
  computed: {
  totalPages() {
    return Math.ceil(this.rows.length / this.pagination.rowsPerPage);
  },
  paginatedRows() {
    const start = (this.pagination.page - 1) * this.pagination.rowsPerPage;
    const end = start + this.pagination.rowsPerPage;
    return this.rows.slice(start, end);
  },
  currentPage() {
    return this.pagination.page;
  },
  },
  methods: {
  getMaskedPassword(password) {
    return password ? '*'.repeat(password.length) : 'No password';
  },
  prevPage() {
    if (this.pagination.page > 1) {
      this.pagination.page--;
    }
  },
  nextPage() {

    if (this.pagination.page < this.totalPages) {
      this.pagination.page++;
    }
  },


  async addData() {

      if (!this.userEmail || !this.userPassword ) {
      this.warning=true;
      return false;
  }
    const userData = {
      email: this.userEmail,
      password: this.userPassword
    };
    console.log('User Data:', userData);

    try {
      const response = await fetch("http://localhost:8080/admin/saveuser", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      this.rows.push(data); 

      alert("User is added successfully");
      window.location.reload();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    this.userEmail = '';
    this.userPassword = '';
  },

  selectUser(user) {
    this.selectedUserId = user.id;
    this.userEmail = user.email;
    this.userPassword = ''; 
    console.log(user);
  },


  async updateData() {
    if (!this.userEmail || !this.userPassword ) {
      this.warning=true;
    
      return false;
  }
    const userData = {
      email: this.userEmail,
      password: this.userPassword
    };
    console.log('User Data:', userData);

    try {
      const response = await fetch(`http://localhost:8080/admin/updateItem/${this.selectedUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedData = await response.json();

      const index = this.rows.findIndex(user => user.id === this.selectedUserId);
      if (index !== -1) {
        if (updatedData.created_at) {
          updatedData.created_at = moment(updatedData.created_at).format('MMMM Do YYYY, h:mm:ss a');
        }
        this.rows.splice(index, 1, updatedData);
        console.log('Updated Rows:', this.rows);
      }


      alert('User is updated successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    this.userEmail = '';
    this.userPassword = '';
  },

  async viewData(row) {
    this.selectedData=null;
    this.selectedData={...row};
  this.loading = true; 
  setTimeout(async () => {
    try {
      const response = await fetch("http://localhost:8080/admin/getAll", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      this.rows = data;
    
    console.log(this.selectedData);
      if (Array.isArray(this.rows)) {
        this.rows = this.rows.map((item) => ({
          ...item,
          createdAt: this.formatDate(item.createdAt),
        }));
      }
      this.loading = false; 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 2000); 
  },

   
  formatDate(timestamp) {
    return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
  },

  async deleteData(id) {
    try {
      const response = await fetch(`http://localhost:8080/admin/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Remove the user from the local rows array
      this.rows = this.rows.filter(row => row.id !== id);
      alert('User is deleted successfully');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  },

  },
  mounted() {
    this.viewData();
  },
 
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
* {
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.hover:hover{
  text-decoration: underline;
}

.skeleton-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #e0e0e0;
  }
  
  .skeleton-text {
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 4px;
  }
  
  .skeleton-text-short {
    width: 80px;
    margin-bottom: 5px;
  }
  
  .skeleton-text-long {
    width: 150px;
  }

  .skeleton-loader {
  background: #e0e0e0;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
</style>
