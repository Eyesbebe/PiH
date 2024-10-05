import { Box, Button, TextField, Select } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New user Profile" />

      <Formik 
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2"}}
              />
               <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Middle Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.middleName}
                name="middleName"
                error={!touched.middleName && !!errors.middleName}
                helperText={touched.middleName && errors.middleName}
                sx={{ gridColumn: "span 2"}}
              />
               <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2"}}
              />
               <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 3"}}
              />
               <TextField 
                fullWidth
                variant="filled"
                type="number"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                name="age"
                error={!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{ gridColumn: "span 2"}}
              />
              <Select
                fullWidth
                variant="filled"
                label="Sex"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sex}
                name="sex"
              >
                <option value="">Select..</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
  
                error={!touched.sex && !!errors.sex}
                helperText={touched.sex && errors.sex}
                sx={{ gridColumn: "span 3"}}
                </Select>

               <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactNumber}
                name="contactNumber"
                error={!touched.contactNumber && !!errors.contactNumber}
                helperText={touched.contactNumber && errors.contactNumber}
                sx={{ gridColumn: "span 4"}}
              />
               <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4"}}
              />
               <TextField 
                fullWidth
                variant="filled"
                type="text"
                label="User Role"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userRole}
                name="userRole"
                error={!touched.userRole && !!errors.userRole}
                helperText={touched.userRole && errors.userRole}
                sx={{ gridColumn: "span 4"}}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  middleName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid eamil").required("required"),
  age: yup.string().required("required"),
  sex: yup.string().required("required"),
  contactNumber: yup
  .string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("required"),
  addres: yup.string().required("required"),
  userRole: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  age: "",
  sex: "",
  contactNumber: "",
  address: "",
  userRole: "",
};

export default Form;