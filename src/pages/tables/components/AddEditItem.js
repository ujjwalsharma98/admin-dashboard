import React from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddEditItem() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog> */}

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <Formik
          initialValues={{ email: '', password: '',  sellerName: '', sellerLocation: '', category: '', price: '', quantity:'', rating: '', ratingCount: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <input
                type="text"
                name="Seller Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sellerName}
              />
              <input
                type="text"
                name="Seller Location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sellerLocation}
              />
              <input
                type="text"
                name="Seller Location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sellerLocation}
              />
              <input
                type="text"
                name="Category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              <input
                type="text"
                name="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              <input
                type="text"
                name="Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
              />
              <input
                type="text"
                name="Rating"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rating}
              />
              <input
                type="text"
                name="Rating Count"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ratingCount}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Dialog>

    </div>
  );
}
