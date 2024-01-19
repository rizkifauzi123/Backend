// import Model Employee
const Employee = require("../models/Employee")
// buat class EmployeeController
class EmployeeController {
  async index(req, res) {
    // TODO 4: Tampilkan data students
    const employee = await Employee.all();

    const data = {
        message: "Menampilkan data seluruh resource",
        data: employee
    };

    res.status(200).json(data);
}

async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */

    const employee = await Employee.create(req.body);
    const data = {
        message: "resource is added succesfully",
        data: employee,
    };

    res.status(201).json(data);
}


async update(req, res) {
    /**
     * check id students
     * jika ada, lakukan update
     * jika tidak, kirim data tidak ada
     */
    const { id } = req.params;

    const employee = await Employee.find(id);

    if (employee) {
        // update data
        const employeeUpdated = await Employee.update(id, req.body);
        const data = {
            message: "Resource is update succesfully",
            data: employeeUpdated,
        };

        res.status(200).json(data);
    }
    else {
        // kirim data tidak ada
        const data = {
            message: "Resource not found",
        };

        res.status(404).json(data);
    }



}

async destroy(req, res) {
    const { id } = req.params;

    /**
     * cari id
     * jika ada, hapus data
     * jika tidak, kirim data tidak ada
     */

    const employee = await Employee.find(id);

    if (employee) {
        // hapus data
        await Employee.delete(id);
        const data = {
            message: "Resource is delete succesfully",
        };

        res.status(200).json(data);
    }
    else {
        // data tidak ada
        const data = {
            message: "Resource not found",
        };

        res.status(404).json(data);
    }
}

async show(req, res) {
    /**
     * cari id
     * jika ada, kirim datanya
     * jika tidak, kirim data tidak ada
     */
    const { id } = req.params;

    const employee = await Employee.find(id);

    if (employee) {
        const data = {
            message: "Menampilkan single resource",
            data: employee,
        };

        res.status(200).json(data);
    }
    else {
        const data = {
            message: "Resource not found",
        };

        res.status(404).json(data);
    }

}

async search(req, res) {
  /**
   
cari id
jika ada, kirim datanya
jika tidak, kirim data tidak ada*/
const { Nama_Pegawai } = req.params;

  const employee = await Employee.find(Nama_Pegawai);

  if (employee) {
      const data = {
          message: "Menampilkan hasil pencarian nama sesuai resource",
          data: employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Resource not found",
      };

      res.status(404).json(data);
  }

}

async search(req, res) {
  /**
   
cari id
jika ada, kirim datanya
jika tidak, kirim data tidak ada*/
const { Status } = req.params;

  const employee = await Employee.find(Status);

  if (employee) {
      const data = {
          message: "Menampilkan hasil pencarian Status",
          data: employee,
      };

      res.status(200).json(data);
  }
  else {
      const data = {
          message: "Resource not found",
      };

      res.status(404).json(data);
  }

}


getTerminatedEmployees = async (req, res) => {
  try {
    const terminatedEmployees = await Employee.getTerminatedEmployees();
    return res.status(200).json({
      message: "Get terminated resource",
      total: terminatedEmployees.length,
      data: terminatedEmployees,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
}

// membuat object EmployeeController
const object = new EmployeeController();

// export object EmployeeController
module.exports = object;
